import { SignInButton, } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>Login</Button>
      </SignInButton>
    </div>
  );
}
