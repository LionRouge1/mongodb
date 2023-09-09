import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
];

const CreatePost = () => {
  const navigate = useNavigate();
  const [postForm, setpostForm] = useState({
    title: '',
    summary: '',
    image: [],
    content: '',
  });

  const handleInputs = (e: any) => {
    setpostForm((prev) => ({
      ...prev,
      [e.target?.name || 'content']: e.target?.files || e.target?.value || e,
    }));
  };

  const createNewPost = async (e :React.FormEvent<HTMLFormElement>) => {
    // console.log('odkdok');
    e.preventDefault();

    const data = new FormData();
    data.set('title', postForm.title);
    data.set('summary', postForm.summary);
    data.set('content', postForm.content);
    data.set('image', postForm.image[0]);

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) navigate('/');
  };

  return (
    <form className="create-post" onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Enter post title"
        name="title"
        value={postForm.title}
        onChange={handleInputs}
      />
      <input
        type="summary"
        name="summary"
        placeholder="Enter post summary"
        value={postForm.summary}
        onChange={handleInputs}
      />
      <input
        type="file"
        name="image"
        onChange={handleInputs}
      />
      <ReactQuill
        modules={modules}
        formats={formats}
        value={postForm.content}
        onChange={(newValue) => handleInputs(newValue)}
      />
      <button type="submit">create Post</button>
      <span className="error" />
    </form>
  );
};

export default CreatePost;
