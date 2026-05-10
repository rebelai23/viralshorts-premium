import React from 'react';
import { Type, Sparkles, Copy } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const YoutubeTitlesPage = () => {
  const [keywords, setKeywords] = React.useState('');
  const [topic, setTopic] = React.useState('');
  const [titles, setTitles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const generateTitles = async () => {
    if (!topic) {
      setError('Please provide a video topic.');
      return;
    }
    setError('');
    setIsLoading(true);
    setTitles([]);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (Math.random() > 0.1) {
      const generated = [
        `UNLEASHED: Viral Shorts AI - The Future of Content!`,
        `How ViralShorts AI Made Me Go Viral Overnight (Seriously!)`,
        `My Secret Weapon for YouTube Shorts: ViralShorts AI`,
        `Never Run Out of Viral Ideas with ViralShorts AI!`,
        `AI Takes Over YouTube Shorts: ViralShorts AI Review`
      ];
      setTitles(generated.map(t => ({ text: t, copied: false })));
    } else {
      setError('Failed to generate titles. Try different keywords.');
    }
    setIsLoading(false);
  };

  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(titles[index].text);
    const updatedTitles = [...titles];
    updatedTitles[index].copied = true;
    setTitles(updatedTitles);
    setTimeout(() => {
      updatedTitles[index].copied = false;
      setTitles([...updatedTitles]);
    }, 1500);
  };

  return (
    <AnimatedSection delay={0} className="w-full">
      <div className="flex items-center text-3xl font-heading text-text mb-8">
        <Type size={32} className="text-primary mr-3" />
        <h2>AI YouTube Title Generator</h2>
      </div>

      <Card className="p-8 mb-8">
        <h3 className="text-xl font-heading text-text mb-6">Generate Catchy YouTube Titles</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-text-muted text-sm font-medium mb-2">Video Topic / Main Idea</label>
            <input
              type="text"
              id="topic"
              className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
              placeholder="e.g., How to edit videos with AI"
              value={topic}
              onChange={(e) => { setTopic(e.target.value); setError(''); }}
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="keywords" className="block text-text-muted text-sm font-medium mb-2">Keywords (comma-separated, optional)</label>
            <input
              type="text"
              id="keywords"
              className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
              placeholder="e.g., AI, editing, viral, shorts"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button
            onClick={generateTitles}
            disabled={isLoading || !topic}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader size={20} className="mr-2 animate-spin" /> Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Sparkles size={20} className="mr-2" /> Generate Titles
              </span>
            )}
          </Button>
          {error && <p className="mt-2 text-sm text-red-400 text-center">{error}</p>}
        </div>
      </Card>

      {titles.length > 0 && (
        <AnimatedSection delay={200}>
          <Card className="p-8">
            <h3 className="text-xl font-heading text-text mb-6">Suggested YouTube Titles</h3>
            <div className="space-y-4">
              {titles.map((title, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-large bg-surface-2 group hover:border-primary transition-all duration-300">
                  <p className="text-text">{title.text}</p>
                  <Button
                    onClick={() => copyToClipboard(index)}
                    variant="ghost"
                    className="flex items-center text-sm ml-4"
                  >
                    {title.copied ? 'Copied!' : <Copy size={18} />}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      )}
    </AnimatedSection>
  );
};

export default YoutubeTitlesPage;