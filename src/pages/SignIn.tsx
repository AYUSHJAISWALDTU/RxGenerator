import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (email === "test@example.com" && password === "password") {
      login("Test User");
      toast({
        title: "Signed In",
        description: "Welcome back!",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Sign In Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    }
  };

  const handleGoogleSignIn = () => {
    // Simulate Google authentication
    login("Google User");
    toast({
      title: "Signed In with Google",
      description: "Welcome back!",
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription>Enter your credentials or sign in with Google</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">Sign In with Email</Button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account? <a href="/signup" className="underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn; 