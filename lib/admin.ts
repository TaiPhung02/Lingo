import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2vZDt4d9ozYom0r2ehP9BQ3Xf6i"];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
