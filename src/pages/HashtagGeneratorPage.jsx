import React from 'react';
import { TrendingUp, Sparkles, Copy, Loader } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const HashtagGeneratorPage = () => {
  const [topic, setTopic] = React.useState('');
  const [hashtags, setHashtags] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const generateHashtags = async () => {
    if (!topic) {
      setError('Please provide a topic for hashtag generation.');
      return;
    }
    setError('');
    setIsLoading(true);
    setHashtags([]);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (Math.random() > 0.1) {
      const generated = [
        '#ViralShortsAI', '#ContentCreation', '#AItools', '#ShortFormVideo', '#GoViral', '#TikTokTips', '#ReelsIdeas', '#YouTubeShorts', '#CreatorLife', '#DigitalMarketing', '#VideoEditing', '#TechInnovation', '#SocialMediaMarketing', '#AIForBusiness', '#FutureOfContent'
      ];
      setHashtags(generated.map(h => ({ text: h, copied: false })));
    } else {
      setError('Failed to generate hashtags. Try a different topic.');
    }
    setIsLoading(false);
  };

  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(hashtags[index].text);
    const updatedHashtags = [...hashtags];
    updatedHashtags[index].copied = true;
    setHashtags(updatedHashtags);
    setTimeout(() => {
      updatedHashtags[index].copied = false;
      setHashtags([...updatedHashtags]);
    }, 1500);
  };

  return (
    <AnimatedSection delay={0} className="w-full">
      <div className="flex items-center text-3xl font-heading text-text mb-8">
        <TrendingUp size={32} className="text-primary mr-3" />
        <h2>AI Hashtag Generator</h2>
      </div>

      <Card className="p-8 mb-8">
        <h3 className="text-xl font-heading text-text mb-6">Find Trending Hashtags for Your Content</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-text-muted text-sm font-medium mb-2">Content Topic / Niche</label>
            <input
              type="text"
              id="topic"
              className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
              placeholder="e.g., AI video editing, viral marketing, tech reviews"
              value={topic}
              onChange={(e) => { setTopic(e.target.value); setError(''); }}
              disabled={isLoading}
            />
          </div>

          <Button
            onClick={generateHashtags}
            disabled={isLoading || !topic}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader size={20} className="mr-2 animate-spin" /> Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Sparkles size={20} className="mr-2" /> Generate Hashtags
              </span>
            )}
          </Button>
          {error && <p className="mt-2 text-sm text-red-400 text-center">{error}</p>}
        </div>
      </Card>

      {hashtags.length > 0 && (
        <AnimatedSection delay={200}>
          <Card className="p-8">
            <h3 className="text-xl font-heading text-text mb-6">Suggested Hashtags</h3>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer
                    ${hashtag.copied ? 'bg-green-500 text-white' : 'bg-surface-2 text-primary border border-primary hover:bg-primary hover:text-text'}
                  `}
                  onClick={() => copyToClipboard(index)}
                >
                  {hashtag.text} {hashtag.copied && <CheckCircle size={14} className="ml-1" />}
                </span>
              ))}
            </div>
            <p className="mt-4 text-text-muted text-sm">Click on a hashtag to copy it.</p>
          </Card>
        </AnimatedSection>
      )}
    </AnimatedSection>
  );
};

export default HashtagGeneratorPage;