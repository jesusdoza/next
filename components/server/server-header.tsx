"use client";
import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export function ServerHeader({ role, server }: ServerHeaderProps) {
  return <div>ServerHeader!</div>;
}
