import PaginationButtons from "@/components/PaginationButton";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <p>This is the landing page.</p>
      <PaginationButtons />
    </div>
  );
}
