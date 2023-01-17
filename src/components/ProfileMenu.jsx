import React from "react";

import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link to={"/edit-personal"} className="d-flex justify-content-between">
          <span>Kişisel Bilgiler</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link
          to={"/education-infos"}
          className="d-flex justify-content-between"
        >
          <span>Eğitim Bilgileri</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link
          to={"/experience-infos"}
          className="d-flex justify-content-between"
        >
          <span>İş Deneyimleri</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link to={"/project-infos"} className="d-flex justify-content-between">
          <span>Projeler</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link to={"/skill-infos"} className="d-flex justify-content-between">
          <span>Yetenekler</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link to={"/language-infos"} className="d-flex justify-content-between">
          <span>Dil Bilgileri</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        }}
        className="mt-4"
      >
        <Link to={"/social-infos"} className="d-flex justify-content-between">
          <span>Sosyal Hesaplar</span>
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
