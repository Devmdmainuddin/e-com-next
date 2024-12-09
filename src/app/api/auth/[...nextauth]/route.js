import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions={
    secret: process.env.NEXTAUTH_SECRET ,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, 
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if (!credentials || !credentials.email || !credentials.password) {
                    console.error("Missing credentials");
                    return null;
                }
               
                if(email){
                    const db=await connectDB();
                    const currentUser =await db.collection('users').findOne({email})
                    console.log(currentUser);
                    // const currentUser = users.find((user) => user.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return {...currentUser};
                        }
                    } 
                }
                return null; 
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
    ],

    callbacks: {
        async jwt({ token, user, account, }) {
            if (account) {
              token.type = user.type;
            }
          return token
        },
        async session({ session, token,  }) {
            session.user.type = token.type;
            return session
          },
      }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
