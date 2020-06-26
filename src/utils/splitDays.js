import { getDate } from './timeConverter'

function splitDays(list) {
  const today = new Date().getUTCDate(), day1 = [], day2 = [], day3 = [], day4 = [], day5 = []

  for (let item of list) {
    const date = getDate(item.dt)
    if (date === today) {
      day1.push(item)
    } else if (date === today + 1) {
      day2.push(item)
    } else if (date === today + 2) {
      day3.push(item)
    } else if (date === today + 3) {
      day4.push(item)
    } else if (date === today + 4) {
      day5.push(item)
    }
  }

  return [day1, day2, day3, day4, day5]
}

export default splitDays