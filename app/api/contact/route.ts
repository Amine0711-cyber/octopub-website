import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    /* Form sends "tel" (legacy field name) — accept both */
    const { nom, telephone, tel, email, service, message } = body;
    const phone = (telephone || tel)?.trim();

    if (!nom?.trim() || !phone) {
      return NextResponse.json(
        { error: "Nom et téléphone sont requis" },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert({
      nom: nom.trim(),
      telephone: phone,
      email: email?.trim() || null,
      service: service?.trim() || null,
      message: message?.trim() || null,
      statut: "nouveau",
    });

    if (error) {
      console.error("Supabase contact insert error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement", detail: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
