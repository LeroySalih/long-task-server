import Image from "next/image";

import SignIn from "./sign-in";
import SignOut from "./sign-out";

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"
import Link from "next/link";
import Button from "../components/button";

export default async function Home() {
  //console.log("Client ID:", process.env.AZURE_AD_CLIENT_ID);

  console.log("Database HOST", process.env.POSTGRES_HOST);
  console.log("Message HOST", process.env.RABBITMQ_DEFAULT_HOST);

  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return <SignIn/>
  }
  return (
    <>
    <h1>{session.user.name}<SignOut/></h1>
    </>
  );
}
