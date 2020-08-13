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

    static email(value) {
        var month = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return '0' + string;
            }
            return string;
        };
        let d = new Date();

        let result = 'Your ROI Report For'
        let custom_date = padWithZero(d.getDate()) + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() 

        if (!value) {
            result = 'Prepared On: ' + custom_date
        }
        else if (value && (value.includes('gmail.com') || value.includes('hotmail.com') || value.includes('yahoo.com'))){
            result = 'Prepared For: ' + value
        }
        else {
            var domain = value && value.split('@')[0]
            result = 'Prepared For: ' + domain
        }

        return result
    }

    static download(value) {
        var month = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return '0' + string;
            }
            return string;
        };
        let d = new Date();

        let result = 'Your ROI Report For'
        let custom_date = padWithZero(d.getDate()) + ' ' + month[d.getMonth()] + ' ' + d.getFullYear() 

        if (!value) {
            result = 'Intact Group ROI Report - ' + custom_date + '.pdf'
        }
        else if (value && (value.includes('gmail.com') || value.includes('hotmail.com') || value.includes('yahoo.com'))){
            result = 'Intact Group ROI Report - ' + custom_date + '.pdf'
        }
        else {
            var domain = value && value.split('@')[0]
            result = 'Intact Group ROI Report - ' + domain + '.pdf'
        }

        return result
    }
}