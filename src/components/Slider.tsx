import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const slides = [
  {
    title: "Welcome to Aakash Labs",
    description: "We provide the best services in town.",
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    buttonText: "Learn More",
  },
  {
    title: "Our Mission",
    description: "Empowering innovation and creativity.",
    image:
      "https://images.pexels.com/photos/32951469/pexels-photo-32951469.jpeg",
    buttonText: "Explore",
  },
  {
    title: "Join Our Team",
    description: "We are hiring passionate individuals.",
    image:
      "https://images.pexels.com/photos/15518197/pexels-photo-15518197.jpeg",
    buttonText: "Apply Now",
  },
];

const Slider = () => {
  return (
    <div className="py-8 my-20 p-4 px-6 lg:px-40">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <Card className="flex flex-col md:flex-row items-center justify-between gap-6 bg-neutral-100 shadow-lg py-0 rounded-none">
                <div className="md:w-1/2 space-y-4 p-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600">{slide.description}</p>
                  {slide.buttonText && <Button>{slide.buttonText}</Button>}
                </div>
                <div className="md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
