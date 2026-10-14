export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="section-title-teal">{title}</h2>
      <div className="gold-rule" />
      {subtitle && <p className="body-text mt-3">{subtitle}</p>}
    </div>
  )
}