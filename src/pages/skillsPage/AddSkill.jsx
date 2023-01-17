import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddSkill = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [skillForm, setSkillsForm] = useState({
    skill: "",
  });
  // console.log("skillForm", skillForm);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = {
      id: String(new Date().getTime()),
      ...skillForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          skills: [...userState.user.skills, newSkill],
        },
        () => navigate("/skill-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddSkill}>
          <div class="mb-3">
            <label for="skill" class="form-label">
              Yetenek
            </label>
            <input
              type="text"
              class="form-control"
              id="skill"
              value={skillForm.skill}
              onChange={(e) =>
                setSkillsForm({
                  ...skillForm,
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
export default AddSkill;
