/* 
  Modal、Toast 等
*/
export const showModal = (config = {}) => {
  if (config.content === '请勿重复请求') {
    return undefined
  }
  console.log(...config)
  // Taro.showModal({
  //   ...config,
  //   title: config.title || '提示',
  //   content: config.content,
  //   showCancel: Object.prototype.toString.call(config.showCancel) === '[object Boolean]' ? config.showCancel : false,
  //   confirmColor: config.confirmColor || '#fd4747',
  //   confirmText: config.confirmText || '确认',
  //   cancelText: config.cancelText || '取消'
  // })
}