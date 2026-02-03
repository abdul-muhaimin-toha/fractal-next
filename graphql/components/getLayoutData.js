import getGqlData from "@/lib/GetGqlData";
import { getLayoutDataQuery } from "../queries/getLayoutDataQuery";
import { cache } from "react";

export const getLayoutData = cache(async () => {
    try {
        const data = await getGqlData(getLayoutDataQuery);
        if (!data) return null;

        const themeOptions = data.crbThemeOptions;
        const menus = data.menus?.edges || [];

        const headerMenu = menus.find(edge => edge.node.name === "Header Menu")?.node?.menuItems?.edges?.map(edge => edge.node) || [];
        const footerMenu = menus.find(edge => edge.node.name === "Footer Menu")?.node?.menuItems?.edges?.map(edge => edge.node) || [];

        return {
            themeOptions,
            headerMenu,
            footerMenu
        };
    } catch (error) {
        console.error("Error fetching layout data:", error);
        return null;
    }
});
