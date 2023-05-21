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

const FeedbackCard = ({
  author,
  position,
  author_img,
  feedback,
  linkedin_url,
}: FeedbackCardProps) => {
  return (
    <div className="flex flex-col space-y-5 bg-altBackground text-text p-10 mx-2 my-2">
      <div className="flex flex-row justify-start items-center space-x-5">
        {/* TODO: replace img with avatar */}
        <Image
          width={80}
          height={80}
          src={author_img}
          alt="img-of-person"
          className="object-contain"
        />
        <div className="flex flex-col justify-start">
          <div className="flex flex-row items-center space-x-4">
            <h3 className="inline-block">{author}</h3>
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