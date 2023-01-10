import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddEducation = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [educationForm, setEducationForm] = useState({
    schoolName: "",
    degree: "",
    average: "",
    city: "",
    country: "",
    startDate: new Date(),
    present: false,
    finishDate: new Date(),
  });
  const handleAddEducation = (e) => {
    e.preventDefault();
    const newEducation = {
      id: String(new Date().getTime()),
      ...educationForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          educations: [...userState.user.educations, newEducation],
        },
        () => navigate("/education-infos")
      )
    );
  };
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddEducation}>
          <div class="mb-3">
            <label for="schoolName" class="form-label">
              Okul Adı
            </label>
            <input
              type="text"
              class="form-control"
              id="schoolName"
              value={educationForm.schoolName}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  schoolName: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="degree" class="form-label">
              Bölüm
            </label>
            <input
              type="text"
              class="form-control"
              id="degree"
              value={educationForm.degree}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  degree: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="average" class="form-label">
              Ortalama
            </label>
            <input
              type="text"
              class="form-control"
              id="average"
              value={educationForm.average}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  average: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="city" class="form-label">
              Şehir
            </label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={educationForm.city}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">
              Ülke
            </label>
            <input
              type="text"
              class="form-control"
              id="country"
              value={educationForm.country}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  country: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">
              Başlangıç Tarihi
            </label>
            <input
              type="date"
              class="form-control"
              id="country"
              value={educationForm.startDate}
              onChange={(e) =>
                setEducationForm({
                  ...educationForm,
                  startDate: e.target.value,
                })
              }
            />
          </div>
          {!educationForm.present && (
            <div class="mb-3">
              <label for="country" class="form-label">
                Bitiş Tarihi
              </label>
              <input
                type="date"
                class="form-control"
                id="country"
                value={educationForm.finishDate}
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    finishDate: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={educationForm.present}
              id="present"
              onChange={() =>
                setEducationForm({
                  ...educationForm,
                  present: !educationForm.present,
                })
              }
            />
            <label class="form-check-label" for="present">
              Devam Ediyor
            </label>
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
export default AddEducation;
