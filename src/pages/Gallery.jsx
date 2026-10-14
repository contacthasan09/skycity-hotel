import { GALLERY } from '../data/content'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through Sky City"
        image={GALLERY[0]}
        height="h-56 md:h-72"
      />

      <section className="py-16">
        <div className="container-max grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <figure className="relative overflow-hidden group">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-44 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0a2a32]/0 group-hover:bg-[#0a2a32]/30 transition-colors duration-500" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}