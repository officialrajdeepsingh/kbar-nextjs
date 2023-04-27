import Link from 'next/link'
import React from 'react'
import { useRegisterActions } from "kbar";
import { useRouter } from 'next/router';

// Card component
export const Card = ({ item }: { item: {  title: string; description: string; tags: string[]; } }) => {
  
  // router 
  const router = useRouter();

  // Register Action 
  useRegisterActions([{
    id: item.title,
    name: item.title,
    keywords: item.description,
    shortcut: [],
    perform: () => router.push("/blog-my-title"),
    parent: "blog",
  }]);

  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.tags[0]}</span>
      <h2 className="sm:text-3xl dark:text-white text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.title}</h2>
      <p className="leading-relaxed mb-8 dark:text-gray-400">{item.description}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <Link href={"/blog-my-title"} className="text-indigo-500 inline-flex items-center">Learn More </Link >
      </div>
    </div>
  )
}
