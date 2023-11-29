//I don't know anything about this https://next-auth.js.org/configuration/providers/credentials

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        firstName: { label: "First Name", type: "text", placeholder: "Kunal" },
        lastName: { label: "Last Name", type: "text", placeholder: "Rawat" },
        email: { label: "Email", type: "email", placeholder: "test@gmail.com" },
        mobileNo: {
          label: "Mobile No.",
          type: "number",
          placeholder: "9911136266",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
