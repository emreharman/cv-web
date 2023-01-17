import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";

const EditExperience = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);

  const [projectsForm, setProjectsForm] = useState({});

  useEffect(() => {
    const projectsEdit = userState.user.projects.find(
      (item) => item.id === params.projectId
    );
    console.log("projectsEdit", projectsEdit);

    setProjectsForm({
      title: projectsEdit.title,
      link: projectsEdit.link,
      date: projectsEdit.date,
      explanation: projectsEdit.explanation,
    });
  }, []);

  const handleAddProject = (e) => {
    e.preventDefault();

    const editProjects = {
      //   id: String(new Date().getTime()),
      id: params.projectId,
      ...projectsForm,
    };
    console.log("editProjects", editProjects);

    const projectFilter = userState.user.projects.filter(
      (item) => item.id !== editProjects.id
    );
    console.log("projectFilter", projectFilter);

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          projects: [...projectFilter, editProjects],
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
            {/* {projectsForm?.explanation === "" ? (
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
            )} */}
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

export default EditExperience;
