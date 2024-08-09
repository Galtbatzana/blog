import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import Link from "next/link";

import { Tolgoi } from "../components/Tolgoi";
import { Trending } from "@/components/Trending";
import { SpecialNews } from "@/components/SpecialNews";
import { ArticleCard } from "@/components/ArticleCard";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  const tags = [
    { value: "", name: "All" },
    { value: "frontend", name: "Front-end" },
    { value: "javascript", name: "JavaScript" },
    { value: "webdev", name: "Web Dev" },
    { value: "beginners", name: "Discuss" },
  ];
  const [ended, setEnded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  async function loadInitialArticles() {
    setLoading(true);

    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}&per_page=3`
    );
    const tagArticles = await response.json();
    setArticles(tagArticles);

    console.log("tagArticles", tagArticles);
    setPage(1);

    setLoading(false);
  }

  useEffect(() => {
    loadInitialArticles();
  }, [selectedCategory]);

  async function loadNextArticles() {
    setLoading(true);

    const nextPage = page + 1;
    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}&per_page=3&page=${nextPage}`
    );
    const nextArticles = await response.json();

    setArticles([...articles, ...nextArticles]);
    setPage(nextPage);

    setLoading(false);
  }

  // console.log({articles})

  return (
    <main className="container mx-auto">
      <Carousel />

      {/* <div className="container mx-auto">
        <div className="grid md:grid-rows-4">
          {articles.map((item)=>(
            <Trending key={item.id} test={item}/>
          ))}
          
        </div>
      </div> */}

      <div className="container mx-auto bg-white max-w-[1216px]">
        <div className="gap-3 hidden md:flex p-4">
          {tags.map((tag) => (
            <div
              key={tag.value}
              className={`cursor-pointer font-bold hover: ${
                selectedCategory === tag.value ? "text-orange-400" : ""
              }`}
              onClick={() => setSelectedCategory(tag.value)}
            >
              {tag.name}
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>
      </div>

      {!ended && (
        <div className="container mx-auto py-16 text-center bg-white max-w-[1216px]">
          <button
            disabled={loading}
            className="btn btn-lg bg-[#4B6BFB] text-white"
            onClick={loadNextArticles}
          >
            {loading && <span className="loading loading-spinner"></span>}
            Load more
          </button>
        </div>
      )}
    </main>
  );
}


