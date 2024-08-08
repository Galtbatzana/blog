

export default async function Page(params) {
  const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article = await response.json();

  return (
    <></>
  );
}