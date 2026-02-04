const translation = require('./locale/zh-CN/translation.json');

/**
 * OpenClaw 简体中文语言包
 * @module openclaw-lang-zh-cn
 */

/**
 * 语言包元数据
 */
const metadata = {
  name: '简体中文',
  code: 'zh-CN',
  author: 'openclaw-lang-zh-CN Contributors',
  version: '1.0.0',
  description: 'OpenClaw 简体中文语言包',
  date: '2026-02-04'
};

/**
 * 获取语言包元数据
 * @returns {Object} 语言包元数据
 */
function getMetadata() {
  return metadata;
}

/**
 * 获取翻译数据
 * @returns {Object} 翻译数据
 */
function getTranslation() {
  return translation;
}

/**
 * 导出语言包
 */
module.exports = {
  metadata,
  translation,
  getMetadata,
  getTranslation
};

/**
 * 导出语言包（ES模块格式）
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    metadata,
    translation,
    getMetadata,
    getTranslation
  };
}

/**
 * 导出语言包（浏览器全局变量格式）
 */
if (typeof window !== 'undefined') {
  window.OpenClawLangZhCN = {
    metadata,
    translation,
    getMetadata,
    getTranslation
  };
}
