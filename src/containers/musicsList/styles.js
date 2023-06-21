import styled from "styled-components";

export const ItemContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #001b374a 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 6px;
  height: 48px;
`;

export const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
`;

export const Image = styled.img`
  width: 48px;
  height: 100%;
  border-radius: 6px 0px 0px 6px;
`;

export const ContentText = styled.div`
  font-size: 11px;
  color: var(--white);
  padding: 10px;
`;
