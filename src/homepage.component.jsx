import React from "react";
import Directory from "./components/directory-component/directory.component.jsx";
import { HomePageContainer } from "./homepage.styles.js";

const HomePage = () => (
  <HomePageContainer className="homepage">
    <Directory />
  </HomePageContainer>
);

export default HomePage;
