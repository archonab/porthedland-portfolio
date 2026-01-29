import { LayoutGrid, ShieldCheck, Factory, Truck } from 'lucide-react';
import { ProjectItem, TeamMember, CapabilityItem } from './types';

export const PROPOSAL_PROJECT = {
  title: "Port Hedland Hotel",
  client: "SIBS",
  status: "Proposal Stage",
  focus: "Modular Supply & QA Governance",
  image: "https://images.unsplash.com/photo-1590374585152-ca0e810a9974?q=80&w=2070&auto=format&fit=crop"
};

export const PROJECTS: ProjectItem[] = [
  // Major Developments
  {
    title: 'The Hari Hotel Development',
    location: 'Wan Chai, Hong Kong',
    image: '/assets/hari.jpg',
    category: 'Hotel / Hospitality',
    roles: ['Project Management', 'Construction Management'],
    value: '30 Storeys'
  },
  {
    title: '17 Storey Hotel',
    location: 'West Melbourne, VIC',
    image: '/assets/wmel.jpg',
    category: 'Hospitality',
    roles: ['Design Management', 'PM', 'Technical Coordination'],
    value: '88 Hotel Rooms'
  },
  {
    title: 'Tencent Shenzhen Headquarters',
    location: 'Shenzhen, China',
    image: '/assets/tencent.jpg',
    category: 'Commercial / HQ',
    roles: ['Project Management', 'Technical Coordination'],
    value: '3m sqm'
  },
  {
    title: '7-15 Centennial Ave',
    location: 'Lane Cove, NSW',
    image: '/assets/7centennial.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$160M'
  },
  {
    title: '594-598 Mowbray Road',
    location: 'Lane Cove, NSW',
    image: '/assets/594mowbray.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$105M'
  },
  {
    title: '76-82 Gordon Crescent',
    location: 'Lane Cove, NSW',
    image: '/assets/gordon.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$24M'
  },
  {
    title: '34-42 Penshurst St',
    location: 'Willoughby, NSW',
    image: '/assets/34penshurst.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$54M'
  },
  {
    title: '1-5 Centennial Ave',
    location: 'Lane Cove, NSW',
    image: '/assets/1centennial.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$48M'
  },
  {
    title: '544-550 Mowbray Rd',
    location: 'Lane Cove, NSW',
    image: '/assets/550mowbray.jpg',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$47M'
  },
  {
    title: '81-83 Tram Rd',
    location: 'Doncaster, VIC',
    image: '/assets/doncaster.jpg',
    category: 'High Density Residential',
    roles: ['Development Management', 'PM'],
    value: '$16M'
  },
  {
    title: 'HK International Airport Expansion',
    location: 'Hong Kong',
    image: '/assets/hk-airport.jpg',
    category: 'Infrastructure',
    roles: ['Technical Coordination', 'Consultancy'],
    value: 'Expansion'
  },
  {
    title: 'NDIS Portfolio',
    location: 'Various, VIC',
    image: '/assets/sda.jpg',
    category: 'Social Infrastructure',
    roles: ['Design Management', 'Construction Management'],
    value: 'SDA Housing'
  },
  {
    title: 'Low-rise multi-unit townhouse Projects',
    location: 'Various - Box Hill, Camberwell, Doncaster East, Dandenong, VIC',
    image: '/assets/townhouse.jpg',
    category: 'Residential',
    roles: ['Design Management', 'PM', 'Construction Management'],
    value: '1m-4m'
  },
  {
    title: 'Childcare Centres',
    location: 'Various - Carlingford, Kellyville, Frenchs Forest, Marsfield, VIC',
    image: '/assets/childcare.jpg',
    category: 'Childcare',
    roles: ['Design Management', 'Technical Coordination'],
    value: '2m-5m'
  },
  {
    title: '22 Birdwood Avenue',
    location: 'Lane Cove, NSW',
    image: '/assets/birdwood.jpg',
    category: 'High Density Residential',
    roles: ['PM', 'Construction Management'],
    value: '104m'
  },
  {
    title: 'Western Plains Correctional',
    location: 'Lara, VIC',
    image: '/assets/lara.jpg',
    category: 'Social Infrastructure',
    roles: ['PM', 'Consultancy'],
    value: '1244 beds'
  }
];

export const CORE_TEAM: TeamMember[] = [
  {
    name: 'Andre V. Boghessian',
    role: 'Technical and Design Director',
    bio: 'Leads technical coordination for the modular scope and supports the project’s code pathway through structured reviews and clear documentation. Focused on defining modular boundaries, resolving interfaces with the consultant team, and ensuring the evidence required for sign-off and acceptance is available and well-organised.',
    image: '/assets/andre.jpg',
    qualifications: ['Design & Technical Specialist'],
    focus: 'Technical Governance',
    trackRecord: [
      { title: '7-15 Centennial Ave', detail: '$160M - Mixed Use - Retail and 213 Apartments' },
      { title: '594-598 Mowbray Road', detail: '$105M - 65 Residential Apartments' },
      { title: '296-314 Burns Bay Rd', detail: '$98M - Mixed Use - Retail, Childcare, 107 Residential Apartments' },
      { title: '34-42 Penshurst St', detail: '$74M - Mixed-use coordination' },
      { title: '22 Birdwood Avenue', detail: '$109M - 212 Apartments' }
    ]
  },
  {
    name: 'David Abbas',
    role: 'Development Director',
    bio: 'Acts as the Australian delivery interface for the modular scope—aligning stakeholders, staging, and information flow between SIBS, the consultant team, and the onshore delivery parties. Focused on practical delivery planning, interface coordination, and keeping approvals/evidence requirements visible early to avoid downstream rework',
    image: '/assets/david.jpg',
    qualifications: ['Construction & Development Lead'],
    focus: 'Site & Logistics Management',
    trackRecord: [
      { title: 'Melbourne Hotel', detail: '17 Storey Hotel - Design Manager and PM' },
      { title: '81-83 Tram Rd', detail: '$16M - 33 Apartments' },
      { title: 'Low Rise Residential Portfolio', detail: 'Doncaster East, Box Hill, Camberwell, Balwyn - Design and CM' },
      { title: 'NDIS SDA Portfolio', detail: 'CM of SDA NDIS High Physical Support Units' }
    ]
  },
  {
    name: 'Wilton Wong',
    role: 'Project Director',
    bio: 'Senior development and project management leader with extensive cross-border delivery experience across hospitality, mixed-use and institutional projects. Brings strong governance, procurement and risk discipline—helping keep scope boundaries clear, evidence complete, and acceptance outcomes commercially robust.',
    image: '/assets/wilton.jpg',
    qualifications: ['Senior Project Management'],
    focus: 'Core Delivery Oversight',
    trackRecord: [
      { title: 'The Hari Hotel Development', detail: '30 Storey hotel - end to end project management' },
      { title: 'Tencent Shenzhen Headquarters', detail: '3 million sqm mixed-use project - design management and project governance' },
      { title: 'Federation Tower, Melbourne', detail: 'Mixed Use Tower 88 Flinders Street, Melbourne - design management' },
      { title: 'West Kowloon Cultural District', detail: 'technical feasibility of project & new tunnel connection to MTR subway station' },
      { title: 'HK International Airport', detail: 'Airport Expansion Project - consultancy team lead' }
    ]
  }
];

export const SUPPORT_TEAM: TeamMember[] = [
  {
    name: 'Eddie Lau',
    role: 'Partner',
    bio: 'With over 20 years in property development and project delivery, Eddie supports cross-discipline coordination and stakeholder alignment across complex projects. For modular engagements, he focuses on practical delivery planning, interface coordination, and keeping decisions and close-out actions moving across the consultant team and onshore delivery parties.',
    image: '/assets/eddie.jpg',
    qualifications: ['Strategy & Stakeholder Management'],
    focus: 'Strategic Support',
    trackRecord: [
      { title: 'Asset Strategy', detail: 'Portfolio enablement' },
      { title: 'Modular Governance', detail: 'Cross-border framework lead' }
    ]
  },
  {
    name: 'Premshangar Venugopal',
    role: 'Partner',
    bio: 'Prem supports Stanley Hamilton’s modular and capital strategy, helping align offshore manufacturing capability, delivery structure, and commercial governance into a clear execution pathway. He brings strong discipline in governance, procurement and stakeholder alignment—particularly across cross-border delivery contexts.',
    image: '/assets/prem.jpg',
    qualifications: ['Industrial Strategy Expert'],
    focus: 'Supply Chain Governance',
    trackRecord: [
      { title: 'Industrialised Construction', detail: 'Manufacturing network lead' },
      { title: 'Capital Frameworks', detail: 'Institutional investment lead' }
    ]
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: '01',
    title: 'QA Framework Alignment',
    desc: 'Aligning SIBS existing quality systems with Australian certifier and consultant expectations.',
    icon: ShieldCheck
  },
  {
    id: '02',
    title: 'Modular Boundary Control',
    desc: 'Defining clear handover points between factory supply and site installation to eliminate risk gaps.',
    icon: LayoutGrid
  },
  {
    id: '03',
    title:'End-to-End Traceability',
    desc: 'Comprehensive evidence registers for every modular system from production to handover.',
    icon: Factory
  },
  {
    id: '04',
    title: 'Delivery governance',
    desc: 'Operate the registers through factory, shipment and installation (as agreed) to support acceptance and close-out.',
    icon: Truck
  }
];