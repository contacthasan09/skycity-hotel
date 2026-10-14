import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Wellness() {
  return (
    <>
      <PageHero
        title="Imperial Thai Spa & Wellness"
        subtitle="Relax · Restore · Rejuvenate"
        image="https://static.wixstatic.com/media/c327b7_9459956a088841338c7c3fd7ae89571d~mv2.jpg/v1/fill/w_2530,h_1170,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/spa.jpg"
      />

      <section className="py-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Wellness"
              title="Relax &amp; Recharge"
              subtitle="Enjoy our spa facilities, indoor swimming pool, fitness centre, sauna and beauty salon. Yoga classes and steam room available for a complete wellness experience in the heart of Dhaka."
            />
            <ul className="text-sm space-y-3 list-disc pl-5 text-ink mt-6 marker:text-gold">
              <li>Imperial Thai Spa treatments</li>
              <li>Indoor &amp; outdoor pools</li>
              <li>Fully equipped gym</li>
              <li>Sauna &amp; steam</li>
            </ul>
            <a href="tel:+8801313368388" className="btn-book inline-block mt-8">Book a Treatment</a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://static.wixstatic.com/media/c327b7_00fdb30e1f9e4ceab43b6dc1fcb5021f~mv2.jpg/v1/fill/w_614,h_800,al_tl,q_85,enc_avif,quality_auto/spa-detail.jpg"
              alt="Spa"
              className="w-full h-96 object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}