import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const lead = await prisma.lead.update({ where: { id }, data: { ...(body.status && { status: body.status }), ...(body.name && { name: body.name }), ...(body.notes !== undefined && { notes: body.notes }) } });
    if (body.stage) await prisma.opportunity.update({ where: { leadId: id }, data: { stage: body.stage } });
    return NextResponse.json(lead);
  } catch { return NextResponse.json({ error: "تعذر تحديث العميل" }, { status: 500 }); }
}
