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

  function getArticle () {
    setLoading(true);

      fetch(`https://dev.to/api/articles/${author}/${slug}`)
      .then((response) => {
      return response.json();
    })
      .then((detail) => {
       setArticle(detail);
       setLoading(false); 
    });
  };

  if (!article) return <div>Loading...</div>

    return (
        <div className="container mx-auto">
            <div>{article.title}</div>
            <div className="prose">{parse(article.body_html)}</div>
            <div>{article.body_markdown}</div>
        </div>
    );
}