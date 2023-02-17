import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Clab</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <div className="max-w-[615px]">
          <div className="aspect-w-3 aspect-h-1 text-center bg-red-200">
            <h1 className="p-1">CLAB</h1>
          </div>
          <div className="mx-6">
            <div className="flex">
              <div className="relative shrink-0 basis-[100px]">
                <div className="absolute top-[-50px] h-[100px] w-[100px] border-4 border-white rounded-full bg-red-300 "></div>
              </div>
              <div className=" ml-3.5">
                <p className="text-xl">Deepto</p>
                <p className="text-xs top-2">ddutta98@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Head>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
