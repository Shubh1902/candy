import FileExplorer from "@/app/components/fileExplorer";
import React from "react";

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const getComponent = () => {
    switch (params.slug) {
      case "file-explorer":
        return <FileExplorer />;
      case "autocomplete":
        return <FileExplorer />;
      default:
        return <></>;
    }
  };
  return <div>{getComponent()}</div>;
};

export default ProjectDetails;
