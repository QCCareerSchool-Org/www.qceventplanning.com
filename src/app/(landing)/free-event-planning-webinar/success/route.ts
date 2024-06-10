import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  const host = request.headers.get('x-forwarded-host');
  const protocol = request.headers.get('x-forwarded-proto');
  const parameters: string[] = [];
  const contentType = request.headers.get('content-type');
  if (contentType && (contentType.startsWith('application/form-data') || contentType.startsWith('multipart/form-data') || contentType.startsWith('application/x-www-form-urlencoded'))) {
    const formData = await request.formData();
    if (formData) {
      for (const entry of formData.entries()) {
        if (typeof entry[1] === 'string' || typeof entry[1] === 'number' || typeof entry[1] === 'boolean') {
          parameters.push(`${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`);
        }
      }
    }
  }
  return Response.redirect(`${protocol}://${host}/free-event-planning-workshop/thank-you?${parameters.join('&')}`);
}
