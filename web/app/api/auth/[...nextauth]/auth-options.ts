import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: NextAuthOptions = {
    providers: [
      AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID as string,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
        tenantId: process.env.AZURE_AD_TENANT_ID as string,
        authorization: { params: { scope: "openid profile user.Read email" } },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
      async jwt({ token, account}) {
        if (account) {
          token.idToken = account.id_token as string;
          token.accessToken = account.access_token as string;
        }
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken as string;
        session.idToken = token.idToken as string;
        //cookies().set('idToken', session.idToken);
        return session;
      },
    },
  };