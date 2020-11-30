import { css } from "@emotion/core";

import { mediaQueries, zIndex } from "../../constants/style";

export const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.modal};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #0009;
`;

export const modalStyle = css`
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  padding: 30px;
  background-color: #fff;
  @media (${mediaQueries.minDesktopWidth}) {
    width: 650px;
    min-height: 400px;
  }
`;
