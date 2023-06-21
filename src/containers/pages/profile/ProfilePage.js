import React from "react";
import styled from "styled-components";
import { MainContent } from "../../../components/common/CommonStyles";
import PageTitle from "../../../components/PageTitle";

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const List = styled.ul`
  padding: 0;
  width: 80%;
  background: #001b374a 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 6px;
`;

const Switch = styled.input`
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;
  outline: none;
  width: 50px;
  height: 30px;
  background-color: #fff;
  margin-right: 15px;
  border: 1px solid #d9dadc;
  border-radius: 50px;
  box-shadow: inset -20px 0 0 0 #fff;
  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    background: transparent;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:checked {
    box-shadow: inset 20px 0 0 0 #4ed164;
    border-color: #4ed164;
  }
  &:checked:after {
    left: 20px;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
  }
`;

const Text = styled.p`
  margin-left: 15px;
  color: var(--white);
  font-size: 14px;
`

const ProfilePage = () => {
  return (
    <MainContent>
      <PageTitle>Configurações</PageTitle>
      <List>
        <Item>
          <Text>Auto play</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
        <Item>
          <Text>Mix Audio Types</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
        <Item>
          <Text>Enable Week Discovery</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
        <Item>
          <Text>Enable Auto DJ</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
        <Item>
          <Text>Enable 3D Audio</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
        <Item>
          <Text>Enable Auto Sync</Text>
          <Switch className="apple-switch" type="checkbox" />
        </Item>
      </List>
    </MainContent>
  );
};

export default ProfilePage;
