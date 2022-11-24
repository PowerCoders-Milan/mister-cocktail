import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import db from '../../../database'

export const authOptions = {
  secret: 'Secre22t',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Log in",
      credentials: {
        username: { label: "Email", type: "text", placeholder: ".." },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await db.User.findOne()
        if (user) {
          console.log('user in auth ', user)
          return user
        } else {
          throw new Error('you need to register')
        }
      }
    })
  ],
}
export default NextAuth(authOptions)
