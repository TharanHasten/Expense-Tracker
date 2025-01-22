const IncomeExpense = (props)=>{
    const{transaction} = props;

    let income = 0;
    let expense = 0;

    for(let i=0; i<transaction.length; i++){
        if(transaction[i].amount > 0){
            income += transaction[i].amount;
        }else{
            expense += transaction[i].amount;
        }
    }

    return (
        <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money-plus">{income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money-minus">{expense.toFixed(2)}</p>
            </div>
        </div>
        </>
    )
}

export default IncomeExpense;