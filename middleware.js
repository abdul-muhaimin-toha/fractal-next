import { NextResponse } from "next/server";

// We can't use the existing getRedirects here because as of now,
// middleware doesn't support the same graphql client or complex imports easily
// unless they are standard JS.
// Also, we want to fetch the redirects effectively.

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Avoid running on static files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  try {
    // Fetch redirect rules
    // Note: In a production environment, you would want to cache this response
    // to avoid hitting the API on every single request.
    const GRAPHQL_URL = process.env.NEXT_PUBLIC_SITES_API;

    if (!GRAPHQL_URL) {
      console.error("NEXT_PUBLIC_SITES_API is missing in middleware");
      return NextResponse.next();
    }

    const query = `
      query redirectQuery {
        redirectRules {
          from
          match
          to
          type
        }
      }
    `;

    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    const result = await response.json();
    const redirectsGroups = result?.data?.redirectRules || [];

    // Find a matching redirect rule
    const matchingRedirect = redirectsGroups.find((rule) => {
      // Check if match exactly matches or starts with (depending on your logic)
      // The user provided match: '/our-services/xyz'
      return (
        rule.match === pathname ||
        rule.match === pathname + "/" ||
        pathname === rule.match + "/"
      );
    });

    if (matchingRedirect) {
      const targetUrl = new URL(matchingRedirect.to, request.url);
      return NextResponse.redirect(
        targetUrl,
        matchingRedirect.type === "redirection" ? 301 : 302,
      );
    }
  } catch (error) {
    console.error("Middleware redirection error:", error);
  }

  return NextResponse.next();
}

// Config to specify which paths the middleware should run on
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
