import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";

const EditSkill = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);

  const [skillsForm, setSkillsForm] = useState({});

  useEffect(() => {
    const skillsEdit = userState.user.skills.find(
      (item) => item.id === params.skillId
    );
    console.log("skillsEdit", skillsEdit);

    setSkillsForm({
      skill: skillsEdit.skill,
    });
  }, []);

  const handleAddLanguage = (e) => {
    e.preventDefault();

    const editSkills = {
      //   id: String(new Date().getTime()),
      id: params.skillId,
      ...skillsForm,
    };
    console.log("editSkills", editSkills);

    const skillFilter = userState.user.skills.filter(
      (item) => item.id !== editSkills.id
    );
    console.log("skillFilter", skillFilter);

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          skills: [...skillFilter, editSkills],
        },
        () => navigate("/skill-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddLanguage}>
          <div class="mb-3">
            <label for="skill" class="form-label">
              Dil
            </label>
            <input
              type="text"
              class="form-control"
              id="skill"
              value={skillsForm.skill}
              onChange={(e) =>
                setSkillsForm({
                  ...skillsForm,
                  skill: e.target.value,
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

export default EditSkill;
