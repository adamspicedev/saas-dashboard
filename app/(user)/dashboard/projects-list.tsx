"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";

import PricingSection from "@/components/landing-page/pricing-section";
import { DialogHeader, DialogPortal } from "@/components/ui/dialog";
import { maxFreeProjects } from "@/lib/stripe/payments";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lock } from "lucide-react";
import { useState } from "react";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
  subscribed: boolean | null | undefined;
};

const ProjectList = ({ projects, subscribed }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="m-5 grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="flex h-full max-w-[350px] flex-col">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        {subscribed !== true && projects?.length >= maxFreeProjects ? (
          <Card className="flex h-full max-w-[350px] flex-col">
            <CardHeader className="flex-1">
              <CardTitle className="flex flex-row items-center text-sm md:text-lg">
                <Lock className="mr-2 h-4 w-4 md:h-8 md:w-8" />
                <span>Upgrade to Premium</span>
              </CardTitle>
              <CardDescription className="mt-3">
                Unlock unlimited projects
              </CardDescription>
            </CardHeader>
            <div className="mx-auto mb-4 w-fit">
              <Button onClick={() => setOpen((prev) => !prev)}>
                Subscribe
              </Button>
            </div>
          </Card>
        ) : null}
      </ul>

      <Dialog
        modal={true}
        open={open}
        onOpenChange={setOpen}
        defaultOpen={open}
      >
        <DialogContent>
          <PricingSection showFree={false} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ProjectList;
