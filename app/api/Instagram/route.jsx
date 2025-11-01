import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
  );

  const data = await res.json();

  const reels = data.data?.filter(
    (item) => item.media_type === "VIDEO"
  ) || [];

  return NextResponse.json(reels);
}
