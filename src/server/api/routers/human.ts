import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const HumanRouter = createTRPCRouter({
  getHumanByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ input }) => {
      return {
        id: "1234",
        avatar:"/avatar.png",
        header:"/header.png",
        name:"deepto",
        username:"ddepp98",
        address:"ddutta98@gmail.com",
        summary:"",
        followersCount:1,
        followingCount:10,
      };
    }),
});
