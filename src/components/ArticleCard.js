import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

export function ArticleCard({ article }) {
  // console.log({article})

  return (
    <div key={article.id} className="card card-side glass bg-white shadow-lg border-2">
      <div className="flex gap-2 card-body">
        <div key={article.id} className="card bg-white shadow-lg">
            <div className=" bg-slate-50">
              <Image src={article.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-500"/>
            </div>

            <div className="badge text-white bg-[#4B6BFB] mt-4 ml-2">
              {article.tag_list[0]}
            </div>

            <Link href={article.path} className="text-[#181A2A] ml-2 mt-2">{article.title}</Link>

            <div className="flex gap-4 articles-center m-2">
              <Image
                src={article.user.profile_image}
                width={50}
                height={50}
                className=""
              />
              <div className="text-[#97989F]">{article.user.name}</div>
              <div>
                <div className="text-[#97989F]">{dayjs(article.published_at).format("MMM/DD/YY")}</div>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
