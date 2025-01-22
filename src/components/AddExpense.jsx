import { useState } from 'react';

const AddExpense = (props) => {

    const {onAdd} = props;

    const [expense , setExpense] = useState("")
    const [amount , setAmount] = useState("")
    const onExpenseChange = (event)=>{
          setExpense(event.target.value)
    };
    const onAmountChange = (event)=>{
        setAmount(event.target.value);
    };
    
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log({expense , amount:+amount});
        setExpense("");
        setAmount("");
        onAdd({expense , amount:+amount});

    }


    return (
        <>
            <div className="form">
            <h3>Add New Expense</h3>
                <form onSubmit={onSubmit}>
                    <div className="label">
                    <label htmlFor="expense">Expense</label><br />
                    <input 
                        type="text" 
                        id="expense" 
                        name="expense" 
                        placeholder="Enter Expense"
                        value = {expense}
                        onChange = {onExpenseChange}
                         /><br />
                    </div>

                    <div className="label">
                    <label htmlFor="amount">Amount</label><br />
                    <input type="number" 
                        id="amount" 
                        name="amount" 
                        placeholder="Enter amount" 
                        value = {amount}
                        onChange = {onAmountChange}
                        /><br />
                    </div>
                    <br />
                    <div>
                        <button type="submit" >Add Expense</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddExpense;