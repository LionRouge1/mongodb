import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import LoginPage from './pages/LoginPage';
import Page from './pages/404Page';
import Registration from './pages/Registration';
import Layout from './Layout';
import { UserContextProvider } from './userContext';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="*" element={<Page />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
