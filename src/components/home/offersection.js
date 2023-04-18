import Flowersstatus from "@/components/home/flowersstatus";
import Image from "next/image";
function Offersection() {
  return (
    <div className="flex my-20">
      <div className="w-1/2 h-[758px]">
        <Image
          className="h-[758px]"
          src="/img/Group 1.png"
          alt="Picture of planets"
          width={1750}
          height={1750}
        />
      </div>
      <div className=" flex w-1/2 flex-wrap">
        <Flowersstatus />
      </div>
    </div>
  );
}

export default Offersection;
