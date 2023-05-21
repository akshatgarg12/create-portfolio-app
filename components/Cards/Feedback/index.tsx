import Image from "next/image";

const FeedbackCard = () => {
  return (
    <div className="flex flex-col space-y-5 bg-altBackground text-text max-w-[50%] p-10">
      <div className="flex flex-row justify-start items-center space-x-5">
        <Image
          width={80}
          height={80}
          src="/me.png"
          alt="img-of-person"
          className="object-contain"
        />
        <h3>Akshat garg</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          expedita ducimus, mollitia voluptatibus animi repudiandae amet placeat
          sint quaerat laboriosam veniam tempora, eos reprehenderit dicta velit!
          Consequatur vitae sunt qui!
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
