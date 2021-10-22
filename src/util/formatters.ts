export function toUp(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function plural(str: string, count: number) {
    return str + (count === 1 ? "": "s")
}