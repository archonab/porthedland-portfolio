
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
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    category: 'Hotel / Hospitality',
    roles: ['Project Management', 'Construction Management'],
    value: '30 Storeys'
  },
  {
    title: '17 Storey Hotel',
    location: 'West Melbourne, VIC',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    category: 'Hospitality',
    roles: ['Design Management', 'PM', 'Technical Coordination'],
    value: '88 Hotel Rooms'
  },
  {
    title: 'Tencent Shenzhen Headquarters',
    location: 'Shenzhen, China',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    category: 'Commercial / HQ',
    roles: ['Project Management', 'Strategic Advisory'],
    value: '3m sqm'
  },
  {
    title: '7-15 Centennial Ave',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$160M'
  },
  {
    title: '594-598 Mowbray Road',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1459767129954-15160431891e?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$105M'
  },
  {
    title: '296-314 Burns Bay Rd',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1448630360428-6545663b5ef5?q=80&w=2070&auto=format&fit=crop',
    category: 'Mixed Use / Retail / High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$98M'
  },
  {
    title: '34-42 Penshurst St',
    location: 'Willoughby, NSW',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$54M'
  },
  {
    title: '1-5 Centennial Ave',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$48M'
  },
  {
    title: '544-550 Mowbray Rd',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Design Management', 'Technical Coordination'],
    value: '$47M'
  },
  {
    title: '81-83 Tram Rd',
    location: 'Doncaster, VIC',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85def82820?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['Development Management', 'PM'],
    value: '$16M'
  },
  {
    title: 'HK International Airport Expansion',
    location: 'Hong Kong',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop',
    category: 'Infrastructure',
    roles: ['Technical Coordination', 'Consultancy'],
    value: 'Expansion'
  },
  {
    title: 'NDIS Portfolio',
    location: 'Various, VIC',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    category: 'Social Infrastructure',
    roles: ['Design Management', 'Construction Management'],
    value: 'SDA Housing'
  },
    {
    title: 'Low-rise multi-unit townhouse Projects',
    location: 'Various - Box Hill, Camberwell, Doncaster East, Dandenong, VIC',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    category: 'Residential',
    roles: ['Design Management', 'PM', 'Construction Management'],
    value: '1m-4m'
  },
  {
    title: 'Childcare Centres',
    location: 'Various - Carlingford, Kellyville, Frenchs Forest, Marsfield, VIC',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    category: 'Childcare',
    roles: ['Design Management'],
    value: '2m-5m'
  },
   {
    title: '22 Birdwood Avenue',
    location: 'Lane Cove, NSW',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    category: 'High Density Residential',
    roles: ['PM'],
    value: '104m'
  },
  {
    title: 'Western Plains Correctional',
    location: 'Lara, VIC',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    category: 'Social Infrastructure',
    roles: ['Consultancy'],
    value: '1244 beds'
  }
];

export const CORE_TEAM: TeamMember[] = [
  {
    name: 'Andre V. Boghessian',
    role: 'Technical and Design Director',
    bio: 'Responsible for technical design coordination and NCC/BCA compliance. Andre ensures the modular package integrates seamlessly with local architectural requirements.',
    image: 'https://storage.googleapis.com/static-content-sh/andre-v-portrait.png',
    qualifications: ['Design & Technical Specialist'],
    focus: 'Technical Governance',
    trackRecord: [
      { title: '7-15 Centennial Ave', detail: '$160M - Mixed Use - Retail and 213 Apartments' },
      { title: '594-598 Mowbray Road', detail: '$105M - 65 Residential Apartments' },
      { title: '296-314 Burns Bay Rd', detail: '$98M - Mixed Use - Retail, Childcare, 107 Residential Apartments' },
      { title: '34-42 Penshurst St', detail: '$74M - Mixed-use coordination' }
    ]
  },
  {
    name: 'David Abbas',
    role: 'Development Director',
    bio: 'Oversees construction methodology and on-site assembly. David manages the critical interface between factory supply chains and site installation crews.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    qualifications: ['Construction & Development Lead'],
    focus: 'Site & Logistics Management',
    trackRecord: [
      { title: 'Melbourne Hotel', detail: '17 Storey Hotel - Design Manager and PM' },
      { title: '81-83 Tram Rd', detail: '$16M - 33 Apartments' },
      { title: 'NDIS SDA Portfolio', detail: 'CM of SDA NDIS High Physical Support Units' }
    ]
  },
  {
    name: 'Wilton Wong',
    role: 'Project Director',
    bio: 'Directly oversees the project delivery lifecycle. Wilton specializes in bridging the distance between offshore modular production and complex Australian site logistics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    qualifications: ['Senior Project Management'],
    focus: 'Core Delivery Oversight',
    trackRecord: [
      { title: 'The Hari Hotel Development', detail: '30 Storey hotel - end to end project management' },
      { title: 'Tencent Shenzhen Headquarters', detail: '3 million sqm mixed-use project - design management and project governance' },
      { title: 'HK International Airport', detail: 'Airport Expansion Project - consultancy team lead' }
    ]
  }
];

export const SUPPORT_TEAM: TeamMember[] = [
  {
    name: 'Eddie Lau',
    role: 'Partner',
    bio: 'Provides high-level strategic alignment and stakeholder management. Eddie ensures that the SIBS partnership is supported by robust planning and capital strategies.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
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
    bio: 'Leads manufacturing and supply chain governance. Prem leverages deep international industrial networks to ensure production meets Australian commercial standards.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop',
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
    title: 'Industrialised Delivery',
    desc: 'Senior advisors with deep international manufacturing networks ensuring precision at scale.',
    icon: Factory
  },
  {
    id: '04',
    title: 'End-to-End Traceability',
    desc: 'Comprehensive evidence registers for every modular system from production to handover.',
    icon: Truck
  }
];
