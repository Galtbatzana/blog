import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Trending() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=ben")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center bg-yellow">
      <div className="carousel w-80 p-8 md:w-[750px] lg:w-[900px] gap-6 rounded-lg bg-green-300">
        {articles.map((item) => (
          <div key={item.id} className="carousel-item relative rounded-lg">
            <Link href={item.path}>
              <Image src={item.social_image} width={200} height={200} className="w-full size-60"/>
            </Link>
            <div className="absolute bottom-10 left-10 z-50">
              <p className="badge badge-primary">{item.tag_list[0]}</p>
              <div className="text-white rounded-lg ">{item.description}</div>
            </div>
          </div>
        ))};
      </div>

      {/* <div className="carousel rounded-box max-w-full">
        {articles.map((item)=>(
            <div className="carousel-item w-full relative">
                <Link href={item.path}>
                    <Image src={item.social_image} width={200} height={200} className="h-full size-48"/>
                 </Link>
                <div className="absolute bottom-10 left-10 z-50">
                    <p className="badge badge-primary">{item.tag_list[0]}</p>
                    <div className="text-white rounded-lg ">{item.description}</div>
                </div>
            </div>
            
        ))}
        </div> */}



    </div>
  );
}
