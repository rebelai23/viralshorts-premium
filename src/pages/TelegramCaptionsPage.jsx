import React from 'react';
import { Send, Sparkles, Copy, Loader } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const TelegramCaptionsPage = () => {
  const [description, setDescription] = React.useState('');
  const [captions, setCaptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const generateCaptions = async () => {
    if (!description) {
      setError('Please provide a description for the caption.');
      return;
    }
    setError('');
    setIsLoading(true);
    setCaptions([]);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (Math.random() > 0.1) {
      const generated = [
        `👋 Hey #ViralShortsAI Fam! New video drop alert! We're transforming long-form content into bite-sized virality. Check it out now and tell us what you think! 👇`,
        `🚀 Boost your reach on Telegram! With ViralShorts AI, creating engaging short videos and perfect captions is a breeze. Link in bio! #AIContent #TelegramMarketing`,
        `💡 Quick tip for creators: use ViralShorts AI to slice your best moments into Telegram-ready clips. Maximize engagement with minimal effort! #ContentStrategy #GoViral`,
        `📣 Don't miss this! Our latest feature uses cutting-edge AI to make your videos unforgettable. Get ready for a surge in views! Exclusive to ViralShorts AI users. #TechTrends`
      ];
      setCaptions(generated.map(c => ({ text: c, copied: false })));
    } else {
      setError('Failed to generate captions. Try refining your description.');
    }
    setIsLoading(false);
  };

  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(captions[index].text);
    const updatedCaptions = [...captions];
    updatedCaptions[index].copied = true;
    setCaptions(updatedCaptions);
    setTimeout(() => {
      updatedCaptions[index].copied = false;
      setCaptions([...updatedCaptions]);
    }, 1500);
  };

  return (
    <AnimatedSection delay={0} className="w-full">
      <div className="flex items-center text-3xl font-heading text-text mb-8">
        <Send size={32} className="text-primary mr-3" />
        <h2>AI Telegram Caption Generator</h2>
      </div>

      <Card className="p-8 mb-8">
        <h3 className="text-xl font-heading text-text mb-6">Create Engaging Captions for Telegram</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-text-muted text-sm font-medium mb-2">Short Video Description / Call to Action</label>
            <textarea
              id="description"
              rows="4"
              className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
              placeholder="e.g., A tutorial on AI video editing, emphasizing ease of use and viral potential. Promote a new feature."
              value={description}
              onChange={(e) => { setDescription(e.target.value); setError(''); }}
              disabled={isLoading}
            ></textarea>
          </div>

          <Button
            onClick={generateCaptions}
            disabled={isLoading || !description}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader size={20} className="mr-2 animate-spin" /> Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Sparkles size={20} className="mr-2" /> Generate Captions
              </span>
            )}
          </Button>
          {error && <p className="mt-2 text-sm text-red-400 text-center">{error}</p>}
        </div>
      </Card>

      {captions.length > 0 && (
        <AnimatedSection delay={200}>
          <Card className="p-8">
            <h3 className="text-xl font-heading text-text mb-6">Suggested Telegram Captions</h3>
            <div className="space-y-4">
              {captions.map((caption, index) => (
                <div key={index} className="flex items-start justify-between p-4 border border-border rounded-large bg-surface-2 group hover:border-primary transition-all duration-300">
                  <p className="text-text text-sm flex-grow mr-4">{caption.text}</p>
                  <Button
                    onClick={() => copyToClipboard(index)}
                    variant="ghost"
                    className="flex items-center text-sm flex-shrink-0"
                  >
                    {caption.copied ? 'Copied!' : <Copy size={18} />}
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

export default TelegramCaptionsPage;