@echo off

REM OpenClaw 简体中文语言包安装脚本
REM 版本: 1.0.0
REM 日期: 2026-02-05

echo ==============================
echo OpenClaw 简体中文语言包安装脚本
echo ==============================
echo.

REM 检查是否以管理员身份运行
net session >nul 2>&1
if %errorLevel% neq 0 (
echo 请以管理员身份运行此脚本！
echo.
pause
exit /b 1
)

REM 设置变量
set "USER_PROFILE=%USERPROFILE%"
set "PLUGIN_DIR=%USER_PROFILE%\.openclaw\plugins\openclaw-lang-zh-cn"
set "SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"

echo 安装目录: %PLUGIN_DIR%
echo 脚本目录: %SCRIPT_DIR%
echo.

REM 创建插件目录
if not exist "%PLUGIN_DIR%" (
echo 创建插件目录...
mkdir "%PLUGIN_DIR%" 2>nul
if %errorLevel% neq 0 (
echo 创建插件目录失败！
echo.
pause
exit /b 1
)
echo 插件目录创建成功
echo.
) else (
echo 插件目录已存在
echo.
)

REM 创建locale目录
if not exist "%PLUGIN_DIR%\locale\zh-CN" (
echo 创建locale目录...
mkdir "%PLUGIN_DIR%\locale\zh-CN" 2>nul
if %errorLevel% neq 0 (
echo 创建locale目录失败！
echo.
pause
exit /b 1
)
echo locale目录创建成功
echo.
) else (
echo locale目录已存在
echo.
)

REM 复制文件
echo 复制必要文件...
copy "%SCRIPT_DIR%\package.json" "%PLUGIN_DIR%" /Y >nul
if %errorLevel% neq 0 (
echo 复制package.json失败！
echo.
pause
exit /b 1
)

copy "%SCRIPT_DIR%\index.js" "%PLUGIN_DIR%" /Y >nul
if %errorLevel% neq 0 (
echo 复制index.js失败！
echo.
pause
exit /b 1
)

copy "%SCRIPT_DIR%\README.md" "%PLUGIN_DIR%" /Y >nul
if %errorLevel% neq 0 (
echo 复制README.md失败！
echo.
pause
exit /b 1
)

copy "%SCRIPT_DIR%\LICENSE" "%PLUGIN_DIR%" /Y >nul
if %errorLevel% neq 0 (
echo 复制LICENSE失败！
echo.
pause
exit /b 1
)

copy "%SCRIPT_DIR%\locale\zh-CN\translation.json" "%PLUGIN_DIR%\locale\zh-CN" /Y >nul
if %errorLevel% neq 0 (
echo 复制translation.json失败！
echo.
pause
exit /b 1
)

echo 文件复制成功
echo.

REM 测试语言包
echo 测试语言包安装...
node "%SCRIPT_DIR%\test-install.js"
echo.

REM 提示用户
echo ==============================
echo 安装完成！
echo ==============================
echo 语言包已成功安装到：
echo %PLUGIN_DIR%
echo.
echo 请重启OpenClaw服务以应用语言包：
echo 1. 停止服务：openclaw gateway stop
echo 2. 启动服务：openclaw gateway start
echo.
echo 然后在OpenClaw Web界面中设置语言为简体中文
echo ==============================
echo.
pause
exit /b 0
