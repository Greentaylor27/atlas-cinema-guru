import { fetchWatchLaters } from "@/lib/data";
import FavoritesMovieBrowser from "@/components/FavoritesMovieBrowser";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function WatchLaterPage({ searchParams }: { searchParams?: { page?: string } }) {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!userEmail) {
    redirect("api/auth/signin");
  }

  const currentPage = Number(searchParams?.page) || 1;
  const PAGE_SIZE = 6;

  const titles = await fetchWatchLaters(currentPage, userEmail);
  const isLastPage = titles.length < PAGE_SIZE;

  return (
    <div className="flex flex-col justify-between min-h-screen space-y-4 px-2">
      <h1 className="text-2xl font-bold text-center py-3">Watch Later</h1>
      <FavoritesMovieBrowser
        titles={titles}
        currentPage={currentPage}
        isLastPageInitial={isLastPage}
        userEmail={userEmail}
      />
    </div>
  )
}
