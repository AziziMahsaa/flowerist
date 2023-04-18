import Image from "next/image";
function GalleryItem(props) {
  return (
    <div className="overflow-hidden h-full">
      <Image
        className="h-full object-cover hover:scale-105 object-bottom  ease-in-out duration-700 "
        src={props.imgSrc}
        alt="Picture of planets"
        width={700}
        height={700}
      />
    </div>
  );
}
function Gallery() {
  return (
    <div className="flex flex-col gap-10 text-center my-10">
      <span className="font-bold text-green-900 text-[36px]">
        Our Gallery View
      </span>
      <div className="flex flex-row gap-2 w-full">
        <div className="w-1/3">
          <GalleryItem imgSrc={"/img/gall/1.png"} />
        </div>
        <div className="flex flex-col w-1/3 gap-2 ">
          <GalleryItem imgSrc={"/img/gall/2.png"} />
          <GalleryItem imgSrc={"/img/gall/3.png"} />
        </div>
        <div className="flex flex-col w-1/3 gap-2 ">
          <GalleryItem imgSrc={"/img/gall/4.png"} />
          <GalleryItem imgSrc={"/img/gall/5.png"} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
