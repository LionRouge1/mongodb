import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostForm from '../PostForm';
import { post } from '../../types';

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [postForm, setPostForm] = useState({
    title: '',
    summary: '',
    image: [],
    content: '',
  });

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => {
        response.json()
          .then((postInfo) => {
            setPostForm({
              title: postInfo?.title,
              summary: postInfo?.summary,
              image: postInfo?.cover,
              content: postInfo?.content,
            });
          });
      });
  }, []);

  const editPost = async (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.set('title', postForm.title);
    data.set('summary', postForm.summary);
    data.set('content', postForm.content);
    data.set('id', id as string);
    if (postForm.image.length !== 0) {
      data.set('image', postForm.image[0]);
    }

    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });

    if (response.ok) navigate(`/post/${id}`);
  };

  const handleInputs = (e: any) => {
    setPostForm((prev) => ({
      ...prev,
      [e.target?.name || 'content']: e.target?.files || e.target?.value || e,
    }));
  };

  return (
    <PostForm postForm={postForm} handleInputs={handleInputs} handleSubmit={editPost} view="edit" />
  );
};

export default EditPost;
