import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  callbacks: {
    session({ session, token }) {
      return session;
    },
    signIn({ profile }) {
      return true;
    },
  },
});

export { handler as GET, handler as POST };
