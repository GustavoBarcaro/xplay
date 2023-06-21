import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const LinkItem = styled.li`
  list-style: none;
  opacity: ${(props) => props.isActive ? '1' : '0.6'};
`;

const NavLink = ({icon, ...rest}) => {
  const location = useLocation();
  return (
    <LinkItem isActive={location.pathname.split("/")[1] === rest.to.split("/")[1]}>
      <Link {...rest}>{icon}</Link>
    </LinkItem>
  );
};

export default NavLink;
