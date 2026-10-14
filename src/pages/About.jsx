import { TEAM } from '../data/content'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A landmark of hospitality in central Dhaka"
        image="https://static.wixstatic.com/media/11062b_cc6be4a9d73e4f71bc504bae8980d0e3~mv2.jpg/v1/fill/w_2530,h_1170,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cc6be4a9d73e4f71bc504bae8980d0e3~mv2.jpg"
      />

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Sky City Hotel Dhaka"
              subtitle="An award-winning 4-star premium hotel in central Dhaka — Motijheel, Dilkusha, Ramna and Malibagh. We deliver comfortable stays, warm hospitality and excellent facilities for business and leisure travellers."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="container-max">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="Executive Management Team" align="center" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center mt-12">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100} className="text-center">
                <div className="relative">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-44 h-44 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-card"
                  />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-10 bg-gradient-to-r from-[#c9973d] to-transparent" />
                </div>
                <h3 className="font-signika text-lg text-ink">{m.name}</h3>
                <p className="text-xs uppercase tracking-widest text-cyan mt-1">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Why Sky City" title="Why Choose Sky City Hotel Dhaka" />
            <ul className="body-text space-y-3 list-disc pl-5 marker:text-gold">
              <li>Central location near Motijheel business district &amp; Ramna</li>
              <li>Modern rooms and suites with free Wi‑Fi</li>
              <li>Restaurant, café, 24‑hour room service</li>
              <li>Spa, gym, indoor &amp; outdoor pools</li>
              <li>Banquet &amp; meeting facilities for events and weddings</li>
              <li>Award-recognised hospitality (Booking.com, Tripadvisor, Hotels.com, Expedia)</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}