import React from "react";
import FilterLinks from "./FilterLinks";
import { LinkList, LinksContainer } from "./styles";

const Filter = ({page}) => {
  return (
    <LinksContainer>
      <LinkList>
        <FilterLinks filter="musics" url={`${page}/musics`}>Músicas</FilterLinks>
        <FilterLinks filter="albuns" url={`${page}/albuns`}>Álbuns</FilterLinks>
        <FilterLinks filter="podcasts" url={`${page}/podcasts`}>Podcasts</FilterLinks>
        <FilterLinks filter="artists" url={`${page}/artists`}>Artistas</FilterLinks>
      </LinkList>
    </LinksContainer>
  );
};

export default Filter;
