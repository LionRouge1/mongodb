import './styles/Post.css';
import { PostProps } from '../types';

const Post = ({
  image,
  author,
  createdAt,
  title,
  content,
} :PostProps) => (
  <li className="post">
    <img src={image} alt={title} />
    <div>
      <h2>{title}</h2>
      <p className="info">
        <span className="author">{author}</span>
        <time>
          {createdAt}
        </time>
      </p>
      <p>{content}</p>
    </div>
  </li>
);

export default Post;
