import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// Helper: lấy param từ URL
const getChallengeOptionIdFromRequest = (req: NextRequest) => {
  const url = new URL(req.url);
  const parts = url.pathname.split("/");
  const id = parts[parts.length - 1];
  return parseInt(id, 10);
};

export async function GET(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const challengeOptionId = getChallengeOptionIdFromRequest(req);

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, challengeOptionId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const challengeOptionId = getChallengeOptionIdFromRequest(req);
  const body = await req.json();

  const data = await db
    .update(challengeOptions)
    .set(body)
    .where(eq(challengeOptions.id, challengeOptionId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const challengeOptionId = getChallengeOptionIdFromRequest(req);

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, challengeOptionId))
    .returning();

  return NextResponse.json(data[0]);
}
