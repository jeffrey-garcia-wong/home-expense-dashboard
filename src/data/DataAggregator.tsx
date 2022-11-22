import {
  OverallExpenseType as EXP_TYPE,
  UtilityExpenseType as UTIL_EXP_TYPE,
  MiscExpenseType as MISC_EXP_TYPE,
  MonthLabels as MONTH_LABELS,
} from './DataDictionary';

const color = (() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // console.log(`${JSON.stringify({ r:r, g:g, b:b })}`);
  return { r, g, b };
});

const initMiscExpData = ((input:any[]) => {
  const _data = [];
  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.SUPERMARKET,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.OUTDOOR_DINING,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.SCHOOL_ACTIVITIES,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.HOME_APPLIANCES,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.HOME_REFURBISHMENTS,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  _data.push((() => {
    const rgb = color();
    return {
      label: MISC_EXP_TYPE.ENTERTAINMENT,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());

  return _data;
});

const aggregateMiscExpense = (RawData:any) => {
  const mapResult = RawData.flatMap((monthlyExp:any) => {
    monthlyExp.miscExpenses.forEach((item:any) => {
      item = Object.assign(item, { month: monthlyExp.month });
    });
    return monthlyExp.miscExpenses;
  });
    // console.log(`${JSON.stringify(mapResult)}`);

  const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
    const _item = tmp.find((item:any) => item.label == curr.type);
    if (_item != null) {
      _item.data[curr.month - 1] += Number(curr.amount);
    }
    return tmp;
  }, initMiscExpData(RawData));
    // console.log(`${JSON.stringify(reduceResult)}`);

  return { labels: MONTH_LABELS, datasets: reduceResult };
};

const initUtilityExpData = ((input:any[]) => {
  const _data = [];
  _data.push((() => {
    const rgb = color();
    return {
      label: UTIL_EXP_TYPE.ELECTRICITY,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());
  _data.push((() => {
    const rgb = color();
    return {
      label: UTIL_EXP_TYPE.GAS,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());
  _data.push((() => {
    const rgb = color();
    return {
      label: UTIL_EXP_TYPE.WATER,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());
  _data.push((() => {
    const rgb = color();
    return {
      label: UTIL_EXP_TYPE.PETROL,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    };
  })());
  return _data;
});

const aggregateUtilityExpense = (RawData:any) => {
  const mapResult = RawData.flatMap((monthlyExp:any) => {
    monthlyExp.utilityExpenses.forEach((item:any) => {
      item = Object.assign(item, { month: monthlyExp.month });
    });
    return monthlyExp.utilityExpenses;
  });
    // console.log(`${JSON.stringify(mapResult)}`);

  const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
    const _item = tmp.find((item:any) => item.label == curr.label);
    if (_item != null) {
      _item.data[curr.month - 1] += Number(curr.amount);
    }
    return tmp;
  }, initUtilityExpData(RawData));
    // console.log(`${JSON.stringify(reduceResult)}`);

  return { labels: MONTH_LABELS, datasets: reduceResult };
};

const aggregateFixedExpense = ((RawData:any) => {
  const mapResult = RawData.flatMap((monthlyExp:any) => {
    monthlyExp.fixedExpenses.forEach((item:any) => {
      item = Object.assign(item, { month: monthlyExp.month });
    });
    return monthlyExp.fixedExpenses;
  });
    // console.log(`${JSON.stringify(mapResult)}`);

  const reduceResult = mapResult.reduce((tmp:any[], curr:any) => {
    const _item = tmp.find((item:any) => item.label == curr.label);
    if (_item != null) {
      _item.data[curr.month - 1] += Number(curr.amount);
    } else {
      const rgb = color();
      const i = tmp.push({
        label: curr.label,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
        backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
        borderWidth: 2,
      });
      tmp[i - 1].data[curr.month - 1] += curr.amount;
    }
    return tmp;
  }, []);
    // console.log(`${JSON.stringify(reduceResult)}`);

  return { labels: MONTH_LABELS, datasets: reduceResult };
});

const aggregateExpenses = ((rawData:any) => {
  const ExpenseData = {
    overallExpenses: {
      monthly: { labels: MONTH_LABELS, datasets: new Array<any>() },
      average: { labels: MONTH_LABELS, datasets: new Array<any>() },
    },
    fixedExpenses: {
      monthly: aggregateFixedExpense(rawData),
      average: { labels: MONTH_LABELS, datasets: new Array<any>() },
    },
    utilityExpenses: {
      monthly: aggregateUtilityExpense(rawData),
      average: { labels: MONTH_LABELS, datasets: new Array<any>() },
    },
    miscExpenses: {
      monthly: aggregateMiscExpense(rawData),
      average: { labels: MONTH_LABELS, datasets: new Array<any>() },
    },
  };

  (() => {
    const _fixedExpenses = ExpenseData.fixedExpenses.monthly.datasets.reduce((tmp:any[], expense:any) => {
      for (let i = 0; i < expense.data.length; i++) {
        tmp[i] += expense.data[i];
      }
      return tmp;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // console.log(`${JSON.stringify(_fixedExpenses)}`);

    const rgb = color();
    ExpenseData.overallExpenses.monthly.datasets.push({
      label: EXP_TYPE.FIXED,
      data: _fixedExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _averageFixedExpenses = new Array<number>();
    const _fixedExpenses = ExpenseData.overallExpenses.monthly.datasets[0].data;
    let _accumulatedTotal = 0;
    for (let i = 0; i < MONTH_LABELS.length; i++) {
      let _montlyTotal = Number(_fixedExpenses[i].toFixed(2)) * 100;
      _montlyTotal /= 100;
      _accumulatedTotal += _montlyTotal;
      const _average = _accumulatedTotal / (i + 1);
      // console.log(`@@@ -> ${_average}`);
      _averageFixedExpenses.push(_average);
    }

    const rgb = color();
    ExpenseData.fixedExpenses.average.datasets.push({
      label: EXP_TYPE.AVG,
      data: _averageFixedExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _utilityExpenses = ExpenseData.utilityExpenses.monthly.datasets.reduce((tmp:any[], expense:any) => {
      for (let i = 0; i < expense.data.length; i++) {
        tmp[i] += expense.data[i];
      }
      return tmp;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // console.log(`${JSON.stringify(_utilityExpenses)}`);

    const rgb = color();
    ExpenseData.overallExpenses.monthly.datasets.push({
      label: EXP_TYPE.UTILITY,
      data: _utilityExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _averageUtilityExpenses = new Array<number>();
    const _utilityExpenses = ExpenseData.overallExpenses.monthly.datasets[1].data;
    let _accumulatedTotal = 0;
    for (let i = 0; i < MONTH_LABELS.length; i++) {
      let _montlyTotal = Number(_utilityExpenses[i].toFixed(2)) * 100;
      _montlyTotal /= 100;
      _accumulatedTotal += _montlyTotal;
      const _average = _accumulatedTotal / (i + 1);
      // console.log(`@@@ -> ${_average}`);
      _averageUtilityExpenses.push(_average);
    }

    const rgb = color();
    ExpenseData.utilityExpenses.average.datasets.push({
      label: EXP_TYPE.AVG,
      data: _averageUtilityExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _miscExpenses = ExpenseData.miscExpenses.monthly.datasets.reduce((tmp:any[], expense:any) => {
      for (let i = 0; i < expense.data.length; i++) {
        tmp[i] += expense.data[i];
      }
      return tmp;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // console.log(`${JSON.stringify(_miscExpenses)}`);

    const rgb = color();
    ExpenseData.overallExpenses.monthly.datasets.push({
      label: EXP_TYPE.MISC,
      data: _miscExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _averageMiscExpenses = new Array<number>();
    const _miscExpenses = ExpenseData.overallExpenses.monthly.datasets[2].data;
    let _accumulatedTotal = 0;
    for (let i = 0; i < MONTH_LABELS.length; i++) {
      let _montlyTotal = Number(_miscExpenses[i].toFixed(2)) * 100;
      _montlyTotal /= 100;
      _accumulatedTotal += _montlyTotal;
      const _average = _accumulatedTotal / (i + 1);
      // console.log(`@@@ -> ${_average}`);
      _averageMiscExpenses.push(_average);
    }

    const rgb = color();
    ExpenseData.miscExpenses.average.datasets.push({
      label: EXP_TYPE.AVG,
      data: _averageMiscExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  (() => {
    const _averageOverallExpenses = new Array<number>();
    const _fixedExpenses = ExpenseData.overallExpenses.monthly.datasets[0].data;
    const _utilityExpenses = ExpenseData.overallExpenses.monthly.datasets[1].data;
    const _miscExpenses = ExpenseData.overallExpenses.monthly.datasets[2].data;
    let _accumulatedTotal = 0;
    for (let i = 0; i < MONTH_LABELS.length; i++) {
      let _montlyTotal = Number(_fixedExpenses[i].toFixed(2)) * 100
                + Number(_utilityExpenses[i].toFixed(2)) * 100
                + Number(_miscExpenses[i].toFixed(2)) * 100;
      _montlyTotal /= 100;
      _accumulatedTotal += _montlyTotal;
      const _average = _accumulatedTotal / (i + 1);
      // console.log(`@@@ -> ${_average}`);
      _averageOverallExpenses.push(_average);
    }

    const rgb = color();
    ExpenseData.overallExpenses.average.datasets.push({
      label: EXP_TYPE.AVG,
      data: _averageOverallExpenses,
      borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`,
      borderWidth: 2,
    });
  })();

  return ExpenseData;
});

export default aggregateExpenses;
