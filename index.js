// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
// console.log(returnFirstTwoDrivers(drivers));
// console.log(drivers);

const returnLastTwoDrivers = (drivers) => drivers.slice(2);
// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers[1](drivers));

function createFareMultiplier(fare) {
  return function (num) {
    return fare * num;
  };
}

// console.log(createFareMultiplier(2));

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

//This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
function selectDifferentDrivers(driversnames, twoDriversargument) {
  if (twoDriversargument === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driversnames);
  } else if (twoDriversargument === returnLastTwoDrivers) {
    return returnLastTwoDrivers(driversnames);
  }
}

// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
