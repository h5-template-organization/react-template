'use strict'
module.exports = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV), // production
  API_ENV: JSON.stringify(process.env.npm_config_api)
}

if (!process.env.npm_config_api) {
  throw new Error('请指定 api 启动环境. 例："npm run dev --api=dev", 详见 README.md')
}