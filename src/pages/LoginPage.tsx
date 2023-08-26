import '../components/styles/Form.css';

const LoginPage = () => {
  
  return (
  <form >
    <h1>Login</h1>
    <input type="text" name="username" placeholder="Enter your username" />
    <input type="password" name="password" placeholder="Enter your password" />
    <button>Login</button>
  </form>
)}

export default LoginPage;