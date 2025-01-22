
const Expense =(props)=>{
    const {transaction = []} = props;

    const amounts = transaction.map((eachTransaction) => eachTransaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

    return(
        <>
        <div>
            <h3>Expense Tracker</h3>
            <h1 id="balance">{total}</h1>

        </div>
        </>
    )
}

export default Expense;