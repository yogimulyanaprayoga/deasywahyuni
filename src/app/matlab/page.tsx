import Image from "next/image";
import CustomLink from "@/components/links/CustomLink";

export default function MatlabPage() {
  return (
    <main>
      <div className="layout mt-20 min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Matlab</h1>
        <Image
          src="/matlab.jpg"
          width={400}
          height={200}
          alt="matlab-image"
          className="mt-8"
        />
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Cara - cara Penginstalan Matlab
        </p>
        <article className="prose dark:prose-invert">
          <ol className="mt-6">
            <li>
              Download matlab pada{" "}
              <CustomLink href="https://www.mathworks.com/">disini</CustomLink>
            </li>
            <li>
              Untuk contoh Algoritma dan syntax Matlab bisa kalian lihat{" "}
              <CustomLink href="https://bit.ly/3R54dmn">disini</CustomLink>
            </li>
            <li>
              Contoh Syntax Matlab Metode Iterasi Tiga Langkah bisa kalian lihat{" "}
              <CustomLink href="https://bit.ly/3WYPFss">disini</CustomLink>
            </li>
          </ol>
        </article>
      </div>
    </main>
  );
}
