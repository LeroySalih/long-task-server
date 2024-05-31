"use client"

import { signIn } from "next-auth/react";

const SignIn = () => {
    return <button onClick={() => { signIn('azure-ad') }}>
    Sign In
    </button>
}

export default SignIn;