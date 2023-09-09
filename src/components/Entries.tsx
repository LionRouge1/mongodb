import { useEffect, useState } from 'react';
import post1 from './images/post1.png';
import post2 from './images/post2.png';
import './styles/Entries.css';
import Post from './Post';
import { post } from '../types';

const Entries = () => {
  const [posts, setPosts] = useState([] as post[]);
  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then((response) => {
        response.json()
          .then((data) => {
            setPosts(data);
          });
      });
  }, []);
  // const posts :post[] = [
  //   {
  //     id: 1,
  //     image: post1,
  //     author: 'Matchoudi',
  //     createdAt: '22-08-2023 23:02',
  //     title: 'First post',
  //     content: 'Loraut, laboriosam laborum quam! Ducimus quae ratione quia quisquam quod?',
  //   },
  //   {
  //     id: 2,
  //     image: post2,
  //     author: 'Matchoudi',
  //     createdAt: '22-08-2023 23:02',
  //     title: 'Second post',
  //     content: 'Loraut, laboriosam laborum quam! Ducimus quae ratione quia quisquam quod?',
  //   },
  // ];

  return (
    <section className="entries">
      <ul>
        {
          posts.map((post) => (
            <Post {...post} key={post._id} />
          ))
        }
      </ul>
    </section>
  );
};

export default Entries;
