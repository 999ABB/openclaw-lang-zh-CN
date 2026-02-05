// 测试语言包安装状态
const fs = require('fs');
const path = require('path');

console.log('=== 测试OpenClaw简体中文语言包安装状态 ===\n');

// 检查插件目录是否存在
const pluginPath = path.join(process.env.USERPROFILE, '.openclaw', 'plugins', 'openclaw-lang-zh-cn');
console.log('插件目录:', pluginPath);

if (fs.existsSync(pluginPath)) {
  console.log('✅ 插件目录存在');
  
  // 检查必要文件是否存在
  const requiredFiles = [
    'package.json',
    'index.js',
    'README.md',
    'LICENSE',
    'locale/zh-CN/translation.json'
  ];
  
  let allFilesExist = true;
  requiredFiles.forEach(file => {
    const filePath = path.join(pluginPath, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} 存在`);
    } else {
      console.error(`❌ ${file} 不存在`);
      allFilesExist = false;
    }
  });
  
  if (allFilesExist) {
    console.log('\n🎉 所有必要文件都已存在');
    
    // 尝试加载语言包
    try {
      const langPackage = require(pluginPath);
      console.log('\n✅ 成功加载语言包');
      console.log('  名称:', langPackage.metadata.name);
      console.log('  代码:', langPackage.metadata.code);
      console.log('  版本:', langPackage.metadata.version);
      
      // 测试翻译数据
      console.log('\n✅ 翻译数据测试:');
      console.log('  你好:', langPackage.translation.common.hello);
      console.log('  欢迎使用 OpenClaw:', langPackage.translation.common.welcome);
      console.log('  仪表盘:', langPackage.translation.navigation.dashboard);
      console.log('  新对话:', langPackage.translation.chat.new_chat);
      
      console.log('\n🎉 语言包安装成功并可以正常使用！');
    } catch (error) {
      console.error('\n❌ 加载语言包失败:', error.message);
    }
  } else {
    console.error('\n❌ 缺少必要文件，安装失败');
  }
} else {
  console.error('❌ 插件目录不存在，安装失败');
}

console.log('\n=== 测试完成 ===');
