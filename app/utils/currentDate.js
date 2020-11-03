module.exports = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours}:${toTwoChar(minutes)}:${toTwoChar(seconds)} - ${day} ${monthNames[month]} ${year}`
}

const toTwoChar = (number) => (parseInt(number) < 10 ? '0' + number.toString() : number.toString())
