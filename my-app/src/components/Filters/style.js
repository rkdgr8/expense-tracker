import { css } from "@emotion/core";

export const filterStyle = css`
  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 700px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  & > * {
    margin-left: 20px;
    &:first-child {
      margin-left: 10px;
    }
  }
`;

export const dateContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const dateTextStyle = css`
  font-style: italic;
  font-size: 15px;
  margin-top: 5px;
`;
