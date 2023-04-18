import Image from "next/image";
const imgs = [
  {
    id: 0,

    imgSrc: "/img/gall/2.png",
  },
  {
    id: 1,

    imgSrc: "/img/gall/3.png",
  },
  {
    id: 2,

    imgSrc: "/img/gall/4.png",
  },
  {
    id: 3,

    imgSrc: "/img/gall/5.png",
  },
];
function Flowerpictures() {
  return imgs.map((img, index) => {
    return (
      <div className="w-1/2 pl-3" key={img.id}>
        <Image
          className="h-[340px]"
          src={img.imgSrc}
          alt="Picture of planets"
          width={459}
          height={340}
        />
      </div>
    );
  });
}

export default Flowerpictures;
