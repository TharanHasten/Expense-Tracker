//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import Transaction from './components/Transaction'
import Expense from './components/Expense';
import IncomeExpense from './components/IncomeExpense';

function App() {
  const [transaction,setTransaction] = useState( [
    {id : 1, expense : "Rent", amount : -5000},
    {id : 2, expense : "Salary", amount : 10000},
    {id : 3, expense : "Food", amount : -2000},
    {id : 4, expense : "Grocery", amount : -1000},
] );

  const onAdd = (data) => {
    const modData = {...data, id: Math.random()*1000}
    setTransaction([...transaction,modData]);
  }

  const onDelete = (id)=>{
    const modList = transaction.filter((eachTransaction) => eachTransaction.id !== id);
    setTransaction(modList);
  }

  return (
    <>
       <Expense transaction={transaction}/>
       <IncomeExpense transaction={transaction}/>
       <Transaction transaction={transaction} onDelete={onDelete}/>
      <AddExpense onAdd = {onAdd} />
    </>
  )
}

export default App
