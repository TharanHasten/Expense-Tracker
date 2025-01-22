
const Transaction = (props) =>{
    const {transaction,onDelete} = props;
       
    return (
        <>
        <div className="transaction-list">
            <h3>Expense History</h3>
            <ul id ="list" className = "list">
               {transaction.map((eachTransaction) =>{
                return(
                    <li 
                    key ={eachTransaction.id}
                    className={eachTransaction.amount > 0 ? "plus" :"minus"}>
                        <span>{eachTransaction.expense}</span>
                        <span>₹{eachTransaction.amount}</span>
                        <button className="delete-btn" onClick={()=> onDelete(eachTransaction.id)}>X</button>
                    </li>
                );
            })}
        </ul>
        </div>
        </>
    )
}

export default Transaction;

