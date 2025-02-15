"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section – An attractive intro with rounded corners */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            BELGRADE SHOFAR is a leading news portal that gathers and delivers
            the latest and most reliable news from Israel.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800 text-lg mb-6">
              Our mission is to provide accurate, timely, and impartial information,
              inspiring and empowering our audience to stay informed about all key
              events from Israel.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-800 text-lg">
              We strive to become the primary news source in the region, using
              innovative technologies and the latest journalistic practices to
              ensure high-quality and credible information.
            </p>
          </div>
          <div>
            <img
              src="/images/o-nama-misija.jpg"
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
                We respect journalistic ethics, truth, and impartiality in every report.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-700">
                Our commitment to detail ensures that every piece of news is verified and correct.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We use cutting-edge technologies to quickly and efficiently deliver information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example team member – add as many as you like */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member1.jpg"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Marko Marković</h3>
            <p className="text-gray-600">Lead Journalist</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member2.jpg"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Jelena Jovanović</h3>
            <p className="text-gray-600">Editor</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member3.jpg"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Nikola Nikolić</h3>
            <p className="text-gray-600">Digital Strategist</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6">
            If you believe in the power of truthful and impartial journalism, be a part
            of the community that shapes the future of information.
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
