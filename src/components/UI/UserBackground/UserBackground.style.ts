import styled from "styled-components";

export const UserBackgroundStyle = styled.span`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background: rgb(44, 40, 113);
  background: linear-gradient(
    90deg,
    rgba(44, 40, 113, 1) 0%,
    rgba(171, 101, 128, 1) 37%,
    rgba(195, 223, 176, 1) 89%,
    rgba(203, 207, 150, 1) 99%
  );
  background-size: 200% 200%;
  animation: wallpaper-anim 2s ease infinite;
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
  top: -6px;
  left: 30px;
  background-color:grenn;
`;
