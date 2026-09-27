import { ServiceItem, CapabilityItem, IndustryItem, HSEPrinciple } from '../types';

// Asset paths from image generation
import heroImg from '../assets/images/hero_oilfield_platform_1790494556171.jpg';
import marineImg from '../assets/images/industry_marine_offshore_1790494570255.jpg';
import engineeringImg from '../assets/images/industry_engineering_tech_1790494585960.jpg';
import facilityImg from '../assets/images/industry_energy_facility_1790494597439.jpg';
import drillingRigImg from '../assets/images/drilling_rig_site_1790495003774.jpg';
import pipelineValvesImg from '../assets/images/pipeline_valves_1790495024482.jpg';
import maintenanceImg from '../assets/images/oilfield_maintenance_1790495035250.jpg';
import offshoreVesselImg from '../assets/images/offshore_vessel_1790496453858.jpg';
import wellheadControlImg from '../assets/images/wellhead_control_1790496465797.jpg';
import engineerInspectionImg from '../assets/images/engineer_inspection_1790496477806.jpg';
import marineTerminalImg from '../assets/images/marine_terminal_1790496489360.jpg';

export const COMPANY_INFO = {
  name: 'EMCO Oilfield Services Ltd',
  shortName: 'EMCO',
  legalName: 'EMCO Oilfield Services Ltd',
  tagline: 'Engineering Performance. Powering Energy.',
  subheading: 'Oilfield Services & Energy Solutions',
  supportingCopy: 'Professional oilfield and energy-sector services focused on reliability, technical capability and operational excellence.',
  phone: '+234 901 689 2007',
  phoneHref: 'tel:+2349016892007',
  email: 'eric@emcooilfield.com',
  emailHref: 'mailto:eric@emcooilfield.com',
  country: 'Nigeria',
  copyrightYear: 2026,
};

export const IMAGES = {
  hero: heroImg,
  marine: marineImg,
  engineering: engineeringImg,
  facility: facilityImg,
  drillingRig: drillingRigImg,
  pipelineValves: pipelineValvesImg,
  maintenance: maintenanceImg,
  offshoreVessel: offshoreVesselImg,
  wellheadControl: wellheadControlImg,
  engineerInspection: engineerInspectionImg,
  marineTerminal: marineTerminalImg,
};

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Offshore & Marine' | 'Drilling & Wellsite' | 'Technical Engineering' | 'Facility & Integrity';
  image: string;
  location: string;
  scope: string;
}

export const OPERATIONAL_GALLERY: GalleryPhoto[] = [
  {
    id: 'offshore-platform',
    title: 'Offshore Production Facility',
    category: 'Offshore & Marine',
    image: heroImg,
    location: 'Deepwater Marine Operations',
    scope: 'Platform deck integrity, structural inspection and well utility services.',
  },
  {
    id: 'drilling-wellsite',
    title: 'Wellsite Drilling Operations',
    category: 'Drilling & Wellsite',
    image: drillingRigImg,
    location: 'Onshore Exploration Block',
    scope: 'Rig support coordination, mud-system maintenance, and rotary assembly.',
  },
  {
    id: 'offshore-vessel-logistics',
    title: 'Offshore Marine Support Vessel',
    category: 'Offshore & Marine',
    image: offshoreVesselImg,
    location: 'Coastal Operational Channel',
    scope: 'Supply logistics, cargo transport, and emergency operational assistance.',
  },
  {
    id: 'wellhead-manifold',
    title: 'High-Pressure Wellhead Control Manifold',
    category: 'Technical Engineering',
    image: wellheadControlImg,
    location: 'Surface Wellhead Facility',
    scope: 'Flange bolting, valve maintenance, instrumentation testing, and pressure containment.',
  },
  {
    id: 'field-engineer-inspection',
    title: 'Technical Constructability Review',
    category: 'Technical Engineering',
    image: engineerInspectionImg,
    location: 'Processing Facility Deck',
    scope: 'On-site engineering inspection, redline verification, and safety supervision.',
  },
  {
    id: 'marine-terminal-complex',
    title: 'Marine Production Terminal',
    category: 'Facility & Integrity',
    image: marineTerminalImg,
    location: 'Coastal Deepwater Terminal',
    scope: 'Storage manifold maintenance, flowline monitoring, and flare stack upkeep.',
  },
  {
    id: 'pipeline-valves',
    title: 'Flowline Pipeline & Valve Assemblies',
    category: 'Facility & Integrity',
    image: pipelineValvesImg,
    location: 'Midstream Distribution Manifold',
    scope: 'Industrial valve replacement, hydrostatic verification, and corrosion control.',
  },
  {
    id: 'facility-integrity',
    title: 'Industrial Energy Infrastructure',
    category: 'Facility & Integrity',
    image: facilityImg,
    location: 'Industrial Energy Complex',
    scope: 'Turnaround maintenance, mechanical servicing, and operational reliability.',
  },
  {
    id: 'maintenance-servicing',
    title: 'Mechanical Servicing & NDT Diagnostics',
    category: 'Technical Engineering',
    image: maintenanceImg,
    location: 'Field Workshop & Staging Yard',
    scope: 'Preventive component servicing, non-destructive diagnostics, and calibration.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'oilfield-services',
    title: 'Oilfield Services',
    shortDesc: 'Comprehensive operational and field support engineered for upstream, midstream, and downstream production environments.',
    fullDesc: 'EMCO delivers critical field support designed to maximize operational uptime, maintain field integrity, and ensure smooth well and facility operations. Our multidisciplinary approach provides energy operators with responsive, reliable execution across land, swamp, and offshore assets.',
    scope: [
      'Wellsite support and field operational coordination',
      'Production equipment maintenance and servicing',
      'Asset integrity monitoring and field diagnostics',
      'Turnaround and routine shutdown support',
    ],
    deliverables: [
      'Operational uptime assurance',
      'Integrity assurance protocols',
      'Field inspection documentation',
    ],
    operationalFocus: 'Upstream & Midstream Operational Integrity',
  },
  {
    id: 'technical-services',
    title: 'Technical Services',
    shortDesc: 'Specialized technical expertise, diagnostic evaluations, and precision operational interventions for high-consequence energy infrastructure.',
    fullDesc: 'Energy operations require uncompromising technical rigor. EMCO provides technical diagnostics, instrumentation support, non-destructive testing coordination, and routine technical verification to ensure energy assets perform to specified operational parameters.',
    scope: [
      'System diagnostics and technical verification',
      'Instrumentation and flow control support',
      'Mechanical and electrical system servicing',
      'Specialized troubleshooting for field assemblies',
    ],
    deliverables: [
      'Detailed technical diagnostic logs',
      'Calibration and verification logs',
      'Preventive maintenance schedules',
    ],
    operationalFocus: 'Precision Technical Execution',
  },
  {
    id: 'engineering-support',
    title: 'Engineering Support',
    shortDesc: 'Multidisciplinary engineering advisory, technical design review, and field modification support for energy assets.',
    fullDesc: 'From initial project scoping to operational modifications, our engineering support bridges conceptual engineering with practical oilfield realities. We review process schematics, execute constructability analyses, and supervise field implementation with safety and reliability as non-negotiable baselines.',
    scope: [
      'Facility modification and debottlenecking reviews',
      'Piping, mechanical, and structural engineering evaluation',
      'On-site engineering supervision and technical sign-offs',
      'Constructability and field feasibility assessments',
    ],
    deliverables: [
      'Engineering evaluation reports',
      'Redline drawings and as-built validation',
      'Field installation compliance checklists',
    ],
    operationalFocus: 'Safety-Critical Technical Engineering',
  },
  {
    id: 'procurement-supply',
    title: 'Procurement & Supply',
    shortDesc: 'Strategic sourcing, quality verification, and end-to-end supply chain logistics for mission-critical oilfield equipment and materials.',
    fullDesc: 'Supply chain friction creates costly operational downtime. EMCO manages strategic procurement, vendor quality verification, material traceabilities, and delivery logistics for critical industrial spares, valves, pipes, and operational consumables.',
    scope: [
      'OEM equipment and certified spare parts sourcing',
      'Piping, valves, flanges, and structural fittings',
      'Material traceability and mill test verification',
      'Customs clearance coordination and inland logistics',
    ],
    deliverables: [
      'Original Manufacturer Certificates (MTC)',
      'Quality assurance verification documentation',
      'Tracked milestone delivery schedules',
    ],
    operationalFocus: 'Vetted Quality & Supply Reliability',
  },
  {
    id: 'project-support',
    title: 'Project Support',
    shortDesc: 'Integrated project management, operational readiness, resource allocation, and field coordination for energy developments.',
    fullDesc: 'EMCO provides disciplined project management and site logistics to keep energy programs on schedule and within specified risk parameters. We coordinate human capital, heavy machinery, subcontractor interfaces, and progress tracking.',
    scope: [
      'Comprehensive project planning and work-breakdown structures',
      'Contractor and specialist interface management',
      'Milestone tracking and progress reporting',
      'Operational readiness and commissioning support',
    ],
    deliverables: [
      'Periodic progress and risk reports',
      'Readiness review documentation',
      'Handover and close-out documentation',
    ],
    operationalFocus: 'Disciplined Schedule & Risk Control',
  },
  {
    id: 'industrial-support',
    title: 'Industrial Support',
    shortDesc: 'Heavy industrial services, fabrication facilitation, equipment maintenance, and facility auxiliary operations.',
    fullDesc: 'Industrial operations require robust infrastructure and dedicated field crews. EMCO provides industrial plant maintenance, surface preparation, mechanical assembly, scaffolding coordination, and facility upkeep to ensure uninterrupted operational continuity.',
    scope: [
      'Industrial plant and terminal maintenance',
      'Mechanical assembly and structural maintenance',
      'Industrial cleaning and surface protection support',
      'Heavy equipment mobilization and site readiness',
    ],
    deliverables: [
      'Asset maintenance condition reports',
      'Surface and coating inspection sheets',
      'Operational handover sign-offs',
    ],
    operationalFocus: 'Heavy Infrastructure Resilience',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cap-oilfield',
    title: 'Oilfield Services',
    summary: 'Direct field operational support, wellsite intervention coordination, and continuous production facility surveillance.',
    keyAspects: [
      'Wellhead and flowstation maintenance',
      'Field integrity monitoring',
      'Shutdown and turnaround coordination',
    ],
  },
  {
    id: 'cap-engineering',
    title: 'Engineering',
    summary: 'Technical analysis, structural integrity verification, and field modification engineering for complex installations.',
    keyAspects: [
      'Process debottlenecking analysis',
      'Mechanical & structural design checks',
      'Field constructability reviews',
    ],
  },
  {
    id: 'cap-technical',
    title: 'Technical Support',
    summary: 'Precision instrument calibration, diagnostic testing, flow measurement, and control system servicing.',
    keyAspects: [
      'System troubleshooting',
      'Instrumentation alignment',
      'Condition monitoring diagnostics',
    ],
  },
  {
    id: 'cap-procurement',
    title: 'Procurement',
    summary: 'Certified material sourcing, global and local vendor management, and certified delivery to site.',
    keyAspects: [
      'OEM technical specification matching',
      'Quality and traceability verification',
      'Timely logistical dispatch',
    ],
  },
  {
    id: 'cap-project',
    title: 'Project Support',
    summary: 'Resource planning, contractor interfaces, schedule risk mitigation, and operational commissioning.',
    keyAspects: [
      'Integrated project scheduling',
      'Site safety supervision',
      'Commissioning assistance',
    ],
  },
  {
    id: 'cap-industrial',
    title: 'Industrial Operations',
    summary: 'Heavy maintenance, structural repairs, plant operations support, and industrial logistics.',
    keyAspects: [
      'Terminal and plant upkeep',
      'Heavy mechanical servicing',
      'Civil and structural support',
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    desc: 'Upstream exploration, extraction, production facilities, and midstream transport operations across Nigeria’s primary energy basins.',
    focusArea: 'Upstream Wellsite & Midstream Facilities',
    image: IMAGES.facility,
  },
  {
    id: 'energy',
    title: 'Energy',
    desc: 'Thermal power facilities, gas-to-power conduits, and associated energy generation complexes demanding high operational availability.',
    focusArea: 'Generation & Pipeline Infrastructure',
    image: IMAGES.hero,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'Heavy industrial engineering projects requiring multidisciplinary technical oversight, precision fabrication, and installation rigor.',
    focusArea: 'Technical Design & Field Implementation',
    image: IMAGES.engineering,
  },
  {
    id: 'industrial-operations',
    title: 'Industrial Operations',
    desc: 'Continuous manufacturing plants, refineries, petrochemical processing hubs, and large-scale bulk storage terminals.',
    focusArea: 'Refining & Continuous Processing Plants',
    image: IMAGES.facility,
  },
  {
    id: 'marine-offshore',
    title: 'Marine & Offshore',
    desc: 'Offshore platforms, FPSOs, marine terminal facilities, and offshore support vessel coordination in Nigerian territorial waters.',
    focusArea: 'Offshore Assets & Deepwater Logistics',
    image: IMAGES.marine,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    desc: 'Critical energy transport arteries, pipeline rights-of-way, pumping stations, and industrial access networks.',
    focusArea: 'Pipelines, Terminals & Transport Corridors',
    image: IMAGES.engineering,
  },
];

export const HSE_PRINCIPLES: HSEPrinciple[] = [
  {
    id: 'health-safety',
    title: 'Health & Safety',
    description: 'Human life and personnel welfare are paramount. We uphold zero-compromise safety protocols, daily toolbox risk briefings, and personal protective equipment standards across all operational sites.',
    corePillars: [
      'Proactive hazard identification and incident prevention',
      'Mandatory pre-job safety analysis (JSA) for every field task',
      'Empowerment of all personnel with stop-work authority',
      'Continuous occupational health surveillance and emergency response preparedness',
    ],
  },
  {
    id: 'environmental-responsibility',
    title: 'Environmental Responsibility',
    description: 'Protecting the ecological balance in terrestrial, swamp, and marine working environments through responsible containment, waste management, and emissions reduction procedures.',
    corePillars: [
      'Strict containment procedures for industrial fluids and lubricants',
      'Comprehensive waste classification, segregation, and certified disposal',
      'Effluent and run-off monitoring at all operational sites',
      'Minimization of environmental footprint during field mobilizations',
    ],
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Systematic identification, assessment, and mitigation of operational hazards prior to execution, ensuring business and operational continuity.',
    corePillars: [
      'Dynamic operational risk assessment matrices (RAM)',
      'Contingency and emergency response planning',
      'Subcontractor safety verification and qualification',
      'Root-cause analysis and lessons-learned implementation',
    ],
  },
  {
    id: 'operational-standards',
    title: 'Operational Standards',
    description: 'Consistent execution governed by documented standard operating procedures (SOPs), disciplined inspection checklists, and continuous quality audits.',
    corePillars: [
      'Standardized operating procedures across all service divisions',
      'Regular equipment calibration and inspection logs',
      'Clear chain-of-command and operational communication lines',
      'Documented verification at every milestone transition',
    ],
  },
];
