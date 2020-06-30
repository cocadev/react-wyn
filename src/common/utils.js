export default class Utils {

    static val(number) {
        var result = number
        if (number > 10000) {
            result = number / 1000 + 'K'
        }
        if (number > 1000000) {
            result = number / 1000000 + 'M'
        }
        return result
    }
}