import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";

const pageSize = 12;

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    loadMore();
  }, []);


  function loadMore() {
    fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${page+1}&per_page=${pageSize}`
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
     
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((item) => (
         <ArticleCard key={item.id} article={item} />
          ))}
        </div>

        {!ended && (
          <div className="py-16 text-center" onClick={loadMore}>
            <button className="btn btn-lg bg">Load more</button>
          </div>
        )}
      </div>
      
    </main>
  );
}
