import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

// Helper: lấy unitId từ URL
const getUnitIdFromRequest = (req: NextRequest) => {
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

  const unitId = getUnitIdFromRequest(req);

  const data = await db.query.units.findFirst({
    where: eq(units.id, unitId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const unitId = getUnitIdFromRequest(req);
  const body = await req.json();

  const data = await db
    .update(units)
    .set({ ...body })
    .where(eq(units.id, unitId))
    .returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const unitId = getUnitIdFromRequest(req);

  const data = await db.delete(units).where(eq(units.id, unitId)).returning();

  return NextResponse.json(data[0]);
}
