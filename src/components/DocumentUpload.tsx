import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Image, X, Brain, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  file: File;
  preview: string;
  id: string;
}

interface DocumentUploadProps {
  onAnalysisComplete?: () => void;
}

export function DocumentUpload({ onAnalysisComplete }: DocumentUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFiles = useCallback((files: FileList) => {
    const validFiles = Array.from(files).filter(file => {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload PNG, JPG, or PDF files only.",
          variant: "destructive"
        });
        return false;
      }
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload files smaller than 10MB.",
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    validFiles.forEach(file => {
      const id = Math.random().toString(36).substr(2, 9);
      const preview = file.type === 'application/pdf' 
        ? '/placeholder-pdf.png' 
        : URL.createObjectURL(file);
      
      setUploadedFiles(prev => [...prev, { file, preview, id }]);
    });
  }, [toast]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const analyzeDocuments = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No documents to analyze",
        description: "Please upload at least one document first.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your medical documents have been analyzed successfully.",
      });
      // Trigger callback if provided
      onAnalysisComplete?.();
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Upload Medical Documents</h2>
        <p className="text-muted-foreground">
          Upload prescriptions, lab reports, or medical documents for AI analysis
        </p>
      </div>

      {/* Upload Area */}
      <Card className="border-2 border-dashed transition-all duration-300 hover:border-primary">
        <CardContent className="p-8">
          <div
            className={`text-center p-8 rounded-lg transition-all duration-300 ${
              dragActive 
                ? 'bg-primary/10 border-2 border-primary' 
                : 'bg-accent/50 hover:bg-accent/70'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full transition-all duration-300 ${
                dragActive ? 'bg-primary/20 animate-upload-bounce' : 'bg-primary/10'
              }`}>
                <Upload className={`h-8 w-8 transition-colors ${
                  dragActive ? 'text-primary' : 'text-muted-foreground'
                }`} />
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-foreground mb-2">
              Drop your files here, or click to browse
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Support for PNG, JPG, and PDF files up to 10MB
            </p>
            
            <input
              type="file"
              id="file-upload"
              multiple
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
              className="hidden"
            />
            <Button variant="outline" asChild>
              <label htmlFor="file-upload" className="cursor-pointer">
                Select Files
              </label>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Uploaded Documents ({uploadedFiles.length})
            </CardTitle>
            <CardDescription>
              Review your documents before analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="relative group bg-accent/30 rounded-lg p-4">
                  <button
                    onClick={() => removeFile(file.id)}
                    className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {file.file.type === 'application/pdf' ? (
                        <FileText className="h-8 w-8 text-destructive" />
                      ) : (
                        <Image className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">
                        {file.file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(file.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={analyzeDocuments}
                disabled={isAnalyzing}
                variant="medical"
                size="lg"
                className="flex-1"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Analyzing Documents...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Analyze Documents
                  </>
                )}
              </Button>
              
              <Button variant="outline" size="lg">
                <AlertCircle className="mr-2 h-4 w-4" />
                Try Demo Mode
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}