import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import currentProfile from "@/lib/current-profile";
import { db } from "@/lib/db";

interface InviteCodePageProps {
  params: { inviteCode: string };
}

async function InviteCodePage({ params }: InviteCodePageProps) {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn;

  if (!params.inviteCode) return redirect("/");

  //find server invite and user is part of server already
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  //user is part of server already
  if (existingServer) return redirect(`/servers/${existingServer.id}`);

  //add user to server
  const server = await db.server.update({
    where: { inviteCode: params.inviteCode },
    data: { members: { create: [{ profileId: profile.id }] } },
  });

  return <div> InviteCodePage</div>;
}

export default InviteCodePage;
