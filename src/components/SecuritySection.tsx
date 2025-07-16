import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Key, Trash2, CloudOff, FileText, UserCircle, Hand, Landmark, Brain, Server, Lightbulb } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Security, Our <span className="bg-gradient-medical bg-clip-text text-transparent">Priority</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to protecting your sensitive medical data with industry-leading security measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Data Privacy & Encryption */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-primary/10 mx-auto w-fit mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Data Privacy & Encryption</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0 text-success" />
                  <span>All documents are securely stored using end-to-end encryption.</span>
                </li>
                <li className="flex items-start">
                  <Key className="h-5 w-5 mr-2 flex-shrink-0 text-success" />
                  <span>Data is encrypted both in transit (HTTPS) and at rest (server encryption).</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Secure AI Processing */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-success/10 mx-auto w-fit mb-4">
                <Brain className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-2xl font-semibold">Secure AI Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>Uploaded files are exclusively used to generate medical summaries.</span>
                </li>
                <li className="flex items-start">
                  <Server className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>AI processing occurs within a secure backend environment.</span>
                </li>
                <li className="flex items-start">
                  <Hand className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>No document is shared or reused without your explicit permission.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* User Account Security */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-secondary/10 mx-auto w-fit mb-4">
                <UserCircle className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold">User Account Security</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0 text-success" />
                  <span>Users must log in using Google OAuth or secure email login.</span>
                </li>
                <li className="flex items-start">
                  <Key className="h-5 w-5 mr-2 flex-shrink-0 text-success" />
                  <span>Sessions are protected using robust JWT tokens or secure cookies.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* User Control */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-accent/10 mx-auto w-fit mb-4">
                <Trash2 className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold">Your Control</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Trash2 className="h-5 w-5 mr-2 flex-shrink-0 text-destructive" />
                  <span>You can delete your uploaded documents at any time.</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>No data is shared with third parties without your consent.</span>
                </li>
                <li className="flex items-start">
                  <CloudOff className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>Option to opt-out of storage and keep data session-based only.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Compliance */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-primary/10 mx-auto w-fit mb-4">
                <Landmark className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold">Compliance & Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0 text-success" />
                  <span>Our system adheres to best practices for HIPAA and GDPR for medical data privacy.</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>Data logs and access are strictly auditable by authorized administrators only.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Demo Mode Safe */}
          <Card className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-medical">
            <CardHeader>
              <div className="p-4 rounded-full bg-success/10 mx-auto w-fit mb-4">
                <Lightbulb className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-2xl font-semibold">Demo Mode Safety</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>In Demo Mode, no real medical data is ever uploaded or processed.</span>
                </li>
                <li className="flex items-start">
                  <CloudOff className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                  <span>Only static sample documents and AI-generated summaries are utilized.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 