import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddLanguage = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [languagesForm, setLanguagesForm] = useState({
    language: "",
    level: "",
  });
  // console.log("languagesForm", languagesForm);

  const handleAddLanguage = (e) => {
    e.preventDefault();
    const newLanguage = {
      id: String(new Date().getTime()),
      ...languagesForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          languages: [...userState.user.languages, newLanguage],
        },
        () => navigate("/language-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddLanguage}>
          <div class="mb-3">
            <label for="language" class="form-label">
              Dil
            </label>
            <input
              type="text"
              class="form-control"
              id="language"
              value={languagesForm.language}
              onChange={(e) =>
                setLanguagesForm({
                  ...languagesForm,
                  language: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="level" class="form-label">
              Seviye
            </label>
            <input
              type="text"
              class="form-control"
              id="level"
              value={languagesForm.level}
              onChange={(e) =>
                setLanguagesForm({
                  ...languagesForm,
                  level: e.target.value,
                })
              }
            />
          </div>

          <div className="d-flex justify-content-center my-5">
            <button className="btn btn-primary w-50" type="submit">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddLanguage;
