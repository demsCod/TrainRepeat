import { auth } from "./src/app/auth";
import { NextResponse } from "next/server";

// Désactiver l'authentification obligatoire pour l'instant
// permettre aux utilisateurs de tester l'app
export default auth(() => {
  // Pour l'instant, on laisse tout le monde accéder à l'app
  // Décommentez le code ci-dessous pour activer l'authentification obligatoire

  /*
  const { pathname } = req.nextUrl
  
  // Pages qui nécessitent une authentification
  const protectedPaths = ['/chat', '/profile', '/dashboard']
  
  // Vérifier si la route est protégée
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  
  if (isProtectedPath && !req.auth) {
    // Rediriger vers la page de connexion
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }
  */

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication routes)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
  ],
};
