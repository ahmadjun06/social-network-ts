import React,{useState} from "react";
import { UserBackgroundStyle,FileInput } from "./UserBackground.style";

interface UserBackgroundProps {
  backgroundUrl: string;
  onBackgroundClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserBackground = ({
  backgroundUrl,
  onBackgroundClick,
}: UserBackgroundProps) => {
    const [background] = useState<string>("");
  return (
    <div className="profile-background">
      {backgroundUrl ? (
        <img src={backgroundUrl} alt="" />
      ) : (
        <UserBackgroundStyle>{background}</UserBackgroundStyle>
      )}
      <FileInput type="file" onChange={onBackgroundClick} />
    </div>
  );
};
