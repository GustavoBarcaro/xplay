import { styled, css } from "styled-components";

export const PlayerContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent
    linear-gradient(180deg, #ba4e8b 0%, #a64d9a 51%, #944db7 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000040;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.9;
  height: 96px;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  padding-bottom: 12px;
  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      bottom: 85px;
    `}
`;
export const PlayerImageContainer = styled.div`
  border: 1px solid #707070;
  border-radius: 8px;
  width: 72px;
  height: 72px;
`;

export const PlayerImage = styled.img`
  width: 72px;
  height: 72px;
`;

export const PlayerInfoContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
`;
export const MusicName = styled.div`
  color: var(--white);
  font-family: Inter, sans-serif;
  white-space: nowrap;
  font-weight: 500;
  font-size: 21px;
`;

export const MusicAuthor = styled.div`
  color: var(--white);
  font-family: Inter, sans-serif;
  white-space: nowrap;
  font-size: 17px;
  width: 100%;
  text-align: left;
`;
export const MusicInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;
export const PlayDiv = styled.div`
  cursor: pointer;
`;

export const IconsContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
