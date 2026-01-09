'use client';

import { cn } from '@/shared/lib/utils';
import {
  motion,
  useMotionValue,
  useSpring,
  type Easing,
  type HTMLMotionProps,
} from 'framer-motion';
import * as React from 'react';

const STARFIELD_TILE_SIZE_PX = 4000;
const LINEAR_EASE = [0, 0, 1, 1] as const;

type StarLayerProps = Omit<HTMLMotionProps<'div'>, 'transition' | 'animate'> & {
  count: number;
  size: number;
  transition: { repeat?: number; duration?: number; ease?: Easing | Easing[] };
  starColor: string;
};

function generateStars(
  count: number,
  starColor: string,
  areaWidth: number,
  areaHeight: number
) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * areaWidth);
    const y = Math.floor(Math.random() * areaHeight);
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(', ');
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: LINEAR_EASE },
  starColor = '#fff',
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState<string>('');
  const layerRef = React.useRef<HTMLDivElement>(null);
  const [layerWidth, setLayerWidth] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const width = layerRef.current?.offsetWidth;
      if (typeof width === 'number' && width > 0) setLayerWidth(width);
      else if (typeof window !== 'undefined') setLayerWidth(window.innerWidth);
    };

    update();

    if (typeof window === 'undefined') return;
    if ('ResizeObserver' in window && layerRef.current) {
      const ro = new ResizeObserver(() => update());
      ro.observe(layerRef.current);
      return () => ro.disconnect();
    }

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  React.useEffect(() => {
    if (!layerWidth) return;
    setBoxShadow(
      generateStars(count, starColor, layerWidth, STARFIELD_TILE_SIZE_PX)
    );
  }, [count, starColor, layerWidth]);

  return (
    <motion.div
      ref={layerRef}
      data-slot="star-layer"
      className={cn('absolute top-0 left-0 w-full', className)}
      style={{ height: STARFIELD_TILE_SIZE_PX }}
      animate={{ y: -STARFIELD_TILE_SIZE_PX }}
      transition={{
        repeat: transition.repeat ?? Infinity,
        repeatType: 'loop',
        type: 'tween',
        duration: transition.duration ?? 50,
        ease: transition.ease ?? LINEAR_EASE,
      }}
      {...props}
    >
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          top: STARFIELD_TILE_SIZE_PX,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<'div'> & {
  factor?: number;
  speed?: number;
  transition?: { stiffness?: number; damping?: number; mass?: number };
  starColor?: string;
  pointerEvents?: boolean;
};

function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = '#fff',
  pointerEvents = true,
  ...props
}: StarsBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor]
  );

  return (
    <div
      data-slot="stars-background"
      className={cn(
        'relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)]',
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={cn({ 'pointer-events-none': !pointerEvents })}
      >
        <StarLayer
          count={1000}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: LINEAR_EASE }}
          starColor={starColor}
        />
        <StarLayer
          count={400}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: LINEAR_EASE,
          }}
          starColor={starColor}
        />
        <StarLayer
          count={200}
          size={5}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: LINEAR_EASE,
          }}
          starColor={starColor}
        />
      </motion.div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,
  type StarLayerProps,
  type StarsBackgroundProps,
};
