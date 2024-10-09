let totalBudget=0;

function addExpense(number){
    totalBudget = totalBudget + number;
    console.log(`total budget is ${totalBudget}`);
}

function getExpenseDetails(description,cost){
    console.log(description)
    console.log(cost)
    console.log(`the cost of ${description} is ${cost}`)

}
function resetBudget(){
    totalBudget = 0

}
addExpense(100);
addExpense(50);
resetBudget()
getExpenseDetails("fare",100)
getExpenseDetails("shopping",500)
console.log(totalBudget);
