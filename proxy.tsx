import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");

  const protectedRoutes = [
    "/dashboard",
    "/billing",
    "/notification",
    "/profile",
    "/tables",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/billing/:path*",
    "/notification/:path*",
    "/profile/:path*",
    "/tables/:path*",
  ],
};