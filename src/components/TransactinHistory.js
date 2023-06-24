import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TransactionHistory=()=>{
    const {transaction}=useContext(GlobalContext);


    return(
        <div>
            <h3>Transaction Histroy</h3>
            <ul className="list">
            {transaction.map (transaction=>
                
                (
                <Transaction key={transaction.id} transaction={transaction}/>
                )
                ) 
                } 
            </ul>

        </div>
    )

}