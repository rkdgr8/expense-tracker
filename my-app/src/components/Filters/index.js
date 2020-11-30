import React from "react";
import {
  filterStyle,
  dateContainerStyle,
  dateTextStyle,
  headingStyle,
  containerStyle,
} from "./style";
/** @jsx jsx */
import { jsx } from "@emotion/core";

function dateValidation(startDate, endDate) {
  if (startDate === "" || endDate === "") return true;
  if (new Date(startDate) <= new Date(endDate)) return true;
  else return false;
}

export default function Filters({
  startDate,
  endDate,
  setstartDate,
  setendDate,
  setDateError,
}) {
  return (
    <div css={containerStyle}>
      <div css={headingStyle}> Filters </div>
      <div css={filterStyle}>
        <div css={dateContainerStyle}>
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              if (dateValidation(e.target.value, endDate)) {
                setstartDate(e.target.value);
              } else {
                setDateError(true);
              }
            }}
          ></input>
          <div css={dateTextStyle}>Start date</div>
        </div>

        <div css={dateContainerStyle}>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              if (dateValidation(startDate, e.target.value)) {
                setendDate(e.target.value);
              } else {
                setDateError(true);
              }
            }}
          ></input>
          <div css={dateTextStyle}>End date</div>
        </div>
      </div>
    </div>
  );
}
