import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { randomInt } from './lib/randomInt';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

const middleware = (request: NextRequest): NextResponse => {
  const testValueCookie = request.cookies.get('testValue');

  const response = NextResponse.next();

  if (testValueCookie) {
    const testValueCookieValue = parseInt(testValueCookie.value, 10);
    if (!isNaN(testValueCookieValue) && testValueCookieValue >= 1 && testValueCookieValue <= 12 && Math.floor(testValueCookieValue) === testValueCookieValue) {
      return response;
    }
  }

  const testValue = randomInt(1, 12);
  response.cookies.set('testValue', testValue.toString());
  return response;
};

export default middleware;
