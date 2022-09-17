const EXP_TYPE = {
    FIXED: 'Fixed Expenses',
    UTILITY: 'Utility Expenses',
    MISC: 'Miscellaneous Expenses'
}

const MISC_EXP_TYPE = {
    SUPERMARKET: 'Food & Supermarket',
    OUTDOOR_DINING: 'Outdoor Dining',
    SCHOOL_ACTIVITIES: 'School & Activities',
    HOME_APPLIANCES: 'Home Appliances',
    HOME_REFURBISHMENTS: 'Home Refurbishments',
}

const MONTH_LABELS = [
    'Jan', 'Feb', 'Mar', 'Apr', 
    'May', 'Jun', 'Jul', 'Aug', 
    'Sept', 'Oct', 'Nov', 'Dec'
]; 

const RawExpensesData = [
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
                amount: 135
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
                amount: 135
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
                amount: 135
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
                amount: 135
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
                amount: 135
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
                amount: 135
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
                amount: 135
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
];

const initMiscExpData = ((input:any[]) => {
    const initialize = (() => {
        const tmp:any[] = [];
        input.forEach((e) => {
            tmp.push(0.00);
        });
        return tmp;
    });

    const data = [
        { 
            label: MISC_EXP_TYPE.SUPERMARKET, 
            data:initialize(), 
            borderColor: 'rgb(191, 255, 0, 1)',
            backgroundColor: 'rgba(191, 255, 0, 0.2)',
            borderWidth: 2            
        }, 
        { 
            label: MISC_EXP_TYPE.OUTDOOR_DINING, 
            data:initialize(),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 2            
        }, 
        { 
            label: MISC_EXP_TYPE.SCHOOL_ACTIVITIES, 
            data:initialize(),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2             
        },
        { 
            label: MISC_EXP_TYPE.HOME_APPLIANCES, 
            data:initialize(),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2             
        },
        { 
            label: MISC_EXP_TYPE.HOME_REFURBISHMENTS, 
            data:initialize(),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 2             
        } 
    ];
    return data;
});

const aggregateMiscExpense = () => {
    const mapResult = RawExpensesData.flatMap((monthlyExp) => {
        monthlyExp.miscExpenses.forEach((item) => {
            item = Object.assign( item, { month:monthlyExp.month } );  
        })
        return monthlyExp.miscExpenses;   
    });
    // console.log(`${JSON.stringify(mapResult)}`);

    const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
        const _item = tmp.find((item:any) => {
            return item.label == curr.type;
        });
        if (_item != null) {
            _item.data[curr.month -1] += curr.amount;
        }
        return tmp;
    }, initMiscExpData(RawExpensesData));
    // console.log(`${JSON.stringify(reduceResult)}`);

    return { labels:MONTH_LABELS, datasets:reduceResult }; 
};

const initUtilitExpData = ((input:any[]) => {
    const initialize = (() => {
        const tmp:any[] = [];
        input.forEach((e) => {
            tmp.push(0.00);
        });
        return tmp;
    });

    const data = [
        { 
            label: 'Electricity', 
            data: initialize(),
            borderColor: 'rgb(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2            
        },
        { 
            label: 'Gas', 
            data: initialize(),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)', 
            borderWidth: 2              
        },
        { 
            label: 'Water', 
            data: initialize(),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2            
        },
        { 
            label: 'Petrol', 
            data: initialize(),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 2            
        }        
    ];
    return data;
});

const aggregateUtilityExpense = () => {
    const mapResult = RawExpensesData.flatMap((monthlyExp) => {
        monthlyExp.utilityExpenses.forEach((item) => {
            item = Object.assign( item, { month:monthlyExp.month } );  
        })
        return monthlyExp.utilityExpenses;   
    });
    // console.log(`${JSON.stringify(mapResult)}`);

    const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
        const _item = tmp.find((item:any) => {
            return item.label == curr.label;
        });
        if (_item != null) {
            _item.data[curr.month -1] += curr.amount;
        }
        return tmp;
    }, initUtilitExpData(RawExpensesData));
    // console.log(`${JSON.stringify(reduceResult)}`);

    return { labels:MONTH_LABELS, datasets:reduceResult };    
}

const initFixedExpData = ((input:any[]) => {
    const data = [
        {

        }
    ];
    return data;
});

const color = (() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // console.log(`${JSON.stringify({ r:r, g:g, b:b })}`);
    return { r:r, g:g, b:b };
})

const aggregateFixedExpense = (() => {
    const mapResult = RawExpensesData.flatMap((monthlyExp) => {
        monthlyExp.fixedExpenses.forEach((item) => {
            item = Object.assign( item, { month:monthlyExp.month } );  
        })
        return monthlyExp.fixedExpenses;   
    });
    // console.log(`${JSON.stringify(mapResult)}`);

    const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
        const _item = tmp.find((item:any) => {
            return item.label == curr.label;
        });
        if (_item != null) {
            _item.data[curr.month -1] += curr.amount;
        } else {
            const rgb = color();
            const i = tmp.push( { 
                label:curr.label, 
                data:[0,0,0,0,0,0,0,0,0,0,0,0],
                borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
                borderWidth: 2                    
            } );
            tmp[i-1].data[curr.month -1] += curr.amount;
        }
        return tmp;
    }, []);
    // console.log(`${JSON.stringify(reduceResult)}`);

    return { labels:MONTH_LABELS, datasets:reduceResult };    
});

const ExpenseData = {
    overallExpenses: { labels:MONTH_LABELS, datasets:new Array<any>() },
    fixedExpenses: aggregateFixedExpense(),
    utilityExpenses: aggregateUtilityExpense(),
    miscExpenses: aggregateMiscExpense()
}

const aggregateOverallExpenses = (() => {
    (() => {
        const _fixedExpenses = ExpenseData.fixedExpenses.datasets.reduce((tmp:any[],expense:any) => {
            for (let i=0; i<expense.data.length; i++) {
                tmp[i] += expense.data[i];
            }
            return tmp;
        }, [0,0,0,0,0,0,0,0,0,0,0,0,]);
        // console.log(`${JSON.stringify(_fixedExpenses)}`);
    
        const rgb= color();
        ExpenseData.overallExpenses.datasets.push({
            label: EXP_TYPE.FIXED,
            data: _fixedExpenses,
            borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
            borderWidth: 2         
        });
    })();
    
    (() => {
        const _utilityExpenses = ExpenseData.utilityExpenses.datasets.reduce((tmp:any[],expense:any) => {
            for (let i=0; i<expense.data.length; i++) {
                tmp[i] += expense.data[i];
            }
            return tmp;
        }, [0,0,0,0,0,0,0,0,0,0,0,0,]);
        // console.log(`${JSON.stringify(_utilityExpenses)}`);
    
        const rgb = color();
        ExpenseData.overallExpenses.datasets.push({
            label: EXP_TYPE.UTILITY,
            data: _utilityExpenses,
            borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
            borderWidth: 2         
        });
    })();

    (() => {
        const _miscExpenses = ExpenseData.miscExpenses.datasets.reduce((tmp:any[],expense:any) => {
            for (let i=0; i<expense.data.length; i++) {
                tmp[i] += expense.data[i];
            }
            return tmp;
        }, [0,0,0,0,0,0,0,0,0,0,0,0,]);
        // console.log(`${JSON.stringify(_miscExpenses)}`);
    
        const rgb = color();
        ExpenseData.overallExpenses.datasets.push({
            label: EXP_TYPE.MISC,
            data: _miscExpenses,
            borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
            borderWidth: 2         
        });
    })();
})();

export default ExpenseData;