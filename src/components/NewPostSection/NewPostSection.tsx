import React, { useState } from "react";
import { useAddNewPostMutation } from "../../store/api/postApi";
import { Icon } from "../UI/Icon/Icon";

interface NewPostSectionProps {
  onNewPostAdded: () => void;
}

export const NewPostSection = ({ onNewPostAdded }: NewPostSectionProps) => {
  const [newPostText, setNewPostText] = useState<string>("");
  const [isAddPostDisabled, setIsAddPostDisabled] = useState<boolean>(false);
  const [addNewPost] = useAddNewPostMutation();

  const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setIsAddPostDisabled(true);
      await addNewPost({
        user_id: 1,
        main_text: newPostText,
      });
      onNewPostAdded();
      setNewPostText("");
      setIsAddPostDisabled(false);
    }
  };

  return (
    <div className="WhatsNew">
      <img src="./img/users/arina-volkova.jpeg" alt="User" />
      <input
        type="text"
        name="whats-new"
        id="whats-new"
        placeholder="Что у вас нового?"
        onKeyUp={handleKeyUp}
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
        disabled={isAddPostDisabled}
      />
      <div className="icons-wrapper">
        <Icon name="camera" padding="10" borderRadius="10" />
        <Icon name="play-history" padding="10" borderRadius="10" />
        <Icon name="music" padding="10" borderRadius="10" />
      </div>
    </div>
  );
};
