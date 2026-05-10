import React from 'react';
// Utility functions can go here
// Example: a function to format numbers or dates
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

// No actual Supabase client code for auth/database operations.
// Placeholder for future integration.
export const supabase = {
  auth: {
    signUp: async (email, password) => {
      console.log('Supabase: Signing up user with email:', email);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { user: { id: 'mock-user-id', email }, session: 'mock-session-token', error: null };
    },
    signInWithPassword: async (email, password) => {
      console.log('Supabase: Signing in user with email:', email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === 'test@example.com' && password === 'password123') {
        return { user: { id: 'mock-user-id', email }, session: 'mock-session-token', error: null };
      }
      return { user: null, session: null, error: { message: 'Invalid credentials' } };
    },
    signInWithOAuth: async (provider) => {
      console.log(`Supabase: Signing in with ${provider}`);
      // Simulate OAuth redirect or popup
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { user: { id: 'mock-social-user', email: `${provider}@example.com` }, session: 'mock-social-session', error: null };
    },
    signOut: async () => {
      console.log('Supabase: Signing out user.');
      await new Promise(resolve => setTimeout(resolve, 500));
      return { error: null };
    },
    getSession: async () => {
      console.log('Supabase: Getting current session.');
      await new Promise(resolve => setTimeout(resolve, 100));
      // Simulate an active session after login
      if (localStorage.getItem('mock-session')) {
        return { data: { session: { access_token: 'mock-token', user: { id: 'mock-user-id', email: 'test@example.com' } } }, error: null };
      }
      return { data: { session: null }, error: null };
    }
  },
  from: (table) => ({
    select: async () => {
      console.log(`Supabase: Selecting from ${table}`);
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mock data for dashboard
      if (table === 'analytics') {
        return { data: [
          {id: 1, metric: 'Total Generations', value: 12450},
          {id: 2, metric: 'Videos Processed', value: 3200},
          {id: 3, metric: 'Creator Engagement', value: 92},
          {id: 4, metric: 'Revenue', value: 15000}
        ], error: null };
      }
      if (table === 'generations') {
        return { data: [
          {id: 1, title: 'Viral Dance Challenge', date: '2023-10-26', status: 'Completed', type: 'Short', views: '1.2M'},
          {id: 2, title: 'AI Explained in 60s', date: '2023-10-25', status: 'Completed', type: 'Reel', views: '850K'},
          {id: 3, title: 'Daily Crypto News', date: '2023-10-24', status: 'Processing', type: 'Story', views: '-'},
          {id: 4, title: 'Cooking Hacks AI', date: '2023-10-23', status: 'Completed', type: 'Short', views: '430K'},
          {id: 5, title: 'Productivity Tips', date: '2023-10-22', status: 'Failed', type: 'Reel', views: '-'},
        ], error: null };
      }
      return { data: [], error: null };
    }
  })
};

// Mock authentication context for managing user session
export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        localStorage.setItem('mock-session', 'true'); // Simulate session persistence
      } else {
        localStorage.removeItem('mock-session');
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword(email, password);
    if (user) {
      setUser(user);
      localStorage.setItem('mock-session', 'true');
    }
    setLoading(false);
    return { user, error };
  };

  const signUp = async (email, password) => {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp(email, password);
    if (user) {
      setUser(user);
      localStorage.setItem('mock-session', 'true');
    }
    setLoading(false);
    return { user, error };
  };

  const signInWithProvider = async (provider) => {
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithOAuth(provider);
    if (user) {
      setUser(user);
      localStorage.setItem('mock-session', 'true');
    }
    setLoading(false);
    return { user, error };
  };

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('mock-session');
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);