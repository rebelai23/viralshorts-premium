import React from 'react';
import { useAuth, supabase, formatNumber } from '../lib/utils';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { Upload, BarChart2, Video, Clock, Eye, CheckCircle, AlertTriangle, XCircle, RefreshCcw } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Outlet, Link } from 'react-router-dom';

const AnalyticsCard = ({ title, value, unit = '', description, icon: Icon, delay = 0, statusColor = '' }) => (
  <AnimatedSection delay={delay} className="h-full">
    <Card className={`relative p-5 overflow-hidden group hover:border-primary transition-all duration-300 ${statusColor}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
      <div className="relative z-10 flex items-center justify-between mb-4">
        <h3 className="text-xl font-heading text-text">{title}</h3>
        {Icon && <Icon size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />}
      </div>
      <p className="text-4xl font-bold text-primary mb-2">
        {formatNumber(value)}<span className="text-xl text-text-muted ml-1">{unit}</span>
      </p>
      <p className="text-text-muted text-sm">{description}</p>
      {statusColor && <div className={`absolute bottom-0 left-0 w-full h-1 ${statusColor}`}></div>}
    </Card>
  </AnimatedSection>
);

const RecentGenerations = ({ generations, loading, error }) => {
  if (loading) return <p className="text-text-muted">Loading generations...</p>;
  if (error) return <p className="text-red-400">Error loading generations: {error.message}</p>;
  if (generations.length === 0) return <p className="text-text-muted">No recent generations found.</p>;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle size={18} className="text-green-500 mr-1" />;
      case 'Processing': return <RefreshCcw size={18} className="text-primary animate-spin mr-1" />;
      case 'Failed': return <XCircle size={18} className="text-red-500 mr-1" />;
      default: return null;
    }
  };

  return (
    <Card className="col-span-full xl:col-span-2 p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-heading text-text">Recent Generations</h3>
        <Link to="/dashboard/generations" className="text-primary hover:underline text-sm">View All</Link>
      </div>
      <div className="space-y-4">
        {generations.map((gen, index) => (
          <AnimatedSection key={gen.id} delay={index * 50} className="hover:bg-primary-glow rounded-large transition-colors duration-300">
            <div className="flex items-center justify-between p-4 border border-border rounded-large bg-surface-2 hover:border-primary transition-all duration-300">
              <div className="flex items-center">
                <Video size={24} className="text-primary mr-4 flex-shrink-0" />
                <div>
                  <p className="text-lg text-text font-medium">{gen.title}</p>
                  <p className="text-sm text-text-muted flex items-center">
                    {getStatusIcon(gen.status)} {gen.status} &middot; {gen.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-text font-bold">{gen.views}</p>
                <p className="text-sm text-text-muted">{gen.type}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Card>
  );
};

const DashboardPage = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState([]);
  const [generations, setGenerations] = React.useState([]);
  const [loadingAnalytics, setLoadingAnalytics] = React.useState(true);
  const [loadingGenerations, setLoadingGenerations] = React.useState(true);
  const [errorAnalytics, setErrorAnalytics] = React.useState(null);
  const [errorGenerations, setErrorGenerations] = React.useState(null);

  React.useEffect(() => {
    const fetchDashboardData = async () => {
      // Fetch Analytics
      const { data: analyticsData, error: analyticsError } = await supabase.from('analytics').select('*');
      if (analyticsError) setErrorAnalytics(analyticsError);
      else setAnalytics(analyticsData);
      setLoadingAnalytics(false);

      // Fetch Recent Generations
      const { data: generationsData, error: generationsError } = await supabase.from('generations').select('*');
      if (generationsError) setErrorGenerations(generationsError);
      else setGenerations(generationsData);
      setLoadingGenerations(false);
    };

    fetchDashboardData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-bg text-text flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64 md:ml-64' : 'ml-0 md:ml-0'}`}>
        <main className="p-8 md:p-12">
          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          <AnimatedSection delay={0} className="mb-10">
            <h1 className="text-4xl font-heading text-text mb-2 flex items-center">
              <BarChart2 size={36} className="text-primary mr-3" /> Dashboard
            </h1>
            <p className="text-text-muted">Welcome back, {user?.email || 'Creator'}! Here's an overview of your activity.</p>
          </AnimatedSection>

          {/* Render nested routes here (e.g., specific tool pages) */}
          <div className="mb-10">
            <Outlet />
          </div>

          {/* Dashboard Overview - Only visible when not on a sub-route directly, or as a default if Outlet is empty */}
          {!location.pathname.startsWith('/dashboard/') && (
            <>
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                {loadingAnalytics ? (
                  Array(4).fill(0).map((_, i) => (
                    <Card key={i} className="animate-pulse h-40 bg-surface-2"></Card>
                  ))
                ) : errorAnalytics ? (
                  <p className="text-red-400 col-span-full">Error loading analytics.</p>
                ) : (
                  <>
                    <AnalyticsCard
                      title="Total Generations"
                      value={analytics.find(a => a.metric === 'Total Generations')?.value || 0}
                      icon={Video}
                      description="Videos and shorts created."
                      delay={100}
                    />
                    <AnalyticsCard
                      title="Videos Processed"
                      value={analytics.find(a => a.metric === 'Videos Processed')?.value || 0}
                      icon={Upload}
                      description="Raw videos uploaded for processing."
                      delay={200}
                    />
                    <AnalyticsCard
                      title="Creator Engagement"
                      value={analytics.find(a => a.metric === 'Creator Engagement')?.value || 0}
                      unit="%"
                      icon={BarChart2}
                      description="Average engagement across your shorts."
                      delay={300}
                      statusColor="border-l-4 border-accent"
                    />
                    <AnalyticsCard
                      title="Estimated Revenue"
                      value={analytics.find(a => a.metric === 'Revenue')?.value || 0}
                      unit="$"
                      icon={DollarSign}
                      description="Potential earnings from generated content."
                      delay={400}
                      statusColor="border-l-4 border-green-500"
                    />
                  </>
                )}
              </section>

              <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <RecentGenerations
                  generations={generations}
                  loading={loadingGenerations}
                  error={errorGenerations}
                />
                {/* Dashboard Mockup - Realistic but abstract glowing UI */}
                <AnimatedSection delay={500} className="col-span-full xl:col-span-1 h-full">
                  <Card className="p-6 relative overflow-hidden h-full flex flex-col justify-between animate-float-mockup">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent-glow opacity-10 blur-xl z-0 pointer-events-none"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-glow rounded-full mix-blend-screen opacity-15 animate-pulse z-0"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-heading text-text mb-4">AI Performance Insights</h3>
                      <p className="text-text-muted mb-6">Visual representation of content trends and AI efficiency.</p>
                      <div className="h-40 bg-surface-2 rounded-large flex items-center justify-center border border-border p-4 mb-4">
                        <div className="w-full h-full relative">
                          <div className="absolute left-0 top-1/2 w-full h-1 bg-border transform -translate-y-1/2"></div>
                          <div className="absolute left-1/4 h-full w-1 bg-border transform -translate-x-1/2"></div>
                          <div className="absolute left-1/2 h-full w-1 bg-border transform -translate-x-1/2"></div>
                          <div className="absolute left-3/4 h-full w-1 bg-border transform -translate-x-1/2"></div>

                          <div className="absolute bottom-0 left-[5%] w-4 h-[70%] bg-primary rounded-t-sm shadow-primary-glow transition-all duration-500 ease-out hover:h-[80%] hover:scale-x-105"></div>
                          <div className="absolute bottom-0 left-[20%] w-4 h-[50%] bg-accent rounded-t-sm shadow-accent-glow transition-all duration-500 ease-out hover:h-[60%] hover:scale-x-105"></div>
                          <div className="absolute bottom-0 left-[35%] w-4 h-[85%] bg-primary rounded-t-sm shadow-primary-glow transition-all duration-500 ease-out hover:h-[95%] hover:scale-x-105"></div>
                          <div className="absolute bottom-0 left-[50%] w-4 h-[60%] bg-accent rounded-t-sm shadow-accent-glow transition-all duration-500 ease-out hover:h-[70%] hover:scale-x-105"></div>
                          <div className="absolute bottom-0 left-[65%] w-4 h-[75%] bg-primary rounded-t-sm shadow-primary-glow transition-all duration-500 ease-out hover:h-[85%] hover:scale-x-105"></div>
                          <div className="absolute bottom-0 left-[80%] w-4 h-[40%] bg-accent rounded-t-sm shadow-accent-glow transition-all duration-500 ease-out hover:h-[50%] hover:scale-x-105"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-text-muted mt-4">
                        <span>Last 7 Days</span>
                        <span>Performance</span>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
}