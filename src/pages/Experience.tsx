import { motion } from "framer-motion";
import { IconClockPlay } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = "My proffesional career journey";
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: "/harber.png",
      name: "Politeknik Harapan Bersama",
      position: "Social Media Specialis At CSIRT HARBER",
      startDate: "1 December 2024",
      endDate: "Now",
      duration: "",
      location: "Kota Tegal",
    },
    {
      id: 2,
      image: "/harber.png",
      name: "Politeknik Harapan Bersama",
      position: "Speaker Security Awarennes At SMK AN-NUR",
      startDate: "12 July 2024",
      endDate: "13 July 2024",
      duration: "1 Days",
      location: " Slawi Kabupaten Tegal",
    },
  ];
  return (
    <motion.section initial={section.initial} animate={section.animated} transition={section.transition} className="space-y-6">
      <SectionHeader icon={<IconClockPlay />} label="Experience" description={sectionDescription} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
