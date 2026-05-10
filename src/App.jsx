import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/utils'; // Assuming useAuth provides user and loading state
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import PricingPage from './pages/PricingPage';
import VideoUploadPage from './pages/VideoUploadPage';
import SubtitleGeneratorPage from './pages/SubtitleGeneratorPage';
import YoutubeTitlesPage from './pages/YoutubeTitlesPage';
import InstagramCaptionsPage from './pages/InstagramCaptionsPage';
import HashtagGeneratorPage from './pages/HashtagGeneratorPage';
import TelegramCaptionsPage from './pages/TelegramCaptionsPage';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-text">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="ml-4 text-xl">Loading session...</p>
      </div>
    );
  }
  return user ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>}>
              {/* Optional nested routes for dashboard tools, if they need the dashboard layout */}
              <Route path="upload" element={<PrivateRoute><VideoUploadPage /></PrivateRoute>} />
              <Route path="generations" element={<PrivateRoute><h2 className="text-3xl font-heading text-text mb-8">Recent Generations</h2><p className="text-text-muted">Content for Recent Generations will go here.</p></PrivateRoute>} />
              <Route path="subtitle" element={<PrivateRoute><SubtitleGeneratorPage /></PrivateRoute>} />
              <Route path="youtube-titles" element={<PrivateRoute><YoutubeTitlesPage /></PrivateRoute>} />
              <Route path="instagram-captions" element={<PrivateRoute><InstagramCaptionsPage /></PrivateRoute>} />
              <Route path="hashtag" element={<PrivateRoute><HashtagGeneratorPage /></PrivateRoute>} />
              <Route path="telegram-captions" element={<PrivateRoute><TelegramCaptionsPage /></PrivateRoute>} />
              <Route index element={<PrivateRoute><DashboardContent /></PrivateRoute>} /> {/* Default dashboard view */}
            </Route>
            {/* If a route is unknown, redirect to home or a 404 page */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

// Placeholder for Dashboard default content if needed
const DashboardContent = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-heading text-text mb-8">Welcome to your Dashboard</h2>
      <p className="text-text-muted">Select a tool from the sidebar to get started!</p>
    </div>
  );
};

export default App;