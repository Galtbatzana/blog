import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

export function ArticleCard({ article }) {
  // console.log({article})

  return (
    <div key={article.id} className="shadow-lg card bg-base-100">
      <div className="flex gap-2">
        <div key={article.id} className="card bg-base-100 shadow-lg">
          <div className="card-body bg-slate-50 text-[#181A2A]">
            <Image src={article.social_image} width={500} height={500} />
            <Link href={article.path}>{article.title}</Link>

            <div className="badge bg-slate-200 text-[#4B6BFB]">
              {article.tag_list[0]}
            </div>

            <div className="flex gap-4 articles-center">
              <Image
                src={article.user.profile_image}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="">{article.user.name}</div>
              <div>{dayjs(article.published_at).format("MMM/DD/YY")}</div>
              <div>{dayjs(article.published_at).fromNow()}</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
