"use client"

import { signIn } from "next-auth/react";
import Button from "../components/button";

const SignIn = () => {
    return <Button onClick={() => { signIn('azure-ad') }}>
    Sign In
    </Button>
}

export default SignIn;