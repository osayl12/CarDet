import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Quote request API route.
//
// Right now this just validates the input and appends it to a local JSON
// file (data/leads.json) so the form is fully functional for local testing.
//
// TO CONNECT TO MONGODB ATLAS LATER:
// 1. npm install mongodb
// 2. Add MONGODB_URI to a .env.local file (get it from MongoDB Atlas ->
//    Connect -> Drivers).
// 3. Replace the "save locally" block below with:
//
//    import { MongoClient } from "mongodb";
//    const client = new MongoClient(process.env.MONGODB_URI!);
//    await client.connect();
//    await client.db("cardet").collection("leads").insertOne(lead);
//    await client.close();
//
// That's it — no other part of the app needs to change.
// ---------------------------------------------------------------------------

type QuoteBody = {
  name?: string;
  phone?: string;
  email?: string;
  carModel?: string;
  service?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let body: QuoteBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, phone, email, carModel, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "name and phone are required" },
      { status: 400 }
    );
  }

  const lead = {
    name,
    phone,
    email: email || null,
    carModel: carModel || null,
    service: service || null,
    message: message || null,
    createdAt: new Date().toISOString(),
  };

  // --- save locally (swap for MongoDB later, see comment above) ---
  try {
    const filePath = path.join(process.cwd(), "data", "leads.json");
    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(lead);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("failed to persist lead", err);
    return NextResponse.json({ error: "failed to save" }, { status: 500 });
  }

  console.log("New quote request:", lead);

  return NextResponse.json({ ok: true });
}
