import { Lightbulb, BadgeCheck, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-40 ">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-7">
        <div className="flex-1 text-center md:text-left">
          <img
            src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg"
            alt="About Us"
            className="  w-full mx-auto md:mx-0"
          />
          <Button className="rounded-none">
            Learn More About Us <ArrowRight />
          </Button>
        </div>

        <div className="flex-1 md:h-60">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <Tabs defaultValue="who" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="who">Who We Are</TabsTrigger>
              <TabsTrigger value="what">What We Do</TabsTrigger>
              <TabsTrigger value="why">Why We Do It</TabsTrigger>
            </TabsList>
            <TabsContent value="who" className="mt-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="text-blue-500 w-10 h-10 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold uppercase">Who We Are</h3>
                  <p className="text-gray-600">
                    A unique blend of creative, editorial, digital and technical
                    experts obsessed with getting quantifiable results.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="what" className="mt-4">
              <div className="flex items-start gap-2">
                <BadgeCheck className="text-blue-500 w-10 h-10 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold uppercase">What We Do</h3>
                  <p className="text-gray-600">
                    Converge at the intersection of technology and human
                    behavior. We capitalize on the perks of data-driven
                    marketing.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="why" className="mt-4">
              <div className="flex items-start gap-2">
                <Briefcase className="text-blue-500 w-10 h-10 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold uppercase">Why We Do It</h3>
                  <p className="text-gray-600">
                    Passion for excellence drives us. Curiosity keeps us alive.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
