import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type Role = "admin" | "seller" | "buyer";

const PUBLIC_PATHS = [
  "/",
  "/signup",
  "/forgotPassword",
  "/reset-password",
  "/login", 
];

const DASHBOARD_PERMISSIONS: Record<string, Role> = {
  "/admin": "admin",
  "/seller-dashboard": "seller",
  "/buyer-dashboard": "buyer",
};

const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const roleCookie = (await cookies()).get("role")?.value;
  const userRole = roleCookie;

  // First, check if it's a public path
  if (PUBLIC_PATHS.includes(pathname)) {
    // If user is logged in and tries to access login page, redirect to their dashboard
    if (userRole && pathname === "/login") {
      const dashboardPath = Object.keys(DASHBOARD_PERMISSIONS).find(
        (path) => DASHBOARD_PERMISSIONS[path] === userRole
      );
      if (dashboardPath) {
        return NextResponse.redirect(new URL(dashboardPath, request.url));
      }
    }
    return NextResponse.next();
  }

  // If not a public path and no user role, redirect to login
  if (!userRole) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Protect dashboard routes based on user role
  const requiredRole = DASHBOARD_PERMISSIONS[pathname];
  if (requiredRole && userRole !== requiredRole) {
    return NextResponse.redirect(new URL("/no-access", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    // "/admin/:path*",
    "/seller-dashboard/:path*",
    "/buyer-dashboard/:path*",
    // "/login",
  ],
};

export default middleware;