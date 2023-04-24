import * as React from "react";
import { Card } from "@/components/Card";
import { posts } from "../../data/post";
import { Action, useRegisterActions } from "kbar";
import { useRouter } from "next/router";


export default function Home() {

  return (
    <>

      <div className="h-[450px] bg-[rgba(35,46,82,1)] w-fill flex flex-col justify-center items-center">
        <h1 className="text-6xl text-black dark:text-white -mt-12 mb-24">Nextjs + Kbar + Tailwind CSS </h1>
        <p className="text-xl text-black dark:text-white" >kbar is a fully extensible command+k interface for your site.</p>
        <p className="text-xl text-black dark:text-white">Try it out – press <code className="bg-gray-300 p-0.5">cmd+k </code> (macOS) or <code className="bg-gray-300 p-0.5"> ctrl+k </code>  (Linux/Windows), or click the logo above. </p>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">

            {
              posts.map(item => <Card item={item} />)
            }

          </div>
        </div>
      </section>

    </>
  );
}
