import React from "react";
import {
  expenseContainerStyle,
  historyStyle,
  expenseItemStyle,
  amountStyle,
} from "./style";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function ExpenseContainer({ expenseList }) {
  return (
    <div css={expenseContainerStyle}>
      <div css={historyStyle}>Your history: </div>
      {/* {expenseList.length == 0 && <div>No Expenses made</div>} */}
      {expenseList.map(({ amount, date_added, description }, index) => (
        <div key={index} css={expenseItemStyle}>
          <div css={amountStyle(amount)}> {amount}₹</div>
          <div>
            <strong>{description}</strong>
          </div>
          <div>{new Date(date_added).toLocaleDateString()}</div>
        </div>
      ))}
    </div>
  );
}
