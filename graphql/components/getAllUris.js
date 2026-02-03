import getGqlData from "@/lib/GetGqlData";
import { getAllUrisQuery } from "../queries/getAllUrisQuery";

export const getAllUris = async () => {
    try {
        const data = await getGqlData(getAllUrisQuery);
        if (!data) {
            console.error("getAllUris: No data returned from GraphQL");
            return [];
        }

        const pages = data.pages?.edges?.map(edge => edge.node.uri) || [];
        const projects = data.projects?.edges?.map(edge => `/our-works/${edge.node.slug}`) || [];
        const insights = data.insights?.edges?.map(edge => `/insights/${edge.node.slug}`) || [];

        // Combine all and clean them for Next.js params
        const allUris = [...pages, ...projects, ...insights]
            .filter(uri => uri && uri !== "/") // Filter out home and empty
            .map(uri => uri.replace(/^\/|\/$/g, "")); // Clean slashes

        const uniqueUris = [...new Set(allUris)];
        console.log(`getAllUris: Found ${uniqueUris.length} unique URIs`);
        
        return uniqueUris;
    } catch (error) {
        console.error("Error fetching all URIs:", error);
        return [];
    }
};
