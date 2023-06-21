import styled from "styled-components";

export const ContentSectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${props => props.notGrid ? 1 : 2} , 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  width: 90%;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;