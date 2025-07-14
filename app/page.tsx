import PaginationButtons from "@/components/PaginationButton";
import Filter from "@/components/Filter";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div>
        <Filter />
      </div>
      <p>This is the landing page.</p>
      <PaginationButtons />
    </div>
  );
}
