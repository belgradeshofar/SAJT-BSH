"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section – A professional introduction with refined styling */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Shalom.rs is a premier news portal dedicated to delivering reliable and timely news from Israel.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800 text-lg mb-6">
              Our mission is to provide accurate, timely, and impartial information, empowering our audience with comprehensive insights into the most significant events in Israel.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-800 text-lg">
              We aspire to establish shalom.rs as the foremost source of trustworthy news in the region by leveraging advanced technologies and exemplary journalistic practices.
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
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of journalistic ethics, ensuring truth and impartiality in every report.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-700">
                Our commitment to precision guarantees that every piece of news is meticulously verified.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We leverage cutting-edge technologies to deliver information swiftly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration with Metapolis Center */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">In Collaboration with the Metapolis Center</h2>
          <p className="text-gray-800 text-lg">
            Shalom.rs is proud to be part of a broader web development initiative led by the Metapolis Center—an organization committed to fostering non-profit journalism and innovative community development. Spearheaded by a dynamic group of young professionals, Shalom.rs with Metapolis's technical support promotes unbiased news and empowers citizens with transparent information.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6">
            If you value informed and unbiased journalism, become part of the community shaping the future of news.
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
