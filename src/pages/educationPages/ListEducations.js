import React,{useEffect} from "react";

import useIsAuth from "../../hooks/isAuth";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updateUser,getUser } from "../../redux/actions/userActions";

import Header from "../../components/Header";

const ListEducations = () => {
    const dispatch=useDispatch()
  const { userState } = useSelector((state) => state);
  console.log(userState);
  const navigate = useNavigate();

  const { data, result } = useIsAuth();
  if (!data && result) {
    navigate("/login");
  }
  useEffect(()=>{
    dispatch(getUser())
  },[])

  const handleDelete=(id)=>{
    const filteredEducations=userState.user.educations.filter(item => item.id !== id)
    dispatch(updateUser("",{...userState.user,educations:filteredEducations}))
  }
  if(!userState.success) return null
  return (
    <div>
      <Header />
      <button onClick={() => navigate("/profile")}>Geri</button>
      {userState.user.educations.length === 0 ? (
        <p>Kayıtlı bir eğitim bilginiz yok</p>
      ) : (
        <div>
          {userState.user.educations.map((education) => (
            <div key={education.id}>
              <p>Okul Adı: {education.schoolName}</p>
              <p>
                Yer: {education.city}/{education.country}
              </p>
              <button
                onClick={() => handleDelete(education.id)}
                className="btn btn-danger">
                Sil
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-center">
        <button
          onClick={() => navigate("/add-education")}
          className="btn btn-primary">
          Eğitim Bilgisi Ekle
        </button>
      </div>
    </div>
  );
};

export default ListEducations;
