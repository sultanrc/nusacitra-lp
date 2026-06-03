import backgroundImage from "../assets/jumbotron.jpg"; // foto industrial-nya

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "calc(100vh - 90px",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent" />

      {/* Konten */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-end pb-24">
        <h2 className="text-6xl font-bold text-white leading-tight max-w-xl">
          Reliable industrial services across Indonesia
        </h2>
      </div>
    </section>
  );
}
