import React, { useEffect } from "react";

import useIsAuth from "../../hooks/isAuth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUser } from "../../redux/actions/userActions";

import Header from "../../components/Header";

const ListSocial = () => {
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
    const filteredSocials = userState.user.socials.filter(
      (item) => item.id !== id
    );
    dispatch(updateUser("", { ...userState.user, socials: filteredSocials }));
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
        {userState.user.socials.length === 0 ? (
          <p>Kayıtlı bir sosyal hesabınız yok</p>
        ) : (
          <div>
            {userState.user.socials.map((social) => (
              <div key={social.id}>
                <p>Başlık: {social.title}</p>
                <p>Link: {social.link}</p>
                <p>İcon: {social.icon}</p>
                <button
                  onClick={() => handleDelete(social.id)}
                  className="btn btn-danger me-5"
                >
                  Sil
                </button>
                <button
                  onClick={() => navigate(`/edit-social/${social.id}`)}
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
          onClick={() => navigate("/add-social")}
          className="btn btn-primary"
        >
          Sosyal Hesap Ekle
        </button>
      </div>
    </div>
  );
};

export default ListSocial;
