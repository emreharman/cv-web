import React, { useEffect } from "react";

import useIsAuth from "../../hooks/isAuth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUser } from "../../redux/actions/userActions";

import Header from "../../components/Header";

const ListSkills = () => {
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
    const filteredSkills = userState.user.skills.filter(
      (item) => item.id !== id
    );
    dispatch(updateUser("", { ...userState.user, skills: filteredSkills }));
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
        {userState.user.skills.length === 0 ? (
          <p>Kayıtlı bir yeteneğiniz yok</p>
        ) : (
          <div>
            {userState.user.skills.map((item) => (
              <div key={item.id}>
                <p>Başlık: {item.skill}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger me-5"
                >
                  Sil
                </button>
                <button
                  onClick={() => navigate(`/edit-skill/${item.id}`)}
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
          onClick={() => navigate("/add-skill")}
          className="btn btn-primary"
        >
          Yetenek Ekle
        </button>
      </div>
    </div>
  );
};

export default ListSkills;
