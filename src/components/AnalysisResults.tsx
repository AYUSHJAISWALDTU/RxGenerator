import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Stethoscope, TestTube, UserCheck, Download, Save, Share } from "lucide-react";

interface AnalysisResult {
  id: string;
  documentName: string;
  conditions: string[];
  medications: Array<{
    name: string;
    dosage: string;
  }>;
  tests: string[];
  specialist: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
  confidence: number;
}

// Demo data
const demoResults: AnalysisResult[] = [
  {
    id: '1',
    documentName: 'prescription_2024.pdf',
    conditions: ['Type 2 Diabetes', 'Hypertension'],
    medications: [
      { name: 'Metformin', dosage: '500mg twice daily' },
      { name: 'Amlodipine', dosage: '5mg once daily' }
    ],
    tests: ['HbA1c', 'Blood Pressure Monitoring', 'Lipid Profile'],
    specialist: 'Endocrinologist',
    severity: 'Moderate',
    confidence: 92
  },
  {
    id: '2',
    documentName: 'lab_report_jan.pdf',
    conditions: ['Vitamin D Deficiency', 'Iron Deficiency Anemia'],
    medications: [
      { name: 'Vitamin D3', dosage: '2000 IU daily' },
      { name: 'Iron Supplement', dosage: '65mg daily' }
    ],
    tests: ['Complete Blood Count', 'Vitamin D Level', 'Iron Studies'],
    specialist: 'General Practitioner',
    severity: 'Mild',
    confidence: 88
  }
];

interface AnalysisResultsProps {
  results?: AnalysisResult[];
  isDemoMode?: boolean;
}

export function AnalysisResults({ results = demoResults, isDemoMode = true }: AnalysisResultsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Mild': return 'bg-success/10 text-success border-success/20';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Severe': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Analysis Results</h2>
        {isDemoMode && (
          <Badge variant="outline" className="bg-accent text-accent-foreground">
            Demo Mode - Sample Data
          </Badge>
        )}
      </div>

      <div className="grid gap-6">
        {results.map((result) => (
          <Card key={result.id} className="shadow-card hover:shadow-medical transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    {result.documentName}
                  </CardTitle>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge className={getSeverityColor(result.severity)}>
                      {result.severity}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Confidence: {result.confidence}%
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Conditions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    Conditions
                  </h4>
                  <div className="space-y-2">
                    {result.conditions.map((condition, index) => (
                      <Badge key={index} variant="secondary" className="block w-fit">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Medications */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Pill className="h-4 w-4 text-primary" />
                    Medications
                  </h4>
                  <div className="space-y-2">
                    {result.medications.map((med, index) => (
                      <div key={index} className="text-sm">
                        <div className="font-medium text-foreground">{med.name}</div>
                        <div className="text-muted-foreground">{med.dosage}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tests */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <TestTube className="h-4 w-4 text-primary" />
                    Suggested Tests
                  </h4>
                  <div className="space-y-2">
                    {result.tests.map((test, index) => (
                      <Badge key={index} variant="outline" className="block w-fit">
                        {test}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specialist */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-primary" />
                    Specialist
                  </h4>
                  <Badge variant="outline" className="bg-accent text-accent-foreground">
                    {result.specialist}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isDemoMode && (
        <Card className="bg-accent/50 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Ready for Real Analysis?</h3>
            <p className="text-muted-foreground mb-4">
              Connect to our AI backend for real document analysis with OCR and medical AI models.
            </p>
            <Button variant="medical">
              Enable Live Mode
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}