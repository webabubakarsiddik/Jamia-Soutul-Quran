import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // TEMPORARY: Bypass Supabase for frontend demo
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
}
