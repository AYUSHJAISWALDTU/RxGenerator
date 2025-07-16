import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, Upload, LayoutDashboard, ToggleLeft, ShieldCheck, Lock, Lightbulb } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How RxGenerator <span className="bg-gradient-medical bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience seamless medical document analysis with our intelligent AI assistant.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4 text-primary font-semibold text-lg">
            <ShieldCheck className="h-6 w-6" />
            <span>Secure. Private.</span>
            <div className="h-6 border-l border-primary/50"></div>
            <Lightbulb className="h-6 w-6" />
            <span>Powered by AI.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Upload Your Prescription */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-primary/10 mx-auto w-fit mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Step 1: Upload Your Document</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-2">Securely upload your .jpg, .png, or .pdf medical prescriptions and lab reports using our intuitive drag-and-drop interface.</p>
              <div className="bg-accent/50 p-4 rounded-lg mt-4 border border-border">
                <p className="text-sm font-medium">Drag & Drop Area</p>
                <p className="text-xs text-muted-foreground">+ Preview Available</p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: AI Extraction */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-success/10 mx-auto w-fit mb-4">
                <Brain className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-2xl font-semibold">Step 2: AI Extraction</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-2">Our advanced AI, powered by OCR and medical NLP models, accurately extracts key information.</p>
              <ul className="text-left text-sm mt-4 space-y-1">
                <li className="flex items-center"><FileText className="h-4 w-4 mr-2 text-muted-foreground" /> Medical Conditions</li>
                <li className="flex items-center"><Brain className="h-4 w-4 mr-2 text-muted-foreground" /> Medications (with dosage)</li>
                <li className="flex items-center"><Lightbulb className="h-4 w-4 mr-2 text-muted-foreground" /> Suggested Tests</li>
                <li className="flex items-center"><ShieldCheck className="h-4 w-4 mr-2 text-muted-foreground" /> Specialist Type</li>
                <li className="flex items-center"><LayoutDashboard className="h-4 w-4 mr-2 text-muted-foreground" /> Severity & Confidence Score</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 3: Display Results */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-secondary/10 mx-auto w-fit mb-4">
                <LayoutDashboard className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold">Step 3: Display Results</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-2">View your comprehensive AI diagnosis in a clean, easy-to-read card or table format on your dashboard.</p>
              <ul className="text-left text-sm mt-4 space-y-1">
                <li className="flex items-center"><FileText className="h-4 w-4 mr-2 text-muted-foreground" /> File Name & Upload Date</li>
                <li className="flex items-center"><Brain className="h-4 w-4 mr-2 text-muted-foreground" /> Conditions & Medications</li>
                <li className="flex items-center"><Lightbulb className="h-4 w-4 mr-2 text-muted-foreground" /> Tests & Specialist</li>
                <li className="flex items-center"><ShieldCheck className="h-4 w-4 mr-2 text-muted-foreground" /> Severity + Confidence</li>
              </ul>
              <p className="text-sm mt-4">Includes options to Download PDF or Save results.</p>
            </CardContent>
          </Card>

          {/* Step 4: Choose Mode */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-accent/10 mx-auto w-fit mb-4">
                <ToggleLeft className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold">Step 4: Choose Your Mode</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-2">Switch between Live Mode for real backend analysis or Demo Mode for quick sample data insights.</p>
              <div className="bg-card p-4 rounded-lg mt-4 border border-border text-left">
                <p className="font-medium text-foreground">Demo Mode Example:</p>
                <p className="text-sm">• Condition: Type 2 Diabetes</p>
                <p className="text-sm">• Medication: Metformin 500mg</p>
                <p className="text-sm">• Specialist: Endocrinologist</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 