import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Logo from "../logo";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
      <div className="relative mx-auto w-full max-w-screen-xl border-b px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex flex-row gap-4">
            <ModeToggle />
            <SignedOut>
              <SignInButton>
                <Button className="bg-primary">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2 bg-primary">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
