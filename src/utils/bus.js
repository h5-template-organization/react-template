/**
 * 公共通信总线
 * @class Bus
 */
class Bus {
  constructor() {
    this.loop = [
      // { name: '', method: () => {}, used: false, once: false }
    ]
  }

  _update(item, eventName, params) {
    if (item.once) {
      if (!item.used && item.name === eventName) {
        item.method(params)
        item.used = true
      }
    } else {
      if (item.name === eventName) {
        item.method(params)
        item.used = true
      }
    }
  }

  emit(eventName, params) {
    this.loop.forEach((item) => {
      this._update(item, eventName, params)
    })
  }

  on(eventName, func) {
    this.loop.push({
      name: eventName,
      method: func,
      used: false,
      once: false
    })
  }

  once(eventName, func) {
    this.loop.push({
      name: eventName,
      method: func,
      used: false,
      once: true
    })
  }
}

export default new Bus()
