import PaginationButtons from "@/components/PaginationButton";
import Filter from "@/components/Filter";

export default async function Page() {
  return (
    <div className="flex flex-col justify-between h-screen space-y-6 px-2">
      <section className="w-full">
        <Filter />
      </section>

      <section>
        <p>This is the landing page.</p>
      </section>

      <footer>
        <PaginationButtons />
      </footer>
    </div>
  );
}
