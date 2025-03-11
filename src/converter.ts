/*
 * @Author: Hgh
 * @Date: 2025-03-10 10:31:50
 * @LastEditTime: 2025-03-10 15:31:07
 * @LastEditors: Hgh
 * @Description:
 */
import { shouldExclude } from "./utils"
import { SimplifiedToTraditional, TraditionalToSimplified } from "./data"

export interface LanguageOptions {
    include?: Record<string, string>
    exclude?: string[]
}

// 简体转繁体
export function toTrad(text: string, options: LanguageOptions = {}): string {
    const { include, exclude } = options
    if (shouldExclude(text, exclude)) return text

    let mapping: Record<string, string | string[]> = SimplifiedToTraditional

    if (include) {
        mapping = { ...mapping, ...include }
    }

    return text
        .replace(/(\s+)/g, " ")
        .split("")
        .map((char) => {
            const result = mapping[char]
            return typeof result === "string" ? result : result?.[0] || char
        })
        .join("")
        .trim()
}

// 繁体转简体
export function toSimp(text: string, options: LanguageOptions = {}): string {
    const { include, exclude } = options
    if (shouldExclude(text, exclude)) return text

    let mapping: Record<string, string | string[]> = TraditionalToSimplified

    if (include) {
        mapping = { ...mapping, ...include }
    }

    return text
        .replace(/(\s+)/g, " ")
        .split("")
        .map((char) => {
            const result = mapping[char]
            return typeof result === "string" ? result : result?.[0] || char
        })
        .join("")
        .trim()
}
