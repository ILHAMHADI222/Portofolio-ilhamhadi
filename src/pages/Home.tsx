import { motion } from "framer-motion";
import { LeaveCard } from "../components/LeaveCard";
import { HomeMotion } from "../common/motion/Home";
import { Link } from "react-router-dom";

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div className="flex flex-1 flex-col space-y-6 items-center md:items-start" initial={description.initial} animate={description.animated} transition={description.transition}>
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi Selamat Datang!</span> <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h2 className="text-blue-500 font-bold text-xl md:text-3xl">Software Engineer | Website Developer | IT Security Enthusiast</h2>
        <p className="text-center md:text-start text-xs md:text-base">Saya adalah software engineer yang sangat berkarir dan ingin membantu perusahaan-perusahaan yang sedang mencari developer baru</p>
        <Link to="./resume" target="_blank">
          <motion.div initial={resume.initial} animate={resume.animated} transition={resume.transition} className="rounded-3xl w-max border px-4 py-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500">
            Download Resume
          </motion.div>
        </Link>
      </motion.div>
      <motion.div initial={wrapImg.initial} animate={wrapImg.animated} transition={wrapImg.transition} className="flex flex-1 items-center justify-center bg-gradient-to-bl from-blue-900 via-blue-100000 to-black overflow-hidden">
        <motion.img initial={image.initial} animate={image.animated} transition={image.transition} src="/ilham-no-bg.webp.png" alt="profile" width="100%" height="100%" />
      </motion.div>

      <LeaveCard label="Frontend Dev" />
    </section>
  );
};
