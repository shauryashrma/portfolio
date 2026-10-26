import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 2D Plain Checkered Block-by-Block Transition
 * Blocks sweep in one-by-one diagonally, hold briefly, then sweep out one-by-one.
 * Uses palette colors: #FF6464, #00A8CC, #EDF7FA, #FFFFFF (no dark blues).
 */
export default function CheckeredTransition() {
  const location = useLocation();
  // Phases: 'init' -> 'enter' -> 'hold' -> 'exit' -> 'idle'
  const [phase, setPhase] = useState('init');

  // Palette colors (no dark blues)
  const colors = [
    '#FF6464', // Vibrant Coral
    '#00A8CC', // Vibrant Cyan
    '#EDF7FA', // Soft Ice Blue
    '#FFFFFF', // White
  ];

  const cols = 12;
  const rows = 8;
  const totalCells = cols * rows;

  useEffect(() => {
    // 1. Start in 'init' (all blocks scaled to 0)
    setPhase('init');

    // 2. Trigger 'enter' on next animation frame
    const enterTimer = setTimeout(() => {
      setPhase('enter');
    }, 15);

    // 3. Trigger 'exit' quickly after blocks finish entering (~200ms sweep + 160ms hold)
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 160);

    // 4. Reset to 'idle' once exit completes
    const idleTimer = setTimeout(() => {
      setPhase('idle');
    }, 700);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  if (phase === 'idle') return null;

  const isVisible = phase === 'enter' || phase === 'hold';

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* 2D Grid of Checkered Blocks */}
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, idx) => {
          const row = Math.floor(idx / cols);
          const col = idx % cols;
          // Diagonal wave index (0 to 18)
          const diagonal = row + col;

          // Color calculation: alternating 2D checkered mosaic
          const colorIndex = (row * 3 + col) % colors.length;
          const cellColor = colors[colorIndex];

          // Snappy, fast staggered timing
          const enterDelay = diagonal * 10; // ms (max ~180ms)
          const exitDelay = diagonal * 9;   // ms (max ~160ms)
          const activeDelay = isVisible ? enterDelay : exitDelay;

          return (
            <div
              key={idx}
              className="w-full h-full border border-black/[0.04]"
              style={{
                backgroundColor: cellColor,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                opacity: isVisible ? 1 : 0,
                transitionProperty: 'transform, opacity',
                transitionDuration: '150ms',
                transitionTimingFunction: isVisible
                  ? 'cubic-bezier(0.16, 1, 0.3, 1)'
                  : 'cubic-bezier(0.7, 0, 0.84, 0)',
                transitionDelay: `${activeDelay}ms`,
                transformOrigin: 'center center',
              }}
            />
          );
        })}
      </div>

      {/* Floating Center Badge that pops in and out quickly */}
      <div
        className="absolute z-10 px-5 py-3 bg-white border-2 border-[#21243D] rounded shadow-[4px_4px_0px_#00A8CC] flex items-center space-x-3 transition-all duration-200"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          opacity: isVisible ? 1 : 0,
          transitionDelay: isVisible ? '120ms' : '0ms',
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6464]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC]" />
        <span className="text-base font-bold text-[#21243D] tracking-tight">
          Shaurya Sharma
        </span>
      </div>

    </div>
  );
}
