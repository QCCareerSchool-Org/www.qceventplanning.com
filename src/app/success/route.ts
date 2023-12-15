import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const host = request.headers.get('x-forwarded-host');
  const protocol = request.headers.get('x-forwarded-proto');
  const parameters: string[] = [];
  const formData = (await request.formData()).entries();
  for (const entry of formData) {
    if (typeof entry[1] === 'string' || typeof entry[1] === 'number' || typeof entry[1] === 'boolean') {
      parameters.push(`${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`);
    }
  }
  // doesn't work because of 307 or 308 and we need to switch to a GET request (301, 302)
  return NextResponse.redirect(`${protocol}://${host}/thank-you-course-catalog?${parameters.join('&')}`);
}
