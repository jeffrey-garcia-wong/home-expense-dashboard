const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const createFixedExpense = (data: any[]) => {
  const mortgageAmt = random(1500, 2500);
  const councilTaxAmt = random(200, 250);
  const homeInsuranceAmt = random(20, 30);
  const propertyMgmtAmt = random(15, 20);
  const broadbandAmt = random(30, 40);
  const mobileSimAmt = random(20, 30);
  const carInsuranceAmt = random(60, 70);
  const roadTaxAmt = random(15, 20);

  for (let i = 0; i < 12; i = i + 1) {
    data[i].fixedExpenses.push({
      label: "Mortgage",
      amount: mortgageAmt,
    });
    data[i].fixedExpenses.push({
      label: "Home Insurance",
      amount: homeInsuranceAmt,
    });
    data[i].fixedExpenses.push({
      label: "Property Management",
      amount: propertyMgmtAmt,
    });
    data[i].fixedExpenses.push({
      label: "Council Tax",
      amount: councilTaxAmt,
    });
    data[i].fixedExpenses.push({
      label: "Broadband",
      amount: broadbandAmt,
    });
    data[i].fixedExpenses.push({
      label: "Mobile SIM",
      amount: mobileSimAmt,
    });
    data[i].fixedExpenses.push({
      label: "Car Insurance",
      amount: carInsuranceAmt,
    });
    data[i].fixedExpenses.push({
      label: "Road Tax",
      amount: roadTaxAmt,
    });
  }
};

const createUtilityExpense = (data: any) => {
  for (let i = 0; i < 12; i = i + 1) {
    data[i].utilityExpenses.push({
      label: "Petrol",
      amount: random(200, 250),
    });
    data[i].utilityExpenses.push({
      label: "Water",
      amount: random(35, 45),
    });
    data[i].utilityExpenses.push({
      label: "Gas",
      amount: random(65, 75),
    });
    data[i].utilityExpenses.push({
      label: "Electricity",
      amount: random(40, 50),
    });
  }
};

const createMiscExpense = (data: any) => {
  for (let i = 0; i < 12; i = i + 1) {
    data[i].miscExpenses.push({
      label: "Supermarket",
      amount: random(500, 600),
      type: "Supermarket",
    });
    data[i].miscExpenses.push({
      label: "Outdoor Dining",
      amount: random(200, 250),
      type: "Outdoor Dining",
    });
    data[i].miscExpenses.push({
      label: "Home Appliances",
      amount: random(100, 250),
      type: "Home Appliances",
    });
    data[i].miscExpenses.push({
      label: "School & Activities",
      amount: random(350, 500),
      type: "School & Activities",
    });
    data[i].miscExpenses.push({
      label: "Home Refurbishments",
      amount: random(200, 300),
      type: "Home Refurbishments",
    });
  }
};

const createFake = () => {
  const data: any[] = new Array<any>();
  for (let i = 0; i < 12; i = i + 1) {
    data.push({
      month: i + 1,
      fixedExpenses: [],
      utilityExpenses: [],
      miscExpenses: [],
    });
  }

  createFixedExpense(data);
  createUtilityExpense(data);
  createMiscExpense(data);

  return data;
};

const MockData = (() => {
  return {
    create: () => {
      console.log("mock data running");
      const data: any[] = createFake();
      console.log(data);
      return data;
    },
  };
})();

export default MockData;
