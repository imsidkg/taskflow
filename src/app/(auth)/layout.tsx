'use client'
import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface AuthLayoutProps {
    children : React.ReactNode
}

const layout = ({children}: AuthLayoutProps) => {
  const pathname  = usePathname();
  const isSignin = pathname === '/signin';

    return (
        <main className="bg-neutral-100 min-h-screen">
          <div className="mx-auto max-w-screen-2xl p-4">
            <nav className="flex justify-between items-center">
              <Image src="/logo.svg" height={40} width={80} alt="Logo" />
              <Button variant="secondary" asChild>
                <Link href = {isSignin ? '/signup' : '/signin'}>
                 {isSignin ? 'Sign Up' : 'Login'}
                </Link>
              
              </Button>
            </nav>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
              {children}
            </div>
          </div>
        </main>
      )
}

export default layout