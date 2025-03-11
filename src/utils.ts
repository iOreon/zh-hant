/*
 * @Author: Hgh
 * @Date: 2025-03-10 10:31:24
 * @LastEditTime: 2025-03-10 13:56:21
 * @LastEditors: Hgh
 * @Description:
 */

export function getTextNodes(root: Node): Node[] {
    const nodes: Node[] = []
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)

    while (walker.nextNode()) {
        nodes.push(walker.currentNode)
    }

    return nodes
}

export function shouldExclude(text: string, excludeList?: string[]): boolean {
    if (!excludeList) return false
    return excludeList.some((word) => text.includes(word))
}
