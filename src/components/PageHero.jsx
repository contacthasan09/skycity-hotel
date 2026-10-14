export default function PageHero({ title, subtitle, image, video, height = 'h-64 md:h-80' }) {
  return (
    <section className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="relative z-10 text-center px-4 animate-fadeUp">
        <h1 className="text-white text-3xl md:text-5xl font-signika tracking-wide drop-shadow">{title}</h1>
        {subtitle && <p className="text-white/85 mt-3 text-sm md:text-base tracking-wide">{subtitle}</p>}
        <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#51d6f3] to-transparent" />
      </div>
    </section>
  )
}