import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";


export function Test() {

  const tags = [
    { value: "All", name: "All" },
    { value: "Frontend", name: "Front-end" },
    { value: "Javascript", name: "JavaScript" },
    { value: "Webdev", name: "Web Dev" },
    { value: "Beginners", name: "Discuss" },
  ];

 const [selectedCategory, setSelectedCategory] = useState();
 const [loading, setLoading] = useState(false); 
  const [articles, setArticles] = useState([]);
 
//  console.log({selectedCategory});

 async function loadArticles() {
  setLoading(true);

  const response = await fetch(`https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}`) ;
  const tagArticles = await response.json();
  setArticles(tagArticles);

  setLoading(false);
}

  useEffect(()=>{
    loadArticles();
  },[selectedCategory]); // hervee selectedCategory bolson baiwal tagArticle-iig load hii! SelectedCategory uurchlugduhud loadArticles() ajilna! 


  return (
    <div>
      <div className="flex gap-3">
        {tags.map((tag)=>(
          <div key={tag.value} className={`cursor-pointer font-bold hover: ${selectedCategory === tag.value ? "text-orange-400" : ""}`} onClick={()=>setSelectedCategory(tag.value)}>{tag.name}</div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((item) => (
         <ArticleCard key={item.id} article={item} />
          ))}
        </div>
    </div>
  );
}

