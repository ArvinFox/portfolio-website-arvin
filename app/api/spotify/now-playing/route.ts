import { NextResponse } from "next/server"

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

async function getAccessToken() {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error("Missing Spotify credentials")
  }

  const basicAuth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64")

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to refresh Spotify token")
  }

  const data = await response.json()
  return data.access_token as string
}

export async function GET() {
  try {
    const accessToken = await getAccessToken()
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    )

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false })
    }

    if (!response.ok) {
      return NextResponse.json({ isPlaying: false }, { status: 200 })
    }

    const data = await response.json()

    if (!data?.item || data.currently_playing_type !== "track") {
      return NextResponse.json({ isPlaying: false })
    }

    const durationMs = data.item.duration_ms as number
    const progressMs = data.progress_ms as number
    const progress = durationMs > 0 ? Math.min(100, Math.round((progressMs / durationMs) * 100)) : 0

    return NextResponse.json({
      isPlaying: data.is_playing,
      name: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: data.item.album.name,
      albumArt: data.item.album.images?.[0]?.url ?? null,
      spotifyUrl: data.item.external_urls?.spotify ?? null,
      durationMs,
      progressMs,
      progress,
    })
  } catch (error) {
    console.error("Spotify now-playing error:", error)
    return NextResponse.json({ isPlaying: false }, { status: 200 })
  }
}
