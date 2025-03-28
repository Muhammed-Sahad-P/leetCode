//! 860. Lemonade Change

// Example 1:
// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.

var lemonadeChange = function (bills) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      a++;
    } else if (bills[i] === 10) {
      if (a > 0) {
        a--;
        b++;
      } else {
        return false;
      }
    } else if (bills[i] === 20) {
      if (a > 0 && b > 0) {
        a--;
        b--;
      } else if (a >= 3) {
        a -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
