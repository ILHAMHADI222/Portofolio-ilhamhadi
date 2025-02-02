import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = "A short story of me";
  return (
    <motion.section initial={section.initial} animate={section.animated} transition={section.transition} className="space-y-6">
      <SectionHeader icon={<IconLeaf />} label="About" description={sectionDescription} />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Ilham Hadi</h2>
        <i className="ml-1 animate-waving-hand">👋</i>
      </div>
      <p>
        Saya Ilham Hadi Wicaksono adalah seorang Fullstack Web Developer dan Android Developer dengan pengalaman dalam membangun aplikasi berbasis web dan mobile menggunakan berbagai teknologi seperti Laravel, Flutter, dan Dart. Saya juga
        tertarik dan berfokus pada keamanan IT, termasuk penerapan praktik keamanan dalam pengembangan aplikasi. Selain itu, saya memiliki keahlian dalam Machine Learning, khususnya dalam penggunaan CNN untuk deteksi penyakit tanaman. Saat
        ini, saya juga berperan sebagai mahasiswa aktif di perkuliahan, serta aktif dalam pengembangan sistem cerdas untuk pertanian (Agrolyn), yang mencakup marketplace, artikel edukatif, deteksi penyakit tanaman, dan forum diskusi.
      </p>
      <p>🔹 Keahlian: Fullstack Web Development, Android Development, IT Security, UI/UX Design, PHP (Laravel), Mobile Development (Flutter), Machine Learning</p>
      <p>🔹 Proyek Utama: Agrolyn, Sistem Self-Printing, Chatbot Generatif untuk Pertanian</p>
      <p>🔹Pengalaman Tambahan: Pemateri seminar, Data Scraping, dan Pengolahan Data Tertarik untuk berkolaborasi? Hubungi saya di LinkedIn!</p>
    </motion.section>
  );
};
