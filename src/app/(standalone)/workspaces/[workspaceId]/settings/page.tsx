import React from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const page = ({ params }: Props) => {
  return <div>{params.workspaceId}</div>;
};

export default page;
