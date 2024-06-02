// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gallery" element={<ImageGrid />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;


