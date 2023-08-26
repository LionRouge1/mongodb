import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import Page from "./pages/404Page";
import Registration from "./pages/Registration";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route index element={<PostsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </main>
  );
}

export default App;
