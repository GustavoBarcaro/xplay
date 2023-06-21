import React from "react";
import { DragIcon, PlayIcon, SkipIcon } from "../../assets";
import useIsMobile from "../../hooks/useIsMobile";
import {
  IconsContainers,
  MusicAuthor,
  MusicInfosContainer,
  MusicName,
  PlayDiv,
  PlayerContainer,
  PlayerImage,
  PlayerImageContainer,
  PlayerInfoContainer,
} from "./styles";

const mockedData = {
  music: "Faroeste Caboclo",
  artist: "Legião Urbana - Rock Brasília",
  image:
    "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2011/10/rock-brasc3adlia.jpg",
};

const Player = () => {
  const isMobile = useIsMobile();
  return (
    <PlayerContainer isMobile={isMobile}>
      <DragIcon />
      <PlayerInfoContainer>
        <PlayerImageContainer>
          <PlayerImage src={mockedData.image} alt={mockedData.music} />
        </PlayerImageContainer>
        <MusicInfosContainer>
          <MusicName>{mockedData.music}</MusicName>
          <MusicAuthor>{mockedData.artist}</MusicAuthor>
        </MusicInfosContainer>
        <IconsContainers>
          <PlayDiv>
            <PlayIcon />
          </PlayDiv>
          <PlayDiv>
            <SkipIcon />
          </PlayDiv>
        </IconsContainers>
      </PlayerInfoContainer>
    </PlayerContainer>
  );
};

export default Player;
