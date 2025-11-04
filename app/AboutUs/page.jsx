"use client";

export default function AboutUs() {
  const profiles = [
    {
      id: 1,
      name: "Orlando Wilson",
      color: "#0072CE",
      image: "/Images/player1.jpg",
      pantone: "Pantone® Orlando Blue",
    },
    {
      id: 2,
      name: "Oklahoma Marigold",
      color: "#F25C05",
      image: "/Images/player2.jpg",
      pantone: "Pantone® Oklahoma Orange",
    },
    {
      id: 3,
      name: "Rogue du Fusée",
      color: "#C40000",
      image: "/Images/player3.jpg",
      pantone: "Pantone® Rocket Red",
    },
    {
      id: 4,
      name: "California Sherwin",
      color: "#111111",
      image: "/Images/player4.jpg",
      pantone: "Pantone® Cali Noir",
    },
    {
      id: 5,
      name: "Michigan Azure",
      color: "#0076A3",
      image: "/Images/player5.jpg",
      pantone: "Pantone® Michigan Blue",
    },
    {
      id: 6,
      name: "Gold Harvest",
      color: "#FFD700",
      image: "/Images/player6.jpg",
      pantone: "Pantone® Goldenrod",
    },
    {
      id: 7,
      name: "Trailblazer Crest",
      color: "#E03C31",
      image: "/Images/player7.jpg",
      pantone: "Pantone® Portland Red",
    },
    {
      id: 8,
      name: "Louisiana Denim",
      color: "#0033A0",
      image: "/Images/player8.jpg",
      pantone: "Pantone® Louisiana Blue",
    },
    {
      id: 9,
      name: "Texan Abyss",
      color: "#A2AAAD",
      image: "/Images/player9.jpg",
      pantone: "Pantone® Silver Grey",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <h2 className="text-center text-4xl font-semibold mb-12 uppercase tracking-wide">
        Pantone Profiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Player image with color overlay */}
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover grayscale"
              />
              <div
                className="absolute inset-0 opacity-70"
                style={{ backgroundColor: profile.color }}
              ></div>
            </div>

            {/* Pantone-style footer */}
            <div className="bg-white text-black p-5">
              <h3 className="text-lg font-semibold">{profile.pantone}</h3>
              <p className="text-sm mt-1 opacity-80">{profile.name}</p>
            </div>

            {/* Thin color bar at bottom */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: profile.color }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
