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

  const [socialsForm, setSocialsForm] = useState({});

  useEffect(() => {
    const socialsEdit = userState.user.socials.find(
      (item) => item.id === params.socialId
    );
    console.log("socialsEdit", socialsEdit);

    setSocialsForm({
      title: socialsEdit.title,
      link: socialsEdit.link,
      icon: socialsEdit.icon,
    });
  }, []);

  const handleAddSocial = (e) => {
    e.preventDefault();

    const editSocials = {
      //   id: String(new Date().getTime()),
      id: params.socialId,
      ...socialsForm,
    };
    console.log("editSocials", editSocials);

    const socialFilter = userState.user.socials.filter(
      (item) => item.id !== editSocials.id
    );
    console.log("socialFilter", socialFilter);

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          socials: [...socialFilter, editSocials],
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

          <div class="mb-3">
            <label for="icon" class="form-label">
              İcon
            </label>
            <input
              type="text"
              class="form-control"
              id="icon"
              value={socialsForm.icon}
              onChange={(e) =>
                setSocialsForm({
                  ...socialsForm,
                  icon: e.target.value,
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

export default EditExperience;
