// OpenClaw简体中文语言包
const path = require('path');
const fs = require('fs');

module.exports = (claw) => {
  // 注册语言包
  claw.hooks.on('i18n:init', (i18n) => {
    const localePath = path.join(__dirname, 'locales/zh-CN.json');
    if (fs.existsSync(localePath)) {
      const zhCN = require(localePath);
      i18n.addResourceBundle('zh-CN', 'translation', zhCN);
      claw.logger.info('简体中文语言包已加载');
    } else {
      claw.logger.error('简体中文语言文件未找到');
    }
  });

  // 设置默认语言（如果配置中未指定）
  claw.hooks.on('config:loaded', (config) => {
    if (!config.i18n?.defaultLanguage) {
      claw.config.set('i18n.defaultLanguage', 'zh-CN');
      claw.logger.info('已将简体中文设为默认语言');
    }
  });
  
  return {
    name: 'openclaw-lang-zh-cn',
    version: '1.0.0',
    description: 'OpenClaw简体中文语言包'
  };
};