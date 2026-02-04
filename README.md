# OpenClaw 简体中文语言包

[![GitHub stars](https://img.shields.io/github/stars/999ABB/openclaw-lang-zh-CN.svg?style=social&label=Star)](https://github.com/999ABB/openclaw-lang-zh-CN)
[![GitHub forks](https://img.shields.io/github/forks/999ABB/openclaw-lang-zh-CN.svg?style=social&label=Fork)](https://github.com/999ABB/openclaw-lang-zh-CN/fork)

## 项目简介

OpenClaw 简体中文语言包，为 OpenClaw 项目提供完整的简体中文本地化支持。

## 安装方法

1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/999ABB/openclaw-lang-zh-CN.git
   ```

2. 将语言包文件复制到 OpenClaw 项目的语言包目录中：plugins
cp -r openclaw-lang-zh-CN ~/.openclaw/plugins/

3. 在 OpenClaw 配置中选择简体中文作为界面语言：~/.openclaw/config.json
{
  "i18n": {
    "defaultLanguage": "zh-CN"
  }
}

4.重启OpenClaw服务：
openclaw restart


## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进本语言包。

### 如何贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-translation`)
3. 提交你的更改 (`git commit -m 'Add some amazing translation'`)
4. 推送到分支 (`git push origin feature/amazing-translation`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 致谢

- 感谢 OpenClaw 团队开发如此优秀的项目
- 感谢所有为中文本地化做出贡献的开发者

## 联系方式

- GitHub: [https://github.com/999ABB/openclaw-lang-zh-CN](https://github.com/999ABB/openclaw-lang-zh-CN)

---

**享受使用 OpenClaw！** 🦞

为OpenClaw提供完整的简体中文界面本地化支持。

## 功能

- 核心界面元素中文本地化
- 命令响应消息中文翻译
- 错误消息中文版本
- 工具提示和状态信息本地化
- AI交互提示中文化

## 安装

### 方法1：通过OpenClaw插件管理器安装
```bash
openclaw plugins install https://github.com/999ABB/openclaw-lang-zh-CN
