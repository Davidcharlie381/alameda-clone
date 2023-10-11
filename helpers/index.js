import { links, items } from "@/constants"

export const getLinks = () => {
    return links;
}

export const getItems = () => {
    return items;
}

export const getCategory = (category) => {
    return items.map((item) => item.category === category)
}