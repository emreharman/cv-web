
import React, { useState } from "react";

import { useSelector,useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";


const ProfileImage = () => {
  const { userState,loginState } = useSelector((state) => state);
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch=useDispatch()

  const emptyImg =
    "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg";

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedImg);
    dispatch(updateUser("profileImage",formData,()=>setSelectedImg(null)))
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <div style={{ width: "150px", height: "150px", position: "relative" }}>
        {selectedImg ? (
          <img
            style={{
              width: "150px",
              height: "150px",
              objectFit: "fill",
              borderRadius: "150px",
            }}
            src={URL.createObjectURL(selectedImg)}
          />
        ) : (
          <img
            style={{
              width: "150px",
              height: "150px",
              objectFit: "fill",
              borderRadius: "150px",
              border:"1px solid #aaa"
            }}
            src={
              userState.user.profileImage
                ? `${userState.user.profileImage}?${new Date().getTime()}`
                : emptyImg
            }
          />
        )}

        {!selectedImg ? (
          <label
            style={{ position: "absolute", bottom: 0, right: 0 }}
            htmlFor="uploadImg">
            <i class="fa-solid fa-plus"></i>
          </label>
        ) : (
          <div className="d-flex justify-content-center my-2">
            <button
              onClick={() => setSelectedImg(null)}
              className="btn btn-sm btn-outline-danger">
              Vazgeç
            </button>
            <button onClick={handleUpload} className="btn btn-sm btn-primary">
              Upload
            </button>
          </div>
        )}

        <input
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImg(event.target.files[0]);
          }}
          id="uploadImg"
          type="file"
          style={{ display: "none" }}
          accept=".png,.jpg,.jpeg"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
