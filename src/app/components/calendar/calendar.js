const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const JS_SUNDAY = 0;
const USUSALU_SUNDAY = 6;

const Month = {
    Jenuary: 0,
    February: 1,
    March: 2,
};

export function areDateEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function areDateBetween(a, b, between) {
    if (!a || !b || !between) return false;

    const previous = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const after = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    between = new Date(between.getFullYear(), between.getMonth(), between.getDate());

    return (previous < between) && (between < after);
}

function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();

    if (dayOfWeek === JS_SUNDAY) return USUSALU_SUNDAY;

    return dayOfWeek - 1;
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1


    for (let weekOfMonth = 0; weekOfMonth < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; weekOfMonth++) {
        result[weekOfMonth] = [];
        
        for (let dayOfWeek = 0; dayOfWeek < DAYS_IN_WEEK; dayOfWeek++) {
            if ((weekOfMonth === 0 && dayOfWeek < monthStartsOn) || (day > daysInMonth)) {
                result[weekOfMonth][dayOfWeek] = undefined;
            } else {
                result[weekOfMonth][dayOfWeek] = new Date(year, month, day++);
            }
            
        }
    }
    return result;
}