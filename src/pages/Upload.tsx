import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import { Upload as UploadIcon, FileText, Youtube, Loader2, X } from "lucide-react";
import { motion } from "framer-motion";

const UploadPage = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f?.type === "application/pdf") setFile(f);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => setUploading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-2xl pt-24 pb-12">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Upload Content</h1>
        <p className="text-muted-foreground mb-8">Upload a PDF or paste a YouTube URL to get started.</p>

        {/* PDF Upload */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`glass-card p-12 text-center cursor-pointer transition-all ${
            dragging ? "border-primary/60 bg-primary/5" : "hover:border-primary/30"
          }`}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileSelect}
          />
          <UploadIcon className="mx-auto h-10 w-10 text-primary mb-4" />
          <p className="font-heading font-semibold text-foreground">
            {file ? file.name : "Drag & drop a PDF here"}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {file ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : "or click to browse"}
          </p>
          {file && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
            >
              <X className="h-4 w-4 mr-1" /> Remove
            </Button>
          )}
        </motion.div>

        {/* YouTube URL */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Youtube className="h-5 w-5 text-primary" />
            <span className="font-heading font-semibold text-foreground text-sm">YouTube URL</span>
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <Button
          onClick={handleUpload}
          disabled={(!file && !youtubeUrl) || uploading}
          className="mt-8 w-full gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2"
          size="lg"
        >
          {uploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4" /> Generate Study Materials
            </>
          )}
        </Button>
      </main>
    </div>
  );
};

export default UploadPage;
