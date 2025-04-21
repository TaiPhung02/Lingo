import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// Helper để lấy challengeId từ URL
const getChallengeIdFromRequest = (req: NextRequest) => {
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

  const challengeId = getChallengeIdFromRequest(req);

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const challengeId = getChallengeIdFromRequest(req);
  const body = await req.json();

  const data = await db
    .update(challenges)
    .set({ ...body })
    .where(eq(challenges.id, challengeId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const challengeId = getChallengeIdFromRequest(req);

  const data = await db
    .delete(challenges)
    .where(eq(challenges.id, challengeId))
    .returning();

  return NextResponse.json(data[0]);
}
