import Accent from "@/components/Accent";
import UnstyledLink from "@/components/links/UnstyledLink";
import { Metadata } from "next";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const metadata: Metadata = {
  title: "Petunjuk",
  description: "Petunjuk penggunaan website",
};

const PetunjukPage = () => {
  return (
    <main>
      <div className="layout mt-20 min-h-main py-12">
        <h1 className="text-3xl md:text-5xl dark:text-white">Petunjuk</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Petunjuk penggunaan blog
        </p>
        <article className="prose dark:prose-invert">
          <ol>
            <li>
              Pilihlah materi yang Anda pelajari pada menu {"Pembelajaran > "}
              <UnstyledLink href="/blog">
                <Accent>Materi</Accent>
              </UnstyledLink>
            </li>
            <li>
              Untuk Aplikasi, petunjuk penggunaan, serta syntax Matlab tesedia
              di {"Pembelajaran > "}
              <UnstyledLink href="/matlab">
                <Accent>Matlab</Accent>
              </UnstyledLink>
            </li>
            <li>
              Latihan tersedia di {"Pembelajaran > "}
              <UnstyledLink href="/latihan">
                <Accent>Latihan</Accent>
              </UnstyledLink>
            </li>
            <li>
              Berikan Penilaian terhadap blog ini pada bagian Umpan balik yang
              berada di footer
            </li>
            <li>Selamat mencoba.</li>
          </ol>
        </article>
      </div>
    </main>
  );
};

export default PetunjukPage;

const socialLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/yogi_mlyna/",
    icon: <SiInstagram />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/yogi-mulyana-prayoga-160775226/",
    icon: <SiLinkedin />,
  },
  {
    id: 3,
    href: "https://github.com/Gie2lah",
    icon: <SiGithub />,
  },
];
