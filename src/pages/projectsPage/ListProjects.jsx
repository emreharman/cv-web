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
    const filteredProjects = userState.user.projects.filter(
      (item) => item.id !== id
    );
    dispatch(updateUser("", { ...userState.user, projects: filteredProjects }));
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
        {userState.user.projects.length === 0 ? (
          <p>Kayıtlı bir projeniz yok</p>
        ) : (
          <div>
            {userState.user.projects.map((project) => (
              <div key={project.id}>
                <p>Başlık: {project.title}</p>
                <p>Link: {project.link}</p>
                <p>Tarih: {project.date}</p>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="btn btn-danger me-5"
                >
                  Sil
                </button>
                <button
                  onClick={() => navigate(`/edit-project/${project.id}`)}
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
          onClick={() => navigate("/add-project")}
          className="btn btn-primary"
        >
          Proje Ekle
        </button>
      </div>
    </div>
  );
};

export default ListExperiences;
