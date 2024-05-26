import Image from "next/image";
import CustomLink from "@/components/links/CustomLink";

export default function LatihanPage() {
  return (
    <main>
      <div className="layout mt-20 min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Latihan</h1>
        <Image
          src="/latihan-image.jpg"
          alt="Profile"
          width={488}
          height={425}
          className="mt-4"
        />
        <article className="prose mt-2 dark:prose-invert">
          <ol className="mt-6">
            <li>
              Latihan penggunaan aplikasi Matlab{" "}
              <CustomLink href="https://bit.ly/3VczMgu">disini</CustomLink> :
            </li>
          </ol>
        </article>
      </div>
    </main>
  );
}
