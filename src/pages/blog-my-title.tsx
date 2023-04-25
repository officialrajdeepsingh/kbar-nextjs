import { Card } from "@/components/Card";
import PostHeader from "@/components/PostHeader";
import Image from 'next/image';
import { posts as data } from '../../data/post';
import dayjs from "dayjs"


export default function ReadingPage() {

  return (
    <>
      <PostHeader
        title={data[0].title}
        tag={data[0].tags[0]}
        date={dayjs(data[0].date).format("DD MMMM , YYYY")}
        authorName={data[0].author}
      />

      <div className="my-10 mx-auto">
        <Image
          height="250" width="500"
          src={data[0].image}
          alt={data[0].title}
          className="mx-auto h-[72%] w-[1424px]"
        />
      </div>

      <div className="my-12 prose prose-slate lg:prose-lg mx-auto">

        <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


        <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
          Design comps, layouts, wireframes will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.

          Not so fast, Id say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.

          The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread?
        </p>

        <h2>Toppings</h2>

        <p className="font-light text-gray-500 dark:text-gray-400" >
          The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.
          Design comps, layouts, wireframes will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>

        <p className="font-light text-gray-500 dark:text-gray-400">
          Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
          The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. Not so fast, I d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. esign comps, layouts, wireframes will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="container my-20 flex flex-col justify-center mx-auto">

        <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
          Other interesting posts
        </h2>

        <Card item={{ tags: data[0].tags, title: data[0].title, description: data[0].description }} />

      </div>


    </>
  );

}
