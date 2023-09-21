import React from "react";
import { Icon } from "../UI/Icon/Icon";

export const Repost = () => {
  return (
    <div className="Post Repost _liked _marked">
      <div className="UserElem Repost__owner">
        <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
        <div className="user__description">
          <a href="#" className="main__text">
            Марк Крахмалев
          </a>
          <p className="secondary__text">20 марта 23:31</p>
        </div>
      </div>
      <div className="Repost__wrapper">
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              Александр Майков
            </a>
            <p className="secondary__text">Сегодня 9:37</p>
          </div>
        </div>
        <div className="media-container">
          <img
            className="media__item"
            src="./img/post/garnet-man.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/garnet.png"
            alt="Post Item"
          />
        </div>
      </div>
      <div className="PostControls">
        <div className="icon-wrapper like">
          <span className="count likes-count">-500</span>
          <Icon name="heart" color="red" />
        </div>
        <div className="icon-wrapper comment">
          <span className="count comments-count">500</span>
          <Icon name="comment" />
        </div>
        <div className="icon-wrapper repost">
          <Icon name="icon" />
        </div>
        <div className="icon-wrapper mark">
          <Icon name="mark" />
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
        <Icon name="icon" />
      </div>
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
    </div>
  );
};
