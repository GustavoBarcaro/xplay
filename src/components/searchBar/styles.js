import styled from "styled-components";

export const Input = styled.input`
  height: 36px;
  font-size: 14px;
  width: 317px;
  border-radius: 50px;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 55px;
  color: #fff;
  cursor: pointer;
  background: #00000033 0% 0% no-repeat padding-box;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`;

 export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 15px;
    top: 50%;
    opacity: 0.6;
    transform: translateY(-50%);
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
  }
`;
