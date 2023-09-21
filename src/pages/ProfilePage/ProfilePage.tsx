import React from "react";
import "./ProfilePage.scss";
import { Container } from "../../components/Container/Container";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { Icon } from "../../components/UI/Icon/Icon";

export const ProfilePage = () => {
  return (
    <Container>
      <div className="ProfilePage">
        <aside className="LeftSide">
          <nav className="Navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <Icon name="profile" />
                <p className="item__name">Моя страница</p>
                <span className="Badge">1</span>
              </li>
              <li className="navbar__item">
                <Icon name="news" />
                <p className="item__name">Новости</p>
                <span className="Badge">2</span>
              </li>
              <li className="navbar__item">
                <Icon name="chat" />

                <p className="item__name">Чаты</p>
                <span className="Badge">3</span>
              </li>
              <li className="navbar__item">
                <Icon name="friends" />
                <p className="item__name">Друзья</p>
                <span className="Badge">4</span>
              </li>
              <li className="navbar__item">
                <Icon name="friends" />
                <p className="item__name">Группы</p>
                <span className="Badge">5</span>
              </li>
              <li className="navbar__item">
                <Icon name="photo" />
                <p className="item__name">Фотографии</p>
                <span className="Badge">6</span>
              </li>
              <li className="navbar__item">
                <Icon name="video" />
                <p className="item__name">Видео</p>
                <span className="Badge">7</span>
              </li>
              <li className="navbar__item">
                <Icon name="video" />
                <p className="item__name">Музыка</p>
                <span className="Badge">8</span>
              </li>
              <li className="navbar__item">
                <Icon name="mark" />
                <p className="item__name">Сохраненное</p>
                <span className="Badge">9</span>
              </li>
              <li className="navbar__item">
                <Icon name="other" />

                <p className="item__name">Другое</p>
                <span className="Badge">100</span>
              </li>
            </ul>
          </nav>
          <div className="List">
            <div className="List__title">
              <h2>Подписки</h2>
              <span className="count">123</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-1.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">N E W</p>
                <p className="secondary__text">Развитие</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-2.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Aesthetics</p>
                <p className="secondary__text">Стиль</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-3.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">дом твоей эстетики</p>
                <p className="secondary__text">Творчество</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-4.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">wailet</p>
                <p className="secondary__text">Искусство</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-5.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">A W E S O M E</p>
                <p className="secondary__text">Стиль</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-6.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">minimalism</p>
                <p className="secondary__text">Фотография</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-7.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Словарный запасE</p>
                <p className="secondary__text">Литература</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-8.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Look</p>
                <p className="secondary__text">Мода</p>
              </div>
              <span className="Badge">3</span>
            </div>
          </div>
        </aside>
        <ProfileHeader />
        <main className="Main">
          <div className="WhatsNew">
            <img src="./img/users/arina-volkova.jpeg" alt="User" />
            <input
              type="text"
              name="whats-new"
              id="whats-new"
              placeholder="Что у вас нового?"
            />
            <div className="icons-wrapper">
              <Icon name="camera" />
              <Icon name="play-history" />
              <Icon name="music" />
            </div>
          </div>
          <div className="UserPosts">
            <div className="UserPosts__controls">
              <div className="tabs">
                <div className="tab _no-select photos _active">
                  <Icon name="photo" />

                  <span>Фото</span>
                </div>
                <div className="tab _no-select videos">
                  <Icon name="video" />
                  <span>Видео</span>
                </div>
              </div>
              <div className="upload-media _no-select">
                <svg
                  className="icon icon-upload"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <g>
                    <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
                  </g>
                </svg>
                <span>Загрузить фото</span>
              </div>
            </div>
            <div className="media-container">
              <img
                className="media__item"
                src="./img/users/arina-volkova.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-2.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-3.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-4.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-5.jpeg"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/user-photo-6.jpeg"
                alt="Post Item"
              />
            </div>
            <div className="show-all _no-select">
              <span>Показать все</span>
              <Icon name="arrow" />
            </div>
          </div>
          <div className="Post _liked _marked">
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Александр Майков
                </a>
                <p className="secondary__text">Сегодня 9:37</p>
              </div>
            </div>
            <p className="Post__text">Момент умиротворения и спокойствия</p>
            <div className="media-container">
              <img
                className="media__item"
                src="./img/post/nature-1.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-2.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-3.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-4.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-5.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-6.png"
                alt="Post Item"
              />
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
                <Icon name="repost" />
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
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
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
                <Icon name="repost" />
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
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
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
        </main>
        <aside className="RightSide">
          <div className="bio">
            <div className="bio__data">
              <div className="data__item">
                <Icon name="birthday" color="red" />
                <p className="main__text">
                  День рождения: <span>9 августа</span>
                </p>
              </div>
              <div className="data__item">
              <Icon name="location" color="red" />
                <p className="main__text">
                  Город: <span>Ташкент</span>
                </p>
              </div>
              <div className="data__item">
                <Icon name="heart" color="red" />
                <p className="main__text">
                  Статус: <span>Не указано</span>
                </p>
              </div>
            </div>
            <div className="bio__info">
              <p className="main__text education">Образование</p>
              <p className="secondary__text education">
                Филиал университета нефти и газа им. Губкина в Ташкенте
              </p>
              <p className="main__text activity">Деятельность</p>
              <p className="secondary__text activity">Фотограф</p>
              <p className="main__text hobby">Хобби</p>
              <p className="secondary__text hobby">Танцы</p>
            </div>
            <div className="bio__buttons">
              <button className="primary">Подробнее</button>
              <button className="secondary">Редактировать </button>
            </div>
          </div>
          <div className="FriendsBlock">
            <div className="Friends__title">
              <h2>Друзья</h2>
              <span className="count">130</span>
            </div>
            <div className="Friends__wrapper">
              <div className="friend">
                <img src="./img/users/aleksandr-maykov.jpeg" alt="Friend" />
                <span className="friend__name">Александр</span>
              </div>
              <div className="friend">
                <img src="./img/users/sofia-kodra.jpeg" alt="Friend" />
                <span className="friend__name">Софья</span>
              </div>
              <div className="friend">
                <img src="./img/users/andrey-kashirskiy.jpeg" alt="Friend" />
                <span className="friend__name">Андрей</span>
              </div>
              <div className="friend">
                <img src="./img/users/darya-gertner.jpeg" alt="Friend" />
                <span className="friend__name">Дарья</span>
              </div>
              <div className="friend">
                <img src="./img/users/denis-frolov.jpeg" alt="Friend" />
                <span className="friend__name">Денис</span>
              </div>
              <div className="friend">
                <img src="./img/users/mark-krahmalev.jpeg" alt="Friend" />
                <span className="friend__name">Марк</span>
              </div>
              <div className="friend">
                <img src="./img/users/katarina-fisher.jpeg" alt="Friend" />
                <span className="friend__name">Катарина</span>
              </div>
              <div className="friend">
                <img src="./img/users/viktoria.jpeg" alt="Friend" />
                <span className="friend__name">Виктория</span>
              </div>
              <div className="friend">
                <img src="./img/users/gleb.jpeg" alt="Friend" />
                <span className="friend__name">Глеб</span>
              </div>
            </div>
          </div>
          <div className="MusicBlock">
            <div className="MusicBlock__title">
              <h2>Вы недавно слушали</h2>
              <span>123</span>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-1.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Pieces</p>
                <p className="secondary__text">Andrew Belle</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-2.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">In the Wind</p>
                <p className="secondary__text">On-The-Go</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-3.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">On you own</p>
                <p className="secondary__text">Meltt</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-4.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Infinity</p>
                <p className="secondary__text">James Young</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-5.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Let me follow</p>
                <p className="secondary__text">Son Lux</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-6.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Youth</p>
                <p className="secondary__text">Glass Animals</p>
              </div>
              <div className="plus-button"></div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
};
