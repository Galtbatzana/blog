import daisyui from "daisyui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function SpecialNews() {
  const [articles, setArticles] = useState();

  useEffect(() => {
     fetch("https://dev.to/api/articles?username=paul_freeman")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);
  
  return (
        <div className="container mx-auto">
            <div className="carousel w-[1200px] h-[600px] bg-yellow-300">
                <div id="slide1" className="carousel-item relative w-[1100px] h-[500px]">
                    {articles && articles.map((items)=> (
                        <div key={items.id} className="">
                            <Image src={items.social_image} width={200} height={200} className="w-[600px] h-[300px]" />
                            <div className="absolute">
                                <Link href={items.description} />
                                <p className="badge badge-primary">{items.tag_list[0]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </div>

  );
}

// <div className="container mx-auto hidden md:block lg:block">
// <div className="flex w-full">
//   {articles && articles.map((item) =>(
//       <div key={item.id} className="carousel w-full">
//           <Image src={item.social_image} width={200} height={200} className="w-full size-60"/>
//           <div>
//               <Link href={item.description}></Link>
//               <div className="">{item.description}</div>
//               <p className="badge badge-primary">{item.tag_list[0]}</p>
//           </div>
//       </div>
//   ))}
// </div>
// </div>
