import { Button } from "@/components/ui/button";
import { FileText, Brain, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

interface HeroProps {
  onAuth?: () => void;
}

export function Hero({ onAuth }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              AI-Powered Medical
              <span className="bg-gradient-medical bg-clip-text text-transparent"> Document Analysis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Upload your medical prescriptions and documents. Our AI instantly analyzes, 
              summarizes conditions, medications, and provides personalized health insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={onAuth}
              >
                Get Started
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={onAuth}
              >
                Try Demo Mode
              </Button>
            </div>
            
            <div className="mt-16">
              <img 
                src={heroImage} 
                alt="Medical AI Analysis Dashboard" 
                className="mx-auto rounded-lg shadow-medical max-w-4xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our medical AI analyzes documents with precision and provides actionable health insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="h-8 w-8 text-primary" />}
              title="AI Analysis"
              description="Advanced machine learning models analyze your medical documents for accurate condition detection and medication extraction."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-success" />}
              title="Secure & Private"
              description="Your medical data is encrypted and processed securely. We never store sensitive information permanently."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Comprehensive Reports"
              description="Get detailed reports with conditions, medications, recommended tests, and specialist referrals."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="bg-accent p-3 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}