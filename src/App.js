import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ListEducations from "./pages/educationPages/ListEducations";
import AddEducation from "./pages/educationPages/AddEducation";
import EditEducation from "./pages/educationPages/EditEducation";
import ListExperiences from "./pages/experiencesPage/ListExperiences";
import AddExperience from "./pages/experiencesPage/AddExperience";
import EditExperience from "./pages/experiencesPage/EditExperience";
import ListProjects from "./pages/projectsPage/ListProjects";
import AddProject from "./pages/projectsPage/AddProject";
import EditProject from "./pages/projectsPage/EditProject";
import ListLanguages from "./pages/languagesPage/ListLanguages";
import AddLanguage from "./pages/languagesPage/AddLanguage";
import EditLanguage from "./pages/languagesPage/EditLanguage";
import ListSocial from "./pages/socialPage.jsx/ListSocial";
import AddSocial from "./pages/socialPage.jsx/AddSocial";
import EditSocial from "./pages/socialPage.jsx/EditSocial";
import EditPersonal from "./pages/personalInfoPage/EditPersonal";
import ListSkills from "./pages/skillsPage/ListSkills";
import AddSkill from "./pages/skillsPage/AddSkill";
import EditSkill from "./pages/skillsPage/EditSkill";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-personal" element={<EditPersonal />} />
        <Route path="/education-infos" element={<ListEducations />} />
        <Route path="/add-education" element={<AddEducation />} />
        <Route
          path="/edit-education/:educationId"
          element={<EditEducation />}
        />
        <Route path="/experience-infos" element={<ListExperiences />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route
          path="/edit-experience/:experienceId"
          element={<EditExperience />}
        />
        <Route path="/project-infos" element={<ListProjects />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/edit-project/:projectId" element={<EditProject />} />
        <Route path="/language-infos" element={<ListLanguages />} />
        <Route path="/add-language" element={<AddLanguage />} />
        <Route path="/edit-language/:languageId" element={<EditLanguage />} />
        <Route path="/social-infos" element={<ListSocial />} />
        <Route path="/add-social" element={<AddSocial />} />
        <Route path="/edit-social/:socialId" element={<EditSocial />} />
        <Route path="/skill-infos" element={<ListSkills />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/edit-skill/:skillId" element={<EditSkill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
