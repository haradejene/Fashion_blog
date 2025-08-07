
import Link from 'next/link';
import Image from "next/image";
import Footer from "./components/Footer";

type Post = {
  id: string | number;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
  tags: string[];
};

type HomeProps = {
  posts: Post[];
};

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs.json`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default async function Home() {
  const posts: Post[] = await getData();

  return (
    <>
    <head><title>FASHIONOVA</title></head>
    <div className="p20">
      <nav className="flex justify-between color white 700 items-center px-6 py-4 " >
  <h1 className="text-4xl font-light">FASHIONOVA</h1>

  <div className="flex gap-6">
    <Link href={"/"}>Blog</Link>
    <Link href={"/article"}>Article</Link>
    <Link href="/suggestions">Suggestions</Link>

  </div>
</nav>
   <div className ="flex items-center justify-center">
    <div 
  className="bg-center bg-cover bg-no-repeat flex items-center justify-center w-[1100px] h-[300px]"
  style={{ backgroundImage: "url('/images/nav4.jpg')" }}
></div></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
  {posts.map((post) => (
    <div
      key={post.id}
      className="flex gap-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={200}
        height={200}
        className="object-cover flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
      />
      <div className="flex flex-col justify-between p-4">
        <h2 className="text-xl font-bold mb-1">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          By {post.author} on {post.date}
        </p>
        <p className="text-gray-800 mb-2">{post.content}</p>
        <p className="text-xs italic text-gray-500">
          Tags: {post.tags.join(", ")}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
       <Footer />
    </>
  );
}

