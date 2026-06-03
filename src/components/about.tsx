import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// placeholder, nanti ganti dengan foto asli
import img1 from "../assets/Img1.jpg";
import img2 from "../assets/Img2.jpg";
import img3 from "../assets/Img3.jpg";

const images = [img1, img2, img3, img1, img2, img3];

export default function About() {
  return (
    <section className="w-full pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-24 mb-16">
          <h2 className="text-4xl font-bold leading-snug">
            Building Reliable Industrial Solutions{" "}
            <span className="text-red-600">Since 1984</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            PT Nusacitra Anugerahpratama is an engineering and industrial
            support company serving the oil & gas sector with a strong
            commitment to quality, safety, and reliability.
          </p>

          <div className="flex flex-col justify-between">
            <p className="text-gray-600 leading-relaxed">
              42 years, we have supported operational and project activities for
              PT Pertamina Patra Niaga through professional service, structured
              workflows, and consistent project support.
            </p>
            <a
              href="#"
              className="self-end font-semibold hover:text-red-600 transition mt-6"
            >
              More →
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto px-28  bg-gray-200">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-4 basis-1/3">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" -left-4 rounded-none! border-none! bg-white! hover:bg-gray-100! scale-180" />
          <CarouselNext className=" -right-4 rounded-none! border-none! bg-white! hover:bg-gray-100! scale-180" />
        </Carousel>
      </div>
    </section>
  );
}
