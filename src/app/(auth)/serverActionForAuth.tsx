"use server"

import { signIn } from "next-auth/react"

        

export const calling=async()=>{
    await signIn("google")
}