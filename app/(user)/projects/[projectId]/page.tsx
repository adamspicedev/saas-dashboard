import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { Globe, ChevronLeft, Code } from "lucide-react";
import Table from "@/components/table";
import { Button } from "@/components/ui/button";

const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;

  const projects = await db.query.projects.findMany({
    where: eq(dbProjects.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });

  const project = projects[0];

  return (
    <div>
      <div>
        <Link
          href="/dashboard"
          className="mb-5 flex w-fit items-center text-primary"
        >
          <ChevronLeft className="mr-1 h-5 w-5" />
          <span className="text-lg">Back to projects</span>
        </Link>
      </div>
      <div className="flex items-start justify-between">
        <div className="proj-info">
          <h1 className="mb-3 text-3xl font-bold">{project.name}</h1>
          <h2 className="text-primary-background mb-2 text-xl">
            {project.description}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {project.url ? (
            <Link href={project.url}>
              <Button variant="default">
                <Globe className="mr-1 h-5 w-5" />
                <span className="text-lg">Visit site</span>
              </Button>
            </Link>
          ) : null}
          <Link href={`/projects/${params.projectId}/instructions`}>
            <Button variant="default">
              <Code className="mr-1 h-5 w-5" />
              <span className="text-lg">Embed Code</span>
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Table data={project.feedbacks} />
      </div>
    </div>
  );
};

export default page;
