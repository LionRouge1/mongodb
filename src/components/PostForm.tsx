import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PostFormProps } from '../types';

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

const PostForm = ({
  handleSubmit,
  handleInputs,
  postForm,
  view = 'create',
}: PostFormProps) => (
  <form className="create-post" onSubmit={handleSubmit}>
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
    <button type="submit">{(view === 'edit') ? 'Update Post' : 'Create Post' }</button>
    <span className="error" />
  </form>
);

export default PostForm;
