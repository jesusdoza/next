import { useSearchParams } from "next/navigation";

const ServerIdPage = ({ params }: { params: { serverId: string } }) => {
  const { serverId } = params;

  return <div>server id page for server: {serverId}</div>;
};

export default ServerIdPage;
