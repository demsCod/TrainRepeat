import NextAuth from "next-auth";
// import Google from "next-auth/providers/google"
// import Apple from "next-auth/providers/apple"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Providers désactivés temporairement pour éviter les erreurs de configuration
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Apple({
    //   clientId: process.env.APPLE_CLIENT_ID,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Extend session with access token
      return {
        ...session,
        accessToken: token.accessToken,
      };
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
});
