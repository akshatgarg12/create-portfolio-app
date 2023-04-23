import Image from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  id: string | number;
  title: string;
  img: string;
  description: string;
}

const BlogCard = (props: BlogCardProps) => {
  return (
    <Link href={`/blog/${props.id}`}>
      <div className="flex flex-col p-3 w-full max-w-sm border border-1 border-border rounded-md bg-altBackground text-text cursor-pointer">
        <div>
          <Image
            src={props.img}
            alt={`${props.id}-post-img`}
            height={150}
            width={150}
            className="m-auto"
            priority
          />
          <h3 className="font-bold text-xl mb-2">{props.title}</h3>
          <p className="font-md text-base">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
