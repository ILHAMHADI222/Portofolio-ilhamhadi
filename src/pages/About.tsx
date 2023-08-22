import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Ilham</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
      Allow me to introduce Ilham Hadi Wicaksono, a diligent student from Politeknik Harapan Bersama. 
      With a passion for both gaming and coding, Ilham strikes a balance between his academic pursuits and his hobbies. 
      As a student, he is dedicated to his studies and consistently completes his assignments punctually. 
      Whether he's immersed in the virtual realms of gaming or engrossed in writing code, Ilham manages his time effectively to excel in his academics. 
      His enthusiasm for both gaming and coding reflects his well-rounded approach to learning and self-expression.
      </p>
      <p>
        
      </p>
    </motion.section>
  );
};
