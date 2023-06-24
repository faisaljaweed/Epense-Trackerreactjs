import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
export const Transaction=({transaction}) => {
    const {delTransaction}=useContext(GlobalContext);
    const sign =transaction.trasactionAmount > 0 ? '+' : '-';
    const transactiontype=transaction.trasactionAmount > 0 ? 'plus' : 'minus'; 
    return(
        
        <li className={transactiontype}>
          {transaction.description}
          <span>{sign}${Math.abs(transaction.trasactionAmount)} </span>
          <button className="delete-btn"
          onClick={()=>delTransaction(transaction.id)}
          >X</button>
       </li>
       
    );
}