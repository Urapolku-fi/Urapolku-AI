import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // If you need to allow any routes, add them to this array.
  publicRoutes: [],
});

export const config = {
  // If you need to block any routes, add them to this array.
  matcher: ["/questions", "/api(.*)"],
};
