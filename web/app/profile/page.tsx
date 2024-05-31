import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"

import {callFullApi} from "@/app/lib/graph-lib";

const ProfilePage = async () => {

    const getProfile = async (token: string) => {

        const {data, error} = await callFullApi("https://graph.microsoft.com/v1.0/me", token);

        if (error){
            console.error(error);
        } else {
            console.error(data);
        }

        return data;
    }

    const session = await getServerSession(authOptions);

    if (!session || !session?.accessToken) {
        return <h1>Not Logged in</h1>
    }

    const userProfile = await getProfile(session?.accessToken);

    return <>
        <h1>Profile Page</h1>
        <pre>{JSON.stringify(session && session.accessToken, null, 2)}</pre>
        <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </>
}

export default ProfilePage;