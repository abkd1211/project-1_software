"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {

  const router = useRouter();
  const [id, setId] = useState("");
  const [pin, setPin] = useState("");
  const isEmpty = () => {
    if(id==="" || pin==="") {
      alert("Please fill all the inputs")
    }
    else
    router.push('/dashboard')
  }
  
  return (
    <div className="mx-auto max-w-md p-6 border border-gray-300 rounded-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your ID and PIN to sign in.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="id">ID</Label>
          <Input id="id" placeholder="Enter your ID" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pin">PIN</Label>
          <Input id="pin" type="password" placeholder="Enter your PIN" required />
        </div>
        <Button type="submit" className="w-full" onClick={() => router.push('/dashboard')}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
