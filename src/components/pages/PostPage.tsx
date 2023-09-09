import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { post } from '../../types';

const PostPage = () => {
  const { id } = useParams();
  const [{ cover, title, content }, setPostInfo] = useState({} as post);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => {
        response.json()
          .then((postInfo) => {
            setPostInfo(postInfo);
          });
      });
  }, []);

  return (
    <div className="post-page">
      <div className="image">
        <img src={`http://localhost:4000/${cover}`} alt={title} />
      </div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostPage;
