import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const human = api.human.getHumanByUsername.useQuery({ username: "deepto" });

  return (
    <>
      <Head>
        <title>Clab</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[615px]">
        <div className="aspect-w-3 aspect-h-1 bg-red-200 text-center">
          <h1 className="p-1">CLAB</h1>
        </div>
        <div className="mx-6 mt-2">
          <div className="flex">
            <div className="relative shrink-0 basis-[100px]">
              <div className="absolute top-[-50px] h-[100px] w-[100px] rounded-full border-4 border-white bg-red-300 "></div>
            </div>
            <div className="relative ml-3.5 min-w-0">
              <p className="text-xl">Deepto</p>
              <p className="overflow-hidden text-ellipsis text-xs">
                ddutta98@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-7">
            Summary - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, odit.
          </div>
          <div className="mt-3.5 flex">
            <p>
              <span className="font-semibold">100</span>
              &nbsp;Followers
            </p>
            <p>
              <span className="ml-5 font-semibold">100</span>
              &nbsp;Following
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
