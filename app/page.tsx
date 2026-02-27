import { createSupabaseClient } from "@/lib/supabase";

export default async function Home() {
  const supabase = createSupabaseClient();

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*");

  if (error) {
    console.error(error);
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl mb-6">Tickets</h1>

      {tickets?.map((ticket) => (
        <div key={ticket.id} className="mb-2">
          {ticket.title}
        </div>
      ))}
    </main>
  );
}