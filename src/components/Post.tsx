import moment from 'moment';
import { Link } from 'react-router-dom';
import './styles/Post.css';
import { post } from '../types';

const Post = ({
  _id,
  cover,
  summary,
  createdAt,
  title,
  author,
} :post) => (
  <li className="post">
    <Link to={`/post/${_id}`}>
      <img src={`http://localhost:4000/${cover}`} alt={title} />
    </Link>
    <div>
      <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
      <p className="info">
        <span className="author">{author.username}</span>
        <time>
          {moment(createdAt).format('DD-MM-YYYY, h:mm a') }
        </time>
      </p>
      <div>{summary}</div>
    </div>
  </li>
);

export default Post;
