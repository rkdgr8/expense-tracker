import { css } from "@emotion/core";

export const containerStyle = css`
  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 700px;
  margin: 0 auto;
`;
export const headingStyle = css`
  font-weight: bold;
  padding-top: 10px;
  text-align: center;
`;

export const filterStyle = css`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`;

export const dateContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: calc(50% - 10px);
`;

export const dateTextStyle = css`
  font-style: italic;
  font-size: 15px;
  margin-top: 5px;
`;
