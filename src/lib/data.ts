import { 
  Layers, 
  Settings, 
  Sun, 
  Grid as GridIcon, 
  Compass, 
  Activity,
  Maximize2,
  Wind
} from "lucide-react";

import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import fabricationImg from "@/assets/product-fabrication.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import heroImg from "@/assets/hero-factory.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: "Glazing & Façades" | "Cladding & Openings";
  img: string;
  icon: any;
  desc: string;
  longDesc: string;
  features: string[];
  specs: Record<string, string>;
  seoTitle: string;
  seoDesc: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: "Glazing & Facades" | "Windows & Doors" | "ACP & Shading";
  img: string;
  badge: string;
  desc: string;
  longDesc: string;
  specs: string[];
  technicalDetails: Record<string, string>;
  features: string[];
  seoTitle: string;
  seoDesc: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "curtain-wall-systems",
    num: "01 / Service",
    title: "Curtain Wall Systems",
    category: "Glazing & Façades",
    img: curtainImg,
    icon: Layers,
    desc: "Custom-engineered curtain walling solutions designed to bear structural loads, resist wind pressures, and provide outstanding thermal insulation for mid-rise and high-rise building envelopes.",
    longDesc: "Our curtain wall systems represent the peak of structural facade engineering, creating breathtaking, glazed building envelopes that meet the highest international standards. We manage the entire lifecycle of the system—from layout drafting and static engineering calculations to precision thermal modeling and site anchors. Every profile is chosen to match local wind pressures, thermal requirements, and structural movements, ensuring a safe, watertight, and long-lasting envelope.\n\nOur service includes wind load tests, seismic design validation, and compatibility analyses with concrete and steel structural members. Whether it is a traditional stick system assembled on-site or a custom modular facade, we deliver reliability and architectural beauty.",
    features: [
      "Thermally broken profiles for reduced heat transfer",
      "Site-tested for air, water, and static structural infiltration",
      "Integrates seamlessly with structural silicone or captive pressure plate glazing"
    ],
    specs: {
      "System Type": "Stick-built / Conventional",
      "Thermal Insulation": "U-value down to 1.6 W/m²K",
      "Wind Resistance": "Up to 3.5 KPa design pressure",
      "Water Tightness": "Tested to ASTM E331 guidelines",
      "Air Permeability": "Complies with ASTM E283 standards"
    },
    seoTitle: "Aluminium Curtain Wall Systems Design & Installation | Qualpro",
    seoDesc: "Precision-engineered curtain wall systems for mid-to-high-rise buildings. Learn about our thermally broken, wind-resistant stick and pressure plate facades."
  },
  {
    id: "unitized-glazing",
    num: "02 / Service",
    title: "Unitized Glazing",
    category: "Glazing & Façades",
    img: glazingImg,
    icon: Activity,
    desc: "Pre-assembled and pre-glazed façade panels manufactured in our quality-controlled Cherlapally plant. Units are crane-lifted and anchored directly to the building slab for rapid construction timelines.",
    longDesc: "Unitized Glazing is the gold standard for high-rise commercial architecture, designed for rapid construction and absolute manufacturing consistency. In our state-of-the-art Cherlapally plant, we fabricate and assemble complete unitized split-mullion panels under strict, dust-free climate controls. Glass units, spandrels, and gaskets are fully installed in the factory, removing weather dependencies and reducing on-site safety risks.\n\nOnce on site, the pre-fabricated modules are crane-hoisted and anchored directly to the building slabs using heavy-duty adjustable brackets. This workflow allows for parallel exterior installation while interior finishes are in progress, cutting overall project timelines by up to 40%.",
    features: [
      "Fast, scaffolding-free installation from the interior slab edge",
      "Superior factory-sealed gaskets with multi-level internal drainage channels",
      "Engineered for high-rise wind loads and dynamic building movements"
    ],
    specs: {
      "Fabrication Method": "100% factory assembly & glazing",
      "Seismic Capacity": "Accommodates dynamic inter-story drift (Zone V)",
      "Mullion Depths": "120mm to 200mm custom systems",
      "Glass Infill": "24mm to 34mm double glazed units",
      "Installation Rate": "Up to 35 panels installed per crew per day"
    },
    seoTitle: "Factory Prefabricated Unitized Glazing Services | Qualpro",
    seoDesc: "Accelerate your high-rise project with our unitized glazing service. Pre-assembled and pre-glazed panels built at our Cherlapally plant and crane-anchored."
  },
  {
    id: "spider-glazing",
    num: "03 / Service",
    title: "Spider Glazing",
    category: "Glazing & Façades",
    img: commercialImg,
    icon: Maximize2,
    desc: "Point-fixed glass facades utilizing heavy-duty stainless steel spider brackets. Maximizes natural light penetration, giving lobby entrances, atriums, and showrooms a minimalist, high-transparency appearance.",
    longDesc: "For architectural entranceways, multi-story atriums, and car showrooms that require a fully transparent, minimalist look, spider glazing offers the perfect solution. By eliminating heavy vertical mullions, point-fixed spider glazing uses high-tensile stainless steel fittings to support large glass panels, providing maximum visibility and natural light transmission.\n\nOur engineering team performs exhaustive stress analysis at each glass bolt connection to manage localized wind loads and thermal expansion. We utilize heavy-duty SUS316 stainless steel spiders, articulated bolts, and custom-designed glass fins or steel trusses to build structural glazed screens that combine strength with minimalist styling.",
    features: [
      "SUS316 marine-grade stainless steel spiders and custom articulated connectors",
      "Tempered or heavy-duty laminated safety glass with polished borders",
      "Minimalist support depth utilizing tension rods, cables, or structural glass fins"
    ],
    specs: {
      "Connection Type": "Point-fixed countersunk or button bolts",
      "Support Frame": "Glass fins, steel circular columns, or tension cables",
      "Glass Specs": "12mm to 19mm monolithic tempered or laminated glass",
      "Spider Config": "1-way, 2-way, 3-way, and 4-way heavy-duty brackets",
      "Hardware Grade": "AISI 316 Stainless Steel with satin or mirror finish"
    },
    seoTitle: "Minimalist Point-Fixed Spider Glazing Installations | Qualpro",
    seoDesc: "Maximize transparency with point-fixed spider glazing systems. Heavy-duty SUS316 steel connectors and structural glass fins for lobbies and showrooms."
  },
  {
    id: "facade-works",
    num: "04 / Service",
    title: "Facade Works",
    category: "Glazing & Façades",
    img: fabricationImg,
    icon: Settings,
    desc: "Comprehensive engineering envelope service — covering architectural structural design, wind-load analysis, custom metal shop drawings, fabrication, and final site handover under director-level supervision.",
    longDesc: "A building's facade is its primary barrier against the elements and its most visible architectural feature. Our Facade Works service delivers a complete building envelope package, bridging the gap between design and physical assembly. We translate architectural visions into fully engineered facade systems that balance thermal performance, structural integrity, acoustic control, and aesthetics.\n\nLed by Director Ramesh Kommana, our team conducts wind-tunnel data mapping, designs custom extrusion dies, sets up structural mockups, and performs on-site water testing. We coordinate with structural consultants, general contractors, and project managers to ensure every element of the building envelope integrates seamlessly.",
    features: [
      "End-to-end envelope accountability from conceptual layout to site delivery",
      "Custom architectural designs with full wind-load structural certification",
      "Strict mockup performance testing for air tightness and water spray resistance"
    ],
    specs: {
      "Engineering Standard": "IS 875 (Part 3) for Wind Loads, ASTM standard tests",
      "Scope": "3D CAD modeling, custom die development, site installation",
      "Material Compliances": "AAMA 501.1, ASTM dynamic water testing standards",
      "Project Types": "IT parks, corporate headquarters, airports, hotels",
      "QA Audit": "Director-partner level inspections and site sign-offs"
    },
    seoTitle: "Commercial Facade Engineering & Contracting Services | Qualpro",
    seoDesc: "End-to-end commercial facade contracting. From architectural shop drawings and static calculation models to site execution and certification."
  },
  {
    id: "cladding",
    num: "05 / Service",
    title: "Cladding",
    category: "Cladding & Openings",
    img: industrialImg,
    icon: Compass,
    desc: "Premium Aluminium Composite Panel (ACP) and custom sheet metal cladding systems. Provides buildings with weather shielding, thermal insulation, acoustic damping, and a modern architectural finish.",
    longDesc: "Aluminium cladding provides a highly durable, low-maintenance protective layer for building exteriors, improving durability and updating aesthetics. We design and install high-performance Aluminium Composite Panel (ACP) systems and solid aluminium plate panels. These systems are mounted on robust sub-structures that create a ventilated rainscreen cavity, which naturally controls moisture and thermal buildup.\n\nWe prioritize fire safety, using Class A2 or B fire-retardant panels paired with non-combustible mineral wool insulation. With PVDF resin coatings, our cladding systems are resistant to chalking, fading, and atmospheric corrosion, ensuring a clean, modern look for decades.",
    features: [
      "Fire-retardant core panel options complying with international standards",
      "Wide range of PVDF color coatings with high resistance to UV rays",
      "Low maintenance, high impact resistance, and weather-proof rainscreen design"
    ],
    specs: {
      "Panel Thickness": "4mm standard ACP / 3mm solid aluminium panels",
      "Skin Thickness": "0.5mm aluminium skins front and back",
      "Fire Rating": "Class A2 (Non-combustible) / Class B-s1, d0 certified",
      "Fixing System": "Open-joint drained rainscreen or wet-sealed tray systems",
      "Sub-Structure": "Heavy-duty engineered GI or aluminium brackets and runners"
    },
    seoTitle: "Fire-Retardant ACP Cladding & Rainscreen Installation | Qualpro",
    seoDesc: "Shield your structure with fire-rated ACP cladding and solid metal rainscreen panels. Certified PVDF coatings and engineered sub-structures."
  },
  {
    id: "skylights",
    num: "06 / Service",
    title: "Skylights",
    category: "Cladding & Openings",
    img: heroImg,
    icon: Sun,
    desc: "Engineered overhead glass systems designed to maximize daylighting in atriums, passages, and central spaces. Built with safety-laminated glass and leak-proof drainage systems.",
    longDesc: "Bringing natural light into deep architectural layouts requires highly engineered overhead glass systems. Our skylight services cover the design, structural modeling, fabrication, and sealing of custom glass vaults, pyramids, and flat skylights. Since overhead glazing is exposed directly to sunlight and heavy rain, we focus on thermal control and reliable water drainage.\n\nWe use insulated glass units (IGUs) made of low-emissivity (Low-E) tempered glass and safety-laminated glass to prevent injury in case of breakage. Additionally, our custom-designed extrusion profiles incorporate hidden internal condensation channels, preventing drips and keeping atriums perfectly dry.",
    features: [
      "Integrated condensation gutter channels to prevent internal water drips",
      "High UV filtering laminated glass to prevent indoor heat and fading",
      "Custom slopes, domes, and pyramidal structures matching architectural themes"
    ],
    specs: {
      "Structure Style": "Pyramid, single-pitch, ridge, dome, or custom barrel vault",
      "Glass Spec": "Double Glazed Units (6mm Low-E Tempered + 12mm Air Gap + 10mm Laminated)",
      "Waterproofing": "Double EPDM gaskets with structural silicone weather seals",
      "Load Capacity": "Engineered for high wind pressures and maintenance walk-loads",
      "Frame Material": "Extruded structural aluminium alloy 6063 T6"
    },
    seoTitle: "Custom Engineered Glass Skylights & Atriums | Qualpro",
    seoDesc: "Architectural glass skylights designed for energy efficiency and daylighting. Features leak-proof internal gutters and UV-filtering safety glass."
  },
  {
    id: "windows-and-louvres",
    num: "07 / Service",
    title: "Windows and Louvres",
    category: "Cladding & Openings",
    img: windowsImg,
    icon: Wind,
    desc: "Slim-sightline sliding, casement, and tilt-turn window systems paired with custom architectural louvres to regulate airflow, maximize viewing areas, and maintain privacy.",
    longDesc: "Modern fenestration demands a balance of high performance, clean aesthetics, and ease of use. Our window and louvre installations offer thin profiles that maximize glass surface area while maintaining high structural strength against heavy wind loads. We work with thermal break profiles that reduce heat transfer, keeping indoor environments comfortable and energy-efficient.\n\nFor natural ventilation, we design and install custom architectural louvre systems. These can be fixed or adjustable, providing shading, privacy, and airflow for mechanical rooms, parking decks, or building facades.",
    features: [
      "Slim, high-strength sightlines for maximum glass area and views",
      "Acoustic and thermal barrier profiles for soundproofing and insulation",
      "Adjustable and structural louvre blades for controlled ventilation and privacy"
    ],
    specs: {
      "Types Available": "Casement, sliding, tilt-turn, top-hung, and pivot windows",
      "Acoustic Rating": "Sound reduction up to 40 dB with double acoustic seals",
      "Profiles": "Thermally broken or non-thermal multi-chamber profiles",
      "Louvre Pitch": "Custom fixed pitch (45°, 30°) or automated adjustable blades",
      "Glazing Thickness": "Single glass (6mm) to insulated glass units (24mm)"
    },
    seoTitle: "Aluminium Windows and Architectural Louvres | Qualpro",
    seoDesc: "Upgrade your building with slim-sightline casement and sliding windows. Paired with custom ventilation louvres for optimal airflow and noise control."
  },
  {
    id: "doors",
    num: "08 / Service",
    title: "Doors (Interior / Exterior)",
    category: "Cladding & Openings",
    img: doorsImg,
    icon: GridIcon,
    desc: "Heavy-duty aluminium door profiles including sliding, bi-folding, hinged, and pivot systems designed for continuous, smooth, daily operation with high-security multi-point locks.",
    longDesc: "Doors are the most interactive elements of any building, meaning they must operate smoothly, look great, and provide solid security. We build and install heavy-duty aluminium doors designed for high-traffic environments. From large, multi-panel sliding and folding doors that connect interior and exterior spaces, to heavy hinged doors for commercial entries, our products are engineered to perform reliably.\n\nOur profiles feature thick structural walls and secure multi-point locking systems, providing robust security. We use premium European hardware, including heavy-duty rollers and concealed hinges, ensuring smooth, quiet operation even with heavy double-glazed panels.",
    features: [
      "Precision rolling hardware for quiet, effortless sliding of heavy panels",
      "Flush threshold options for barrier-free transitions",
      "Tested for heavy duty cycles, resisting structural sagging and alignment drift"
    ],
    specs: {
      "Configurations": "Slide & fold (bi-fold), lift & slide, pivot, hinged single/double",
      "Locking Systems": "Multi-point secure locking points with security cylinders",
      "Gasketing": "Double-barrier EPDM weather gaskets for draft prevention",
      "Hardware Brands": "Premium European hardware (G-U, Sobinco, Savio, or equivalent)",
      "Panel Capacity": "Supports glass door panels up to 300kg with heavy-duty rollers"
    },
    seoTitle: "Heavy-Duty Aluminium Doors - Sliding, Bi-Fold & Pivot | Qualpro",
    seoDesc: "Discover our range of custom aluminium doors. Engineered for smooth operation, structural stability, and secure multi-point locking."
  }
];

export const productsList: ProductItem[] = [
  {
    id: "curtain-wall-systems",
    title: "Curtain Wall Systems",
    category: "Glazing & Facades",
    img: curtainImg,
    badge: "Wind Load: 3.5 KPa",
    desc: "Custom-engineered curtain walling systems for high-performance building envelopes, offering structural strength and modern design.",
    longDesc: "Qualpro's Curtain Wall Systems are engineered to meet the structural and aesthetic requirements of modern high-rise architecture. Available in both stick-built configurations (assembled on site) and unitized layouts, our curtain walls support dead loads and resist wind loads, steering wind forces safely back to the building structure.\n\nWith integrated thermal breaks and high-quality EPDM gaskets, these systems prevent thermal bridging, significantly lowering building HVAC costs. They also provide excellent sound isolation, making them ideal for urban office environments.",
    specs: ["Alloy: 6063 T6", "Glass: 24-32mm DGU", "Profile Depth: Up to 150mm"],
    technicalDetails: {
      "Profile Material": "Extruded Aluminium Alloy 6063 T6 / T5",
      "Finish Options": "PVDF Coating, Powder Coating, or Anodized",
      "Thermal Break": "Polyamide strips for thermal barrier",
      "Glazing Thickness": "Supports double glazed units (DGU) from 24mm to 32mm",
      "Structural Sealant": "Dow Corning / Wacker structural grade silicone",
      "Wind Pressure Rating": "Certified for up to 3.5 KPa wind loads"
    },
    features: [
      "Stick-built and modular facades tailored to custom architectural grids",
      "Exhaustively tested for water tightness and air infiltration",
      "Slim mullion profiles that maximize daylight entry"
    ],
    seoTitle: "Premium Aluminium Curtain Wall Framing Systems | Qualpro",
    seoDesc: "Explore our curtain wall framing profiles. Extruded from structural 6063 T6 alloy, featuring thermal breaks and certified wind load performance."
  },
  {
    id: "unitized-glazing-systems",
    title: "Unitized Glazing Systems",
    category: "Glazing & Facades",
    img: glazingImg,
    badge: "Seismic: Zone V",
    desc: "Pre-fabricated facade panels manufactured in controlled plant environments and assembled directly on-site, ensuring speed, precision, and consistency for high-rise projects.",
    longDesc: "Our Unitized Glazing System is designed for modern commercial skyscrapers, where speed of installation and high quality control are essential. Each unitized panel is assembled, sealed, and glazed in our factory, then shipped to the construction site for direct installation on floor slabs.\n\nThis process allows the facade to be installed without external scaffolding, making it a safer and faster option for urban sites. The interlocking panel designs feature built-in drainage channels that route rainwater away from the building envelope, providing reliable waterproofing.",
    specs: ["Pre-assembled panels", "Wind Load: 4.5 KPa", "EPDM Gasket Seals"],
    technicalDetails: {
      "Assembled Location": "Controlled plant environment (Cherlapally factory)",
      "Movement Tolerance": "Accommodates dynamic structural movement and seismic drift",
      "Mullion Profile Width": "65mm to 80mm front visual profile",
      "Panel Connections": "Interlocking male/female split-mullion joints",
      "Water drainage": "Three-tier pressure-equalized rainscreen system"
    },
    features: [
      "Rapid installation via floor crane, bypassing external scaffolding",
      "Consistent factory assembly ensures reliable weather sealing",
      "Excellent resistance to seismic drift and building settlements"
    ],
    seoTitle: "High-Rise Prefabricated Unitized Facade Systems | Qualpro",
    seoDesc: "Pre-fabricated unitized facade panels for high-rise developments. Factory-assembled under strict quality controls for rapid site installation."
  },
  {
    id: "spider-glazing-systems",
    title: "Spider Glazing Systems",
    category: "Glazing & Facades",
    img: commercialImg,
    badge: "Max Transparency",
    desc: "Glass facade systems featuring point-fixed supports with stainless steel spider fittings – ideal for atriums, lobbies, and entrances that demand transparency, elegance, and minimalism.",
    longDesc: "Qualpro's Spider Glazing Systems offer clean, minimalist lines, making them popular for high-traffic entrance lobbies, glass canopies, and car showrooms. By using point-fixed stainless steel fittings, this system eliminates the need for vertical framing mullions, providing a clear view from both inside and outside the building.\n\nWe utilize heavy-duty SUS316 stainless steel connectors, which resist corrosion and maintain structural strength. The glass panels are secured with articulated bolts that accommodate glass deflection under wind pressure, reducing stress concentrations around the bolt holes.",
    specs: ["Fittings: SUS316 Steel", "Glass: 12-19mm Laminated", "Spans: Up to 6 meters"],
    technicalDetails: {
      "Fitting Grade": "SUS316/SUS304 Marine Grade Stainless Steel",
      "Supporting Structure": "Glass fin, steel truss, or high-tensile tension rods",
      "Bolt Style": "Countersunk flat-head or button-head articulated bolts",
      "Glass Infill": "Monolithic tempered or multi-layer PVB/SGP laminated glass",
      "Max Span Capacity": "Custom-designed support spans up to 6 meters between columns"
    },
    features: [
      "High-grade stainless steel spider fittings with polished or satin finishes",
      "Provides maximum natural light transmission for bright interior spaces",
      "Minimalist structural framing that complements modern design layouts"
    ],
    seoTitle: "Frameless Point-Fixed Spider Glass Facade Hardware | Qualpro",
    seoDesc: "Discover our frameless spider glass hardware systems. High-grade SUS316 steel fittings, articulated bolts, and heavy-duty glass fin supports."
  },
  {
    id: "facade-works",
    title: "Facade Works",
    category: "Glazing & Facades",
    img: fabricationImg,
    badge: "Full Customization",
    desc: "Comprehensive facade solutions combining design, structural engineering, fabrication, and installation to achieve stunning, weather-proof building envelopes.",
    longDesc: "Qualpro's Facade Works provide complete, custom envelope solutions for modern commercial properties. Rather than trying to adapt standard profiles to unique layouts, our in-house engineering team designs custom dies, brackets, and interfaces to meet the project's specific aesthetic and functional requirements.\n\nEvery project undergoes structural engineering analysis to confirm compliance with local wind and seismic codes. Our fabrication plant in Cherlapally utilizes automated machinery to prepare, cut, and drill every component, ensuring precise assembly on-site.",
    specs: ["Engineering: In-house", "Certification: Structural", "Mock-up tested: Yes"],
    technicalDetails: {
      "Design Software": "SolidWorks, AutoCAD, and thermal simulation tools",
      "Engineering Norms": "IS:875, BS, and ASTM structural guidelines",
      "Mockup Analysis": "Full-scale mockup testing for water pressure and air tightness",
      "Material Choice": "Extruded profiles, ACP, stone, and dynamic glazing panels",
      "Project Scope": "Concept design, shop drawings, fabrication, and installation"
    },
    features: [
      "End-to-end building envelope execution from design to final inspection",
      "Custom extrusion profiles designed to fit unique architectural layouts",
      "Rigorous quality testing for thermal and acoustic performance"
    ],
    seoTitle: "Architectural Facade Contracting & Design-Build | Qualpro",
    seoDesc: "Custom-engineered building facades. Learn about our in-house design, structural analysis, and factory fabrication processes."
  },
  {
    id: "acp-cladding",
    title: "ACP Cladding (Aluminium Composite Panels)",
    category: "ACP & Shading",
    img: industrialImg,
    badge: "FR Class B / A2",
    desc: "High-quality Aluminium Composite Panel (ACP) cladding systems that provide a sleek, contemporary, and durable finish for commercial and residential exteriors.",
    longDesc: "Our Aluminium Composite Panel (ACP) Cladding provides a modern, durable exterior finish for commercial offices, showrooms, and industrial structures. These panels consist of two thin sheets of aluminium bonded to a fire-retardant core, offering a lightweight cladding solution that does not compromise on safety or strength.\n\nWe install ACP systems as ventilated rainscreens, which provide an air gap that reduces heat transfer and moisture buildup. The panels are coated with high-performance PVDF paint, protecting them from weathering and UV damage for decades.",
    specs: ["Coating: PVDF / FEVE", "Core: Fire Retardant", "Thickness: 4mm / 6mm"],
    technicalDetails: {
      "Aluminium Skin": "0.5mm thickness front and back skins",
      "Core Material": "Mineral-filled fire-retardant core (Class A2 / B)",
      "Coating System": "Double-bake PVDF / FEVE coating with Kynar 500 resin",
      "Sub-Structure Grid": "Engineered galvanised iron or aluminium brackets",
      "Joint Seals": "Silicone non-bleeding joint sealants or open drained joints"
    },
    features: [
      "Lightweight, rigid panels that install quickly and reduce structural load",
      "Excellent weather protection and acoustic damping performance",
      "Low maintenance panels available in a wide selection of colors and finishes"
    ],
    seoTitle: "Fire-Rated ACP Cladding Panels & Substructures | Qualpro",
    seoDesc: "Durable, fire-retardant ACP cladding systems. High-performance PVDF paint finishes and engineered substructure grids for commercial building facades."
  },
  {
    id: "structural-glazing",
    title: "Structural Glazing",
    category: "Glazing & Facades",
    img: curtainImg,
    badge: "Frameless Finish",
    desc: "Concealed-grid frameless glass facade systems that offer clean lines and seamless glass expanses for modern commercial developments.",
    longDesc: "Structural Glazing systems use high-strength silicone sealants to bond glass panels directly to aluminium carrier frames, eliminating the need for visible exterior pressure plates or metal covers. This creates a smooth, continuous glass surface that enhances the appearance of commercial developments.\n\nBehind this clean exterior is a robust structure of vertical mullions and horizontal transoms, engineered to support dead loads and resist wind pressures. We use top-tier structural silicones from brands like Dow Corning, applied under controlled factory conditions, to ensure reliable adhesion and long-term durability.",
    specs: ["Sealant: Dow Corning Silicone", "Sightlines: Structural Joint", "Glass: Insulated DGU"],
    technicalDetails: {
      "Sealant Brand": "Dow Corning / Wacker structural-grade silicones",
      "Glass Infill": "24mm double-glazed or 12mm monolithic safety glass",
      "Internal Frame": "Hidden structural aluminium framing alloy 6063 T6",
      "Joint Profile": "2-sided or 4-sided structural silicone glazing configurations",
      "Wind Pressure Limit": "Designed and certified to match site-specific load charts"
    },
    features: [
      "Seamless monolithic glass appearance with hidden structural frames",
      "High-performance structural sealants that absorb dynamic building movements",
      "Popular choice for modern corporate headquarters, retail facades, and IT parks"
    ],
    seoTitle: "Seamless Frameless Structural Silicone Glazing | Qualpro",
    seoDesc: "Achieve a smooth, continuous glass facade with our structural silicone glazing systems. Factory-bonded glass units utilizing premium silicone sealants."
  },
  {
    id: "louvers-and-sunshade-systems",
    title: "Louvers & Sunshade Systems",
    category: "ACP & Shading",
    img: windowsImg,
    badge: "Ventilation Shield",
    desc: "Architecturally styled louvers and shading solutions designed to manage solar heat gain, improve energy efficiency, and elevate aesthetic styling.",
    longDesc: "Qualpro's Aluminium Louvers and Sunshades help manage solar heat gain, reducing cooling loads while maintaining ventilation. These systems can be integrated into new builds or retrofitted onto existing commercial facades.\n\nExtruded from durable 6063 T6 aluminium, our louvres are designed to withstand high winds without rattling. They are available in a variety of configurations, including fixed architectural screens and adjustable systems that let you control light and privacy.",
    specs: ["Blades: Extruded Aluminium", "Control: Fixed or Adjustable", "Finishes: Powder Coated / Anodized"],
    technicalDetails: {
      "Blade Profile": "Airfoil, Z-blade, or box-section designs",
      "Aluminium Grade": "6063 T6 structural extrusion profiles",
      "Control Method": "Manual handles, fixed brackets, or motorized actuators",
      "Corrosion Control": "Stainless steel fasteners with nylon bushings to prevent noise",
      "Finish Standard": "AAMA 2604/2605 compliant powder coatings"
    },
    features: [
      "Customizable blade angles and pitches to match solar angles",
      "Provides weather protection and ventilation for mechanical rooms",
      "Durable, lightweight construction that adds visual texture to facades"
    ],
    seoTitle: "Architectural Aluminium Louvers & Sunshades | Qualpro",
    seoDesc: "Reduce solar heat gain with architectural aluminium louvers. Available in fixed or adjustable profiles with durable, weather-resistant powder coatings."
  },
  {
    id: "skylights",
    title: "Skylights",
    category: "Glazing & Facades",
    img: heroImg,
    badge: "Daylighting System",
    desc: "Engineered overhead glazing systems designed to maximize daylighting in atriums, passages, and central spaces while maintaining structural strength.",
    longDesc: "Qualpro's Skylights bring natural light deep into building interiors, helping create bright, welcoming spaces. These systems are designed to withstand overhead loads, including wind forces, maintenance traffic, and thermal expansion.\n\nOur skylight frames feature built-in drainage channels that guide condensation and rain away from the structure, preventing leaks. The glass units are made of tempered, low-emissivity (Low-E) glass combined with safety-laminated glass, ensuring safety and thermal performance.",
    specs: ["EPDM Double Gaskets", "Safety Laminated Glass", "Integrated Gutters"],
    technicalDetails: {
      "Frame Profile": "Self-draining structural aluminium extrusion profiles",
      "Glazing Style": "Insulated glass units (IGUs) with safety-laminated inner panes",
      "Thermal Control": "Low-E coatings and argon gas fill options for thermal barrier",
      "Seal Standards": "Double-barrier EPDM gasket systems with structural silicone seals",
      "System Variety": "Pyramid, flat, single-slope, ridge, or custom dome layouts"
    },
    features: [
      "Built-in drainage channels prevent leaks and internal condensation drips",
      "Safety-laminated glass infill provides impact resistance",
      "Sturdy aluminium frames allow for large, unsupported glass spans"
    ],
    seoTitle: "Energy-Efficient Commercial Glass Skylight Systems | Qualpro",
    seoDesc: "Custom-engineered commercial glass skylights. Features integrated condensation drainage, low-E thermal coatings, and safety-laminated glass."
  },
  {
    id: "windows-and-doors",
    title: "Windows and Doors (Interior / Exterior)",
    category: "Windows & Doors",
    img: doorsImg,
    badge: "Acoustic: Up to 40dB",
    desc: "Premium quality aluminium windows and doors crafted for daily operational excellence, thermal efficiency, security, and noise isolation.",
    longDesc: "Qualpro's Aluminium Windows and Doors are designed for commercial projects and premium residences that require durability and modern style. We manufacture a range of configurations, including sliding windows, casements, bi-folding panels, and large pivot doors.\n\nOur systems feature multi-point locking systems and high-quality hardware for reliable security and smooth operation. The profiles can be thermally broken to reduce heat transfer, and double gaskets help block drafts and outdoor noise.",
    specs: ["Locks: Multi-point secure", "Glass: 6mm - 24mm DGU", "Profiles: Slim Sightlines"],
    technicalDetails: {
      "Window Configurations": "Casement, sliding, tilt-and-turn, and top-hung systems",
      "Door Configurations": "Hinged, pivot, bi-folding, and lift-and-slide doors",
      "Profile Depth": "45mm to 80mm high-strength extrusion profiles",
      "Thermal Insulation": "Available thermal break polyamide strips",
      "Acoustic Seals": "Multi-tier EPDM compression seals for soundproofing"
    },
    features: [
      "Slim frame profiles maximize glass area and natural light",
      "Multi-point locks provide robust security on all panels",
      "High-quality European rollers and hinges ensure smooth, quiet operation"
    ],
    seoTitle: "Premium Aluminium Windows & Doors | Qualpro Systems",
    seoDesc: "Discover our high-performance aluminium windows and doors. Slim profiles, double acoustic seals, and multi-point security locking systems."
  }
];
