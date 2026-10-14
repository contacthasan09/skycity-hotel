import { Link } from 'react-router-dom'
import { HERO_HOME } from '../data/content'
import BookingWidget from '../components/BookingWidget'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <section className="relative min-h-[78vh] md:min-h-[88vh] flex items-end md:items-center overflow-hidden">
        <img src={HERO_HOME} alt="Sky City Hotel Dhaka" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/30 to-black/60" />

        <div className="container-max relative z-10 w-full grid md:grid-cols-2 gap-10 items-center py-16">
          <div className="text-white animate-fadeUp">
            <p className="eyebrow text-[#51d6f3] mb-4">Dhaka · Since 2016</p>
            <h1 className="font-signika text-4xl md:text-6xl leading-tight tracking-tight drop-shadow">
              A Refined Address<br />in the Heart of Dhaka
            </h1>
            <p className="mt-5 text-white/85 max-w-lg text-base md:text-lg">
              Award-winning 4-star hospitality — modern rooms, curated dining, wellness and
              banquets, moments from Motijheel, Dilkusha &amp; Ramna.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/rooms" className="btn-book">Explore Rooms</Link>
              <Link to="/about" className="btn-pill">Our Story</Link>
            </div>
          </div>

          <div className="flex md:justify-end">
            <BookingWidget variant="hero" />
          </div>
        </div>
      </section>

      <section className="relative py-10 bg-gradient-to-r from-[#eafaf6] via-[#d8f3ec] to-[#a8e6d8]">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-5 bg-white/95 px-7 py-6 shadow-soft border border-white">
          <div>
            <p className="eyebrow mb-2">Limited Time</p>
            <h2 className="text-xl md:text-2xl font-signika text-ink tracking-wide uppercase">Discover Something Special</h2>
            <p className="text-sm text-ink/80 mt-1">Enjoy 15% off direct bookings — a little more adventure, a little less cost.</p>
          </div>
          <Link to="/offers" className="btn-pill">Offer Details</Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow mb-3">Welcome</p>
            <h1 className="section-title-teal text-3xl md:text-5xl mb-5">Welcome to Sky City Hotel Dhaka</h1>
            <h2 className="section-title text-xl md:text-2xl mb-6">An Award-Winning 4-Star Business Hotel in the Heart of Dhaka</h2>
            <div className="mx-auto h-[2px] w-16 bg-gradient-to-r from-transparent via-[#c9973d] to-transparent mb-8" />
            <p className="body-text text-left md:text-center">
              Conveniently located near Bailey Road, Shantinagar, Malibagh, Motijheel and Ramna,
              Sky City combines contemporary rooms, quality dining, wellness facilities and
              banqueting under one roof.
            </p>
            <p className="body-text mt-4 text-left md:text-center">
              Whether visiting for business, family or a special event — comfort, reliability and value, in a central location.
            </p>
            <p className="mt-8 text-sm font-semibold text-teal tracking-wide">
              ✔ Modern Rooms &nbsp;|&nbsp; ✔ Restaurant &amp; Café &nbsp;|&nbsp; ✔ Gym &amp; Wellness &nbsp;|&nbsp; ✔ Banquets
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-9">
              <Link to="/rooms" className="btn-book">View Rooms</Link>
              <Link to="/about" className="btn-pill">About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="container-max">
          <SectionHeading eyebrow="Explore" title="A Curated Experience" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { to: '/rooms', title: 'Rooms & Suites', desc: 'Modern, comfortable rooms for business & leisure.' },
              { to: '/dining', title: 'Dining', desc: 'Bailey Brasserie — international & local cuisine.' },
              { to: '/wellness', title: 'Wellness', desc: 'Spa, gym, pools — relax and recharge.' },
              { to: '/meetings', title: 'Events', desc: 'Banquets, meetings & wedding venues.' },
            ].map((c, i) => (
              <Reveal key={c.to} delay={i * 90}>
                <Link
                  to={c.to}
                  className="card-lift bg-white border border-gray-100 p-7 block h-full hover:border-[#51d6f3]"
                >
                  <div className="w-10 h-[3px] bg-gradient-to-r from-[#c9973d] to-transparent mb-4" />
                  <h3 className="font-signika text-lg text-teal mb-2">{c.title}</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">{c.desc}</p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-widest text-cyan uppercase">
                    Discover →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}