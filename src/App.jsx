//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import Transaction from './components/Transaction'
import Expense from './components/Expense';
import IncomeExpense from './components/IncomeExpense';
import axios from 'axios';

function App() {
  const [transaction,setTransaction] = useState( [
    {id : 1, expense : "Rent", amount : -5000},
    {id : 2, expense : "Salary", amount : 10000},
    {id : 3, expense : "Food", amount : -2000},
    {id : 4, expense : "Grocery", amount : -1000},
] );

useEffect(() => {
  axios
    .get('https://expense-tracker-backend-6qr4.onrender.com')
    .then((res) => setTransaction(res.data))
    .catch((err) => console.error('Error fetching transactions:', err));
}, []);


  const onAdd = (data) => {
    axios
    .post('https://expense-tracker-backend-6qr4.onrender.com', data) 
    .then((res) => {
      setTransaction([...transaction, res.data]); 
    })
    .catch((err) => console.error('Error adding transaction:', err));
  }

  const onDelete = (id)=>{
    console.log('Deleting transaction with ID:', id);
    axios
      .delete(`https://expense-tracker-backend-6qr4.onrender.com/${id}`) 
      .then(() => {
        console.log('Transaction deleted successfully');
        setTransaction(transaction.filter((transaction) => transaction.id !== id)); 
      })
      .catch((err) => console.error('Error deleting transaction:', err));
  };


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
