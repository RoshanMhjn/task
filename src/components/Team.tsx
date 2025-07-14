import { Card, CardContent } from "./ui/card";

const team = [
  {
    name: "Dipesh Karki",
    position: "Finance Manager",
    image: "https://aakashlabs.com/_nuxt/img/dipesh.e83f911.jpg",
  },
  {
    name: "Prayusha Shrestha",
    position: "HR Officer",
    image: "https://aakashlabs.com/_nuxt/img/pra.cff5285.jpg",
  },
  {
    name: "Manta Lama",
    position: "Digital Marketing Co-ordinator",
    image: "https://aakashlabs.com/_nuxt/img/manta.3632c39.jpg",
  },
  {
    name: "Dipak B K",
    position: "Motion Graphics and Video Editor",
    image: "https://aakashlabs.com/_nuxt/img/deepak.1215f09.jpg",
  },
  {
    name: "Aman Shrestha",
    position: "Sr. Graphic Designer",
    image: "https://aakashlabs.com/_nuxt/img/aman.b85e840.jpeg",
  },
  {
    name: "Rajan Sharma",
    position: "Marketing Officer",
    image: "https://aakashlabs.com/_nuxt/img/rajan.5ea617d.jpeg",
  },
  {
    name: "Prajwol KC",
    position: "Software Engineer",
    image: "https://aakashlabs.com/_nuxt/img/prajwol.3898cf1.jpeg",
  },
  {
    name: "Sujan Karki",
    position: "Graphics Design Intern",
    image: "https://aakashlabs.com/_nuxt/img/sujan.72e127a.jpeg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 lg:px-40 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <Card key={index} className="p-4 rounded-none ">
            <CardContent className="flex flex-col items-center text-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover shadow"
              />
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-md font-semibold  italic text-gray-500">
                  {member.position}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
