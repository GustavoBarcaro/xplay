import { Link, } from "react-router-dom";
import { styled, css } from "styled-components";

export const LinkItem = styled.li`
  list-style: none;
`;

 export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 16px;
  color: var(--white);
  font-size: 14px;
  ${(props) =>
    props.isActive &&
    css`
      background: #00000099 0% 0% no-repeat padding-box;
      border-radius: 18px;
    `}
`;

export const LinkList = styled.ul`
  height: 36px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  border-radius: 18px;
  background: #00000033 0% 0% no-repeat padding-box;
`;

export const LinksContainer = styled.section`
  display: flex;
  justify-content: center;
`;
