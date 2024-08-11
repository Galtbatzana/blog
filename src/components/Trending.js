import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";


export function Trending({test}) {

  console.log({test})

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <Image src={test.social_image} width={300} height={300}/>
        </figure>

        <div className="card-body">
            <h2 className="card-title">{test.title}</h2>

            <p>{test.tag_list[0]}</p>

            <div>
             {dayjs(test.published_at).format("MMM/DD/YY")}
            </div>
        </div>
  </div>
  );
}

// <div className="card card-side glass bg-white shadow-lg">
//       <div className="flex gap-2 card-body">
//         <div className="card bg-white shadow-lg">
//           <div className=" bg-slate-50">
//             <Image src={articles.social_image} width={500} height={500} />
//           </div>

//           <div className="badge text-white bg-[#4B6BFB] mt-4 ml-2">
//             {articles?.tag_list && articles.tag_list[0]}
//           </div>

//           <Link href={`/${articles.path}`} className="bg-green-400 text-[#181A2A] ml-2 mt-2">
//             {articles.title}
//           </Link>

//           <div className="flex gap-4 articless-center m-2">
//             <Image
//               src={articles?.user?.profile_image}
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <div className="text-[#97989F]">{articles?.user?.name}</div>
//             <div>
//               <div className="text-[#97989F]">
//                 {dayjs(articles.published_at).format("MMM/DD/YY")}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>