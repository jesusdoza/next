import { Member, Profile, Server } from "@prisma/client";

//when doing query we include memberss and profiles
//this type will be used for dealing with that complex objec that returns from prisma query
export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
