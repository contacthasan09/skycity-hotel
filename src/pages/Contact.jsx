import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you"
        image="https://static.wixstatic.com/media/c327b7_eff9ec01bd68432caa03ede4446d383c~mv2.jpg/v1/fill/w_1000,h_700,al_r,q_85,enc_avif,quality_auto/contact.jpg"
        height="h-56 md:h-72"
      />

      <section className="py-20 bg-ivory">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <form
              className="bg-white border border-gray-100 p-8 shadow-card"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="section-title-teal text-xl mb-6">Send a Message</h2>
              <label className="form-label">Name</label>
              <input className="input-field mb-4" type="text" required />

              <label className="form-label">Email</label>
              <input className="input-field mb-4" type="email" required />

              <label className="form-label">Phone</label>
              <input className="input-field mb-4" type="tel" />

              <label className="form-label">Message</label>
              <textarea className="input-field mb-6 min-h-[130px]" required />

              <button type="submit" className="btn-cyan">Send Message</button>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <SectionHeading eyebrow="Reach Us" title="Sky City Hotel Dhaka" />
              <ul className="space-y-4 text-sm text-ink mt-6">
                <li className="border-l-2 border-gold pl-4">47 Siddheswari Circular Road, Dhaka 1217, Bangladesh</li>
                <li className="border-l-2 border-gold pl-4">
                  Hotline: <a href="tel:+8801313368388">+880 1313-368388</a>
                </li>
                <li className="border-l-2 border-gold pl-4">
                  Reservations: <a href="tel:+8801313368377">+880 1313-368377</a>
                </li>
                <li className="border-l-2 border-gold pl-4">
                  Email: <a href="mailto:hello@skycityhotelbd.com">hello@skycityhotelbd.com</a>
                </li>
                <li className="border-l-2 border-gold pl-4">
                  Sales: <a href="mailto:sales@skycityhotelbd.com">sales@skycityhotelbd.com</a>
                </li>
              </ul>

              <img
                src="https://static.wixstatic.com/media/c327b7_eff9ec01bd68432caa03ede4446d383c~mv2.jpg/v1/fill/w_500,h_560,al_r,q_85,enc_avif,quality_auto/contact.jpg"
                alt="Hotel"
                className="mt-8 w-full max-w-xs object-cover shadow-card"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}