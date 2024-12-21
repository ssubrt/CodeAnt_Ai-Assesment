import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { RepositoryProvider } from './contexts/RepositoryContext';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AICodeReview from './pages/AICodeReview';
import CloudSecurity from './pages/CloudSecurity';
import Settings from './pages/Settings';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <RepositoryProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/code-review" element={<PrivateRoute><AICodeReview /></PrivateRoute>} />
            <Route path="/cloud-security" element={<PrivateRoute><CloudSecurity /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />
          </Routes>
        </RepositoryProvider>
      </AuthProvider>
    </Router>
  );
}