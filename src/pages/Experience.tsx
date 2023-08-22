import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'X Code',
      position: 'Junior Penetration',
      startDate: '1 june 2023',
      endDate: '2 june 2023',
      duration: '1 Months',
      location: 'tegal',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Y Code',
      position: 'UI/UX designer',
      startDate: '1 agustus 2023',
      endDate: '2 september 2022',
      duration: '1 Months',
      location: 'remote tegal',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
