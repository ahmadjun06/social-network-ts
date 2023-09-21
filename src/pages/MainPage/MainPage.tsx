import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import { Container } from "../../components/Container/Container";
import { Post } from "../../components/UI/Post/Post";
import { useLazyGetPostListQuery } from "../../store/api/postApi";
import { Navbar } from "../../components/Navbar/Navbar";
import { ListOne } from "../../components/ListOne/ListOne";
import { NewPostSection } from "../../components/NewPostSection/NewPostSection";
import { History } from "../../components/History/History";
import { Repost } from "../../components/Repost/Repost";
import { ListTwo } from "../../components/ListTwo/ListTwo";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";

export const MainPage = () => {
  const [filteredPosts, setFilteredPosts] = useState([])
  const [fetchTrigger, { data, isError, isLoading }] =
    useLazyGetPostListQuery();

    useEffect(()=>{
      fetchTrigger(null)
    },[fetchTrigger])

    useEffect(()=>{
      setFilteredPosts(data?.message)
    }, [data])

  const handleAddNewPost = () => {
    fetchTrigger(null);
  };

  return (
    <Container>
      <div className="MainPage">
        <aside className="LeftSide">
          <Navbar />
          <ListOne />
        </aside>
        <main className="Main">
          <NewPostSection onNewPostAdded={handleAddNewPost} />
          <History />
          {isError && <h1>Прозишла ошибка</h1>}
          {isLoading && <h1>Загрузка</h1>}
          {filteredPosts?.length &&
            filteredPosts.map((post: any) => (
                <Post
                  key={post.id}
                  postText={post.main_text}
                  postData={post.reg_date}
                  photos={post.photos}
                  userName={post.user_fk.name}
                  postId={post.id}
                />
              ))}
          <Repost />
        </main>
        <aside className="RightSide">
          <ListTwo />
          <MusicBlock />
        </aside>
      </div>
    </Container>
  );
};
