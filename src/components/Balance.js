import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {
    const {transaction}=useContext(GlobalContext);

    const transactionAmount=transaction.map(transction=>transction.transactionAmount);

    const balance=transactionAmount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return(
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    );
}