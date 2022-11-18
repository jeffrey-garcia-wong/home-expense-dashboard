const OVERALL_EXP_TYPE = {
    FIXED: 'Fixed Expenses',
    UTILITY: 'Utility Expenses',
    MISC: 'Miscellaneous Expenses',
    AVG: 'Accumulated Average'
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

const RAW_DATA = [
    {
        month: 1,
        fixedExpenses: [],
        utilityExpenses: [],
        miscExpenses: []
    },
    {
        month: 2,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],
        utilityExpenses: [],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 382.18,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Harvey Water Softener',
                amount: 1919.02,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
        ]
    },
    {
        month: 3,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],        
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 168.41
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 478.86,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 249.83,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Gymnastics',
                amount: 92,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Audrey French',
                amount: 39,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },            
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },                  
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },   
            {
                label: 'Verisure Alarm System',
                amount: 457,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            }               
        ]
    },
    {
        month: 4,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],                
        utilityExpenses: [
            {
                label: "Water",
                amount: 142.58
            },
            {
                label: "Petrol",
                amount: 125.92
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 772.34,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 109.31,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },  
            {
                label: 'Allen School (Sci, French, Music)',
                amount: 372.26,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },       
            {
                label: 'Lawn Mowing',
                amount: '55',
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Solar Panel',
                amount: '150',
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            }       
        ]
    },
    {
        month: 5,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],                
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 258.27
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 682.25,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 380.46,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Allen Baby Swim',
                amount: 196.00,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Allen School (Gym, Art)',
                amount: 162.26,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
        ]
    },
    {
        month: 6,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],                
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 227.42
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 561.78,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 463.99,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },   
            {
                label: 'Macbook Pro',
                amount: 2093.98,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            }         
        ]
    },
    {
        month: 7,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
        ],                
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 236.22
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 683.44,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 345.15,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
            {
                label: 'Audrey Gymnastics',
                amount: 129,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Sharps Bedroom + TV Unit (deposit)',
                amount: 2525,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'DFS Sofa (deposit)',
                amount: 300,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Air Conditioner (deposit)',
                amount: 745.5,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
            {
                label: 'Dyson Cooler',
                amount: 550,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            }  
        ]
    },    
    {
        month: 8,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
            {
                label: 'TV Licensing',
                amount: 13.25
            },
            {
                label: 'HP Instant Ink',
                amount: 2.99
            }
        ],                
        utilityExpenses: [
            {
                label: "Electricity",
                amount: 503.50
            },
            {
                label: "Gas",
                amount: 287.26
            },
            {
                label: "Petrol",
                amount: 96.27
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 559.43,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 181.49,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },    
            {
                label: 'Allen Swim+ Summer Crash Course',
                amount: 65,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },   
            {
                label: 'Audrey Swim+ Summer Crash Course',
                amount: 65,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Air Conditioner (outstanding)',
                amount: 745.5,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
            {
                label: 'Allen Swim+ New Term',
                amount: 125.3,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },   
            {
                label: 'Audrey Swim+ New Term',
                amount: 125.3,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
            {
                label: 'Easigrass (deposit)',
                amount: 1862.78,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Audrey French',
                amount: 112,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }                                             
        ]
    },           
    {
        month: 9,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
            {
                label: 'TV Licensing',
                amount: 13.25
            },
            {
                label: 'HP Instant Ink',
                amount: 2.99
            }
        ],                
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 180.88
            }
        ],
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 623.53,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 312.49,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },                
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
            {
                label: 'Easigrass (outstanding)',
                amount: 2078.79,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'DFS Sofa (outstanding)',
                amount: 1961,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },  
            {
                label: 'Bed and Mattress (deposit)',
                amount: 783,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },                      
            {
                label: 'Audrey Art',
                amount: 35,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }                                             
        ]
    },
    {
        month: 10,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
            {
                label: 'TV Licensing',
                amount: 13.25
            },
            {
                label: 'HP Instant Ink',
                amount: 2.99
            }            
        ],
        utilityExpenses: [
            {
                label: "Water",
                amount: 210.40
            },            
            {
                label: "Petrol",
                amount: 222.31
            },
            {
                label: "Electricity",
                amount: 34.35
            },
            {
                label: "Gas",
                amount: 36.54
            },            
        ],        
        miscExpenses: [
            {
                label: 'Supermarket',
                amount: 711.37,
                type: MISC_EXP_TYPE.SUPERMARKET
            },
            {
                label: 'Outdoor Dining',
                amount: 366.59,
                type: MISC_EXP_TYPE.OUTDOOR_DINING
            },
            {
                label: 'Audrey Lunch',
                amount: 50,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },                
            {
                label: 'Audrey Music',
                amount: 120,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
            {
                label: 'Audrey Art',
                amount: 35,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Allen Bike Club (membership fee)',
                amount: 35,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            },
            {
                label: 'Allen Bike Club (monthly attendance)',
                amount: 28,
                type: MISC_EXP_TYPE.SCHOOL_ACTIVITIES
            }, 
            {
                label: 'Sharps Bedroom + TV Unit (outstanding)',
                amount: 7096.00,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Loft',
                amount: 1763.83,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Kenwood Dashcam',
                amount: 279.94,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
            {
                label: 'Kenwood Dashcam (Installation)',
                amount: 109.99,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
            {
                label: 'Legoland Annual Pass',
                amount: 476.00,
                type: MISC_EXP_TYPE.ENTERTAINMENT
            },
            {
                label: 'Solar Panel (deposit)',
                amount: 2021.50,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },            
        ]        
    },
    {
        month: 11,
        fixedExpenses: [
            {
                label: 'HSBC Mortgage',
                amount: 1576.40,
            },
            {
                label: 'Home Insurance',
                amount: 25.16
            },
            {
                label: 'L&Q Management',
                amount: 15.22
            },
            {
                label: 'Hyperoptics Broadband',
                amount: 63
            },
            {
                label: 'Mobile SIM',
                amount: 20
            },
            {
                label: 'Salt for Water Softener',
                amount: 35.9
            },
            {
                label: 'Verisure Subscription',
                amount: 43
            },
            {
                label: 'Council Tax',
                amount: 213
            },
            {
                label: 'Water Pipe Insurance',
                amount: 6
            },
            {
                label: 'Car Insurance',
                amount: 71.98
            },
            {
                label: 'Road Tax',
                amount: 13.56
            },
            {
                label: 'TV Licensing',
                amount: 13.25
            },
            {
                label: 'HP Instant Ink',
                amount: 2.99
            },            
            {
                label: 'Home Appliances Warranty',
                amount: 22.47,
            },            
        ],
        utilityExpenses: [
            {
                label: "Petrol",
                amount: 0.00
            }
        ],
        miscExpenses: [
            {
                label: 'Bed and Mattress (outstanding)',
                amount: 3161.98,
                type: MISC_EXP_TYPE.HOME_REFURBISHMENTS
            },
            {
                label: 'Car Tyres',
                amount: 571,
                type: MISC_EXP_TYPE.HOME_APPLIANCES
            },
        ]        
    }
];

export const RawExpensesData = (() => {
    return RAW_DATA;
})();

export const OverallExpenseType = (() => {
    return OVERALL_EXP_TYPE;
})(); 

export const UtilityExpenseType = (() => {
    return UTIL_EXP_TYPE;
})();

export const MiscExpenseType = (() => {
    return MISC_EXP_TYPE;
})();