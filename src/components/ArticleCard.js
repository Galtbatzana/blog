import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";


dayjs.extend(relativeTime);

export function ArticleCard ({article}) {
    
 return (
        <div key={article.id} className="shadow-lg card bg-base-100">
            <div className="card-body">
                <div className="flex gap-2">
                    {article.tag_list.map((tag)=>(<div>{tag}</div>))}
                    <Image src={article.social_image} width={500} height={500} className="bg-slate-600"/>   
                    <Link href={article.path}>{article.title}</Link>
                    <div>
                        <Image src={article.user.profile_image_90} width={50} height={50} />    
                        <div className="">{article.user.name}</div>
                        <div>{dayjs(article.published_at).fromNow()}</div>
                    </div> 
                </div>
            </div>
        </div>
    );
}