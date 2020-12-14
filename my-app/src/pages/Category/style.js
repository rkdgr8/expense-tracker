import { css } from "@emotion/core";
import { mediaQueries } from "../../constants/style";

export const buttonStyle = css`
  margin: 10px 0 20px;
  text-align: center;
`;

export const containerStyle = css`
  position:fixed;
  width: 100%;
  height:100%;
  overflow-y: scroll;
  background-color: #e8e4ee;
  padding: 50px 20px 20px 20px;
  box-sizing: border-box;
`;

export const headerStyle = css`
 position: fixed;
 width: 100%;
 margin-left:-20px;
 height: 40px;
 z-index: 1;
 top: 0px;
 background-color: rgb(255, 255, 255);
 box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`

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
  justify-content: center;
  align-items: center;
  @media (${mediaQueries.mobileWidth}) {
    bottom: 70px;
  }
`;

// export const modalBtnStyle = {
//   minWidth: `${window.innerWidth < 451 ? "120px" : "250px"}`,
// };

export const modalBtnStyle = {
  ['@media(max-width: 450px)']: { // eslint-disable-line no-useless-computed-key
    minWidth: '150px'
  },
  ['@media(min-width: 450px)']: { // eslint-disable-line no-useless-computed-key
    minWidth: '250px'
  },
  margin: '0px 20px'
}

export const logOutStyle = css`
  position: fixed;
  top: 10px;
  right: 20px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

export const viewExpStyle = css`
  position: fixed;
  top: 10px;
  right: 100px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;
