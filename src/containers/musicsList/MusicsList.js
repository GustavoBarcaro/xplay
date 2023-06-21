import React from "react";
import { ContentSectionGrid } from "../../components/common/CommonStyles";
import {
  ContentText,
  Image,
  ImageContainer,
  ItemContent,
} from "./styles";

const MusicsList = ({ data, notGrid }) => {
  return (
    <ContentSectionGrid notGrid={notGrid}>
      {data?.map((each) => (
        <ItemContent key={each.id}>
          <ImageContainer>
            <Image src={each.image} alt={each.music} />
          </ImageContainer>
          <ContentText>{each.music}</ContentText>
        </ItemContent>
      ))}
    </ContentSectionGrid>
  );
};

export default MusicsList;
