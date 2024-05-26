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
        <h1 className="text-3xl md:text-5xl dark:text-white">Materi</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Petunjuk penggunaan blog
        </p>
        <article className="prose dark:prose-invert">
          <ol>
            <li>
              Pilihlah materi yang Anda pelajari pada menu{" "}
              <UnstyledLink href="/blog">
                <Accent>Materi</Accent> .
              </UnstyledLink>
            </li>
            <li>
              Anda disarankan untuk membaca materi terlebih dahulu sebelum
              memulai latihan soal literasi matematika. Ini bertujuan untuk
              mengingatkan kembali Anda pada materi yang telah dipelajari
              (Apresepsi)
            </li>
            <li>
              Selanjutnya pilihlah menu{" "}
              <UnstyledLink href="/latihan">
                <Accent>Latihan</Accent>.
              </UnstyledLink>{" "}
              dan pilih materi yang sesuai
            </li>
            <li>
              Kerjakan pre tes di awal, jika Anda dapat mengerjakan dengan{" "}
              {"benar >75%"} jumlah soal yang ada maka Anda bisa memulai
              mencermati masalah yang disajikan, jika belum Anda disarankan
              untuk mempelajari materi sekali lagi dan melakukan pretes kembali.
            </li>
            <li>
              Cermati setiap informasi pada permasalahan yang disajikan, hasil
              pekerjaan dapat Anda masukkan pada form tersedia atau dapat Anda
              post pada menu{" "}
              <UnstyledLink href="/forum-diskusi">
                <Accent>forum diskusi</Accent>.
              </UnstyledLink>
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
