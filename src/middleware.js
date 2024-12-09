import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const cookieStore = cookies();
  const token = cookieStore.get('next-auth.session-token');

  console.log('Middleware token:', token);

  if (!token) {
    // Redirect to sign-in if token is missing
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // Allow the request to proceed if token exists
  return NextResponse.next();
};

export const config = {
  matcher: ['/about'],
};
// '/dashboard',