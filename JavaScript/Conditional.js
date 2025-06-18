// I will go to the market.

// I will zeeWorld if my subscription is active

// if statement

// if (condition) {
//   statement | action
// }

let subscriptionPlan = "inactive";
if (subscriptionPlan === "active") {
  console.log("I will watch zee world."); // false
} else {
  console.log("I will go to bed."); // true
}

let marketZone = 1;

if (marketZone === 1) {
  console.log("Buy from zone " + marketZone);
} else if (marketZone === 1) {
  console.log("Buy from zone " + marketZone);
} else if (marketZone === 3) {
  console.log("Buy from zone " + marketZone);
}

// if-else

// (Ternary Operator) ? :

// condition ? true : false;

subscriptionPlan === "active"
  ? console.log("I will watch zee world.")
  : subscriptionPlan === "inactive"
  ? console.log("subscribe to a plan")
  : console.log("Network Error");
