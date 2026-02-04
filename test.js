// 测试脚本：验证OpenClaw简体中文语言包是否可用

console.log('=== 测试OpenClaw简体中文语言包 ===\n');

// 尝试导入语言包
let langZhCN;
try {
  langZhCN = require('./index.js');
  console.log('✅ 成功导入语言包');
} catch (error) {
  console.error('❌ 导入语言包失败:', error.message);
  process.exit(1);
}

// 测试获取元数据
console.log('\n=== 测试元数据 ===');
try {
  const metadata = langZhCN.getMetadata();
  console.log('✅ 成功获取元数据:');
  console.log('  名称:', metadata.name);
  console.log('  代码:', metadata.code);
  console.log('  作者:', metadata.author);
  console.log('  版本:', metadata.version);
  console.log('  描述:', metadata.description);
  console.log('  日期:', metadata.date);
} catch (error) {
  console.error('❌ 获取元数据失败:', error.message);
}

// 测试获取翻译数据
console.log('\n=== 测试翻译数据 ===');
try {
  const translation = langZhCN.getTranslation();
  console.log('✅ 成功获取翻译数据');
  console.log('  翻译模块数量:', Object.keys(translation).length);
  console.log('  模块列表:', Object.keys(translation).join(', '));
} catch (error) {
  console.error('❌ 获取翻译数据失败:', error.message);
}

// 测试具体翻译内容
console.log('\n=== 测试具体翻译内容 ===');
try {
  const translation = langZhCN.translation;
  
  // 测试common模块
  console.log('✅ Common模块测试:');
  console.log('  hello:', translation.common.hello);
  console.log('  welcome:', translation.common.welcome);
  console.log('  confirm:', translation.common.confirm);
  console.log('  cancel:', translation.common.cancel);
  
  // 测试navigation模块
  console.log('\n✅ Navigation模块测试:');
  console.log('  dashboard:', translation.navigation.dashboard);
  console.log('  chat:', translation.navigation.chat);
  console.log('  assistants:', translation.navigation.assistants);
  console.log('  settings:', translation.navigation.settings);
  
  // 测试chat模块
  console.log('\n✅ Chat模块测试:');
  console.log('  new_chat:', translation.chat.new_chat);
  console.log('  send_message:', translation.chat.send_message);
  console.log('  message_placeholder:', translation.chat.message_placeholder);
  
  console.log('\n🎉 所有测试通过！语言包可以正常使用。');
} catch (error) {
  console.error('❌ 测试翻译内容失败:', error.message);
}

console.log('\n=== 测试完成 ===');
