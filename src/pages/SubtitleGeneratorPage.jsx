import React from 'react';
import { Subtitles, Play, Download, Settings, Loader } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const SubtitleGeneratorPage = () => {
  const [videoUrl, setVideoUrl] = React.useState('');
  const [subtitles, setSubtitles] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleGenerateSubtitles = async () => {
    if (!videoUrl) {
      setError('Please enter a video URL.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSubtitles('');

    // Simulate API call to generate subtitles
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (Math.random() > 0.1) { // Simulate occasional failure
      setSubtitles(
        `[00:00:01] Welcome to ViralShorts AI!
[00:00:03] We make creating viral content easy.
[00:00:06] Just upload your video...
[00:00:08] Our AI handles the rest.
[00:00:10] Get ready to go viral!`
      );
    } else {
      setError('Failed to generate subtitles. Please try again.');
    }
    setIsLoading(false);
  };

  const handleDownloadSubtitles = () => {
    if (subtitles) {
      const element = document.createElement("a");
      const file = new Blob([subtitles], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "viralshorts_subtitles.srt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <AnimatedSection delay={0} className="w-full">
      <div className="flex items-center text-3xl font-heading text-text mb-8">
        <Subtitles size={32} className="text-primary mr-3" />
        <h2>AI Subtitle Generator</h2>
      </div>

      <Card className="p-8 mb-8">
        <h3 className="text-xl font-heading text-text mb-6">Generate Subtitles from Video</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="video-url" className="block text-text-muted text-sm font-medium mb-2">Video URL (YouTube, Vimeo, etc.)</label>
            <input
              type="url"
              id="video-url"
              className="appearance-none rounded-large relative block w-full px-4 py-3 border border-border placeholder-text-muted bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300 ease-out"
              placeholder="e.g., https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => { setVideoUrl(e.target.value); setError(''); }}
              disabled={isLoading}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <Button
            onClick={handleGenerateSubtitles}
            disabled={isLoading || !videoUrl}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader size={20} className="mr-2 animate-spin" /> Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Play size={20} className="mr-2" /> Generate Subtitles
              </span>
            )}
          </Button>
        </div>
      </Card>

      {subtitles && (
        <AnimatedSection delay={200}>
          <Card className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-heading text-text">Generated Subtitles</h3>
              <Button onClick={handleDownloadSubtitles} variant="secondary" disabled={isLoading}>
                <Download size={20} className="mr-2" /> Download SRT
              </Button>
            </div>
            <textarea
              className="w-full h-64 bg-surface-2 border border-border rounded-large p-4 text-text-muted text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              readOnly
              value={subtitles}
            ></textarea>
            <div className="mt-4 flex items-center justify-between text-text-muted text-sm">
              <p>Review and edit if necessary.</p>
              <Button variant="ghost">
                <Settings size={18} className="mr-2" /> Edit Settings
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      )}
    </AnimatedSection>
  );
};

export default SubtitleGeneratorPage;