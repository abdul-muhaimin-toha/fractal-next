import getGqlData from "@/lib/GetGqlData";
import { getLayoutDataQuery } from "../queries/getLayoutDataQuery";
import { cache } from "react";

const buildTree = (items) => {
    const itemMap = {};
    items.forEach((item) => {
        itemMap[item.databaseId] = { ...item, children: [] };
    });
    const tree = [];
    items.forEach((item) => {
        if (item.parentDatabaseId) {
            const parent = itemMap[item.parentDatabaseId];
            if (parent) {
                parent.children.push(itemMap[item.databaseId]);
            }
        } else {
            tree.push(itemMap[item.databaseId]);
        }
    });
    return tree;
};

export const getLayoutData = cache(async () => {
    try {
        const data = await getGqlData(getLayoutDataQuery);
        if (!data) return null;

        const themeOptions = data.crbThemeOptions;
        const menus = data.menus?.edges || [];

        const headerMenuFlat = menus.find(edge => edge.node.name === "Header Menu")?.node?.menuItems?.edges?.map(edge => edge.node) || [];
        const footerMenuFlat = menus.find(edge => edge.node.name === "Footer Menu")?.node?.menuItems?.edges?.map(edge => edge.node) || [];

        return {
            themeOptions,
            headerMenu: buildTree(headerMenuFlat),
            footerMenu: buildTree(footerMenuFlat)
        };
    } catch (error) {
        console.error("Error fetching layout data:", error);
        return null;
    }
});
