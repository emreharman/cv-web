import React, { useState } from "react";

import Header from "../../components/Header";
import { updateUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddExperience = () => {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [experienceForm, setExperienceForm] = useState({
    jobTitle: "",
    companyName: "",
    city: "",
    country: "",
    startDate: new Date(),
    present: false,
    finishDate: new Date(),
    descriptions: [],
  });
  const [localDescription, setLocalDescription] = useState("");
  // console.log("experienceForm", experienceForm);

  const formExperiences = experienceForm;

  const handleAddExperience = (e) => {
    e.preventDefault();
    const newExperience = {
      id: String(new Date().getTime()),
      ...experienceForm,
    };
    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          experiences: [...userState.user.experiences, newExperience],
        },
        () => navigate("/experience-infos")
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <form className="w-50" onSubmit={handleAddExperience}>
          <div class="mb-3">
            <label for="appellation" class="form-label">
              Ünvan
            </label>
            <input
              type="text"
              class="form-control"
              id="appellation"
              value={experienceForm.jobTitle}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  jobTitle: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="degree" class="form-label">
              Şirket Adı
            </label>
            <input
              type="text"
              class="form-control"
              id="companyName"
              value={experienceForm.companyName}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  companyName: e.target.value,
                })
              }
            />
          </div>

          <div class="mb-3">
            <label for="city" class="form-label">
              Şehir
            </label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={experienceForm.city}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">
              Ülke
            </label>
            <input
              type="text"
              class="form-control"
              id="country"
              value={experienceForm.country}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  country: e.target.value,
                })
              }
            />
          </div>

          <div class="mb-3">
            <label for="country" class="form-label">
              Başlangıç Tarihi
            </label>
            <input
              type="date"
              class="form-control"
              id="country"
              value={experienceForm.startDate}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  startDate: e.target.value,
                })
              }
            />
          </div>
          {!experienceForm.present && (
            <div class="mb-3">
              <label for="releaseDate" class="form-label">
                Çıkış Tarihi
              </label>
              <input
                type="date"
                class="form-control"
                id="releaseDate"
                value={experienceForm.finishDate}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    finishDate: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div class="form-check d-flex justify-content-end">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value={experienceForm.present}
              id="present"
              onChange={() =>
                setExperienceForm({
                  ...experienceForm,
                  present: !experienceForm.present,
                })
              }
            />
            <label class="form-check-label" for="present">
              Devam Ediyor
            </label>
          </div>

          <div class="mb-3" style={{ position: "relative" }}>
            <label for="responsibilities" class="form-label">
              Sorumluluklar
            </label>
            <input
              type="text"
              class="form-control"
              id="responsibilities"
              value={localDescription}
              onChange={(e) => setLocalDescription(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                if (!localDescription) {
                  alert("Boş kayıt yapılamaz");
                  return;
                }
                setExperienceForm({
                  ...experienceForm,
                  descriptions: [
                    ...experienceForm.descriptions,
                    {id:String(new Date().getTime()),text:localDescription},
                  ],
                });
                setLocalDescription("")
              }}
              style={{ position: "absolute", top: "50%", right: 0 }}>
              ekle
            </button>
          </div>
          <div>
            {
              experienceForm.descriptions.length > 0 && (
                <>
                  {
                    experienceForm.descriptions.map(description=>(
                      <div key={description.id}>
                        <p>{description.text}</p>
                        <button onClick={()=>{
                          const filtered=experienceForm.descriptions.filter(item => item.id !== description.id)
                          setExperienceForm({
                            ...experienceForm,
                            descriptions:filtered
                          })
                        }}>sil</button>
                      </div>
                    ))
                  }
                </>
              )
            }
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
