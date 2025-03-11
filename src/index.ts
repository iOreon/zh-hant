/*
 * @Author: Hgh
 * @Date: 2025-03-10 10:25:20
 * @LastEditTime: 2025-03-10 15:30:29
 * @LastEditors: Hgh
 * @Description: 页面文本的简繁转换工具
 */

import { toTrad, toSimp, LanguageOptions } from "./converter"
import { getTextNodes } from "./utils"

function initTransform(options: LanguageOptions) {
    transformPageText(document.body, options)
    observeDomChanges(options)
}

function transformPageText(root: HTMLElement, options: LanguageOptions) {
    const nodes = getTextNodes(root)
    nodes.forEach((node) => {
        node.textContent = toTrad(node.textContent || "", options)
    })
}

function observeDomChanges(options: LanguageOptions) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            requestIdleCallback(() => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = toTrad(node.textContent || "", options)
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        transformPageText(node as HTMLElement, options)
                    }
                })
            })
        })
    })

    observer.observe(document.body, { childList: true, subtree: true })
}

export function initLanguage(options: LanguageOptions = {}) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => initTransform(options), { once: true })
    } else {
        initTransform(options)
    }
}

export { toTrad, toSimp }
