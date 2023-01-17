import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddExperience = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [projectsForm, setProjectsForm] = useState({
    title: "",
    link: "",
    date: new Date(),
    explanation: "",
  });
  // console.log("experienceForm", experienceForm);

  const handleAddProject = (e) => {
    e.preventDefault();
    const newProject = {
      id: String(new Date().getTime()),
      ...projectsForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          projects: [...userState.user.projects, newProject],
        },
        () => navigate("/project-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddProject}>
          <div class="mb-3">
            <label for="title" class="form-label">
              Başlık
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={projectsForm.title}
              onChange={(e) =>
                setProjectsForm({
                  ...projectsForm,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="link" class="form-label">
              Link
            </label>
            <input
              type="text"
              class="form-control"
              id="link"
              value={projectsForm.link}
              onChange={(e) =>
                setProjectsForm({
                  ...projectsForm,
                  link: e.target.value,
                })
              }
            />
          </div>

          <div class="mb-3">
            <label for="date" class="form-label">
              Tarih
            </label>
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="Ör. Ocak 2023"
              value={projectsForm.date}
              onChange={(e) =>
                setProjectsForm({
                  ...projectsForm,
                  date: e.target.value,
                })
              }
            />
          </div>

          <div class="mb-3">
            <label for="explanation" class="form-label">
              Açıklamalar
            </label>
            <input
              type="text"
              class="form-control"
              id="explanation"
              value={projectsForm.explanation}
              onChange={(e) =>
                setProjectsForm({
                  ...projectsForm,
                  explanation: e.target.value,
                })
              }
            />
          </div>
          {projectsForm?.explanation === "" ? (
            <p className="text-center my-3">Buraya açıklamalar gelecek</p>
          ) : (
            <div>
              {projectsForm?.map((project) => (
                <div>
                  <p>{project.explanation}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}

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
export default AddExperience;
