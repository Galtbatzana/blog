import parse from 'html-react-parser';

export async function generateMetadata({params}) {
  const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article = await response.json();

  return {
    // title: article.title
    openGraph: {
      title: article.title,
      description: article.description, 
      images: [{url: article.social_image}]
    },
  };
}

export default async function Page({ params }) {

  const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article = await response.json();

  return (
    <main>
      <div className="container mx-auto max-w-[1219px] bg-white">
          <div className="container mx-auto bg-white max-w-3xl text-black p-4">
                <div className="font-bold text-black">{article.title}</div>
                <div className="prose text-black">{parse(article.body_html)}</div>
                <div className="text-black">{article.body_markdown}</div>
          </div>
      </div>
    </main>
  );
}