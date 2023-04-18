import Image from "next/image";
function Footer() {
  return (
    <div className="w-full h-[320px] bg-green-800 relative">
      <div className="flex flex-col gap-8 w-fit m-auto h-[320px] items-center justify-center">
        <p className=" text-3xl text-white ">Feel free to contact us</p>
        <div className="flex gap-16">
          <Image
            src="/img/instagram.png"
            alt="Picture of planets"
            width={50}
            height={50}
          />
          <Image
            src="/img/twitter.png"
            alt="Picture of planets"
            width={50}
            height={50}
          />
          <Image
            src="/img/facebook.png"
            alt="Picture of planets"
            width={50}
            height={50}
          />
        </div>
        <div className="flex gap-8 text-white">
          <a>Home</a>
          <a>About Us</a>
          <a>Plant</a>
          <a>Delivery</a>
          <a>Blog</a>
          <a>Contact Us</a>
        </div>
      </div>

      <div>
        <Image
          className="absolute bottom-0 opacity-50"
          src="/img/flo.png"
          alt="Picture of planets"
          width={250}
          height={250}
        />
        <Image
          className="absolute bottom-0 right-0 opacity-50"
          src="/img/pot.png"
          alt="Picture of planets"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}

export default Footer;
