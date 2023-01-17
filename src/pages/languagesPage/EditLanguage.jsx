import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";

const EditLanguage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);

  const [languagesForm, setLanguagesForm] = useState({});

  useEffect(() => {
    const languagesEdit = userState.user.languages.find(
      (item) => item.id === params.languageId
    );
    console.log("languagesEdit", languagesEdit);

    setLanguagesForm({
      language: languagesEdit.language,
      level: languagesEdit.level,
    });
  }, []);

  const handleAddLanguage = (e) => {
    e.preventDefault();

    const editLanguages = {
      //   id: String(new Date().getTime()),
      id: params.languageId,
      ...languagesForm,
    };
    console.log("editLanguages", editLanguages);

    const languageFilter = userState.user.languages.filter(
      (item) => item.id !== editLanguages.id
    );
    console.log("projectFilter", languageFilter);

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          languages: [...languageFilter, editLanguages],
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

export default EditLanguage;
