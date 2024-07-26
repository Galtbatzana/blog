import { useEffect, useState } from "react";


export default function Home() {
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

  console.log({ articles });

  return (
    <main>
      <div className="container">
            <div className="grid grid-cols-3 gap-4">
                {articles.map((item) => (
                  <div key={item.url} target="_blank">
                    {item.title}
                  </div>
                ))}
        
            </div>
        </div>

    </main>
  );
}
