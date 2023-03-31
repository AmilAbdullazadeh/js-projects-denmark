import React from 'react';
import { addExpense } from './features/expense/expenseSlice'
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch()


  return (
    <div onClick={() => dispatch(addExpense())} className="App">
        Tools
    </div>
  );
}

export default App;
