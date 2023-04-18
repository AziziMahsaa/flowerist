import Intrestcard from "@/components/home/intrestcard";
function Blog() {
  return (
    <div className="w-[1200px] container mx-auto gap-6 justify-center my-10  items-center px-20 flex flex-col">
      <span className="font-bold text-green-900 text-[36px]">
        Interesting blog to read
      </span>
      <div className="flex flex-row gap-6">
        <Intrestcard />
      </div>
    </div>
  );
}

export default Blog;
