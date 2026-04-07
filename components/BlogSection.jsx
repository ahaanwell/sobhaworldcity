import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "East Bangalore",
    excerpt: "East Bangalore is one of the busiest and fastest-growing parts of the city. There is just the right amount of city life, open areas, wide roads and new buildings.",
    image: "/images/east-bangalore.png",
    link: "blog/east-bangalore.html"
  },
  {
    id: 2,
    title: "Hoskote",
    excerpt: "The town called Hoskote is growing quickly and is on the eastern side of Bangalore. There is a lot of green room and it is quiet. Many people choose to live in Hoskote because of its good roads.",
    image: "/images/about-hoskote.png",
    link: "blog/about-hostoke.html"
  },
  {
    id: 3,
    title: "Project Plan",
    excerpt: "A big private estate called Sobha World City is being built in Hoskote, East Bangalore. The plan is for the project to have modern homes,",
    image: "/images/project-plan.png",
    link: "blog/project-plan.html"
  },
  {
    id: 4,
    title: "RERA Status",
    excerpt: "One of the most talked-about new towns being built by Sobha Limited in East Bangalore is Sobha World City. Before you decide to spend, you should learn about the project and especially its RERA standing.",
    image: "/images/rera-status.png",
    link: "blog/rera-status.html"
  },
  {
    id: 5,
    title: "Sobha World City Near By Metro Station",
    excerpt: "A big goal for many families today is to find a home that combines comfort and strong connection. Since Bangalore is growing so fast,",
    image: "/images/sobha-world-city-near-by-metro-station.png",
    link: "blog/sobha-world-city-near-by-metro-station.html"
  },
  {
    id: 6,
    title: "Sobha World City near Hospital",
    excerpt: "It takes more than just finding a nice flat to choose a home. It&#39;s important to be close to good hospitals for comfort, safety and ease of life.",
    image: "/images/sobha-world-city-near-hospital.png",
    link: "blog/sobha-world-city-near-by-hospital.html"
  },
  {
    id: 7,
    title: "Sobha World City and Its Nearby Shopping Mall",
    excerpt: "If everyday things are close to a home, it&#39;s easy to choose it. It is called Sobha World City, and it is in Hoskote, which is in East Bangalore.",
    image: "/images/shopping-mall.png",
    link: "blog/sobha-world-city-and-its-nearby-shopping-mall.html"
  },
  {
    id: 8,
    title: "About Location",
    excerpt: "One great thing about Sobha World City&#39;s location is how easy it is to reach other places by road. It&#39;s easy for residents to reach established areas,",
    image: "/images/about-location.png",
    link: "blog/about-location.html"
  },
  {
    id: 9,
    title: "Sobha World City Completion Date",
    excerpt: "As of the latest available project updates, Sobha World City is expected to be completed in phases. This approach allows Sobha to deliver different parts of the township.",
    image: "/images/sobha-world-city-completion-date.png",
    link: "blog/sobha-world-city-completion-date.html"
  },
  {
    id: 10,
    title: "Sobha World City Connectivity",
    excerpt: "In this blog, we explore everything you need to know about Sobha World City Connectivity, covering its access to major roads, employment hubs, transport options, and nearby social infrastructure.",
    image: "/images/sobha-world-city-connectivity.png",
    link: "blog/sobha-world-city-connectivity.html"
  },
  {
    id: 11,
    title: "Sobha World City Investment",
    excerpt: "For anyone looking to invest in Bangalore’s rapidly growing property market, understanding the investment potential of Sobha World City is essential.",
    image: "/images/sobha-world-city-investment.png",
    link: "blog/sobha-world-city-investment.html"
  },
  {
    id: 12,
    title: "Whitefield, Bangalore",
    excerpt: "Whitefield, Bangalore has evolved into one of the city’s most dynamic and sought-after destinations, known for its rapid commercial growth, thriving IT hubs, and modern lifestyle",
    image: "/images/whitefield-bangalore.png",
    link: "blog/whitefield-bangalore.html"
  },
  {
    id: 13,
    title: "Best Sobha Ongoing Projects near Whitefield",
    excerpt: "Whitefield, Bangalore has evolved into one of the city’s most dynamic and sought-after destinations, known for its rapid commercial growth, thriving IT hubs, and modern lifestyle",
    image: "/images/ongoingprojects.png",
    link: "/best-sobha-ongoing-projects-near-whitefield.html"
  },
  {
    id: 14,
    title: "Top 10 Real Estate Developers in India",
    excerpt: "India&#39;s real estate market has grown significantly over the years and offers amazing homes, smart cities, and communities that prioritise living.",
    image: "/images/top-10-real-estate.jpeg",
    link: "/top-10-real-estate-developers-in-india.html"
  },
  {
    id: 15,
    title: "Is It a Good Time to Buy Real Estate in Bangalore?",
    excerpt: "People who want to buy a home or invest in India have always found Bangalore to be one of the country&#39;s most appealing cities.",
    image: "/images/bangalore-real-estate.jpeg",
    link: "/is-it-a-good-time-to-buy-real-estate-in-bangalore.html"
  },
  {
    id: 16,
    title: "2 BHK Apartment Floor Plan in Sobha World City",
    excerpt: "Do you want to find the best 2 BHK apartment floor plan in Sobha World City? If you want to buy your first house, or if you&#39;re an investor.",
    image: "/images/2-bhk-apartment-floor-plan.jpeg",
    link: "/2-bhk-apartment-floor-plan-in-sobha-world-city.html"
  },
  {
    id: 17,
    title: "Sobha Upcoming Project In Bangalore 2026",
    excerpt: "In 2026, Sobha Limited will build some amazing homes in Bangalore. These projects focus on high-quality construction, smart planning.",
    image: "/images/sobha-upcoming-project.jpeg",
    link: "/sobha-upcoming-project-in-bangalore-2026.html"
  },
  {
    id: 18,
    title: "Top Sobha Pre-Launch Luxury Apartment in Bangalore",
    excerpt: "The Sobha Group is famous for high-quality buildings and on-time delivery. A number of Sobha luxury flats in Bangalore.",
    image: "/images/sobha-pre-launch-luxury-apartment.jpeg",
    link: "/top-sobha-pre-launch-luxury-apartment-in-bangalore.html"
  },
  {
    id: 19,
    title: "Sobha 2 BHK Flats in Bangalore",
    excerpt: "This is where Sobha World City comes in, known for careful planning and high quality, Sobha brings modern 2 BHK homes that are great for families.",
    image: "/images/sobha-2-bhk-flats.jpeg",
    link: "/sobha-2-bhk-flats-in-bangalore.html"
  },
  {
    id: 20,
    title: "Sabha Upcoming Projects In Hoskote",
    excerpt: "A famous real estate company named Sobha is working on a number of new projects in Hoskote that will offer modern living.",
    image: "/images/sobha-upcoming-hoskote.jpeg",
    link: "/sobha-upcoming-projects-in-hoskote.html"
  },
  {
    id: 21,
    title: "Sobha World City Near Airport",
    excerpt: "You have to choose a place to live that fits your work needs, your way of life, and your plans for the future when you buy a house today.",
    image: "/images/sobha-world-city-near-airport.jpeg",
    link: "/sobha-world-city-near-airport.html"
  },
  {
    id: 22,
    title: "Sobha World City Project Status",
    excerpt: "Knowing the Sobha World City Project Status can help you make an informed choice if you are looking at high-end housing projects in Bangalore.",
    image: "/images/project-status.jpeg",
    link: "/sobha-world-city-project-status.html"
  },
  {
    id: 23,
    title: "Is It Good to Invest in Sobha World City?",
    excerpt: "Sobha World City is a strong choice for buyers and investors looking for high end homes in Bangalore.",
    image: "/images/invest-in-sobha-world-city.jpeg",
    link: "/is-it-good-to-invest-in-sobha-world-city.html"
  },
  {
    id: 24,
    title: "Sobha Upcoming Project in South Bangalore",
    excerpt: "Sobha Limited has planned and announced several high end residential developments in South Bangalore.",
    image: "/images/upcoming-project-in-south-bangalore.jpeg",
    link: "/sobha-upcoming-project-in-south-bangalore.html"
  },
  {
    id: 25,
    title: "Sobha World City Completed Projects in East Bangalore",
    excerpt: "East Bangalore has become one of the most sought after real estate areas in the city because of the growth of the IT industry.",
    image: "/images/sobha-world-city-completed-projects.jpeg",
    link: "/sobha-world-city-completed-projects-in-east-bangalore.html"
  },
  {
    id: 26,
    title: "Sobha World City Offers",
    excerpt: "Sobha World City offers not only a nice home but also a strong possibility for value growth in the coming years as a result of this strategic placement.",
    image: "/images/sobha-world-city-offers.jpeg",
    link: "/offers.html"
  },
  {
    id: 27,
    title: "Sobha World City 3 BHK Apartment Floor Plan",
    excerpt: "Every family needs to find a home with enough room, privacy, and safety. A well thought out 3 BHK apartment can make your daily life easier and more fun.",
    image: "/images/3-bhk-apartment-floor-plan.jpeg",
    link: "/sobha-world-city-3bhk-apartment-floor-plan.html"
  },
  {
    id: 28,
    title: "Sobha Upcoming Project in East Bangalore",
    excerpt: "East Bangalore is getting bigger quickly. A lot of people want to buy homes here because there are IT parks, good roads, and everyday conveniences close by.",
    image: "/images/upcoming-project-in-east-bangalore.jpeg",
    link: "/sobha-upcoming-project-in-east-bangalore.html"
  },
  {
    id: 29,
    title: "Sobha World City Price List",
    excerpt: "For those who want to buy a high-end home in Bangalore, knowing the Sobha World City Price List is the first thing you should do.",
    image: "/images/price-list.jpeg",
    link: "/sobha-world-city-price-list.html"
  },
  {
    id: 30,
    title: "Sobha Limited",
    excerpt: "Sobha Limited is one of India’s most respected and trusted real estate developers, known for its uncompromising focus on quality",
    image: "/images/sobha-limited.jpeg",
    link: "/sobha-limited.html"
  },
  {
    id: 31,
    title: "Sobha Upcoming Projects in Varthur",
    excerpt: "Bangalore’s real estate market continues to witness strong demand, especially in emerging micro-markets like Varthur and Hoskote East.",
    image: "/images/sobha-upcoming-projects-in-varthur.jpeg",
    link: "/sobha-upcoming-projects-in-varthur.html"
  },
  {
    id: 32,
    title: "Sobha Upcoming Projects in Whitefield",
    excerpt: "Sobha upcoming projects in Whitefield are gaining massive attention from homebuyers and real estate investors looking for premium living spaces in East Bangalore.",
    image: "/images/sobha-upcoming-projects-in-whitefield.jpeg",
    link: "/sobha-upcoming-projects-in-whitefield.html"
  },
  {
    id: 33,
    title: "Sobha Upcoming Projects in Sarjapur",
    excerpt: "Sobha upcoming projects in Sarjapur are drawing strong interest from homebuyers and investors who want premium residences",
    image: "/images/sobha-upcoming-projects-in-sarjapur.jpeg",
    link: "/sobha-upcoming-projects-in-sarjapur.html"
  },
  {
    id: 34,
    title: "Sabha Upcoming Projects In Hosa Road",
    excerpt: "If you’re actively searching for Sabha Upcoming Projects In Hosa Road, you’re already looking at one of Bangalore’s fastest-improving residential corridors.",
    image: "/images/sobha-upcoming-projects-in-hosa-road.jpeg",
    link: "/sobha-upcoming-projects-in-hosa-road.html"
  },
  {
    id: 35,
    title: "Sobha World City FAQs",
    excerpt: "Complete FAQ guide on Sobha World City in Hoskote, East Bangalore. Learn about location, configurations, township size, amenities, pricing, RERA status",
    image: "/images/faqs.jpeg",
    link: "/faqs.html"
  },
  {
    id: 36,
    title: "Sobha Upcoming Project in North Bangalore",
    excerpt: "Explore Sobha upcoming projects in North Bangalore including Sobha Hennur, Sobha Victoria Park, Sobha Dream Gardens, Sobha HRC Pristine & Sobha Plots Rajanukunte.",
    image: "/images/upcoming-project-in-north-bangalore.jpeg",
    link: "/sobha-upcoming-project-in-north-bangalore.html"
  },
  {
    id: 37,
    title: "Sobha World City Brochure PDF Download",
    excerpt: "Homebuyers can get a full look at one of the best residential areas in East Bangalore from the Sobha World City Brochure PDF Download.",
    image: "/images/brochure-pdf-download.jpeg",
    link: "/brochure-pdf-download.html"
  },
  {
    id: 38,
    title: "Sobha World City Rent",
    excerpt: "Sobha World City is a rapidly growing high end city in East Bangalore&#39;s Hoskote area. It is made for people who want to live in a place that will appreciate over time.",
    image: "/images/rent.jpeg",
    link: "/rent.html"
  },
  {
    id: 39,
    title: "Sobha World City Review",
    excerpt: "Sobha World City Review stands out in East Bangalore&#39;s real estate market because of the size and name of the development. Sobha Limited is building this city.",
    image: "/images/review.jpeg",
    link: "/review.html"
  },
  {
    id: 40,
    title: "Sobha World City Possession Date",
    excerpt: "The Sobha World City Possession Date is one of the features that buyers look for the most because it helps them plan their funds, move, and make investments for the future.",
    image: "/images/possession-date.jpeg",
    link: "/possession-date.html"
  },
  {
    id: 41,
    title: "Sobha World City Life",
    excerpt: "One of the main things that draws people to Sobha World City Life is its location. It&#39;s becoming more and more important to live and do business in Hoskote.",
    image: "/images/life.jpeg",
    link: "/life.html"
  },
  {
    id: 42,
    title: "Sobha World City Near School Hoskote, Near IT Hubs",
    excerpt: "Want a home that combines comfort, ease of use, and connection all in one place? All of those things are true about Sobha World City Near School Hoskote,",
    image: "/images/school-hoskote.jpeg",
    link: "/sobha-world-city-near-school-hoskote.html"
  },
  {
    id: 43,
    title: "Sobha Insignia",
    excerpt: "Sobha Insignia stands out as a thoughtfully designed residential project that brings elegance and modern living together.",
    image: "/images/sobha-insignia.jpeg",
    link: "/sobha-insignia.html"
  },
  {
    id: 44,
    title: "Sobha Dream Acres in Balagere",
    excerpt: "Sobha Dream Acres in Balagere, Bangalore East, is the best place to buy a home if you want a peaceful and comfortable place to live close to everything.",
    image: "/images/sobha-dream-acres-in-balagere.jpeg",
    link: "/sobha-dream-acres-in-balagere.html"
  },
  {
    id: 45,
    title: "Sobha Habitech Whitefield",
    excerpt: "Sobha Habitech in Ambedkar Nagar, Whitefield, is a ready-to-move housing community. It has flats for a range of budgets. These units are the right mix of comfort and style.",
    image: "/images/sobha-habitech-whitefield.jpeg",
    link: "/sobha-habitech-whitefield.html"
  },
  {
    id: 46,
    title: "Sobha Madison Heights",
    excerpt: "It is one of the new home communities in Bangalore South that is still being built. To buy an apartment in Sobha Madison Heights, Electronic City, Bangalore.",
    image: "/images/sobha-madison-heights.jpeg",
    link: "/sobha-madison-heights.html"
  },
  {
    id: 47,
    title: "Sobha Manhattan",
    excerpt: "Sobha Manhattan Towers is the brand new New York-themed Apartment project launched in Sobha Town Park, Hosur Road, Attibele, Yadavanahalli, Bangalore.",
    image: "/images/sobha-manhattan.jpeg",
    link: "/sobha-manhattan.html"
  },
  {
    id: 48,
    title: "Sobha Silicon Oasis",
    excerpt: "The best of SOBHA Limited&#39;s high end life can be found in the private area Silicon Oasis. The project has large apartments with high-end features.",
    image: "/images/sobha-silicon-oasis.jpeg",
    link: "/sobha-silicon-oasis.html"
  },
  {
    id: 49,
    title: "Sobha Neopolis",
    excerpt: "Finding the right home in a busy city like Bangalore means balancing comfort, ease of access and community. Sobha Neopolis is a hig end housing development on Panathur Road in East Bangalore.",
    image: "/images/sobha-neopolis.jpeg",
    link: "/sobha-neopolis.html"
  }
];

blogs.sort((a, b) => b.id - a.id);

export default function BlogSection() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2">
          Latest Articles & Updates
        </h2>

        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={`${blog.title} - Sobha World City Blog`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">

                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={blog.link}
                  className="text-primary font-medium text-sm hover:underline mt-auto"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}