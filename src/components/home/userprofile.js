import Image from "next/image";
const useritem = [
  {
    id: 1,
    img: "/img/userpictures/1.png",
    imgg: "/img/userpictures/z1.png",
    name: " Jessica Watson",
    content:
      "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
  },
  {
    id: 2,
    img: "/img/userpictures/2.png",
    imgg: "/img/userpictures/z2.png",
    name: "Kate Szu",
    content:
      "Great service beautiful flowers, timely delivery. Highly recommend.",
  },
  {
    id: 3,
    img: "/img/userpictures/3.png",
    imgg: "/img/userpictures/z3.png",
    name: "Grace ",
    content:
      "I am very happy with my purchase from this website, the plants were healthy and arrived on time.",
  },
];
function Userprofile() {
  return useritem.map((user, index) => {
    return (
      <>
        <div
          className=" w-[360px]  bg-gray-50 flex flex-col items-center "
          key={index}
        >
          <div className="flex flex-row my-7 items-center space-x-6">
            <div>
              <Image
                className="h-16 w-16 rounded-full overflow-hidden"
                src={user.img}
                alt="Picture of planets"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span className="text-green-900  text-lg font-semibold">
                {user.name}
              </span>
            </div>
          </div>
          <p className="text-left px-20  text-gray-600 tracking-wide">
            {user.content}
          </p>
          <div className=" ml-32 flex justify-end -mt-[150px]	">
            <Image
              src={user.imgg}
              alt="Picture of planets"
              width={250}
              height={250}
            />
          </div>
        </div>
      </>
    );
  });
}

export default Userprofile;
