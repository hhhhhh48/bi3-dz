import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" }, include: { opportunity: true } });
    return NextResponse.json(leads);
  } catch { return NextResponse.json({ error: "تعذر تحميل العملاء المحتملين" }, { status: 500 }); }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name?.trim()) return NextResponse.json({ error: "اسم العميل مطلوب" }, { status: 400 });
    const company = await prisma.company.findFirst();
    if (!company) return NextResponse.json({ error: "أنشئ شركة أولاً" }, { status: 400 });
    const lead = await prisma.lead.create({ data: { companyId: company.id, name: body.name.trim(), phone: body.phone || null, email: body.email || null, customerCompany: body.customerCompany || null, source: body.source || null, notes: body.notes || null, opportunity: { create: {} } }, include: { opportunity: true } });
    return NextResponse.json(lead, { status: 201 });
  } catch { return NextResponse.json({ error: "تعذر حفظ العميل" }, { status: 500 }); }
}
