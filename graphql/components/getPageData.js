import getGqlData from "@/lib/GetGqlData";
import { pageDataQuery } from "../queries/pageDataQuery";


export const getPageData = async (uri) => {
    try {
        const pageData = await getGqlData(pageDataQuery, { uri });
        if (!pageData?.nodeByUri) {
            console.warn(`No data found for URI: ${uri}`);
            return [];
        }
        return pageData.nodeByUri || [];
    } catch (error) {
        console.error("Error fetching page data:", error);
        return [];
    }
};