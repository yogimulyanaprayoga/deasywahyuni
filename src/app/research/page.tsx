import Image from "next/image";
import CustomLink from "@/components/links/CustomLink";

export default function ResearchPage() {
  return (
    <main>
      <div className="layout mt-20 min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Research</h1>
        <article className="prose mt-2 dark:prose-invert">
          <ol className="mt-6">
            <li>
              Metode Iterasi Tiga Langkah untuk Menyelesaikan Persamaan Non
              Linear dengan Matlab (HIBAH PDP PDDIKTI 2019) bisa kalian lihat{" "}
              <CustomLink href="https://bit.ly/3KkvVYF">disini</CustomLink> :
            </li>
          </ol>
        </article>
        <div className="flex flex-wrap gap-4">
          <Image src="/research1.jpg" alt="Profile" width={488} height={425} />
          <Image src="/research2.jpg" alt="Profile" width={488} height={425} />
          <Image src="/research3.jpg" alt="Profile" width={488} height={425} />
          <Image src="/research4.jpg" alt="Profile" width={488} height={425} />
        </div>
      </div>
    </main>
  );
}
