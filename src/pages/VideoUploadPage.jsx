import React from 'react';
import { Upload, Video, FileText, CheckCircle, XCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const VideoUploadPage = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploadStatus, setUploadStatus] = React.useState(''); // 'success', 'error', 'uploading'

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      setUploadStatus('');
      setUploadProgress(0);
    } else {
      setSelectedFile(null);
      setUploadStatus('Please select a valid video file.');
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('No file selected.');
      return;
    }

    setIsUploading(true);
    setUploadStatus('uploading');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          setUploadStatus('success');
          // In a real app, you'd then submit the file to a backend service
          // and navigate to a generation configuration page or similar.
          setSelectedFile(null);
        }, 500);
      }
    }, 200);
  };

  return (
    <AnimatedSection delay={0} className="w-full">
      <div className="flex items-center text-3xl font-heading text-text mb-8">
        <Upload size={32} className="text-primary mr-3" />
        <h2>Upload Video for Shorts AI</h2>
      </div>

      <Card className="p-8">
        <h3 className="text-xl font-heading text-text mb-6">Choose Your Video File</h3>

        <div
          className="border-2 border-dashed border-border rounded-large p-8 text-center cursor-pointer transition-colors duration-300 hover:border-primary hover:bg-primary-glow/10 mb-6 relative"
          onClick={() => document.getElementById('video-upload-input').click()}
        >
          <input
            id="video-upload-input"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          {selectedFile ? (
            <div className="flex flex-col items-center">
              <Video size={48} className="text-primary mb-3" />
              <p className="text-lg text-text font-medium">{selectedFile.name}</p>
              <p className="text-sm text-text-muted">{ (selectedFile.size / (1024 * 1024)).toFixed(2) } MB</p>
              {uploadStatus === 'uploading' && (
                <div className="w-full bg-surface-2 rounded-full h-2.5 mt-4">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              )}
              {uploadStatus === 'success' && (
                <p className="text-green-400 flex items-center mt-3"><CheckCircle size={18} className="mr-1"/> Upload Complete!</p>
              )}
              {uploadStatus === 'error' && (
                <p className="text-red-400 flex items-center mt-3"><XCircle size={18} className="mr-1"/> Upload Failed!</p>
              )}
            </div>
          ) : (
            <>
              <FileText size={48} className="text-text-muted mb-3 mx-auto" />
              <p className="text-text font-medium">Drag & drop your video here, or <span className="text-primary hover:underline">browse files</span></p>
              <p className="text-sm text-text-muted mt-1">MP4, MOV, WEBM up to 2GB</p>
            </>
          )}
        </div>

        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading || uploadStatus === 'success'}
          className="w-full justify-center"
        >
          {isUploading ? (
            <span className="flex items-center">
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-text mr-3"></span>
              Uploading {uploadProgress}%
            </span>
          ) : uploadStatus === 'success' ? (
            <span className="flex items-center"><CheckCircle size={20} className="mr-2" /> Uploaded! Generate Shorts</span>
          ) : (
            <span className="flex items-center"><Upload size={20} className="mr-2" /> Start Upload</span>
          )}
        </Button>
        {uploadStatus === 'success' && (
          <Link to="/dashboard/generations" className="block text-center text-primary hover:underline mt-4">
            Go to Generations to customize & export!
          </Link>
        )}
      </Card>

      <AnimatedSection delay={100} className="mt-8">
        <Card>
          <h3 className="text-xl font-heading text-text mb-4">Upload Guidelines</h3>
          <ul className="list-disc list-inside text-text-muted space-y-2">
            <li>Ensure your video is in a common format (MP4, MOV, WebM).</li>
            <li>Maximum file size is 2GB for optimal performance.</li>
            <li>High-resolution videos will yield better short-form content.</li>
            <li>Our AI automatically detects key moments for viral potential.</li>
          </ul>
        </Card>
      </AnimatedSection>
    </AnimatedSection>
  );
};

export default VideoUploadPage;