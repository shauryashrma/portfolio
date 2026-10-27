import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './TechnicalProficiency.css';

// Define the six cards with their titles and skill lists
const cards = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C++', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend Engineering & System Design',
    skills: [
      'Node.js & Express.js',
      'RESTful API Design',
      'Authentication & Authorization (JWT)',
      'Database Design & Optimization',
      'Caching Strategies (Redis)',
      'System Design & Architecture',
      'Scalability & Load Balancing',
      'Asynchronous Processing',
      'Git & GitHub',
    ],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL', 'Mongoose'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow'],
  },
  {
    title: 'Core Competencies',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Git & GitHub',
      'System Design',
    ],
  },
];

export default function TechnicalProficiency() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Total number of cards
  const total = cards.length;

  return (
    <section className="technical-section bg-[#EDF7FA] py-12 md:py-16 relative" ref={containerRef}>
      {/* The scrolling space – 6 viewports tall */}
      <div className="h-[${total * 100}vh]"></div>
      {/* Sticky container that stays fixed while we scroll */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none">
        {cards.map((card, i) => {
          // Define start and end of the card's animation slice
          const start = i / total;
          const end = (i + 1) / total;
          const y = useTransform(scrollYProgress, [start, end], ['100%', '0%']);
          const opacity = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);

          return (
            <motion.div
              key={card.title}
              className="card absolute w-11/12 max-w-3xl bg-white p-6 rounded border-2 border-[#21243D] shadow-[5px_5px_0px_#00A8CC]"
              style={{ y, opacity, scale, zIndex: total - i }}
            >
              <h3 className="text-[20px] font-bold text-[#21243D] mb-4 border-b-2 border-[#00A8CC] flex items-center justify-between">
                {card.title}
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC]"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold bg-[#F5F8FA] text-[#21243D] px-2.5 py-1 rounded border border-[#CCD6DF] hover:border-[#FF6464] hover:shadow-[2px_2px_0px_#FF6464] hover:-translate-y-0.5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
