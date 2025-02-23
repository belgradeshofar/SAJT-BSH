"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section – A professional introduction with refined styling */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Shalom.rs is a media platform dedicated to truthful and
            objective reporting on Israel, Jewish culture, and the fight against misinformation.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800 text-lg mb-6">
              Our mission is to provide accurate, impartial, and research-based 
              information about Israel and the Jewish people. 
              In an era where information manipulation has become a powerful tool, Shalom.rs stands as
              a bastion of truth, shedding light on facts and exposing propaganda.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-800 text-lg">
              We aim to establish Shalom.rs as the leading independent source of 
              information about Israel and Jewish heritage in the region. 
              By utilizing modern technology, in-depth analysis, and investigative journalism, 
              we are building a platform that dismantles prejudice, exposes false narratives, 
              and gives a voice to those often unheard in global media.
            </p>
          </div>
          <div>
            <img
              src="o-nama-misija.jpg"
              alt="Our Mission and Vision"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Truth</h3>
              <p className="text-gray-700">
                Every published report is based on facts, verified sources, and in-depth analysis.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Impartiality</h3>
              <p className="text-gray-700">
                We report without sensationalism ensuring 
                our readers get the full picture.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <p className="text-gray-700">
                Through historical retrospectives, analysis, and educational content, 
                we promote knowledge about Israel and Jewish heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration with Metapolis Center */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            In Collaboration with Metapolis Center
          </h2>
          <p className="text-gray-800 text-lg">
            Shalom.rs is part of a broader digital development initiative, supported by the 
            Metapolis Center—an organization dedicated to promoting journalism, 
            research projects, and community initiatives.  
            This collaboration provides us with technical and analytical support 
            in the fight for truth and transparency in media.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6">
            If you support journalism and the fight against misinformation, 
            become part of the community shaping the future of media.
          </p>
          <a
            href="/kontakt"
            className="bg-yellow-300 text-black py-3 px-6 rounded hover:bg-yellow-400 font-bold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
