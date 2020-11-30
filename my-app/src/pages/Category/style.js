import { css } from "@emotion/core";
import { mediaQueries } from "../../constants/style";

export const buttonStyle = css`
  margin: 0 auto 20px auto;
  max-width: 300px;
`;

export const containerStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: #e8e4ee;
  padding: 50px 20px 20px 20px;
  box-sizing: border-box;
`;

export const categoryContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export const textStyle = css`
  font-size: 20px;
  font-style: italic;
  margin-top: 20px;
`;

export const butnContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

export const btnStyle = {
  margin: "10px",
};

export const modalBodyCont = css`
  .modal-body {
    position: relative;
    min-height: 200px;
  }
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
  left: 0;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (${mediaQueries.mobileWidth}) {
    bottom: 70px;
  }
`;

export const modalBtnStyle = {
  minWidth: `${window.innerWidth < 451 ? "120px" : "250px"}`,
};
