# zh-hant 🀄

🔄 一个简单的 **简繁转换工具**，支持 **简体转繁体** 及 **繁体转简体**，适用于 Node.js 和浏览器环境。

## 🚀 安装

使用 npm:

```sh
npm install zh-hant
```

使用 yarn：

```sh
yarn add zh-hant
```

## 📖 使用方法

#### 简体转繁体

```ts
import { toTrad } from "zh-hant"

console.log(toTrad("你好，世界"))
// 输出：你好，世界（繁体）
```

#### 繁体转简体

```ts
import { toSimp } from "zh-hant"

console.log(toSimp("你好，世界"))
// 输出：你好，世界（繁体）
```

#### 全局转换功能

可以在页面中自动将所有简体字转换为繁体字，使用 lang() 函数：

```ts
import { initLanguage } from "zh-hant"

// 默认简体转繁体
initLanguage()

// 繁体转简体
initLanguage({ mode: "zh-t" })
```

## 🛠 API 说明

**`toTrad(text: string): string`**

-   功能: 将简体中文转化为繁体中文。
-   参数:
    text: 需要转换的简体中文字符串。
-   返回值: 转换后的繁体中文字符串。

**`toSimp(text: string): string`**

-   功能: 将繁体中文转化为简体中文。
-   参数:
    text: 需要转换的繁体中文字符串。
-   返回值: 转换后的简体中文字符串。

**`lang(options: { mode?: string, include?: string[], exclude?: string[] })`**

-   **功能**: 自动转换页面中的所有简体字为繁体字（或反向），支持自定义转换的内容。
-   **参数**:
    -   mode: "zh-s"（简体转繁体，默认）或 "zh-t"（繁体转简体）。
    -   include: 额外添加的需要转换的内容（数组）。
    -   exclude: 排除不转换的内容（数组）。
-   返回值: 无返回值，直接操作 DOM。

### 贡献

如果你有任何想法或改进，请提交 Issues 或 Pull Requests！

## 📜 许可证

本项目基于 ISC 许可证发布。

**感谢使用 zh-hant！希望它能帮助你轻松地在简体和繁体中文之间切换！🎉**
