import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Add compression headers
  response.headers.set('Content-Encoding', 'gzip');
  
  // Add caching headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|webp|avif)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};