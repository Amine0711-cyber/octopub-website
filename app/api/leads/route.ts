import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, telephone, email, service, budget, delai, message } = body;

    if (!nom?.trim() || !telephone?.trim()) {
      return NextResponse.json({ error: "Nom et téléphone requis" }, { status: 400 });
    }

    /* Encode budget/delai into message since they have no dedicated columns */
    const extras = [budget, delai].filter(Boolean).join(" · ");
    const fullMessage = [message, extras].filter(Boolean).join("\n") || null;

    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert({
      nom: nom.trim(),
      telephone: telephone.trim(),
      email: email?.trim() || null,
      service: service || null,
      message: fullMessage,
      statut: "nouveau",
    });

    if (error) {
      console.error("Supabase leads insert error:", error);
      return NextResponse.json({ error: "Erreur serveur", detail: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Leads route exception:", err);
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
