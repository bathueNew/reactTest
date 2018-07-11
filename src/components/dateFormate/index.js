export function DateFormat(dateFormatParam) {
    if(!dateFormatParam)return
    const date = new Date(dateFormatParam)
    const formatTen = (num) => {
        return num > 9 ? (num + "") : ("0" + num);
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return year + "/" + formatTen(month) + "/" + formatTen(day) + " " + formatTen(hour) + ":" + formatTen(minute) + ":" + formatTen(second);
}