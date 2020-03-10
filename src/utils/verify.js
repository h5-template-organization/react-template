const verify = {}

// 手机号验证
verify.telephone = (tel) => {
  tel = tel.replace(/[^\d]/g, '') // 去除空格
  if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(tel))) { // 表示以1开头，第二位可能是3，4，5，6，7，8，9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
    return false
  } else {
    return true
  }
}

// 证件有效期
verify.date = (val) => {
  if (!(/^((20)\d\d)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(val))) { // 简单的以20开头，YYYYMMDD的样式
    return false
  } else {
    return true
  }
}

// 只能输入数字或含两位小数
verify.fundNum = (val) => {
  if (!(/^\d+(\.\d{0,2})?$/.test(val))) {
    return false
  } else {
    return true
  }
}

// 身份证号码验证
verify.IDCard = (val) => {
  if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val))) { // 5或18位的数字，或者17位数字加字母X或x
    return false
  } else {
    return true
  }
}

// 邮箱验证
verify.email = (val) => {
  if (!(/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(val))) { // 5或18位的数字，或者17位数字加字母X或x
    return false
  } else {
    return true
  }
}

export default verify
