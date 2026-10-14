import { Link } from 'react-router-dom'
import { ROOMS } from '../data/content'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Rooms() {
  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="Comfort, style and quiet elegance"
        image="https://static.wixstatic.com/media/c327b7_26881d61784945a9a6e889c76e4a70f6~mv2.jpg/v1/fill/w_2530,h_1170,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c327b7_26881d61784945a9a6e889c76e4a70f6~mv2.jpg"
      />

      <section className="py-20">
        <div className="container-max">
          <Reveal>
            <SectionHeading
              eyebrow="Accommodation"
              title="Designed for Rest & Focus"
              subtitle="Unfussy rooms feature smart TVs, free Wi‑Fi, minifridges, tea & coffee making equipment and safes. Suites add living areas and enhanced comfort."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <article className="card-lift bg-white border border-gray-100 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-[#0a2a32]/85 text-white text-[11px] font-semibold tracking-wide px-3 py-1.5">
                      From {r.price} / night
                    </span>
                  </div>
                  <div className="p-7">
                    <h2 className="font-signika text-xl text-teal mb-2">{r.name}</h2>
                    <p className="text-sm text-ink/80 mb-5 leading-relaxed">{r.desc}</p>
                    <div className="flex items-center justify-between">
                      <Link to="/contact" className="btn-book text-xs">Book Now</Link>
                      <span className="text-xs uppercase tracking-widest text-cyan font-semibold">Free Wi‑Fi</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}