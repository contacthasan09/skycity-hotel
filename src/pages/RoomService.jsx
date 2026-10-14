import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function RoomService() {
  return (
    <>
      <PageHero
        title="Room Service"
        subtitle="Available 24 hours"
        image="https://static.wixstatic.com/media/c327b7_fcee3cb439b5452cb9194f43d51f2fdf~mv2.jpg/v1/fill/w_2530,h_1170,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/roomservice.jpg"
      />

      <section className="py-20">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="In-Room Dining"
              title="Dine in the Comfort of Your Room"
              subtitle="Enjoy 24‑hour room service. Order from our restaurant menu and dine in privacy. Dial the extension from your room phone or call reception to place an order."
            />
            <a href="tel:+8801313368386" className="btn-book inline-block mt-8">Call to Order</a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://static.wixstatic.com/media/c327b7_74372d331f26412a9bf7547b1a805094~mv2.png/v1/crop/x_0,y_0,w_643,h_421/fill/w_600,h_400,al_c,q_90,enc_avif,quality_auto/room%20service_PNG.png"
              alt="Room service"
              className="w-full object-contain"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}