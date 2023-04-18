import Image from "next/image";
const itemdetail = [
  {
    id: 0,
    imgsrc: "/img/Indoor_Plant.png",
    label: "Indoor Plants",
    desc: "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants",
  },
  {
    id: 1,
    imgsrc: "/img/Outdoor.png",
    label: "Outdoor Plants",
    desc: "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.",
  },
  {
    id: 2,
    imgsrc: "/img/Bamboo.png",
    label: "Plants Pots",
    desc: "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor",
  },
];
function Planetcards(props) {
  return itemdetail.map((item, index) => {
    return (
      <div
        className={
          "p-7 h-[380px] w-[350px] shadow  drop-shadow shadow-gray-500/10 rounded-lg " +
          (item.id === 1 ? "bg-green-800 text-white" : "text-green-800")
        }
        key={item.id}
      >
        <Image
          className="h-[126px] w-[126px]"
          src={item.imgsrc}
          alt="Picture of planets"
          width={50}
          height={50}
        />
        <div className="">
          <span className="w-[129px] h-[28px] font-semibold ">
            {item.label}
          </span>
          <span>{item.desc}</span>
        </div>
      </div>
    );
  });
}

export default Planetcards;
