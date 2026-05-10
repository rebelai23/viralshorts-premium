import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { Github, Google, Mail } from 'lucide-react';
import { useAuth } from '../lib/utils';
import AnimatedSection from '../components/AnimatedSection';

const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const { signIn, signUp, signInWithProvider, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect if already logged in
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    let result;
    if (isLogin) {
      result = await signIn(email, password);
    } else {
      result = await signUp(email, password);
    }

    if (result.error) {
      setError(result.error.message || 'An unexpected error occurred.');
    } else if (result.user) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  const handleSocialSignIn = async (provider) => {
    setLoading(true);
    const result = await signInWithProvider(provider);
    if (result.error) {
      setError(result.error.message || `Failed to sign in with ${provider}.`);
    } else if (result.user) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg hero-background-gradient py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedSection delay={0} className="max-w-md w-full space-y-8">
        <Card className="p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-glow to-accent-glow opacity-10 animate-pulse-border z-0"></div>
          <div className="relative z-10">
            <h2 className="mt-6 text-center text-3xl md:text-4xl font-heading text-text animate-neon-glow">
              {isLogin ? 'Login to ViralShorts AI' : 'Sign Up for ViralShorts AI'}
            </h2>
            <p className="mt-2 text-center text-sm text-text-muted">
              Or <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-primary hover:underline transition-colors duration-300">
                {isLogin ? 'create an account' : 'login to your account'}
              </button>
            </p>

            {error && (
              <div className="mt-4 p-3 bg-red-900 bg-opacity-30 text-red-300 rounded-large border border-red-700 text-sm">
                {error}
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="flex items-center justify-between">
                {!isLogin && (
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary bg-surface border-border rounded focus:ring-primary"
                      disabled={loading}
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-text-muted">
                      I agree to the <a href="#" className="font-medium text-primary hover:underline">Terms</a>
                    </label>
                  </div>
                )}
                {isLogin && (
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:underline transition-colors duration-300">
                      Forgot your password?
                    </a>
                  </div>
                )}
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-text mr-3"></span>
                      {isLogin ? 'Logging In...' : 'Signing Up...'}
                    </span>
                  ) : (
                    <span>{isLogin ? 'Login' : 'Sign Up'}</span>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6 flex justify-center items-center">
              <span className="w-full border-t border-border"></span>
              <span className="px-3 text-sm text-text-muted uppercase">Or continue with</span>
              <span className="w-full border-t border-border"></span>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                onClick={() => handleSocialSignIn('google')}
                variant="social"
                className="w-full flex items-center justify-center"
                disabled={loading}
              >
                <Google size={20} className="mr-2" />
                Sign in with Google
              </Button>
              <Button
                onClick={() => handleSocialSignIn('github')}
                variant="social"
                className="w-full flex items-center justify-center"
                disabled={loading}
              >
                <Github size={20} className="mr-2" />
                Sign in with GitHub
              </Button>
            </div>
            <div className="mt-8 text-center">
              <Link to="/" className="text-sm text-text-muted hover:text-primary transition-colors duration-300">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default AuthPage;