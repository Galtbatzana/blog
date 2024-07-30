import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Footer } from "../components/footer";
import Link from "next/link";
import { Tolgoi } from "../components/Tolgoi";

dayjs.extend(relativeTime);

const pageSize = 12;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    // fetch("https://dev.to/api/articles?username=ben&per_page=6")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setArticles(data);
    //   });
    loadMore();
  }, []);

  // console.log({ articles });

  function loadMore() {
    fetch(
      `https://dev.to/api/articles?username=ben&page=${page}&per_page=${pageSize}`
    )
      .then((response) => {
        return response.json();
      })
      .then((newArticles) => {
        const updatedArticles = articles.concat(newArticles);
        setArticles(updatedArticles);
        setPage(page + 1);
        if (newArticles.length < pageSize) {
          setEnded(true);
        }
      });
  }

  return (
    <main>
      <Tolgoi />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-lg">
              <div className="card-body bg-slate-50 text-[#181A2A]">
                <Image src={item.social_image} width={500} height={500} />
                <Link href={item.path}>{item.title}</Link>
                <div className="badge bg-slate-200 text-[#4B6BFB]">
                  {item.tag_list[0]}
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.user.profile_image}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="">{item.user.name}</div>
                  <div>{dayjs(item.published_at).format("MMM/DD/YYYY")}</div>
                  <div>{dayjs(item.published_at).fromNow()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!ended && (
          <div className="py-16 text-center" onClick={loadMore}>
            <button className="btn btn-lg bg">Load more</button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
