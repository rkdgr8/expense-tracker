import { css } from "@emotion/core";
import { mediaQueries } from "../../constants/style";

export const containerStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: #e8e4ee;
  padding: 50px 20px 20px 20px;
  box-sizing: border-box;
`;

export const buttonStyle = css`
  margin: 0 0 20px;
  text-align: center;
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

export const modalBodyCont = css`
  .modal-body {
    position: relative;
    min-height: 300px;
  }
`;

export const logOutStyle = css`
  position: fixed;
  top: 10px;
  right: 10px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

export const viewCatStyle = css`
  position: fixed;
  top: 10px;
  right: 100px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;
