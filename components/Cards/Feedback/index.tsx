import Image from "next/image";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";

export interface FeedbackCardProps {
  author: string;
  position: string;
  author_img: string;
  feedback: string;
  linkedin_url: string;
}
export const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toLocaleUpperCase();
  return (
    <div className="flex flex-col justify-center rounded-full w-[40px] h-[40px] bg-background text-text text-center mb-1 sm:m-0">
      <p>{initials}</p>
    </div>
  );
};

const FeedbackCard = ({
  author,
  position,
  author_img,
  feedback,
  linkedin_url,
}: FeedbackCardProps) => {
  return (
    <div className="flex flex-col space-y-5 bg-altBackground text-text p-4 sm:p-10 mx-2 my-2">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:space-x-5">
        {/* TODO: replace img with avatar */}
        {author_img ? (
          <Image
            width={40}
            height={40}
            style={{ height: "40px", width: "40px", objectFit: "cover" }}
            src={author_img}
            alt="img-of-person"
            className="object-contain rounded-full bg-background mb-1 sm:m-0"
          />
        ) : (
          <Avatar name={author} />
        )}
        <div className="flex flex-col justify-start text-center">
          <div className="flex flex-row justify-center sm:justify-start text-center space-x-4">
            <p>{author}</p>
            {linkedin_url && (
              <Link href={linkedin_url} target="blank">
                <TiSocialLinkedin size={25} />
              </Link>
            )}
          </div>
          <h4 className="opacity-80">{position}</h4>
        </div>
      </div>
      <div>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
