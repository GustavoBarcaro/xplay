import {styled, css} from "styled-components";

export const ImageContainer = styled.div`
  width: 142px;
  height: 142px;
`
export const Image = styled.img`
  height: 100%;
`
export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;
`

export const HorizontalContainer = styled.section`
  width: 100%;
  display: flex;
  ${(props) => props.isMobile && css`overflow-x: scroll;`}
 
`

export const Title = styled.p`
  height: 63px;
  font-size: 16px;
  color: var(--white);
`
