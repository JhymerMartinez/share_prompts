import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
console.log({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
});
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
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