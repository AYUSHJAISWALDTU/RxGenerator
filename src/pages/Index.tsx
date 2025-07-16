import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DocumentUpload } from "@/components/DocumentUpload";
import { AnalysisResults } from "@/components/AnalysisResults";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useAuth } from "@/context/AuthContext";
import { HowItWorks } from "@/components/HowItWorks";
import { SecuritySection } from "@/components/SecuritySection";

const Index = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  // Redirect to signin page
  const handleSignInRedirect = () => {
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header /> {/* Header will now get auth state from context */}
      
      {/* Conditionally render Hero or Dashboard based on authentication */}
      {!isAuthenticated ? (
        <>
          <Hero onAuth={handleSignInRedirect} />
          <HowItWorks />
          <SecuritySection />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;
