import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// Helper: Lấy lessonId từ URL
const getLessonIdFromRequest = (req: NextRequest) => {
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

  const lessonId = getLessonIdFromRequest(req);

  const data = await db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const lessonId = getLessonIdFromRequest(req);
  const body = await req.json();

  const data = await db
    .update(lessons)
    .set({ ...body })
    .where(eq(lessons.id, lessonId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const lessonId = getLessonIdFromRequest(req);

  const data = await db
    .delete(lessons)
    .where(eq(lessons.id, lessonId))
    .returning();

  return NextResponse.json(data[0]);
}
