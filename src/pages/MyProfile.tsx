import React from 'react';
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyProfile = () => {
  const { userName, isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">My Profile</CardTitle>
          <CardDescription>View and manage your profile information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isAuthenticated ? (
            <div className="space-y-2">
              <p className="text-lg font-semibold">Welcome, {userName || "User"}!</p>
              <p className="text-muted-foreground">This is a placeholder for your profile details.</p>
              <p className="text-muted-foreground">You can add more information like email, subscription status, etc., here.</p>
              <Button variant="outline" className="mt-4">Edit Profile</Button>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Please sign in to view your profile.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfile; 