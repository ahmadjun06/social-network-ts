import React from "react";
import { Icon } from "../UI/Icon/Icon";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Icon name="profile" height="20" />
          <p className="item__name">Моя страница</p>
          <span className="Badge">1</span>
        </li>
        <li className="navbar__item">
          <Icon name="news" height="20" />
          <p className="item__name">Новости</p>
          <span className="Badge">2</span>
        </li>
        <li className="navbar__item">
          <Icon name="chat" height="20" />
          <p className="item__name">Чаты</p>
          <span className="Badge">3</span>
        </li>
        <li className="navbar__item">
          <Icon name="friends" height="20" />
          <p className="item__name">Друзья</p>
          <span className="Badge">4</span>
        </li>
        <li className="navbar__item">
          <Icon name="group" height="20" />
          <p className="item__name">Группы</p>
          <span className="Badge">5</span>
        </li>
        <li className="navbar__item">
          <Icon name="photo" height="20" />
          <p className="item__name">Фотографии</p>
          <span className="Badge">6</span>
        </li>
        <li className="navbar__item">
          <Icon name="video" height="20" />
          <p className="item__name">Видео</p>
          <span className="Badge">7</span>
        </li>
        <li className="navbar__item">
          <Icon name="music" height="20" />
          <p className="item__name">Музыка</p>
          <span className="Badge">8</span>
        </li>
        <li className="navbar__item">
          <Icon name="mark" height="20" />
          <p className="item__name">Сохраненное</p>
          <span className="Badge">9</span>
        </li>
        <li className="navbar__item">
          <Icon name="other" height="20" />
          <p className="item__name">Другое</p>
          <span className="Badge">100</span>
        </li>
      </ul>
    </nav>
  );
};
