import React from "react";
import { useParams } from "react-router-dom";
import { LinkItem, StyledLink } from "./styles";


const FilterLinks = ({ filter, children , url }) => {
  const { value = "musics" } = useParams();
  return (
    <LinkItem>
      <StyledLink to={url} isActive={value === filter}>
        {children}
      </StyledLink>
    </LinkItem>
  );
};

export default FilterLinks;
