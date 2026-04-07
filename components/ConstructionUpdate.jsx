import Image from "next/image";

const constructionUpdates = [
  { id: 1, title: "Main Site Entry", image: "/images/main-site-entry.jpeg" },
  { id: 2, title: "Internal Road", image: "/images/internal-road.jpeg" },
  { id: 3, title: "Central Plot Area", image: "/images/central-plot.jpeg" },
  { id: 4, title: "Wide Site Front", image: "/images/wide-site-front.jpeg" },
  { id: 5, title: "Open Landscape", image: "/images/open-landscape.jpeg" },
  { id: 6, title: "Road Curve Angle", image: "/images/road-curve-angle.jpeg" },
  { id: 7, title: "Project Boundary Side", image: "/images/project-boundary-side.jpeg" },
  { id: 8, title: "Earthwork Development", image: "/images/earthwork-area.jpeg" },
  { id: 9, title: "Site Levelling Work", image: "/images/site-levelling.jpeg" },
  { id: 10, title: "Infrastructure Development", image: "/images/development-zone.jpeg" },
  { id: 11, title: "Evening Site", image: "/images/evening-site.jpeg" },
  { id: 12, title: "Ground Preparation", image: "/images/construction-ground.jpeg" },
  { id: 13, title: "Overall Project Site", image: "/images/project-overall.jpeg" },
  { id: 14, title: "Land Development Progress", image: "/images/infrastructure-preparation.jpeg" },
];

export default function ConstructionUpdate() {
  return (
    <section className="w-full bg-white pt-14 pb-6 px-3 md:px-0">
      <div className="max-w-5xl mx-auto">

        <h2
          id="gallery-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Construction Update
        </h2>

        <div className="w-full h-px bg-gray-200 mb-10" />
        <div>

          {/* CONTENT (UNCHANGED) */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Sobha World City Construction Update – February 2026
            </h2>

            <div className="text-gray-700 leading-relaxed space-y-6">
              <p >
        As of <b>February 2026</b>, construction activities at <strong>Sobha World City</strong> are progressing steadily, with major emphasis on groundwork and land development. The project is currently in its foundational stage, where large-scale site preparation and earthwork operations are being systematically executed.
      </p>

      <p>
        Recent on-site visuals indicate that extensive site clearing has already been completed across significant portions of the development. Vegetation removal, debris clearance, and surface leveling have prepared the land for structured development. The terrain now appears largely open and organized, reflecting the completion of initial preparatory activities.
      </p>

      <p>
        Earthwork operations are actively underway. Excavation, soil cutting, filling, and redistribution processes are visible throughout the site. Multiple sections show graded surfaces and compacted soil, indicating that cut-and-fill procedures are being implemented to align the land with the approved master layout. These technical processes are essential for ensuring proper elevation levels and long-term structural stability.
      </p>

      <p>
        Heavy machinery movement marks and leveled pathways suggest preparation for internal road networks and underground infrastructure installation. The presence of soil mounds and flattened stretches indicates ongoing land contouring and compaction work. This phase typically precedes foundation laying, drainage systems, and utility line installations.
      </p>

      <p>
        At this stage, no vertical structural development such as columns, slabs, or building frameworks is visible. The focus remains on strengthening the base infrastructure of the township. In large-scale integrated projects like Sobha World City, detailed groundwork is a critical milestone that determines construction quality and long-term durability.
      </p>

      <p>
        Overall, <a href="https://sobhaworldcity.com/"><strong>Sobha World City</strong></a> is advancing methodically through its early development cycle. The steady pace of site preparation and earthmoving activities signals readiness for the next phase, which is expected to include infrastructure execution and structural construction in the coming months. The ongoing progress reflects planned execution aligned with development timelines, reinforcing confidence among buyers and investors tracking the project’s growth trajectory.
      </p>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
            {constructionUpdates.map((item) => (
              <div
                key={item.id}
                className="group relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} - Sobha World City Construction Update`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />

                {/* Overlay Title */}
                <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm p-2 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}