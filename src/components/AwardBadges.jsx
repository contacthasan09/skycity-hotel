import { AWARDS } from '../data/content'

export default function AwardBadges({ className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 flex-wrap ${className}`}>
      {AWARDS.map((a) => (
        <span
          key={a.name}
          className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 ${a.dark ? 'text-black' : 'text-white'}`}
          style={{ background: a.bg }}
        >
          {a.name}
        </span>
      ))}
    </div>
  )
}