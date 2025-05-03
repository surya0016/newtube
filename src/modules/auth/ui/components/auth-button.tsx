"use client"
import { Button } from "@/components/ui/button"
import {UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { UserCircleIcon } from "lucide-react"
import Link from "next/link"

export const AuthButton = () => {
  return(
    <>
    <SignedIn>
      <UserButton/>
      {/* Add menu item for studio and user profile */}
    </SignedIn>
    <SignedOut>
      <SignInButton mode="modal">
        <Button 
          variant={"outline"} 
          className="px-4 py-2 rounded-full text-blue-600 font-medium text-sm hover:text-blue-500
          border-blue-500/20 shadow-none [&_svg]:size-4"
        >
          <UserCircleIcon/>
          Sign in
        </Button>
      </SignInButton>
    </SignedOut>
    </>
  )
}