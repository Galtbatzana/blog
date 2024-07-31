import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Trending() {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=ben")
            .then((response)=> {
            return response.json();
            })
            .then((data)=> {
            setArticles(data);
        });
    
    },[]);

    return (
    <div className="container mx-auto">
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
            {
                articles.map((item) => (
                    <div>
                        <div key={item.id}>{item.title}</div>
                        <Image  src={item.social_image} width={500} height={500}/>
                    </div>        
                ))
            };
            
        </div>  
      </div>
    </div>
  );
}




