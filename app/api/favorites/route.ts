import { deleteFavorite, fetchFavorites, insertFavorite } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * GET /api/favorites
 */
export const GET = auth(async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const page = params.get("page") ? Number(params.get("page")) : 1;

  //@ts-ignore
  if (!req.auth) {
    return NextResponse.json(
      { error: "Unauthorized - Not logged in" },
      { status: 401 }
    );
  }

  const {
    user: { email }, //@ts-ignore
  } = req.auth;

  const favorites = await fetchFavorites(page, email);

  return NextResponse.json({ favorites });
});

export const POST = auth(async (req: NextRequest) => {
  const body = await req.json();
  const title_id = body.title_id;

  //@ts-ignore
  const email = req.auth?.user?.email;

  if(!email) {
    return NextResponse.json({ error: "Unathorized" }, { status: 401 });
  }

  try {
    await insertFavorite(title_id, email);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add favorite" }, { status: 500 });
  }
});

export const DELETE = auth(async (req: NextRequest) => {
  const body = await req.json();
  const title_id = body.title_id;

  //@ts-ignore
  const email = req.auth?.user?.email;

  if (!email) {
    return NextResponse.json({ error: "Unathorized"}, { status: 401 });
  }

  try {
    await deleteFavorite(title_id, email);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove favorite"}, { status: 500 });
  }
});
