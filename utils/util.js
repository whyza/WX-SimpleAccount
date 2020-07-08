const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}
const formatyearm = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return [year, month].map(formatNumber).join('-')
}

const getYearAndMonth = date => {
  return date.split("-")
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const synummber = n => {
  var today = new Date();
  var now = today.getDate();
  var year = today.getFullYear();
  if (year < 2000) year += 1900;
  var month = today.getMonth();
  var monarr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monarr[1] = "29";
  return (monarr[month] - now)
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatyearm: formatyearm,
  getYearAndMonth: getYearAndMonth,
  // formatDateCn: formatDateCn,
  synummber: synummber
}