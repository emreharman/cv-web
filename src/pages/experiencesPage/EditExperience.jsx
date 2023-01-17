import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { getUser, updateUser } from "../../redux/actions/userActions";
import formatDateForInput from "../../utils/formatDateForInput";

const EditExperience = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);

  const [experienceForm, setExperienceForm] = useState(null);
  const [localDescription, setLocalDescription] = useState("");

  useEffect(() => {
    dispatch(getUser())
    
  }, []);
  useEffect(()=>{
    if(userState.success){
      const experienceEdit = userState.user.experiences.find(
        (item) => item.id === params.experienceId
      );
      console.log("experienceEdit", new Date(experienceEdit.startDate).toLocaleDateString());
  
      setExperienceForm({
        jobTitle: experienceEdit.jobTitle,
        companyName: experienceEdit.companyName,
        average: experienceEdit.average,
        city: experienceEdit.city,
        country: experienceEdit.country,
        startDate: formatDateForInput(experienceEdit.startDate),
        present: experienceEdit.present,
        finishDate: formatDateForInput(experienceEdit.finishDate),
        descriptions: experienceEdit.descriptions,
      });
    }
    
  },[userState.success])
  if (!userState.success) return null;

  const handleAddExperience = (e) => {
    e.preventDefault();

    const editExperience = {
      //   id: String(new Date().getTime()),
      id: params.experienceId,
      ...experienceForm,
    };
    console.log("editExperience", editExperience);

    const experienceFilter = userState.user.experiences.filter(
      (item) => item.id !== editExperience.id
    );
    console.log("educationFilter", experienceFilter);

    dispatch(
      updateUser(
        "",
        {
          ...userState.user,
          experiences: [...experienceFilter, editExperience],
        },
        () => navigate("/experience-infos")
      )
    );
  };

  if(!experienceForm) return null
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
            <label for="companyName" class="form-label">
              Bölüm
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
            <label for="startDate" class="form-label">
              Başlangıç Tarihi
            </label>
            <input
              type="date"
              class="form-control"
              id="startDate"
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
                Bitiş Tarihi
              </label>
              <input
                type="date"
                class="form-control"
                id="releaseDate"
                value={experienceForm.finishDate}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    releaseDate: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div class="form-check d-flex justify-content-end">
            {console.log(experienceForm.present)}
            <input
              class="form-check-input me-1"
              type="checkbox"
              defaultChecked={experienceForm.present}
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
                    {
                      id: String(new Date().getTime()),
                      text: localDescription,
                    },
                  ],
                });
                setLocalDescription("");
              }}
              style={{ position: "absolute", top: "50%", right: 0 }}>
              ekle
            </button>
          </div>
          <div>
            {experienceForm.descriptions.length > 0 && (
              <>
                {experienceForm.descriptions.map((description) => (
                  <div key={description.id}>
                    <p>{description.text}</p>
                    <button
                      onClick={() => {
                        const filtered = experienceForm.descriptions.filter(
                          (item) => item.id !== description.id
                        );
                        setExperienceForm({
                          ...experienceForm,
                          descriptions: filtered,
                        });
                      }}>
                      sil
                    </button>
                  </div>
                ))}
              </>
            )}
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
