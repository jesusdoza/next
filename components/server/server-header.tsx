"use client";
import { ServerWithMembersWithProfiles } from "@/types";

interface ServerHeaderProps {
  role: string;
  server: ServerWithMembersWithProfiles;
}

function ServerHeader({ role, server }: ServerHeaderProps) {
  return <div>ServerHeader</div>;
}

export default ServerHeader;
