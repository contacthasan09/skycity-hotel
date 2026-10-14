import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Offers() {
  return (
    <>
      <PageHero
        title="Offers"
        subtitle="Curated savings for direct guests"
        video="https://video.wixstatic.com/video/11062b_7bb9944945af4723ad2aefa5caed46a4/720p/mp4/file.mp4"
        image="https://static.wixstatic.com/media/11062b_7bb9944945af4723ad2aefa5caed46a4f000.jpg/v1/fill/w_1265,h_585,al_c,q_85,enc_avif,quality_auto/poster.jpg"
      />

      <section className="py-20">
        <div className="container-max max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Exclusive"
              title="Exclusive Online Offer"
              subtitle="T&Cs apply. Limited time. Book direct for the best rate."
            />
            <p className="text-3xl md:text-4xl text-teal font-signika mt-4">Get up to 30% off!</p>
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-[#fafaeb] border-l-4 border-gold p-7 mt-10 shadow-soft">
              <h3 className="font-signika text-xl text-ink mb-2">Bon Appétit!</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Dining and stay packages available. Contact reservations for current promotions and seasonal deals.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <a href="tel:+8801313368388" className="btn-book inline-block mt-10">Call to Book</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}