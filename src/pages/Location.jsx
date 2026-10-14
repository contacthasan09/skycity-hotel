import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const NEARBY = [
  'Shahjalal International Airport (DAC) — 12.7 km',
  'Kamalapur Railway Station — 2.2 km',
  'Bailey Road — 0.3 mi',
  'Ramna Park — 1.5 mi',
  'Dhaka University — 1.8 mi',
  'National Museum — 3.4 km',
  'Supreme Court — 1.5 mi',
  'Bashundhara City — 4.4 km',
]

export default function Location() {
  return (
    <>
      <PageHero
        title="Location"
        subtitle="Central Dhaka · Motijheel · Dilkusha · Ramna"
        image="https://static.wixstatic.com/media/c327b7_f1931e94f78b49f99dcea9480c27ef94f003.jpg/v1/fill/w_2530,h_1170,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.jpeg"
        height="h-56 md:h-72"
      />

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Getting Here"
              title="A Central Address"
              subtitle="Sky City Hotel is strategically located near Motijheel &amp; Dilkusha — Dhaka’s main commercial and business hub — as well as the historic neighbourhood of Ramna."
            />
          </Reveal>

          <Reveal delay={140}>
            <h2 className="section-title-teal text-lg mt-10 mb-4">Nearby</h2>
            <ul className="text-sm text-ink grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {NEARBY.map((n) => (
                <li key={n} className="border-l-2 border-gold pl-3">{n}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 p-6 bg-ivory border border-gray-100">
              <p className="text-sm">
                <strong className="text-teal">Address:</strong>{' '}
                47 Siddheswari Circular Rd, Dhaka 1217, Bangladesh
              </p>
              <a
                href="https://maps.google.com/?q=Sky+City+Hotel+Dhaka"
                target="_blank"
                rel="noopener"
                className="btn-book inline-block mt-5"
              >
                Open in Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}