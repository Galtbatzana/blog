import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from 'next/router'

export default function Page () {

  const [article, setArticle] = useState();
  const [loading, setLoading ] = useState(false);
  const router = useRouter();
  
//   console.log (router.query);  
   const { author, slug } = router.query; 

  useEffect(() => {
    if (router.isReady) {
        getArticle();
    }
  }, [router.isReady]);

  async function getArticle () {
    setLoading(true);

    const response = await fetch(`https://dev.to/api/articles/${author}/${slug}`)
    const detail = await response.json()  
    setArticle(detail);

    setLoading(false);  
  };

  if (!article) return <div>Loading...</div>

    return (
        <div className="container mx-auto max-w-[1219px] bg-white">
          <div className="container mx-auto bg-white max-w-3xl text-black p-4">
              <div className="font-bold text-black">{article.title}</div>
              <div className="prose text-black">{parse(article.body_html)}</div>
              <div className="text-black">{article.body_markdown}</div>
          </div>
        </div>
    );
}