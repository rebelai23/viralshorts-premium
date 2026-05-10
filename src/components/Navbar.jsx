import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const handleSignOut = async () => {
    await signOut();
    // Redirect to home or auth page after sign out
  };

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  if (isDashboardRoute) {
    // For dashboard, a simpler navbar might be desired or none if sidebar is primary nav
    return (
      <nav className={`fixed w-full z-40 p-4 transition-all duration-300 ease-out ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-xl font-heading text-text animate-neon-glow">
            <img src="/logo.svg" alt="ViralShorts AI Logo" className="h-8 w-8 mr-2"/>
            ViralShorts AI
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <Button onClick={handleSignOut} variant="secondary">Logout</Button>
            ) : (
              <Button to="/auth" variant="primary">Login</Button>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed w-full z-40 p-4 transition-all duration-300 ease-out ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-heading text-text animate-neon-glow">
          <img src="/logo.svg" alt="ViralShorts AI Logo" className="h-8 w-8 mr-2"/>
          ViralShorts AI
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-text-muted hover:text-primary transition duration-300 ease-out relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
          {user ? (
            <>
              <Button to="/dashboard" variant="secondary">Dashboard</Button>
              <Button onClick={handleSignOut} variant="primary">Logout</Button>
            </>
          ) : (
            <>
              <Button to="/auth" variant="secondary">Login</Button>
              <Button to="/auth" variant="primary">Sign Up</Button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-text focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-2 backdrop-blur-md mt-4 py-4 rounded-large shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-muted hover:text-primary transition duration-300 ease-out"
              >
                {item.name}
              </a>
            ))}
            {user ? (
              <>
                <Button to="/dashboard" variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Button>
                <Button onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }} variant="primary">Logout</Button>
              </>
            ) : (
              <>
                <Button to="/auth" variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>Login</Button>
                <Button to="/auth" variant="primary" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;