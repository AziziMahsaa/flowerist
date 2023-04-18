import Link from "next/link";
import { usePathname } from "next/navigation";
function Navitem(props) {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={props.link}
        className={
          "py-4 px-2  " +
          (pathname === props.link ? "underline decoration-2" : "")
        }
      >
        {props.title}
      </Link>
    </div>
  );
}

export default Navitem;
