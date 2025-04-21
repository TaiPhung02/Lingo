import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// Helper để lấy courseId từ URL
const getCourseIdFromRequest = (req: NextRequest) => {
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

  const courseId = getCourseIdFromRequest(req);

  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const courseId = getCourseIdFromRequest(req);
  const body = await req.json();

  const data = await db
    .update(courses)
    .set({ ...body })
    .where(eq(courses.id, courseId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const courseId = getCourseIdFromRequest(req);

  const data = await db
    .delete(courses)
    .where(eq(courses.id, courseId))
    .returning();

  return NextResponse.json(data[0]);
}
