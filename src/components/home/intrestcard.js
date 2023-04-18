import Image from "next/image";
const carditems = [
  {
    id: 1,
    img: "/img/img1.png",
    title: "More productive with an atmosphere of greenery",
    desc: "An atmosphere of greenery can increase productivity in the workplace Studies show that plants improve air quality and decrease stress",
  },
  {
    id: 2,
    img: "/img/img2.png",
    title: "The benefits of plants in your room",
    desc: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
  },
  {
    id: 3,
    img: "/img/img3..png",
    title: "Hobbyist plants in the house",
    desc: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
  },
];
function Intrestcard() {
  return carditems.map((item, index) => {
    return (
      <div className="flex flex-col gap-2  w-1/3" key={index}>
        <div className="w-full h-[329px]">
          <Image
            className="object-cover "
            src={item.img}
            alt="Picture of planets"
            width={1750}
            height={1750}
          />
        </div>
        <div className="h-[100px] block">
          <span className="text-green-900 text-xl">{item.title}</span>
        </div>
        <span className=" font-light tracking-wide ">{item.desc}</span>
      </div>
    );
  });
}

export default Intrestcard;
