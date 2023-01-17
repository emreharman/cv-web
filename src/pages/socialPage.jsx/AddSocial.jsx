import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddExperience = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [socialsForm, setSocialsForm] = useState({
    title: "",
    link: "",
    icon: "",
  });
  // console.log("experienceForm", experienceForm);

  const handleAddSocial = (e) => {
    e.preventDefault();
    const newSocial = {
      id: String(new Date().getTime()),
      ...socialsForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          socials: [...userState.user.socials, newSocial],
        },
        () => navigate("/social-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddSocial}>
          <div class="mb-3">
            <label for="title" class="form-label">
              Başlık
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={socialsForm.title}
              onChange={(e) =>
                setSocialsForm({
                  ...socialsForm,
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
              value={socialsForm.link}
              onChange={(e) =>
                setSocialsForm({
                  ...socialsForm,
                  link: e.target.value,
                })
              }
            />
          </div>

          <label for="icon" class="form-label">
            İcon
          </label>
          <div className="d-flex flex-column justify-content-center align-items-center border rounded-2">
            <div className="d-flex my-4 ">
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-square-github fa-2x m-auto"></i>
                <span>GitHub</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-square-facebook fa-2x m-auto "></i>
                <span>Facebook</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-bitbucket fa-2x m-auto"></i>
                <span>BitBucket</span>
              </div>

              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-square-instagram fa-2x m-auto"></i>
                <span>Instagram</span>
              </div>
            </div>
            <div className="d-flex my-4">
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-linkedin fa-2x m-auto"></i>
                <span>Linkedin</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-pinterest fa-2x m-auto"></i>
                <span>Pinterest</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-stack-overflow fa-2x m-auto"></i>
                <span>StackOverFlow</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-square-tumblr fa-2x m-auto"></i>
                <span>Tumbrl</span>
              </div>
            </div>
            <div className="d-flex my-4">
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-twitch fa-2x m-auto"></i>
                <span>Twitch</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-square-twitter fa-2x m-auto"></i>
                <span>Twitter</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-youtube fa-2x m-auto"></i>
                <span>Youtube</span>
              </div>
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-brands fa-codepen fa-2x m-auto"></i>
                <span>CodePen</span>
              </div>
            </div>
            <div className="d-flex my-4">
              <div
                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                className="d-flex flex-column align-items-center justify-content-center rounded-2 me-3 shadow"
              >
                <i class="fa-solid fa-globe fa-2x m-auto"></i>
                <span>WebSite</span>
              </div>
            </div>
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
export default AddExperience;
