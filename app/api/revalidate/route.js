import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.VITE_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate all paths if no specific path is provided
    // In a production app, you might want to revalidate specific paths based on the request body
    revalidatePath("/", "layout");
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
