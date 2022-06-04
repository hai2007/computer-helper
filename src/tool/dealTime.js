export default (seconds) => {
    seconds = seconds | 0

    let day = (seconds / (3600 * 24)) | 0
    let hours = ((seconds - day * 3600 * 24) / 3600) | 0
    let minutes = ((seconds - day * 3600 * 24 - hours * 3600) / 60) | 0
    let second = seconds % 60

    if (day < 10) day = '0' + day
    if (hours < 10) hours = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    if (second < 10) second = '0' + second

    return day + "天" + hours + "时" + minutes + "分" + second + "秒"
}
