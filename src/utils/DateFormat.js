import dayjs from 'dayjs'

class DateFormat {
    static formatWeek(timeStamp) {
        return dayjs.unix(timeStamp).format('dd')
    }
    static formatTime(timeStamp) {
        return dayjs.unix(timeStamp).format('h:mm A')
    }
    static formatHours(timeStamp) {
        return dayjs.unix(timeStamp).format(`h A`)
    }
}

export default DateFormat
