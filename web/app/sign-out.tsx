"use client"

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const SignOut = () => {

    const router = useRouter();

    async function handleLogout() {
        //("handleSignOut")
        await signOut({ redirect: false, callbackUrl: "/" });
        
        router.push('/');
    }


    return <button onClick={handleLogout}>

    Sign Out
    </button>
}

export default SignOut;



