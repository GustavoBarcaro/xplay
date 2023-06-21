import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import {
  HorizontalContainer,
  Image,
  ImageContainer,
  Title,
  VerticalContainer,
} from "./styles";

const Playlist = ({ madeForYou }) => {
  const isMobile = useIsMobile();
  return (
    <HorizontalContainer isMobile={isMobile}>
      {madeForYou?.map((each) => (
        <VerticalContainer key={each.id}>
          <ImageContainer>
            <Image src={each.image} alt={each.title} />
          </ImageContainer>
          <Title>{each.title}</Title>
        </VerticalContainer>
      ))}
    </HorizontalContainer>
  );
};

export default Playlist;
