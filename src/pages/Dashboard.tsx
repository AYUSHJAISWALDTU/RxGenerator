import { useState, useEffect, useCallback } from "react";
import { DocumentUpload } from "@/components/DocumentUpload";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  date: string;
  diagnosis: string;
  downloadLink: string;
  shareLink: string;
}

const Dashboard = () => {
  const { userName } = useAuth();
  const [currentView, setCurrentView] = useState<'upload' | 'results'>('upload');
  const [userDocuments, setUserDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchDocuments = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const fetchedDocs: Document[] = [
        { id: "1", name: "Medical Report 2023", date: "2023-10-26", diagnosis: "Hypertension", downloadLink: "#", shareLink: "#" },
        { id: "2", name: "Lab Results Oct", date: "2023-09-15", diagnosis: "Normal", downloadLink: "#", shareLink: "#" },
        { id: "3", name: "Prescription Jan 2024", date: "2024-01-10", diagnosis: "Common Cold", downloadLink: "#", shareLink: "#" },
      ];
      setUserDocuments(fetchedDocs);
    } catch (err) {
      setError("Failed to fetch documents. Please try again.");
      console.error("Error fetching documents:", err);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]); // Re-run effect if fetchDocuments changes

  const handleAnalysisComplete = () => {
    // After analysis, refresh the document list
    fetchDocuments();
    setCurrentView('results'); // Optionally switch to results view after upload
  };

  const handleDeleteDocument = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call for deletion
      await new Promise(resolve => setTimeout(resolve, 500)); 
      // Filter out the deleted document
      setUserDocuments(prevDocs => prevDocs.filter(doc => doc.id !== id));
      // Re-fetch documents to ensure consistency (or just update state if confident)
      fetchDocuments();
      toast({
        title: "Document Deleted",
        description: "The document has been removed successfully.",
      });
    } catch (err) {
      setError("Failed to delete document. Please try again.");
      console.error("Error deleting document:", err);
      toast({
        title: "Deletion Failed",
        description: "There was an error deleting the document.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [fetchDocuments, toast]);

  const handleDownloadPdf = (documentName: string, link: string) => {
    // Simulate PDF download
    window.open(link, '_blank');
    toast({
      title: "Download Initiated",
      description: `Downloading ${documentName}.`,
    });
    console.log(`Simulating download for: ${documentName}, link: ${link}`);
  };

  const handleShareWithDoctor = (documentName: string, link: string) => {
    // Simulate sharing functionality
    toast({
      title: "Share with Doctor",
      description: `Simulating sharing for ${documentName}. In a real app, this would open a sharing interface or send an email.`, 
    });
    console.log(`Simulating sharing for: ${documentName}, link: ${link}`);
  };

  const renderDashboardContent = () => {
    switch (currentView) {
      case 'upload':
        return <DocumentUpload onAnalysisComplete={handleAnalysisComplete} />;
      case 'results':
        return <AnalysisResults isDemoMode={true} />;
      default:
        return <DocumentUpload onAnalysisComplete={handleAnalysisComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard specific navigation */}
      <div className="bg-accent/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3 space-x-4">
            <button
              onClick={() => setCurrentView('upload')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === 'upload' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              Upload Documents
            </button>
            <button
              onClick={() => setCurrentView('results')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === 'results' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              Analysis Results
            </button>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <h2 className="text-2xl font-bold text-center mt-8">Welcome, {userName || "User"}!</h2>
        <p className="text-center text-muted-foreground mb-8">Manage your documents and analysis results.</p>
        
        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-[150px] w-full rounded-lg" />
            <Skeleton className="h-[150px] w-full rounded-lg" />
            <Skeleton className="h-[150px] w-full rounded-lg" />
          </div>
        ) : error ? (
          <p className="text-center text-red-500 mt-8">Error: {error}</p>
        ) : userDocuments.length > 0 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold mb-4">Your Document History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userDocuments.map((doc) => (
                <div key={doc.id} className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
                  <p className="text-sm text-muted-foreground">Uploaded on: {doc.date}</p>
                  <p className="text-sm text-muted-foreground">Diagnosis: {doc.diagnosis}</p>
                  <div className="mt-4 flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDownloadPdf(doc.name, doc.downloadLink)}
                    >
                      Download PDF
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleShareWithDoctor(doc.name, doc.shareLink)}
                    >
                      Share with Doctor
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeleteDocument(doc.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-8">No documents uploaded yet.</p>
        )}

        <div className="mt-12">
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 