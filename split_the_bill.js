const splitTheBill = (group) => {
  let bill = 0;
  Object.keys(group).forEach((key) => {
    bill += group[key];
  });
  bill /= Object.keys(group).length;
  Object.keys(group).forEach((key) => {
    group[key] -= bill;
  });
  return group;
};

// const group = {
//   "john"  : 120,
//   "paul"  :  30,
//   "ringo" : 150,
// }

// console.log(splitTheBill(group));
