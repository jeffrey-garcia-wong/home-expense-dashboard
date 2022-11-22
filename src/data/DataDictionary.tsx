const OVERALL_EXP_TYPE = {
    FIXED: 'Fixed Expenses',
    UTILITY: 'Utility Expenses',
    MISC: 'Miscellaneous Expenses',
    AVG: 'Cumulative Average'
}

const UTIL_EXP_TYPE = {
    ELECTRICITY: 'Electricity',
    GAS: 'Gas',
    PETROL: 'Petrol',
    WATER: 'Water'
}

const MISC_EXP_TYPE = {
    SUPERMARKET: 'Food & Supermarket',
    OUTDOOR_DINING: 'Outdoor Dining',
    SCHOOL_ACTIVITIES: 'School & Activities',
    HOME_APPLIANCES: 'Home Appliances',
    HOME_REFURBISHMENTS: 'Home Refurbishments',
    ENTERTAINMENT: "Entertainment"
}

const MONTH_LABELS = [
    'Jan', 'Feb', 'Mar', 'Apr', 
    'May', 'Jun', 'Jul', 'Aug', 
    'Sept', 'Oct', 'Nov', 'Dec'
]; 

export const OverallExpenseType = (() => {
    return OVERALL_EXP_TYPE;
})(); 

export const UtilityExpenseType = (() => {
    return UTIL_EXP_TYPE;
})();

export const MiscExpenseType = (() => {
    return MISC_EXP_TYPE;
})();

export const MonthLabels = (() => {
    return MONTH_LABELS;
})();