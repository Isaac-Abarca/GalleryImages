// src/pages/Home.jsx
import { useAuth } from '../contexts/AuthContext';
import '../styles/home.css';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="home-container">
      <h1>Welcome to the Image Gallery App</h1>
      {user ? (
        <div>
          <p>You are logged in as {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in or register to use the app.</p>
          <button onClick={() => window.location.href = '/login'}>Login</button>
          <button onClick={() => window.location.href = '/register'}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Home;
