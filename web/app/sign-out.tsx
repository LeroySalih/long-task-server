"use client"

import Button from '@/components/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const SignOut = () => {

    const router = useRouter();

    async function handleLogout() {
        //("handleSignOut")
        await signOut({ redirect: false, callbackUrl: "/" });
        
        router.push('/');
    }


    return <Button onClick={handleLogout}>

    Sign Out
    </Button>
}

export default SignOut;



