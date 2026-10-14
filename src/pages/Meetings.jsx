import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Meetings() {
  return (
    <>
      <PageHero
        title="Make Your Event"
        subtitle="Meetings · Banquets · Weddings"
        image="https://static.wixstatic.com/media/0a2e17eb03fa4662b759578a9a3bd687.jpg/v1/fill/w_1960,h_1806,al_c,q_90,enc_avif,quality_auto/event.jpg"
      />

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Grand City Banquet"
              title="Meeting Rooms, Events & Banquets"
              subtitle="Host conferences, corporate meetings, banquets and celebrations at Grand City Banquet — flexible spaces, professional service and central Dhaka convenience."
            />
            <a href="mailto:sales@skycityhotelbd.com" className="btn-book inline-block mt-8">Enquire Now</a>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <img
              src="https://static.wixstatic.com/media/c327b7_e7d6fe52eb7c4a29ae45e06f5913f019~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,enc_avif,quality_auto/hall.jpg"
              alt="Banquet hall"
              className="w-full h-72 object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://static.wixstatic.com/media/5dd3bd79153f4a169dc88741631afbe8.jpg/v1/fill/w_980,h_500,al_b,q_85,enc_avif,quality_auto/wedding.jpg"
              alt="Wedding setup"
              className="w-full h-72 object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}