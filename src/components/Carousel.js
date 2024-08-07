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

    <div className="container mx-auto hidden md:block">
      <div className="carousel max-w-[1216px] max-h-[651px]">
        <div id="slide1" className="carousel-item relative w-full">
          {articles.map((item, index) => (
            <div key={item.id} id={`slide${index + 1}`} className="carousel-item relative w-full">
              
              <Image src={item.social_image} className="w-full" width={300} height={300} />

                <div className="absolute w-[598px] h-[252px] bg-white rounded-lg left-2 right-5 top-2/3 flex flex-col -translate-y-1/2 transform p-4 shadow-lg">
                    <p className="badge bg-slate-200 text-[#4B6BFB] my-4">{item.tag_list[0]}</p>
                    <Link href={item.path} className="text-[#181A2A] text-[36px] font-bold">{item.title}</Link>
                    <div className="text-[#97989F]">{dayjs(articles.published_at).format("MMM/DD/YY")}</div>
                    <div>{dayjs(item.published_at).fromNow()}</div>
                </div>
                <div>
                  <a href={`#slide${index}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${index + 2}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// {}
//             <Image src={item.social_iamge} width={300} height={300}></Image>
//             <div>
//               
//             </div>
