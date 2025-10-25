export function getImageUrl(name) {
    return new URL(`../assets/${name}`,
    import.meta.url).href
}
export function getMoreImageUrl(name) {
    return new URL(`../assets/more/${name}`,
    import.meta.url).href
}
export function getIconImageUrl(name) {
    return new URL(`../assets/icons/${name}`,
    import.meta.url).href
}
export function getCupsImageUrl(name) {
    return new URL(`../assets/cups/${name}`,
    import.meta.url).href
}