import post1 from './images/post1.png';
import post2 from './images/post2.png';
import './styles/Entries.css'
import Post from './Post';
import { post } from './types';

const Entries = () => {
    const posts:post[] = [
        {
            id: 1,
            image: post1,
            author: 'Matchoudi',
            createdAt: '22-08-2023 23:02',
            title: 'First post',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo quibusdam quaerat quis, commodi, perferendis aut, laboriosam laborum saepe ad at fugiat repudiandae quam! Ducimus quae ratione quia quisquam quod?'
        },
        {
            id: 2,
            image: post2,
            author: 'Matchoudi',
            createdAt: '22-08-2023 23:02',
            title: 'Second post',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo quibusdam quaerat quis, commodi, perferendis aut, laboriosam laborum saepe ad at fugiat repudiandae quam! Ducimus quae ratione quia quisquam quod?'
        }
    ];

    return (
        <section className="entries">
            <ul>
            {
                posts.map(({id, image, author, createdAt, title, content}) => (
                    <Post
                        id={id}
                        image={image}
                        author={author}
                        createdAt={createdAt}
                        title={title}
                        content={content}
                        key={id}
                    />
                ))
            }
            </ul>
        </section>
    )
};

export default Entries;