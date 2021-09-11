const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//----------> forEach
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// takes synchronous callback funct, takes as arguments: company = iterator; index; entire array
companies.forEach(function (company) {
  console.log(company.name);
});

//----------> filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//condition and return true; takes the same 3 arguments as forEach
//if condition is true, element remains in the array
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

const canDrink = ages.filter((age) => age >= 21);

const retailCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});

const retailCompanies = commpanies.filter(
  (company) => company.category === "Retail"
);

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

const lastedTenYearsOrMore = companies.filter(
  (company) => company.end - company.start >= 10
);

//----------> map
// create array of company names; map can return array
const companyNames = companies.map(function (company) {
  return company.name;
});

//create array of ones for each company
const ones = companies.map(function (company) {
  return 1;
});

const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

const agesSquare = ages.map((age) => Math.sqrt(age));

//---------> Sort
//sort the companies by the start year
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1; //change positions
  } else {
    return -1; //positions will remain unchanged
  }
});

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//sort ages; simple .sort() will sort by first digit only (double digit numbers not considered)
const sortAges = ages.sort((a, b) => a - b);

//----------> reduce
//add all ages together
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

//starts at 0; first arg total keeps it's value, age iterates, initial value 0
const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

const totalYears = commpanies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);

const totalYears = commpanies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

//-----------> combine methods
// from map - array with doubled ages, filer - leaves only elements larger than 40, sort- sorts in increasing array, reduce - returns a sum of all elements
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
