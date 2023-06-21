import React from "react";
import {Routes, Route} from "react-router-dom"
import styled from "styled-components";
import { Xplay as Logo } from "../../assets";
import useIsMobile from "../../hooks/useIsMobile";
import { HomePage, LibraryPage, ProfilePage, SearchPage } from "../pages";

const LogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`


const Pages = () => {
  const isMobile = useIsMobile()

  const handleLogoRenderWhenIsMobile = () => {
    return isMobile && <LogoSection><Logo/></LogoSection>
  };

  return (
    <>
    {handleLogoRenderWhenIsMobile()}
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/library/:value?" element={<LibraryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/:value?" element={<HomePage />} />
    </Routes>
    </>
  );
};

export default Pages;
