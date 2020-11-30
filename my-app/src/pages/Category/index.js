import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useHistory } from "react-router-dom";
import {
  buttonStyle,
  categoryContainerStyle,
  textStyle,
  butnContainer,
  btnStyle,
  containerStyle,
  modalBodyCont,
  fieldContStyle,
  btnContainer,
  modalBtnStyle,
} from "./style";
import Button from "@material-ui/core/Button";
import Modal from "../../components/Modal/index";
import axios from "axios";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function Category() {
  const { authToken, setAuthToken } = useAuth();
  let history = useHistory();
  const [categoryList, setCategoryList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemCategory, setItemCategory] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);

  useEffect(() => {
    if (itemCategory !== "") {
      setbtnDisabled(false);
    } else {
      setbtnDisabled(true);
    }
  }, [itemCategory]);

  function createCategory() {
    setbtnDisabled(true);
    if (categoryList.includes(itemCategory)) {
      return;
    }
    axios
      .post(
        "https://expense-manager-shipmnts.herokuapp.com/api/v1/user/add_category",
        {
          name: itemCategory,
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      )
      .then(({ status, data }) => {
        if (status == 201) {
          setIsOpen(false);
          setItemCategory("");
          setCategoryList([itemCategory, ...categoryList]);
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
        }
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div css={containerStyle}>
      <div css={buttonStyle}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Create a new Category
        </Button>
      </div>
      <div css={categoryContainerStyle}>
        <div css={textStyle}>Your Categories: </div>
        <div css={butnContainer}>
          {categoryList.map((category) => (
            <Button variant="contained" style={btnStyle}>
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        style={modalBodyCont}
      >
        <div css={fieldContStyle}>
          Enter a new category
          <input
            type="text"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
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
            onClick={createCategory}
          >
            Create
          </Button>
        </div>
      </Modal>
    </div>
  );
}
