import React, { useState } from "react";
import { format } from "date-fns";
import { PostMenu } from "./PostMenu";
import { useUploadFileMutation } from "../../../store/api/fileApi";
import { Icon } from "../Icon/Icon";

interface PostProps {
  userName: string;
  postData: string;
  photos: Array<string>;
  postText: string;
  postId: string;
}

export const Post = ({
  userName,
  postData,
  photos,
  postText,
  postId,
}: PostProps) => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const [uploadFile] = useUploadFileMutation();
  const onPostFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();
      const file = event.target.files[0];

      formData.append("post_id", postId);
      formData.append("photo_file", file);

      // uploadFile(formData)
    }
  };

  const formattedData = format(new Date(postData), "eee MM/dd/yyyy hh:mm");

  return (
    <div className="Post _liked _marked">
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <span className="main__text">{userName}</span>
          <p className="secondary__text">{formattedData}</p>
        </div>
      </div>
      <p className="Post__text">{postText}</p>

      {photos.length && (
        <div className="media-container">
          {photos.map((photo) => (
            <img className="media__item" src={photo} alt="Post Item" />
          ))}
        </div>
      )}
      <div className="PostControls">
        <div className="icon-wrapper like">
          <span className="count likes-count">-500</span>
          <Icon name="icon" />
        </div>
        <div className="icon-wrapper comment">
          <span className="count comments-count">500</span>
          <Icon name="comment" />
        </div>
        <div className="icon-wrapper repost">
          <Icon name="icon"/>
        </div>
        <div className="icon-wrapper mark">
          <Icon name="mark"/>
        </div>
      </div>
      <div className="CommentBlock">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="comment__description">
          <a href="#" className="comment__owner">
            Карина Савина
          </a>
          <p className="comment__text">Это текст комментария...</p>
          <a href="#" className="reply">
            Ответить
          </a>
        </div>
        <span className="date">25 марта</span>
          <Icon name="icon" height="20" />
      </div>
      <span onClick={() => toggleMenu(!isMenuOpen)}>
        <svg
          className="icon icon-more"
          viewBox="0 0 25 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="more">
            <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
            <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
            <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
          </g>
        </svg>
      </span>
      {isMenuOpen && <PostMenu onUploadClick={onPostFileUpload} />}
    </div>
  );
};
