import Link from "next/link";
import { useEffect, useState } from "react";

export function Card() {
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
    <div>{articles?.map((article) => console.log("article", article))}</div>
  );
}
