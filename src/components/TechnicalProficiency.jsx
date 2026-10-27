import { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';
import './TechnicalProficiency.css';

const CARD_COUNT = technicalSkills.length;
const SCROLL_SEGMENTS = CARD_COUNT + 1;
const SEGMENT = 1 / SCROLL_SEGMENTS;

const CORAL_ACCENT_INDICES = new Set([1, 3, 5]);

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function cardMotionState(progress, index) {
  const cardStart = index * SEGMENT;
  const cardEnd = (index + 1) * SEGMENT;
  const enterEnd = cardStart + SEGMENT * 0.42;
  const exitStart = CARD_COUNT * SEGMENT;

  /* First card is visible as soon as the section pins */
  if (index === 0 && progress <= cardStart) {
    return { yPercent: 0, scale: 1, opacity: 1, zIndex: 20 };
  }

  if (progress < cardStart) {
    return { yPercent: 115, scale: 0.9, opacity: 0, zIndex: index };
  }

  if (progress < enterEnd) {
    const t = (progress - cardStart) / (enterEnd - cardStart);
    const eased = 1 - (1 - t) ** 3;
    return {
      yPercent: lerp(115, 0, eased),
      scale: lerp(0.9, 1, eased),
      opacity: eased,
      zIndex: index + 10,
    };
  }

  const activeIndex = clamp(Math.floor(progress / SEGMENT), 0, CARD_COUNT - 1);

  if (index < activeIndex) {
    const depth = activeIndex - index;
    return {
      yPercent: -6 * depth,
      scale: 1 - depth * 0.035,
      opacity: clamp(1 - depth * 0.22, 0.35, 1),
      zIndex: index,
    };
  }

  if (index === CARD_COUNT - 1 && progress >= exitStart) {
    const t = (progress - exitStart) / SEGMENT;
    const eased = t ** 1.4;
    return {
      yPercent: lerp(0, -28, eased),
      scale: lerp(1, 0.94, eased),
      opacity: lerp(1, 0, eased),
      zIndex: CARD_COUNT + 5,
    };
  }

  if (progress >= cardEnd && index < CARD_COUNT - 1) {
    const depth = activeIndex - index;
    if (depth > 0) {
      return {
        yPercent: -6 * depth,
        scale: 1 - depth * 0.035,
        opacity: clamp(1 - depth * 0.22, 0.35, 1),
        zIndex: index,
      };
    }
  }

  return { yPercent: 0, scale: 1, opacity: 1, zIndex: index + 20 };
}

function useSectionScrollProgress(sectionRef) {
  const progress = useMotionValue(0);

  const measure = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;

    const scrollRange = el.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) {
      progress.set(0);
      return;
    }

    const scrolled = -el.getBoundingClientRect().top;
    progress.set(clamp(scrolled / scrollRange, 0, 1));
  }, [sectionRef, progress]);

  useEffect(() => {
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return progress;
}

function StackedSkillCard({ card, index, scrollProgress }) {
  const isCoral = CORAL_ACCENT_INDICES.has(index);
  const shadowClass = isCoral ? 'tp-card tp-card--coral' : 'tp-card';

  const y = useTransform(scrollProgress, (p) => {
    const { yPercent } = cardMotionState(p, index);
    return `${yPercent}%`;
  });
  const scale = useTransform(scrollProgress, (p) => cardMotionState(p, index).scale);
  const opacity = useTransform(scrollProgress, (p) => cardMotionState(p, index).opacity);

  const zIndex = useTransform(scrollProgress, (p) => cardMotionState(p, index).zIndex);

  return (
    <motion.article
      className={shadowClass}
      style={{ y, scale, opacity, zIndex }}
      aria-label={card.category}
    >
      <p className="tp-card-number">
        {String(index + 1).padStart(2, '0')}
        <span className="tp-card-number-sep">/</span>
        <span className="tp-card-number-total">{String(CARD_COUNT).padStart(2, '0')}</span>
      </p>
      <h3 className="tp-card-title">
        {card.category}
        <span
          className="tp-card-dot"
          style={{ background: isCoral ? '#FF6464' : '#00A8CC' }}
          aria-hidden
        />
      </h3>
      <div className="tp-card-skills">
        {card.skills.map((skill) => (
          <span key={skill} className="tp-skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function TechnicalProficiency() {
  const sectionRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [navOffset, setNavOffset] = useState(72);

  const scrollProgress = useSectionScrollProgress(sectionRef);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const syncNavOffset = () => {
      setNavOffset(header.getBoundingClientRect().height);
    };

    syncNavOffset();
    const ro = new ResizeObserver(syncNavOffset);
    ro.observe(header);
    window.addEventListener('resize', syncNavOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncNavOffset);
    };
  }, []);

  useMotionValueEvent(scrollProgress, 'change', (p) => {
    const idx = clamp(Math.floor(p / SEGMENT), 0, CARD_COUNT - 1);
    setActiveDot(idx);
  });

  return (
    <section
      className="tp-section"
      ref={sectionRef}
      aria-labelledby="tp-heading"
      style={{ '--tp-nav-offset': `${navOffset}px` }}
    >
      <div className="tp-sticky">
        <div className="tp-bg-pattern" aria-hidden />

        <header className="tp-header">
          <h2 id="tp-heading" className="tp-title">
            Technical Proficiencies
          </h2>
          <p className="tp-subtitle">
            Technologies and core fundamentals applied in production and academic engineering.
          </p>
        </header>

        <div className="tp-card-stack">
          {technicalSkills.map((card, index) => (
            <StackedSkillCard
              key={card.category}
              card={card}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>

        <div className="tp-progress-dots" aria-hidden>
          {technicalSkills.map((group, index) => (
            <span
              key={group.category}
              className={`tp-dot ${
                index < activeDot ? 'tp-dot-done' : index === activeDot ? 'tp-dot-active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
