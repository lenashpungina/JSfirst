class DateTimeUtil {
    
    today() {
        return new Date();
    }

    setYear(date, yearValue) {
        return date.setFullYear(yearValue);
    }
    
    daysDifference(dateLeft, dateRight){
        return Math.floor((Date.parse(dateLeft) - Date.parse(dateRight)) / (24*60*60*1000));
    }
}

module.exports = new DateTimeUtil();