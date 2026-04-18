import { motion } from 'framer-motion'

export const spring = { type: 'spring', stiffness: 100, damping: 18, mass: 0.6 }
export const softSpring = { type: 'spring', stiffness: 80, damping: 20 }

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: spring },
}

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: spring },
}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const viewport = { once: true, amount: 0.25 }

export function FadeUp({ children, delay = 0, className, as: Tag = 'div' }) {
  const Comp = motion[Tag]
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { ...spring, delay } },
      }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function ScaleIn({ children, delay = 0, className, as: Tag = 'div' }) {
  const Comp = motion[Tag]
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, scale: 0.96, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { ...spring, delay } },
      }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function Stagger({ children, className, amount = 0.2, stagger = 0.08, as: Tag = 'div' }) {
  const Comp = motion[Tag]
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ children, className, variant = 'up', as: Tag = 'div', whileHover }) {
  const Comp = motion[Tag]
  const variants = variant === 'scale' ? scaleIn : variant === 'right' ? slideRight : fadeUp
  return (
    <Comp variants={variants} whileHover={whileHover} className={className}>
      {children}
    </Comp>
  )
}
