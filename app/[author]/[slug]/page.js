import parse from 'html-react-parser';
// import type { Metadata } from 'next'


// export const metadata = {
//   openGraph: {
//     title: '...',
//     description: '...',
    
//   }
// }

export async function generateMetadata({ params }) {
  const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article = await response.json();

  return {
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.social_image }],

    },
  };

}

  
export default async function Page({ params }) {
  const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article = await response.json();
  
  return (
      <div className="container mx-auto bg-white max-w-[1216px]">
          <div className="container mx-auto max-w-3xl p-6 text-black">
            <div className="font-bold text-black">{article.title}</div>
            <div className="prose text-black">{parse(article.body_html)}</div>
            <div className="text-black">{article.body_markdown}</div>
          </div>
      </div>
    
  );
}