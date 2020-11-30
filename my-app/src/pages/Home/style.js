import { css } from "@emotion/core";

export const containerStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: #e8e4ee;
  padding: 20px;
`;

export const buttonStyle = css`
  margin: 0 auto 20px auto;
  max-width: 300px;
`;

export const fieldContStyle = css`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  & > * {
    margin: 5px;
    padding: 5px;
  }
`;

export const btnContainer = css`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const modalBtnStyle = {
  minWidth: "250px",
};

export const modalBodyCont = css`
  .modal-body {
    position: relative;
    min-height: 300px;
  }
`;
