// Central content for the TransO2 site. All copy is original and derived from the brief.

export const BRAND = {
  name: "TransO2",
  statement: "Engineering the Future of Environmental Infrastructure",
  email: "contact@transo2.com",
  taglines: [
    "Transforming Transport into Environmental Infrastructure",
    "Capturing Carbon. Creating Resources.",
    "Where Every Journey Creates Environmental Value",
    "Turning Motion into Climate Action",
  ],
};

// Live-connect channels. Set whatsapp (country code + number, no "+"), telegram
// (handle without "@") and linkedin (full URL) to enable direct links; empty
// values gracefully fall back to the contact form.
export const CONTACT_CHANNELS = {
  email: "contact@transo2.com",
  whatsapp: "",
  telegram: "",
  linkedin: "",
};


export const IMG = {
  hero: "/generated/hero_train.png",
  heroCoach: "/generated/hero_coach.png",
  train: "/generated/hero_train.png",
  platformHero: "/generated/platform_hero.png",
  platformTop: "/generated/platform_topview.png",
  platformSide: "/generated/platform_side.png",
  platformFront: "/generated/platform_front.png",
  platformDetail: "/generated/platform_detail.png",
  cutaway: "/generated/platform_cutaway.png",
  metro: "/generated/metro_train.png",
  highspeed: "/generated/app_highspeed.png",
  freight: "/generated/freight_wagon.png",
  bus: "/generated/bus_city.png",
  airflow: "/generated/air_flow.png",
  water: "/generated/water_drop.png",
  digitalTwin: "/generated/digital_twin.png",
  co2: "/generated/co2_molecules.png",
  landscape: "/generated/vision_landscape.png",
  drawingGA: "/generated/drawing_ga.png",
  drawingRooftop: "/generated/drawing_rooftop.png",
  drawingSide: "/generated/drawing_side.png",
};

export const HERO_KPIS = [
  { key: "co2", label: "CO₂ Captured", value: 4.9, suffix: "M", unit: "tonnes / yr *", decimals: 1 },
  { key: "air", label: "Air Purified", value: 4.4, suffix: "T", unit: "m³ / yr *", decimals: 1 },
  { key: "water", label: "Water Harvested", value: 12.3, suffix: "B", unit: "litres / yr *", decimals: 1 },
  { key: "energy", label: "Energy Optimized", value: 25, suffix: "%", unit: "avg HVAC *" },
];

// Per-coach engineering basis (design assumptions)
export const ENGINEERING_FACTS = [
  { label: "CO₂ captured", value: "100 kg", unit: "per coach, per trip", icon: "Atom" },
  { label: "Air purified", value: "5,000 m³/h", unit: "continuous, non-stop", icon: "Wind" },
  { label: "Fresh air introduced", value: "1,000 m³/h", unit: "continuous circulation", icon: "Sparkles" },
  { label: "Water harvested", value: "400–900 L", unit: "per AC coach, per day", icon: "Droplets" },
  { label: "Energy optimised", value: "~25%", unit: "HVAC saving via CO₂ loop", icon: "Gauge" },
  { label: "Onboard CO₂ storage", value: "~5 cylinders", unit: "≈ 5 × 20 kg per coach-trip", icon: "Container" },
];

// Onboard CO2 utilisation & safety loop
export const CO2_LOOP = [
  { title: "Captured, stored, reused", text: "100 kg of CO₂ is captured per coach per trip and stored (≈ five 20 kg cylinders) — extracted continuously from cabin and processed air, then offloaded at depot for utilisation.", icon: "Atom" },
  { title: "CO₂ thermal loop (R744)", text: "Captured CO₂ becomes the working fluid in a closed loop across the coach — efficient cooling in summer and heat-pump heating in winter, cutting HVAC energy by ~25%.", icon: "Flame" },
  { title: "CO₂ fire-safety network", text: "A CO₂ tubing-and-sensor network is routed to fire-prone zones — electrical panels, pantry and brake systems — enabling rapid, residue-free CO₂ fire suppression for safer coaches.", icon: "ShieldCheck" },
  { title: "Continuous air renewal", text: "~5,000 m³/hour of air is purified per coach while ~1,000 m³/hour of fresh air is introduced — non-stop, throughout the journey.", icon: "Wind" },
];

export const CARBON_CREDIT = {
  headline: "₹420 – ₹630 crore / yr",
  sub: "Potential annual carbon-credit value at a conservative 50% capacity",
  detail: "At ~4.93 million tonnes of CO₂ captured per year (a deliberately conservative 50% capacity scenario), and carbon prices of ₹850–₹1,275 per tonne (~$10–$15) under India's Carbon Credit Trading Scheme, verified removals from Indian Railways represent an estimated ₹420–₹630 crore (~$49–74 million) in annual carbon-credit value. At full deployment (~9.86 Mt/yr) this scales toward ₹840–₹1,257 crore per year — a new sustainability revenue stream that helps fund the network's Net-Zero 2030 transition. Equivalent to the annual CO₂ absorption of roughly 224 million mature trees.",
};

// National calculation (Indian Railways, at conservative 50% capacity)
export const NATIONAL_MATH = [
  { metric: "Trains running daily", value: "≈ 13,500" },
  { metric: "Average coaches per train", value: "20" },
  { metric: "Daily coach-trips (100%)", value: "270,000" },
  { metric: "CO₂ captured per coach per trip", value: "100 kg" },
  { metric: "Capacity factor (conservative)", value: "50%" },
  { metric: "Effective coach-trips / day", value: "135,000" },
  { metric: "CO₂ captured per day", value: "≈ 13,500 tonnes" },
  { metric: "CO₂ captured per year (50%)", value: "≈ 4.93 million tonnes" },
  { metric: "CO₂ captured per year (full potential)", value: "≈ 9.86 million tonnes" },
];

export const HIGHLIGHTS = [
  {
    icon: "Wind",
    title: "Carbon Capture Infrastructure",
    text: "Onboard modules capture CO₂ during operation, converting motion into measurable climate action.",
  },
  {
    icon: "Sparkles",
    title: "Air Purification Networks",
    text: "Every vehicle becomes a mobile air-quality node, purifying the air of the corridors it travels.",
  },
  {
    icon: "Droplets",
    title: "Atmospheric Water Harvesting",
    text: "Integrated systems harvest atmospheric moisture, generating usable water resources per journey.",
  },
  {
    icon: "Cpu",
    title: "Environmental Intelligence",
    text: "Edge AI, sensor fusion and a digital twin turn environmental performance into auditable data.",
  },
];

export const MODULES = [
  { id: "air", name: "Air Management System", short: "Intake, filtration and distribution of clean air across the vehicle envelope.", principle: "Multi-stage filtration with active airflow control regulates intake and exhaust to maximise purification volume.", icon: "Wind" },
  { id: "conditioning", name: "Environmental Conditioning System", short: "Precision control of the onboard passenger environment.", principle: "Closed-loop conditioning balances temperature, humidity and air quality for passenger wellness.", icon: "Thermometer" },
  { id: "processing", name: "Environmental Processing System", short: "Core processing of captured environmental streams.", principle: "Sequential processing stages separate and prepare captured CO₂ and moisture for resource conversion.", icon: "Recycle" },
  { id: "carbonA", name: "Carbon Resource Module A", short: "Primary carbon capture and containment.", principle: "Sorbent-based capture cells bind CO₂ from processed air, with cyclic regeneration at depot.", icon: "Atom" },
  { id: "carbonB", name: "Carbon Resource Module B", short: "Secondary capture and resource conversion.", principle: "Complementary capture stage increases yield and prepares carbon for downstream resource use.", icon: "Layers" },
  { id: "thermal", name: "Thermal Management System", short: "Recovers and optimises thermal energy across the platform.", principle: "Heat exchangers recover waste thermal energy to drive capture and reduce net energy demand.", icon: "Flame" },
  { id: "resource", name: "Environmental Resource Management", short: "Manages harvested water and captured resources onboard.", principle: "Smart routing stores, meters and prepares harvested resources for reuse or depot offload.", icon: "Database" },
  { id: "intel", name: "Environmental Intelligence System", short: "Edge AI, telemetry and the environmental digital twin.", principle: "On-board edge AI fuses sensor data and continuously updates the vehicle's environmental digital twin.", icon: "BrainCircuit" },
  { id: "safety", name: "Safety & Protection Module", short: "Rolling-stock-grade safety and fault protection.", principle: "Redundant monitoring and isolation ensure full compliance with railway safety standards.", icon: "ShieldCheck" },
  { id: "control", name: "Control & Analytics System", short: "Central control and real-time analytics.", principle: "Coordinates all modules and streams validated analytics to the fleet cloud platform.", icon: "Gauge" },
  { id: "depot", name: "Depot Service Interface", short: "Fast, predictable depot servicing and offload.", principle: "Standardised interface enables rapid regeneration, offload and maintenance within short windows.", icon: "Wrench" },
];

export const INTELLIGENCE = [
  { title: "Edge AI", text: "On-board inference filters and contextualises environmental data in real time.", icon: "Cpu" },
  { title: "Sensor Fusion", text: "Distributed sensors merge into a coherent environmental picture per vehicle.", icon: "Radar" },
  { title: "Cloud Platform", text: "Secure ingestion and storage of validated environmental telemetry.", icon: "Cloud" },
  { title: "Environmental Digital Twin", text: "A living model of every vehicle's environmental performance.", icon: "Boxes" },
  { title: "Fleet Intelligence", text: "Network-wide visibility across every deployed asset.", icon: "Network" },
  { title: "Predictive Analytics", text: "Anticipate servicing needs and optimise capture efficiency.", icon: "TrendingUp" },
  { title: "Environmental Dashboard", text: "A single pane of glass for environmental value and ESG.", icon: "LayoutDashboard" },
  { title: "Remote Monitoring", text: "Continuous oversight of distributed environmental infrastructure.", icon: "MonitorSmartphone" },
];

export const LIFECYCLE = [
  { step: "Capture", text: "CO₂ is captured from processed air during operation.", icon: "Wind" },
  { step: "Purify", text: "Air is filtered and purified before release.", icon: "Sparkles" },
  { step: "Harvest", text: "Atmospheric moisture is harvested into usable water.", icon: "Droplets" },
  { step: "Manage", text: "Resources are stored, metered and routed onboard.", icon: "Database" },
  { step: "Reuse", text: "Captured resources are prepared for reuse and offload.", icon: "Recycle" },
  { step: "Optimize", text: "Thermal and energy loads are continuously optimised.", icon: "Gauge" },
  { step: "Sustain", text: "Measurable, auditable environmental value is sustained.", icon: "Leaf" },
];

export const APPLICATIONS = [
  { id: "railways", name: "Railways", tag: "Lead Application", img: IMG.hero, text: "Full passenger rakes of modern Indian LHB coaches, each carrying a roof-integrated Environmental Resource Platform (IERP) for carbon capture, continuous air purification, atmospheric water harvesting, thermal optimization and onboard environmental intelligence. A minimum 100 kg of CO₂ is captured per coach per journey." },
  { id: "metro", name: "Metro Systems", tag: "Available", img: IMG.metro, text: "Modern metro trains on elevated urban corridors — engineered for passenger wellness and city air quality. The slim rooftop module purifies dense-corridor air continuously while contributing to citywide sustainability goals. Designed for high-frequency urban service, not open countryside." },
  { id: "highspeed", name: "High-Speed Rail", tag: "Engineering", img: IMG.highspeed, text: "Aerodynamically integrated environmental systems for future high-speed transportation. Lightweight engineering, minimal drag, maximum efficiency — the rooftop fitment stays within a ~460 mm aerodynamic envelope." },
  { id: "freight", name: "Freight Rail", tag: "Engineering", img: IMG.freight, text: "A single containerised environmental capture wagon positioned directly behind the locomotive — a dedicated modular system with intake louvers, storage tanks and cooling — capturing ~100 t of CO₂ per wagon per year while the rest of the rake carries freight normally." },
];

export const FUTURE_EXPANSION = [
  { name: "Smart Urban Buses", img: IMG.bus, text: "Designed for cities experiencing high Air Quality Index. A low-profile rooftop environmental module lets every bus purify polluted urban air while transporting passengers — capturing ~12 t of CO₂ per bus per year across a 120,000-strong national fleet.", icon: "Bus" },
  { name: "Industrial Infrastructure", img: IMG.drawingGA, text: "Environmental systems for manufacturing facilities, industrial parks, logistics hubs, maintenance depots, transportation terminals and large campuses.", icon: "Factory" },
  { name: "Future Mobility", img: IMG.digitalTwin, text: "Long-term adaptation of the environmental platform to emerging mobility ecosystems and intelligent transportation systems.", icon: "Rocket" },
];

export const ROADMAP = [
  { phase: "Concept", text: "Category definition and environmental value thesis." },
  { phase: "Engineering", text: "Modular architecture and system engineering." },
  { phase: "Prototype", text: "Rooftop module prototype and bench validation." },
  { phase: "Validation", text: "Performance validation against capture and safety targets." },
  { phase: "Pilot", text: "On-network pilot with real operational data." },
  { phase: "Commercialization", text: "Manufacturable product and depot service model." },
  { phase: "Scale", text: "Fleet-scale deployment and localisation." },
  { phase: "Global Deployment", text: "Expansion across mobility and industrial infrastructure." },
];

export const CHALLENGES = [
  { title: "Climate Change", text: "Rising global temperatures demand infrastructure that actively removes carbon, not just emits less.", icon: "ThermometerSun" },
  { title: "Urban Air Pollution", text: "Dense corridors expose millions to unhealthy air. Mobile purification can act where people breathe.", icon: "Factory" },
  { title: "Carbon Emissions", text: "Hard-to-abate transport needs assets that generate environmental value across their lifecycle.", icon: "CloudFog" },
  { title: "Net Zero", text: "Credible net-zero pathways require measurable, auditable removal and reporting.", icon: "Target" },
  { title: "Water Scarcity", text: "Atmospheric water harvesting turns everyday journeys into a distributed water resource.", icon: "Droplets" },
  { title: "Urbanization", text: "Growing cities intensify demand on air, energy and water systems simultaneously.", icon: "Building2" },
  { title: "Resource Efficiency", text: "Circular use of captured carbon and water improves resource productivity.", icon: "Recycle" },
  { title: "Environmental Intelligence", text: "Decisions need real-time, verifiable environmental data at fleet scale.", icon: "BrainCircuit" },
];

export const IMPACT_STATS = [
  { label: "CO₂ Captured", value: "4.93M", unit: "tonnes / yr (50% capacity)", icon: "Wind" },
  { label: "Air Purified", value: "4.4T", unit: "m³ / yr, continuous", icon: "Sparkles" },
  { label: "Water Harvested", value: "12.3B", unit: "litres / yr", icon: "Droplets" },
  { label: "Energy Optimization", value: "25%", unit: "avg HVAC saving", icon: "Gauge" },
  { label: "Carbon Credits", value: "4.93M", unit: "credits / yr (1 t = 1)", icon: "BadgeCheck" },
  { label: "Credit Value Potential", value: "₹630 Cr", unit: "per year (~$74M)", icon: "IndianRupee" },
];

export const PARTNERS = [
  "Railways", "Metro Authorities", "Technology Companies", "OEMs",
  "Research Institutions", "Climate Funds", "Government Agencies",
  "Universities", "Manufacturing Partners",
];

export const ADVISORS = [
  {
    name: "Mr. Govind Vanjani",
    role: "Strategic Advisor – Renewable Energy, Environmental Technologies & Sustainable Infrastructure",
    initials: "GV",
    badges: ["Renewable Energy", "PV / DC Systems", "Six Sigma", "DC Microgrids"],
    bio: [
      "Mr. Govind Vanjani is a visionary electrical engineer, seasoned entrepreneur, and distinguished technology advisor with more than five decades of experience advancing science, engineering, and sustainable technology solutions for developing economies.",
      "Driven by the belief that access to reliable and affordable electricity is fundamental to economic prosperity and improved quality of life, he has pioneered numerous patented innovations powered by photovoltaic (PV) solar direct current (DC) technologies spanning lighting systems, electric motors, thermal applications, and electronic products.",
      "His professional journey includes foundational expertise in Six Sigma product development, global sourcing, manufacturing excellence, marketing, and business management acquired during his tenure with GE Motors and GE Capital.",
      "Currently collaborating with the T2M Team, Mr. Vanjani focuses on next-generation DC microgrid technologies integrating hybrid energy storage systems, electrolyzers, hydrogen technologies, and fuel-cell architectures to maximize renewable energy utilization while delivering affordable, resilient, and sustainable power solutions.",
      "Within TransO2, he provides strategic guidance on renewable energy integration, electrical systems architecture, energy optimization, and future environmental infrastructure technologies.",
    ],
  },
  {
    name: "Mr. V. K. Sethi",
    role: "Strategic Advisor – Engineering, Manufacturing Strategy & Industrial Development",
    initials: "VS",
    badges: ["IIT Kanpur", "Manufacturing Strategy", "Localization", "Indian Railways"],
    bio: [
      "Mr. V. K. Sethi is a distinguished engineering leader and an alumnus of the Indian Institute of Technology (IIT) Kanpur, with an accomplished career spanning several decades across India's leading automotive, manufacturing, and industrial organizations.",
      "His professional experience includes engineering and leadership roles at Tata Motors (formerly TELCO), Escorts Limited, Hero Motors, India Yamaha Motor, and the Bony Group, where he served as Assistant Vice President and contributed extensively to engineering excellence, operational transformation, manufacturing strategy, and corporate growth.",
      "Throughout his career, Mr. Sethi has played a pivotal role in developing corporate strategy, manufacturing localization, supplier ecosystem development, and import substitution initiatives. He has significantly contributed to the indigenisation of advanced rubber-to-metal engineering components for premium Indian Railways programmes, strengthening domestic manufacturing capability and reducing dependency on imported technologies.",
      "Within TransO2, he advises on engineering strategy, product industrialization, manufacturing excellence, localization, strategic partnerships, and scalable commercialization of advanced environmental infrastructure technologies.",
    ],
  },
  {
    name: "Mr. Sohail Ahmad",
    role: "Strategic Advisor – Technology, Wireless Systems, Network Security & Connected Platforms",
    initials: "SA",
    badges: ["IIT Roorkee", "CTO", "IoT & Wireless", "Network Security"],
    bio: [
      "Mr. Sohail Ahmad is a highly accomplished technology executive, researcher, and innovator with over two decades of deep expertise in wireless networking, network security, and advanced system architecture.",
      "Holding an M.Tech. in Computer Engineering from IIT Roorkee, he serves as the Chief Technology Officer (CTO) of WiFi Soft Solutions and Indio Networks, where he orchestrates product research, technical marketing, and engineering strategy.",
      "Throughout his career, he has successfully designed and deployed cutting-edge enterprise wireless platforms such as Cloudifi, a vendor-neutral cloud Wi-Fi solution, and ADZOOBA, a specialized public hotspot video advertising system.",
      "His robust foundation in core networking technologies like TCP/IP and WLAN security was built through a series of impactful, leading-edge engineering roles at global telecom and network security giants, including Juniper Networks, AirTight Networks, and Aricent.",
      "Within TransO2, he guides the connected-platform architecture — edge-to-cloud telemetry, the environmental digital twin, cybersecurity, and the secure IoT backbone that makes fleet-wide environmental intelligence measurable and auditable.",
    ],
  },
];

export const NAV = [
  { label: "Vision", to: "/vision" },
  { label: "Platform", to: "/platform" },
  { label: "Impact", to: "/impact" },
  { label: "Applications", to: "/applications" },
  { label: "Knowledge", to: "/knowledge" },
  { label: "Partners", to: "/partners" },
  { label: "Advisory", to: "/advisory" },
];

export const KC_MISSION =
  "The TransO2 Knowledge Centre exists to advance the understanding of Environmental Infrastructure Engineering through original research, engineering thought leadership, systems design, and technology perspectives. Its purpose is to stimulate innovation, encourage interdisciplinary collaboration, and support the evolution of sustainable mobility through scientifically grounded engineering concepts and responsible technology development.";

export const KC_FILTERS = {
  type: ["White Paper", "Research Publication", "Engineering Note", "Technical Brief", "Perspective", "Investor Insight", "Technology Overview"],
  audience: ["Investors", "Government", "Railway Operators", "OEMs", "Research Institutions", "Engineering Teams", "Policy Makers"],
  technology: ["Carbon Management", "Air Management", "Water Harvesting", "Thermal Engineering", "Environmental Intelligence", "Systems Engineering", "Environmental Infrastructure"],
  application: ["Railways", "Metro", "Freight Rail", "Urban Buses", "Future Mobility"],
};

export const FAQS = [
  { q: "What is Environmental Infrastructure Engineering?", a: "It is an emerging engineering discipline that designs transportation and fixed assets to actively generate environmental value — capturing carbon, purifying air, harvesting water and producing environmental intelligence — across their operational lifecycle, rather than simply moving people or goods." },
  { q: "Why railways first?", a: "Railways combine large, standardised fleets, predictable duty cycles, ample rooftop area, and continuous interaction with air and moisture — making them an ideal first platform for integrated environmental infrastructure. This is a conceptual and engineering focus, not a claim of commercial deployment." },
  { q: "Why rooftop integration?", a: "The coach roof offers an aerodynamic, serviceable envelope (a low-profile ~460 mm design target) that can host modules without intruding on passenger space or exposed machinery, and integrates with existing HVAC and structural load paths." },
  { q: "How does this relate to sustainability and Net Zero?", a: "Onboard capture, verified through measurement, reporting and verification (MRV), can contribute measurable removals aligned with India's carbon market (CCTS) and Indian Railways' stated Net-Zero 2030 ambition. Figures published are conceptual engineering projections." },
  { q: "What engineering disciplines are involved?", a: "Systems engineering, thermal and HVAC engineering, aerodynamics, materials, electronics, sensor fusion, artificial intelligence, software, and lifecycle/sustainability engineering." },
  { q: "Where do AI and digital twins fit?", a: "Edge AI and sensor fusion contextualise environmental data onboard; a digital twin maintains a live model of each vehicle, enabling predictive analytics, remote monitoring and an auditable data trail." },
  { q: "How can organisations collaborate?", a: "Through research collaboration, technology collaboration, industrial collaboration and strategic partnerships. The Partners page describes structured engagement pathways. All current work is conceptual and pre-validation." },
  { q: "What future applications are envisioned?", a: "Beyond passenger railways: metro systems, high-speed and freight rail, high-AQI urban buses, and eventually industrial infrastructure. These are proposed future pathways, not guaranteed outcomes." },
];

export const PARTNER_CATEGORIES = [
  "Railway Operators", "Metro Authorities", "Rolling Stock Manufacturers", "Environmental Technology Companies",
  "Universities", "Research Institutes", "Digital Technology Partners", "AI Partners", "Sensor Manufacturers",
  "Sustainability Organizations", "Government Innovation Programs", "Manufacturing Partners",
];

export const COLLAB_FRAMEWORK = [
  { title: "Research Collaboration", icon: "FlaskConical", items: ["Joint studies", "Engineering validation", "Simulation", "Academic research", "Student projects"] },
  { title: "Technology Collaboration", icon: "Cpu", items: ["Sensors", "AI & digital twins", "Materials & electronics", "Software", "Environmental technologies"] },
  { title: "Industrial Collaboration", icon: "Factory", items: ["Manufacturing", "Localization", "Systems integration", "Pilot deployments", "Service support"] },
  { title: "Strategic Partnerships", icon: "Handshake", items: ["Long-term innovation programs", "Joint development", "Knowledge exchange", "Technology commercialization"] },
];

export const ENGAGE_PATHS = [
  { key: "Investor Inquiry", icon: "TrendingUp", text: "Vision, market context, technology overview and advisory guidance." },
  { key: "Research Collaboration", icon: "FlaskConical", text: "Publications, future research themes and open innovation topics." },
  { key: "OEM Partnership", icon: "Cog", text: "Platform architecture, integration philosophy and technical briefs." },
  { key: "Government Engagement", icon: "Landmark", text: "Applications, environmental perspectives and white papers." },
  { key: "Media Inquiry", icon: "Newspaper", text: "Company overview, leadership, and high-resolution visuals." },
  { key: "General Contact", icon: "Mail", text: "Any other enquiry about TransO2 and its work." },
];
