import React from "react";
import styled from "styled-components";
import { Button } from "../../Button/Button";

export const PostMenuBox = styled.div`
  position: absolute;
  top: calc(1vw + 46px);
  right: calc(1vw+ 11px);
  padding: 12px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 4px;
`;
interface PostMenuProps {
    onUploadClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PostMenu = ({onUploadClick}:PostMenuProps) => {
  return (
    <PostMenuBox>
        <input type="file" onChange={onUploadClick}/>
    </PostMenuBox>
  );
};
