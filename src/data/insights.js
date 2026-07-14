// Knowledge Centre publications — served as static local data instead of a backend API.
// Figures throughout are conceptual, illustrative engineering projections (pre-validation),
// consistent with the assumptions in `site.js`.

import { IMG } from "@/data/site";

export const INSIGHTS = [
  {
    id: "environmental-infrastructure-engineering-a-new-discipline",
    tag: "White Paper",
    pub_number: "TRN-001",
    version: "v1.0",
    date: "2025-02-10",
    read_time: "12 min",
    level: "Foundational",
    authors: "TransO2 Engineering Team",
    featured: true,
    cover: IMG.platformHero,
    title: "Environmental Infrastructure Engineering: Defining a New Discipline",
    subtitle:
      "Why transportation assets should be engineered to actively generate environmental value, not merely move people and goods.",
    excerpt:
      "An introduction to Environmental Infrastructure Engineering — the discipline of designing transportation assets that capture carbon, purify air, harvest water and produce environmental intelligence across their operational lifecycle.",
    executive_summary:
      "This paper introduces Environmental Infrastructure Engineering as an emerging discipline that reframes transportation assets as active generators of environmental value. Rather than optimising only for reduced emissions, vehicles are engineered to capture carbon, purify air, harvest water and produce auditable environmental intelligence during normal operation. Railways are proposed as the first viable platform for this approach given their standardised fleets, predictable duty cycles and continuous interaction with ambient air.",
    keywords: ["Environmental Infrastructure", "Systems Engineering", "Carbon Capture", "Net Zero"],
    tags: ["Railways", "Environmental Infrastructure"],
    technology: ["Environmental Infrastructure", "Systems Engineering"],
    sections: [
      {
        heading: "From transportation to environmental infrastructure",
        body: "For over a century, vehicles have been engineered primarily around movement. Yet every vehicle in operation interacts continuously with large volumes of ambient air, thermal energy and atmospheric moisture — interactions that conventional engineering treats as incidental rather than as a resource. Environmental Infrastructure Engineering treats these interactions as a first-class design objective alongside propulsion and passenger comfort.",
      },
      {
        heading: "Why railways first",
        body: "Railways combine large, standardised fleets, predictable duty cycles, ample rooftop area and continuous interaction with air and moisture, making them a natural first platform for integrated environmental systems. A single rooftop-integrated module design can, in principle, be replicated across thousands of coaches with consistent performance characteristics.",
      },
      {
        heading: "A modular systems approach",
        body: "Rather than a single monolithic system, the proposed architecture is built from interoperable modules — air management, environmental conditioning, carbon capture, thermal management, resource management and environmental intelligence — coordinated by a central control and analytics layer. This modularity is intended to allow phased validation, incremental certification and future adaptation to other mobility and industrial contexts.",
      },
    ],
    glossary: [
      { term: "Environmental Infrastructure", definition: "Physical assets engineered to actively generate environmental value (carbon capture, air purification, water harvesting) in addition to their primary function." },
      { term: "MRV", definition: "Measurement, Reporting and Verification — the framework used to make environmental claims auditable and creditable." },
      { term: "Digital Twin", definition: "A continuously updated virtual model of a physical asset, used here to track environmental performance in real time." },
    ],
    sources: [
      "IPCC frameworks on transport-sector decarbonisation",
      "India's Carbon Credit Trading Scheme (CCTS)",
      "Indian Railways' stated Net-Zero 2030 ambition",
      "General principles of systems engineering (INCOSE)",
    ],
    citation: "TransO2 Engineering Team (2025). Environmental Infrastructure Engineering: Defining a New Discipline. TRN-001, v1.0.",
    related: [
      "Rooftop Integration: Engineering the IERP for LHB Coaches",
      "Why Railways First: A Perspective on Sequencing Environmental Infrastructure",
      "Edge AI and the Environmental Digital Twin",
    ],
  },
  {
    id: "rooftop-integration-engineering-the-ierp-for-lhb-coaches",
    tag: "Engineering Note",
    pub_number: "TRN-002",
    version: "v1.0",
    date: "2025-03-24",
    read_time: "10 min",
    level: "Technical",
    authors: "TransO2 Engineering Team",
    featured: false,
    cover: IMG.drawingGA,
    title: "Rooftop Integration: Engineering the IERP for LHB Coaches",
    subtitle: "Design constraints and the general-arrangement basis for a rooftop-fitted environmental module.",
    excerpt:
      "How the Integrated Environmental Resource Platform (IERP) fits within a ~460 mm aerodynamic, RDSO-compliant envelope on modern LHB coaches without intruding on passenger space or existing HVAC load paths.",
    executive_summary:
      "This engineering note outlines the design constraints behind fitting an environmental resource platform to the roof of a modern Indian LHB coach. The rooftop offers an aerodynamic, serviceable envelope that can host capture and purification modules without displacing passenger space, while integrating with existing HVAC and structural load paths. The note covers envelope constraints, structural load assumptions and the depot-servicing interface.",
    keywords: ["IERP", "Rooftop Integration", "LHB Coach", "RDSO Envelope"],
    tags: ["Railways"],
    technology: ["Systems Engineering", "Thermal Engineering"],
    sections: [
      {
        heading: "The rooftop envelope",
        body: "The design target keeps the fitment within a low-profile ~460 mm aerodynamic envelope, chosen to remain within RDSO structural gauge guidelines while minimising additional aerodynamic drag at operating speed.",
      },
      {
        heading: "Structural and thermal interfaces",
        body: "The module is designed to share structural load paths and HVAC ducting already present on the coach roof, reducing the need for bespoke structural modification and easing retrofit onto existing rolling stock.",
      },
      {
        heading: "Depot servicing",
        body: "A standardised depot interface is proposed for rapid regeneration of capture media, offload of stored CO₂ and harvested water, and routine maintenance — designed to fit within existing short depot turnaround windows.",
      },
    ],
    glossary: [
      { term: "RDSO", definition: "Research Designs and Standards Organisation — sets structural and safety standards for Indian Railways rolling stock." },
      { term: "LHB Coach", definition: "Linke Hofmann Busch coach — the modern coach design widely used across the Indian Railways passenger fleet." },
      { term: "IERP", definition: "Integrated Environmental Resource Platform — TransO2's proposed rooftop module." },
    ],
    sources: [
      "RDSO structural gauge and rolling-stock guidelines",
      "General aerodynamic drag principles for rail vehicles",
    ],
    citation: "TransO2 Engineering Team (2025). Rooftop Integration: Engineering the IERP for LHB Coaches. TRN-002, v1.0.",
    related: [
      "Environmental Infrastructure Engineering: Defining a New Discipline",
      "Onboard CO₂ Utilisation: From Capture to Fire Safety",
    ],
  },
  {
    id: "onboard-co2-utilisation-from-capture-to-fire-safety",
    tag: "Research Publication",
    pub_number: "TRN-003",
    version: "v1.0",
    date: "2025-04-18",
    read_time: "11 min",
    level: "Technical",
    authors: "TransO2 Engineering Team",
    featured: false,
    cover: IMG.co2,
    title: "Onboard CO₂ Utilisation: From Capture to Fire Safety",
    subtitle: "How captured carbon is put to work onboard, rather than simply stored until depot offload.",
    excerpt:
      "Captured CO₂ becomes the working fluid in a closed R744 thermal loop and feeds a residue-free fire-suppression network — turning a captured emission into an onboard safety and efficiency resource.",
    executive_summary:
      "Rather than treating captured CO₂ purely as cargo awaiting depot offload, this publication describes two onboard uses: a closed-loop R744 thermal system for cooling and heat-pump heating, and a tubing-and-sensor network for rapid, residue-free fire suppression in electrical, pantry and brake zones. Both uses are illustrative design concepts based on established CO₂ refrigeration and fire-suppression principles, pending detailed validation.",
    keywords: ["R744", "CO₂ Loop", "Fire Suppression", "Thermal Management"],
    tags: ["Railways"],
    technology: ["Carbon Management", "Thermal Engineering"],
    sections: [
      {
        heading: "Capture, store, reuse",
        body: "Approximately 100 kg of CO₂ is targeted for capture per coach per trip, stored onboard across roughly five 20 kg cylinders, before being offloaded and processed at depot for downstream utilisation.",
      },
      {
        heading: "The R744 thermal loop",
        body: "CO₂ (R744) is a well-established, low-GWP refrigerant. Used as the working fluid in a closed loop across the coach, it is projected to provide efficient cooling in summer and heat-pump heating in winter, targeting roughly a 25% reduction in net HVAC energy demand.",
      },
      {
        heading: "A CO₂ fire-safety network",
        body: "A parallel tubing-and-sensor network routes CO₂ to fire-prone zones — electrical panels, pantry areas and brake systems — enabling rapid, residue-free suppression without the cleanup and equipment damage associated with conventional agents.",
      },
    ],
    glossary: [
      { term: "R744", definition: "The refrigerant designation for carbon dioxide used in closed-loop thermal systems." },
      { term: "GWP", definition: "Global Warming Potential — a measure of a refrigerant's relative climate impact; CO₂ has a GWP of 1, the reference baseline." },
    ],
    sources: [
      "Established principles of CO₂ (R744) refrigeration cycles",
      "General CO₂ fire-suppression engineering practice",
    ],
    citation: "TransO2 Engineering Team (2025). Onboard CO₂ Utilisation: From Capture to Fire Safety. TRN-003, v1.0.",
    related: [
      "Rooftop Integration: Engineering the IERP for LHB Coaches",
      "Carbon Credits at Network Scale: A Conservative Model",
    ],
  },
  {
    id: "atmospheric-water-harvesting-for-rolling-stock",
    tag: "Technical Brief",
    pub_number: "TRN-004",
    version: "v1.0",
    date: "2025-05-09",
    read_time: "8 min",
    level: "Intermediate",
    authors: "TransO2 Engineering Team",
    featured: false,
    cover: IMG.water,
    title: "Atmospheric Water Harvesting for Rolling Stock",
    subtitle: "Turning conditioned air's moisture byproduct into a usable onboard water resource.",
    excerpt:
      "Every air-conditioned coach continuously produces condensate as a byproduct of cooling. This brief outlines how that moisture can be captured, metered and prepared for reuse rather than discarded.",
    executive_summary:
      "Air-conditioning systems on railway coaches continuously extract moisture from cabin and outside air as a byproduct of cooling. This technical brief describes an onboard collection and metering system that captures this condensate — targeting 400 to 900 litres per air-conditioned coach per day depending on ambient humidity — routing it toward depot-based storage and reuse rather than allowing it to be discarded.",
    keywords: ["Water Harvesting", "Condensate Recovery", "HVAC", "Resource Management"],
    tags: ["Railways"],
    technology: ["Water Harvesting"],
    sections: [
      {
        heading: "Condensate as a resource",
        body: "Conventional HVAC systems discard condensate as waste. At coach scale across a national fleet, this represents a significant volume of clean water that current designs do not capture.",
      },
      {
        heading: "Collection and metering",
        body: "A dedicated collection tray and routing system captures condensate before it is discharged, metering volume onboard so that depot handling and reuse planning can be data-driven rather than estimated.",
      },
      {
        heading: "Depot handling and reuse",
        body: "Harvested water is proposed to be offloaded at depot alongside captured CO₂, for use in non-potable applications such as coach washing, cooling-tower makeup or landscaping — reducing freshwater draw from municipal or ground sources.",
      },
    ],
    glossary: [
      { term: "Condensate", definition: "Water that collects on a cooling coil as air is dehumidified, normally discarded in conventional HVAC systems." },
    ],
    sources: [
      "General principles of HVAC condensate recovery",
      "Published ranges for coach-level air-conditioning duty cycles",
    ],
    citation: "TransO2 Engineering Team (2025). Atmospheric Water Harvesting for Rolling Stock. TRN-004, v1.0.",
    related: [
      "Onboard CO₂ Utilisation: From Capture to Fire Safety",
      "Environmental Infrastructure Engineering: Defining a New Discipline",
    ],
  },
  {
    id: "carbon-credits-at-network-scale-a-conservative-model",
    tag: "Investor Insight",
    pub_number: "TRN-005",
    version: "v1.0",
    date: "2025-06-02",
    read_time: "9 min",
    level: "Executive",
    authors: "TransO2 Strategy Team",
    featured: false,
    cover: IMG.cutaway,
    title: "Carbon Credits at Network Scale: A Conservative Model",
    subtitle: "A transparent, unit-level calculation of the carbon-credit opportunity across the Indian Railways network.",
    excerpt:
      "At a conservative 50% capacity factor, network-wide deployment is projected to capture roughly 4.93 million tonnes of CO₂ per year — an estimated ₹420–630 crore annual carbon-credit opportunity under India's Carbon Credit Trading Scheme.",
    executive_summary:
      "This insight walks through the unit-level assumptions behind TransO2's national carbon-credit projection: roughly 13,500 trains running daily, 20 coaches per train on average, and 100 kg of CO₂ captured per coach-trip. Headlined at a deliberately conservative 50% capacity factor, this yields approximately 4.93 million tonnes of CO₂ captured per year, worth an estimated ₹420–630 crore annually at India CCTS carbon prices — with full-potential deployment scaling toward ₹840–1,257 crore per year.",
    keywords: ["Carbon Credits", "CCTS", "Net Zero 2030", "National Modelling"],
    tags: ["Railways", "Investor Inquiry"],
    technology: ["Carbon Management", "Environmental Infrastructure"],
    sections: [
      {
        heading: "The unit-level basis",
        body: "The model starts from concrete, publicly-referenceable assumptions: approximately 13,500 trains running daily across Indian Railways, an average of 20 coaches per train, and a target of 100 kg of CO₂ captured per coach per trip.",
      },
      {
        heading: "Why 50% capacity",
        body: "Rather than assuming fleet-wide deployment from day one, the headline figure is deliberately modelled at a 50% capacity factor — reflecting a realistic phased rollout — with the full-potential (100%) figure shown separately as upside.",
      },
      {
        heading: "From tonnes to rupees",
        body: "At India's Carbon Credit Trading Scheme (CCTS) reference prices of roughly ₹850–₹1,275 per tonne (~$10–$15), the conservative 4.93 million tonnes per year translates to an estimated ₹420–630 crore in annual carbon-credit value — a new revenue stream that could help fund the broader Net-Zero 2030 transition.",
      },
    ],
    glossary: [
      { term: "CCTS", definition: "Carbon Credit Trading Scheme — India's domestic carbon market framework." },
      { term: "Capacity Factor", definition: "The proportion of the total addressable fleet assumed to be fitted and operating, used to scale projections conservatively." },
    ],
    sources: [
      "India's Carbon Credit Trading Scheme (CCTS) reference pricing",
      "Publicly available Indian Railways fleet and service statistics",
    ],
    citation: "TransO2 Strategy Team (2025). Carbon Credits at Network Scale: A Conservative Model. TRN-005, v1.0.",
    related: [
      "Onboard CO₂ Utilisation: From Capture to Fire Safety",
      "Environmental Infrastructure Engineering: Defining a New Discipline",
    ],
  },
  {
    id: "edge-ai-and-the-environmental-digital-twin",
    tag: "Technology Overview",
    pub_number: "TRN-006",
    version: "v1.0",
    date: "2025-07-01",
    read_time: "9 min",
    level: "Intermediate",
    authors: "TransO2 Engineering Team",
    featured: false,
    cover: IMG.digitalTwin,
    title: "Edge AI and the Environmental Digital Twin",
    subtitle: "How onboard sensing, edge inference and a cloud platform combine into a living model of every vehicle.",
    excerpt:
      "Onboard edge AI contextualises environmental data in real time, feeding a continuously updated digital twin that makes every vehicle's environmental performance auditable and predictable.",
    executive_summary:
      "This overview describes the intelligence layer behind the environmental platform: distributed sensors fused onboard by edge AI, streamed to a cloud platform that maintains a live digital twin of each vehicle. The result is intended to be a single, auditable source of truth for environmental performance — supporting predictive maintenance, remote monitoring and ESG-aligned reporting at fleet scale.",
    keywords: ["Edge AI", "Sensor Fusion", "Digital Twin", "Fleet Intelligence"],
    tags: ["Railways", "Metro"],
    technology: ["Environmental Intelligence", "Systems Engineering"],
    sections: [
      {
        heading: "Sensing and edge inference",
        body: "Distributed sensors across the environmental modules are fused onboard using edge inference, filtering and contextualising raw signals before they are transmitted — reducing bandwidth needs and enabling faster local response.",
      },
      {
        heading: "The environmental digital twin",
        body: "Validated telemetry updates a continuously live digital twin of each vehicle, intended to serve as the auditable backing for every environmental claim the platform makes — from CO₂ captured to water harvested.",
      },
      {
        heading: "From data to decisions",
        body: "Fleet-wide analytics built on top of the digital twin are intended to support predictive servicing schedules, remote monitoring, and a single environmental dashboard suitable for ESG reporting.",
      },
    ],
    glossary: [
      { term: "Edge AI", definition: "On-board inference that processes sensor data locally, close to where it is generated." },
      { term: "Sensor Fusion", definition: "Combining data from multiple distributed sensors into a single, coherent picture." },
    ],
    sources: [
      "General principles of edge computing and sensor fusion",
      "Digital twin frameworks used across industrial asset monitoring",
    ],
    citation: "TransO2 Engineering Team (2025). Edge AI and the Environmental Digital Twin. TRN-006, v1.0.",
    related: [
      "Environmental Infrastructure Engineering: Defining a New Discipline",
      "Why Railways First: A Perspective on Sequencing Environmental Infrastructure",
    ],
  },
  {
    id: "why-railways-first-a-perspective-on-sequencing-environmental-infrastructure",
    tag: "Perspective",
    pub_number: "TRN-007",
    version: "v1.0",
    date: "2025-07-20",
    read_time: "7 min",
    level: "Foundational",
    authors: "TransO2 Strategy Team",
    featured: false,
    cover: IMG.hero,
    title: "Why Railways First: A Perspective on Sequencing Environmental Infrastructure",
    subtitle: "A conceptual view on why railways are the right first platform, and what comes after.",
    excerpt:
      "Standardised fleets, predictable duty cycles and ample rooftop area make railways an ideal starting point — with metro, high-speed rail, freight and urban buses as clear next steps.",
    executive_summary:
      "This perspective piece lays out the reasoning behind sequencing environmental infrastructure deployment starting with railways, before expanding to metro systems, high-speed rail, freight rail and eventually high-AQI urban buses. The argument rests on fleet standardisation, duty-cycle predictability and available rooftop area — not on railways being uniquely important, but on them being the most tractable first step toward a broader environmental infrastructure category.",
    keywords: ["Sequencing", "Future Mobility", "Fleet Standardisation"],
    tags: ["Railways", "Metro", "Freight Rail"],
    technology: ["Environmental Infrastructure"],
    sections: [
      {
        heading: "Standardisation as an engineering asset",
        body: "Large, standardised fleets mean a single rooftop module design can be validated once and deployed consistently, rather than re-engineered for every vehicle type.",
      },
      {
        heading: "Predictable duty cycles",
        body: "Railways operate on predictable schedules and routes, simplifying performance modelling, depot servicing logistics, and the measurement, reporting and verification (MRV) needed for credible carbon claims.",
      },
      {
        heading: "What comes after railways",
        body: "The same modular architecture is intended to extend to metro systems operating in dense urban corridors, high-speed rail under tighter aerodynamic constraints, freight rail via a dedicated capture wagon, and eventually high-AQI urban bus fleets.",
      },
    ],
    glossary: [
      { term: "MRV", definition: "Measurement, Reporting and Verification — the process of making environmental claims auditable." },
      { term: "Duty Cycle", definition: "The pattern of operation (routes, schedules, load) a vehicle experiences, used to model expected performance." },
    ],
    sources: [
      "General fleet-standardisation principles in rolling-stock engineering",
    ],
    citation: "TransO2 Strategy Team (2025). Why Railways First: A Perspective on Sequencing Environmental Infrastructure. TRN-007, v1.0.",
    related: [
      "Environmental Infrastructure Engineering: Defining a New Discipline",
      "Edge AI and the Environmental Digital Twin",
    ],
  },
];

export const getInsightById = (id) => INSIGHTS.find((i) => i.id === id) ?? null;
