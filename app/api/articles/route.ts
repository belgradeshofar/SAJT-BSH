import { supabase } from "../../api/auth";

export async function GET(req: Request) {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("articles").insert([body]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const { data, error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function PATCH(req: Request) {
  const { id, ...updates } = await req.json();
  const { data, error } = await supabase.from("articles").update(updates).eq("id", id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}