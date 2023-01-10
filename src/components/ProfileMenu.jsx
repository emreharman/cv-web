import React from "react";

import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}>
        <Link to={"/education-infos"} className="d-flex justify-content-between">
          <span >Eğitim Bilgileri</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
