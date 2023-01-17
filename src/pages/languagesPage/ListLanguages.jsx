import React, { useEffect } from "react";

import useIsAuth from "../../hooks/isAuth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUser } from "../../redux/actions/userActions";

import Header from "../../components/Header";

const ListExperiences = () => {
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);
  const navigate = useNavigate();

  const { data, result } = useIsAuth();
  if (!data && result) {
    navigate("/login");
  }
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleDelete = (id) => {
    const filteredLanguages = userState.user.languages.filter(
      (item) => item.id !== id
    );
    dispatch(
      updateUser("", { ...userState.user, languages: filteredLanguages })
    );
  };
  if (!userState.success) return null;
  return (
    <div>
      <Header />
      <div className="container d-flex flex-column justify-content-center my-5">
        <button
          onClick={() => navigate("/profile")}
          className="btn btn-sm btn-secondary w-25 mb-4"
        >
          Geri
        </button>
        {userState.user.languages.length === 0 ? (
          <p>Kayıtlı bir dil bilginiz yok</p>
        ) : (
          <div>
            {userState.user.languages.map((item) => (
              <div key={item.id}>
                <p>Dil: {item.language}</p>
                <p>Seviye: {item.level}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger me-5"
                >
                  Sil
                </button>
                <button
                  onClick={() => navigate(`/edit-language/${item.id}`)}
                  className="btn btn-primary"
                >
                  Düzenle
                </button>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <button
          onClick={() => navigate("/add-language")}
          className="btn btn-primary"
        >
          Dil Bilgisi Ekle
        </button>
      </div>
    </div>
  );
};

export default ListExperiences;
