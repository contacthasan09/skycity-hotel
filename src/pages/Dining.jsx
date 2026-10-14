import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Dining() {
  return (
    <>
      <PageHero
        title="Restaurants & Dining"
        subtitle="A menu for every mood"
        video="https://video.wixstatic.com/video/c327b7_7f76715b172448f7aa271f9b86f486bb/720p/mp4/file.mp4"
        image="https://static.wixstatic.com/media/c327b7_7f76715b172448f7aa271f9b86f486bbf000.jpg/v1/fill/w_1265,h_585,al_c,q_85,enc_avif,quality_auto/poster.jpg"
      />

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Bailey Brasserie"
              title="Quality Dining in a Relaxed, Elegant Setting"
              subtitle="Bailey Brasserie offers international & local cuisines — buffet breakfast, lunch and dinner, plus all‑day à la carte. Led by Executive Chef Jahidur Rahman (Chaîne des Rôtisseurs award winner)."
            />
          </Reveal>
          <Reveal delay={120}>
            <ul className="text-sm space-y-3 text-ink mt-8 border-l-2 border-gold pl-5">
              <li><strong className="text-teal">Cuisine:</strong> Pan‑Asian, Continental, Turkish &amp; Middle Eastern</li>
              <li><strong className="text-teal">Hours:</strong> Daily 07:00 – 23:00</li>
              <li><strong className="text-teal">Breakfast buffet:</strong> 07:00 – 10:30</li>
              <li><strong className="text-teal">Style:</strong> À la carte, buffet, take‑away &amp; delivery</li>
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link to="/room-service" className="btn-book">Room Service</Link>
              <a href="tel:+8801313368386" className="btn-pill">Reserve: 01313 368 386</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <figure className="relative overflow-hidden group">
              <img
                src="https://static.wixstatic.com/media/c327b7_20cb4379c4504d3cb42c637f0fb384b2~mv2_d_2496_1664_s_2.jpg/v1/crop/x_1118,y_0,w_1132,h_1534/fill/w_600,h_800,al_c,q_85,enc_avif,quality_auto/Memories.jpg"
                alt="Memories of Dhaka"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <p className="font-signika text-lg">Memories of Dhaka</p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative overflow-hidden group">
              <img
                src="https://static.wixstatic.com/media/c327b7_7f34a37c105148b09be347fe2f66b50e~mv2_d_3600_2612_s_4_2.jpg/v1/crop/x_1663,y_0,w_1776,h_2386/fill/w_600,h_800,al_c,q_85,enc_avif,quality_auto/BBQ.jpg"
                alt="Charcoal BBQ"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <p className="font-signika text-lg">Charcoal BBQ</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}