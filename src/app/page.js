import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 ">

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-40 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Together We Clean. <br />
            Together We Rise.
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Swachh Prahari connects citizens who care about cleanliness.
            Post areas that need attention, volunteer to clean, and build
            a cleaner community — one action at a time.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Every photo shared is a step towards change. 
            Every volunteer is a hero.
          </p>

          <div className="mt-8">
            <a
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md"
            >
              Join The Movement
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/cleanliness.jpeg"
            alt="Community cleaning together"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

      </section>
    </main>
  );
}
