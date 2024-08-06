import { Button } from "@/components/ui/button";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto mb-24 mt-4 flex flex-col justify-center px-4 md:flex-row">
        <div className="flex max-w-sm flex-col justify-center">
          <div className="mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Collect your feedback seamlessly
            </h1>
            <p className="text-lg text-gray-500">
              Easily integrate fdBK into you own website and start collecting
              feedback today.
            </p>
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <div className="flex gap-3">
                  <Button>
                    <LogIn className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="https://github.com">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
        <div className="max-w-lg flex-1">
          <Image
            src={"/demo.gif"}
            alt="demo"
            layout={"responsive"}
            width={155}
            height={155}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
