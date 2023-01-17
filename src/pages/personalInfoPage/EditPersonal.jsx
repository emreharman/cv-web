import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";

const EditExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);

  const [personalForm, setPersonalForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    setPersonalForm({
      firstName: userState.user.firstName,
      middleName: userState.user.middleName,
      lastName: userState.user.lastName,
      phone: userState.user.phone,
      location: userState.user.location,
    });
  }, []);

  const handleEditPersonal = (e) => {
    e.preventDefault();

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          firstName: personalForm.firstName,
          middleName: personalForm.middleName,
          lastName: personalForm.lastName,
          phone: personalForm.phone,
          location: personalForm.location,
        },
        () => navigate("/profile")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleEditPersonal}>
          <div class="mb-3">
            <label for="firstName" class="form-label">
              Ad
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              value={personalForm.firstName}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="middleName" class="form-label">
              İkinci Ad
            </label>
            <input
              type="text"
              class="form-control"
              id="middleName"
              value={personalForm.middleName}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  middleName: e.target.value,
                })
              }
            />
          </div>

          <div class="mb-3">
            <label for="lastName" class="form-label">
              Soyad
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={personalForm.lastName}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Telefon Numarası
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={personalForm.phone}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="location" class="form-label">
              Adres
            </label>
            <input
              type="text"
              class="form-control"
              id="location"
              value={personalForm.location}
              onChange={(e) =>
                setPersonalForm({
                  ...personalForm,
                  location: e.target.value,
                })
              }
            />
          </div>

          <div className="d-flex justify-content-center my-5">
            <button className="btn btn-primary w-50" type="submit">
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExperience;
