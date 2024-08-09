import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function Carousel() {
  const [articles, setArticles] = useState([]);

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

    <div className="container mx-auto max-w-4xl">
        <div className="carousel w-full bg-white">
          
            {articles.map((item, index) => (
              <div key={item.id} id={`slide${index + 1}`} className="carousel-item relative w-full ml-5">
                
                  <Image src={item.social_image} alt="top" className="w-full rounded-3xl" width={500} height={500}/>

                  <div className="hidden lg:flex flex-col p-4 absolute w-[598px] h-[252px] bg-white rounded-xl text-black top-2/4 left-2 right-5 shadow-lg">
                          <p className="badge badge-primary rounded-xl  text-white bg-[#4B6BFB] my-4 py-4">{item.tag_list[0]}</p>
                          <Link href={item.path} className="text-[#181A2A] text-[36px] font-bold">{item.title}</Link>
                          <div className="text-[#97989F]">{dayjs(articles.published_at).format("MMM/DD/YY")}</div>
                          <div>{dayjs(item.published_at).fromNow()}</div>
                  </div>

                  <div className="absolute rounded-lg md:z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${index}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${index + 2}`} className="btn btn-circle">❯</a>
                  </div>

              </div>
            ))}
          
        </div>



      

    </div>
  );
}


