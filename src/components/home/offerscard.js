import Cardoffer from "./cardoffer";
const itemdetail = [
  {
    id: 0,
    imgsrc: "/img/flowers/0.jpg",
    label: "Indoor Plants",
    price: "8",
    prevprice: "10",
  },
  {
    id: 1,
    imgsrc: "/img/flowers/1.jpg",
    label: "Outdoor Plants",
    price: "8",
    prevprice: "10",
  },
  {
    id: 2,
    imgsrc: "/img/flowers/2.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
  {
    id: 3,
    imgsrc: "/img/flowers/3.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
  {
    id: 4,
    imgsrc: "/img/flowers/4.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
  {
    id: 5,
    imgsrc: "/img/flowers/5.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
  {
    id: 6,
    imgsrc: "/img/flowers/6.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
  {
    id: 7,
    imgsrc: "/img/flowers/7.jpg",
    label: "Plants Pots",
    price: "8",
    prevprice: "10",
  },
];
function Offerscard() {
  return itemdetail.map((item, index) => {
    return <Cardoffer item={item} key={index} />;
  });
}

export default Offerscard;
