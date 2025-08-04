import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ slug, coverImageUrl }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg mb-6 h-[200px]">
      <Link href={`/blogs/${slug}`}>
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={coverImageUrl}
          alt="n"
        />
      </Link>
    </div>
  );
}
