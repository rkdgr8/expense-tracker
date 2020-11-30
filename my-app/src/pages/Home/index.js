import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ExpenseListContainer from "../../components/ExpenseContainer/index";
import Filters from "../../components/Filters/index";
import Button from "@material-ui/core/Button";
import Modal from "../../components/Modal/index";
import {
  containerStyle,
  buttonStyle,
  fieldContStyle,
  btnContainer,
  modalBodyCont,
  modalBtnStyle,
} from "./style";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
/** @jsx jsx */
import { jsx } from "@emotion/core";

function Home(props) {
  const { authToken, setAuthToken } = useAuth();
  let history = useHistory();
  const [expenseList, setExpenseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [dateError, setDateError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemAmt, setItemAmt] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (itemDescription !== "" && itemAmt !== "" && itemCategory != "") {
      setBtnDisabled(false);
    }
  }, [itemDescription, itemCategory, itemAmt]);

  function createExpenseItem() {
    setBtnDisabled(true);
    axios
      .post(
        "https://expense-manager-shipmnts.herokuapp.com/api/v1/user/add_expense",
        {
          category: itemCategory,
          amount: Number(itemAmt),
          description: itemDescription,
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      )
      .then(({ status, data }) => {
        if (status == 201) {
          setExpenseList([
            {
              amount: Number(itemAmt),
              description: itemDescription,
              date_added: new Date(),
              category: itemCategory,
            },
            ...expenseList,
          ]);
          setIsOpen(false);
          setItemCategory(categoryList[0]);
          setItemDescription("");
          setItemAmt("");
        }
      });
  }

  function fetchExpenses(startDate, endDate) {
    if (startDate == "" && endDate != "") return;
    if (startDate != "" && endDate == "") return;

    axios
      .post(
        "https://expense-manager-shipmnts.herokuapp.com/api/v1/user/expense_details",
        startDate == "" && endDate == ""
          ? null
          : {
              start_date: startDate,
              end_date: endDate,
            },
        {
          headers: {
            authorization: authToken,
          },
        }
      )
      .then(({ status, data = [] }) => {
        if (status === 200) {
          setExpenseList(
            data.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
          );
        }
      });
  }

  function fetchCategories() {
    axios
      .get(
        "https://expense-manager-shipmnts.herokuapp.com/api/v1/user/categories",
        {
          headers: {
            authorization: authToken,
          },
        }
      )
      .then(({ status, data: { categories = [] } = {} }) => {
        if (status === 200) {
          setCategoryList(categories);
          setItemCategory(categories[0]);
        }
      });
  }

  function logOut() {
    setAuthToken();
    history.push("/login");
  }

  useEffect(() => {
    fetchExpenses(startDate, endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div css={containerStyle}>
      <div css={buttonStyle} onClick={() => setIsOpen(true)}>
        <Button variant="contained" color="primary">
          Create a new expense item
        </Button>
      </div>

      <Filters
        startDate={startDate}
        endDate={endDate}
        setstartDate={setstartDate}
        setendDate={setendDate}
        setDateError={setDateError}
      ></Filters>

      <ExpenseListContainer expenseList={expenseList}></ExpenseListContainer>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        style={modalBodyCont}
      >
        <div css={fieldContStyle}>
          Enter Description
          <input
            type="text"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          ></input>
        </div>

        <div css={fieldContStyle}>
          Select a category
          <select
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            {categoryList.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div css={fieldContStyle}>
          Enter Expense Amount( -ve for expense and +ve for income)
          <input
            type="number"
            value={itemAmt}
            onChange={(e) => setItemAmt(e.target.value)}
          ></input>
        </div>

        <div css={btnContainer}>
          <Button
            variant="contained"
            size="large"
            style={modalBtnStyle}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            size="large"
            color="primary"
            style={modalBtnStyle}
            disabled={btnDisabled}
            onClick={createExpenseItem}
          >
            Create
          </Button>
        </div>
      </Modal>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={dateError}
        autoHideDuration={6000}
        onClose={() => setDateError(false)}
      >
        <Alert onClose={() => setDateError(false)} severity="error">
          Start Date must not exceed end date!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
