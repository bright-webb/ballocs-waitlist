import Image from "next/image";

type ImageListType = {
  src: string;
  alt: string;
};

const imageList: ImageListType[] = [
  {
    src: "/female-UIUX.jpeg",
    alt: "female",
  },
  {
    src:"/content-writer.jpeg" ,
    alt: "content writer",
  },
  {
    src: "/frontend-engr.jpeg",
    alt: "frontend developer",
  },
  
];

const Team = () => {
  return (
    <div
    className="flex justify-start items-center flex-wrap "
      
    >
      {imageList.map((item, index) => (
        <div
        className={`h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] rounded-[50%] ring-2 ring-white overflow-hidden ${index > 0 ? "ml-[-15px]" : ""}`}
      key={index}
          
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={100}
            height={100}
            className="object-cover"
          
          />
        </div>
      ))}
    </div>
  );
};

export default Team;
