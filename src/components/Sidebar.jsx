import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Upload, BarChart2, Video, Subtitles, Type, Instagram, TrendingUp, Send, Settings, LogOut, Code, DollarSign, HelpCircle, Users } from 'lucide-react';
import { useAuth } from '../lib/utils';
import Button from './Button';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { signOut } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    // Redirect handled by AuthProvider/Router
  };

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Upload Video', icon: Upload, path: '/dashboard/upload' },
    { name: 'Generations', icon: Video, path: '/dashboard/generations' },
    { name: 'Subtitle AI', icon: Subtitles, path: '/dashboard/subtitle' },
    { name: 'YT Titles AI', icon: Type, path: '/dashboard/youtube-titles' },
    { name: 'IG Captions AI', icon: Instagram, path: '/dashboard/instagram-captions' },
    { name: 'Hashtag AI', icon: TrendingUp, path: '/dashboard/hashtag' },
    { name: 'Telegram Captions AI', icon: Send, path: '/dashboard/telegram-captions' },
    // { name: 'Settings', icon: Settings, path: '/dashboard/settings' }, // Placeholder for future
    // { name: 'Support', icon: HelpCircle, path: '/dashboard/support' }, // Placeholder for future
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-surface-2 text-primary border border-border"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-surface-2 backdrop-blur-md border-r border-border p-6 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-xl font-heading text-text animate-neon-glow">
            <img src="/logo.svg" alt="ViralShorts AI Logo" className="h-8 w-8 mr-2"/>
            ViralShorts AI
          </Link>
          <button className="md:hidden text-text hover:text-primary" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-3 rounded-large text-text-muted hover:bg-primary-glow hover:text-primary transition duration-300 ease-out group ${
                location.pathname === item.path ? 'bg-primary-glow text-primary font-medium' : ''
              }`}
              onClick={toggleSidebar} // Close sidebar on nav item click for mobile
            >
              <item.icon size={20} className="mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <Button onClick={handleSignOut} className="w-full justify-center" variant="secondary">
            <LogOut size={20} className="mr-2" /> Logout
          </Button>
          <Link to="/" className="mt-2 w-full justify-center flex items-center p-3 rounded-large text-text-muted hover:bg-primary-glow hover:text-primary transition duration-300 ease-out group" onClick={toggleSidebar}>
            <Home size={20} className="mr-2" /> Back to Home
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;