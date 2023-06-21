import React from "react";
import { HomeIcon, MusicBoxIcon, ProfileIcon, SearchIcon, Xplay as Logo } from "../../assets";
import useIsMobile from "../../hooks/useIsMobile";
import { styled,css } from "styled-components";
import NavLink from "../../components/NavLink";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #013163 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000033;
  ${(props) => props.isMobile ? css`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  ` : css`
    position: relative;
  `};
`;

const NavigationContainer = styled.section`
  width: ${(props) => props.isMobile ? "100%" : "80%"};
  display: flex;
  justify-content: ${(props) => props.isMobile ? "center" : "space-between"};
  align-items: center;
`

const NavigationList = styled.ul`
  display: flex;
  gap: 50px;
  padding: 0;
`
const NavBar = () => {
  const isMobile = useIsMobile();

  const handleIconRenderWhenIsNotMobile = () => {
    return !isMobile && (
      <NavLink to="/" icon={<Logo />}/>
    )
  }

  return (
    <StyledNavigation isMobile={isMobile}>
      <NavigationContainer isMobile={isMobile}>
        {handleIconRenderWhenIsNotMobile()}
        <NavigationList>
          <NavLink to="/" icon={<HomeIcon />}/>
          <NavLink to="/search" icon={<SearchIcon />}/>
          <NavLink to="/library" icon={<MusicBoxIcon />}/>
          <NavLink to="/profile" icon={<ProfileIcon />}/>
        </NavigationList>
      </NavigationContainer>
    </StyledNavigation>
  );
};

export default NavBar;
