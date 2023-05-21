import { ContactType } from "@/pages";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Contact = ({ contact }: { contact: ContactType }) => {
  return (
    <div className="flex flex-col justify-center rounded-lg text-text p-1 space-y-10 md:flex-row md:justify-center">
      <div
        style={{ margin: "10px" }}
        className="flex flex-col justify-center items-center min-w-[30%]"
      >
        <TbBrandGithub size={30} />
        <Link target="_blank" href={contact.github_url}>
          Github/{contact.github_username}
        </Link>
      </div>
      <div
        style={{ margin: "10px" }}
        className="flex flex-col justify-center items-center min-w-[30%]"
      >
        <TbMail size={30} />
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </div>
      <div
        style={{ margin: "10px" }}
        className="flex flex-col justify-center items-center min-w-[30%]"
      >
        <TbBrandLinkedin size={30} />
        <Link target="_blank" href={contact.linkedin_url}>
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Contact;
