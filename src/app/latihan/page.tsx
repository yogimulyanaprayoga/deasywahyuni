import Image from "next/image";
import CustomLink from "@/components/links/CustomLink";

export default function LatihanPage() {
  return (
    <main>
      <div className="layout mt-20 min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Latihan</h1>
        <article className="prose mt-2 dark:prose-invert">
          <ol className="mt-6">
            <li>
              Tutorial pengenalan Matlab{" "}
              <CustomLink href="https://bit.ly/3VczMgu">disini</CustomLink> :
            </li>
          </ol>
        </article>
        <Image
          src="/latihan-image.jpg"
          alt="Profile"
          width={488}
          height={425}
          // className="w-40 md:w-72"
        />
      </div>
    </main>
  );
}
