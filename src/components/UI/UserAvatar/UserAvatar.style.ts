import styled from "styled-components";

export const UserIntials = styled.span`
  width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.colors.elemsBgc};
  border-radius: 50%;
  background: #001fdb;
  position: absolute;
  top: -56px;
  left: 30px;
  text-align: centre;
  font-size: 48px;
  color: #fff;
  line-height: calc(3.2vw + 113px);
`;

export const FileInput = styled.input`
  width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.colors.elemsBgc};
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: -56px;
  left: 30px;
`;
