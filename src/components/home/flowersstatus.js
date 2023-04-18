import Image from "next/image";
const itemdetail = [
  {
    id: 0,
    imgsrc: "/img/time.png",
    label: "Quality Product",
    desc: "Our flowers are of the highest quality, carefully selected and sourced from reputable",
  },
  {
    id: 1,
    imgsrc: "/img/grow.png",
    label: "Always Fresh",
    desc: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
  },
  {
    id: 1,
    imgsrc: "/img/temp.png",
    label: "Work Smart",
    desc: "We work smart, using innovative techniques and technology to streamline our processes",
  },
  {
    id: 3,
    imgsrc: "/img/Pruning 1.png",
    label: "Excelent Service",
    desc: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
  },
];
function Flowersstatus(props) {
  return itemdetail.map((item, index) => {
    return (
      <div
        className={
          "p-7 h-[379px] w-1/2 " + (item.id === 1 ? "bg-gray-50 " : "shadow-sm")
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
        <div className="flex  gap-3 mt-3 flex-col">
          <span className=" text-green-900  w-[129px] h-[28px] font-semibold ">
            {item.label}
          </span>
          <span className="text-gray-700 ">{item.desc}</span>
        </div>
      </div>
    );
  });
}

export default Flowersstatus;
