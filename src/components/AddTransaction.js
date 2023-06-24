import React, {useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction=()=>{
    const [description,setDiscription]=useState('');
    const [transactionAmount,setTransactionAmount]=useState('');
     
    const {addTransaction}=useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id:new Date().getTime(),
            description,
            transactionAmount:+transactionAmount
        } 
        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Detail of Taranction" 
                    value={description} 
                    onChange={(e)=>setDiscription(e.target.value)}/>
                </div>
                <div className="form-control">
                <label htmlFor="transactionAmount">
                    TransactionAmount
                </label>
                <input type="number" id="TransactionAmount"  
                placeholder="Enter Transaction Amount" 
                value={transactionAmount}
                onChange={(e)=>setTransactionAmount(e.target.value)}
                />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>

        </div>
    );
}