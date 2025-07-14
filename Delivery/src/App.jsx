// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import DeliveryPage from './pages/DeliveryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
