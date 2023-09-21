import React, { useState, useEffect } from "react";
import { FileInput, UserIntials } from "./UserAvatar.style";

interface UserAvatarProps {
  avatarUrl: string;
  onAvatarClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userName?: string;
}

export const UserAvatar = ({
  avatarUrl,
  onAvatarClick,
  userName,
}: UserAvatarProps) => {
  const [intials, setUserIntials] = useState<string>("");

  useEffect(() => {
    if (!avatarUrl && userName) {
      let intialsArr = userName.split(" ");
      let intials = `${intialsArr[0][0]} ${intialsArr[1][0]}`;
      setUserIntials(intials);
    }
  }, [avatarUrl, userName]);

  return (
    <>
      {avatarUrl ? (
        <img src={avatarUrl} alt="" />
      ) : (
        <UserIntials>{intials}</UserIntials>
      )}
      <FileInput type="file" onChange={onAvatarClick} />
    </>
  );
};
