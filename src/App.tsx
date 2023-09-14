import { Route, Routes } from 'react-router-dom';
import PostsPage from './components/pages/PostsPage';
import LoginPage from './components/pages/LoginPage';
import Page from './components/pages/404Page';
import Registration from './components/pages/Registration';
import Layout from './Layout';
import { UserContextProvider } from './components/contexts/userContext';
import { RedirectContextProvider } from './components/contexts/redirectContext';
import CreatePost from './components/CreatePost';
import PostPage from './components/pages/PostPage';
import EditPost from './components/pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <RedirectContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="*" element={<Page />} />
          </Route>
        </Routes>
      </RedirectContextProvider>
    </UserContextProvider>
  );
}

export default App;
