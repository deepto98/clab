import { createTRPCRouter } from "./trpc";
import { HumanRouter } from "./routers/human";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  human: HumanRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
