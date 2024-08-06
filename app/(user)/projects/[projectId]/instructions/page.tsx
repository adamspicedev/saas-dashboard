import CopyBtn from "@/components/copy-button";

const InstructionsPage = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <p className="text-lg text-secondary-foreground">
        Available positions are top-left, top-right, bottom-left and
        bottom-right. If you do not supply a position it will default to
        bottom-right.
      </p>
      <div className="relative mt-6 rounded-md bg-blue-950 p-6">
        <code className="text-white">
          {`<my-widget project-id="${params.projectId}" position="bottom-right"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget project="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  );
};

export default InstructionsPage;
