import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchGenres, fetchTitles } from "@/lib/data";
import MovieBrowser from "@/components/MovieBrowser";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!userEmail) {
    redirect("/api/auth/signin");
  }

  const allGenres = await fetchGenres();
  const genre = allGenres.length > 0 ? allGenres : [];

  const minYear = 1990;
  const maxYear = new Date().getFullYear();
  const page = 1;
  const PAGE_SIZE = 6;
  const effectiveQuery = "%";

  const titles = await fetchTitles(page, minYear, maxYear, effectiveQuery, genre, userEmail);
  const isLastPage = titles.length < PAGE_SIZE;

  return (
    <div className="flex flex-col justify-between min-h-screen space-y-6 px-2">
      <MovieBrowser
        genres={genre}
        userEmail={userEmail}
        initialTitles={titles}
        isLastPageInitial={isLastPage}
      />
    </div>
  )
}
