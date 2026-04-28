const sizes = {
  sm:  'text-base',
  md:  'text-xl',
  lg:  'text-2xl',
  xl:  'text-3xl',
}

export default function Logo({ dark = false, size = 'md' }) {
  return (
    <span className={`font-black tracking-tight ${sizes[size]}`} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1 }}>
      <span style={{ color: dark ? '#ffffff' : '#111827' }}>Accelerator</span>
      <span style={{ color: '#2563eb', fontStyle: 'italic', display: 'inline-block', transform: 'skewX(-6deg)' }}>X</span>
    </span>
  )
}
