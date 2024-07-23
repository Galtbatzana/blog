import { useEffect } from "react";

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
      {articles.map(() => (
        <div>{ClipboardItem.title}</div>
      ))}
    </main>
  );
}
