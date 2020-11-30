import { css } from "@emotion/core";

export const expenseContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export const expenseItemStyle = css`
  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const amountStyle = (amount) => css`
  color: ${amount < 0 ? `red` : `green`};
`;

export const historyStyle = css`
  font-size: 20px;
  font-style: italic;
  margin-top: 20px;
`;
