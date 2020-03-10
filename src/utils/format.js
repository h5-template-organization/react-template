const format = {
  date(date) {
    if (!date || /-/.test(date)) {
      return date
    } else {
      let yy = date.getFullYear()
      let mm = date.getMonth() + 1
      let dd = date.getDate()
      return yy + '-' + mm + '-' + dd
    }
  }
}

export default format
