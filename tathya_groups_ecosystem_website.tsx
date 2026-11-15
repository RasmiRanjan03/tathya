import React, { useState, useEffect } from 'react';
import ApartmentScrollTransformation from './src/components/ApartmentScrollTransformation';
import {
  Building2,
  HardHat,
  Film,
  Sparkles,
  CalendarHeart,
  ArrowUpRight,
  ArrowLeft,
  MapPin,
  Phone,
  Globe,
  Instagram,
  CheckCircle2,
  ChevronRight,
  Play,
  Layers,
  ShieldCheck,
  Award,
  Users,
  Compass,
  Home,
  Ruler,
  Clapperboard,
  Camera,
  Music,
  Utensils,
  Car,
  Send,
  X,
  Menu,
  SlidersHorizontal,
  Sparkle,
  Eye,
  Clock,
  Check,
  MessageSquare,
  Star,
  Briefcase,
  HeartHandshake,
  Video
} from 'lucide-react';

// ==========================================
// DATA & CONTENT ARCHITECTURE
// ==========================================

const COMPANY_INFO = {
  legalName: 'Tathya Realestate & Media Pvt. Ltd.',
  brandName: 'TATHYA GROUPS',
  logo: '/logos/brand-realestate.png',
  founder: 'Mr. Niranjan Nayak',
  founderRole: 'Founder & Owner | Entrepreneur',
  taglinePrimary: 'From Premium Properties to Unforgettable Experiences.',
  taglineSecondary: 'Building Dreams. Creating Experiences. Shaping the Future.',
  address: 'Office Unit – 433A, 4th Floor, Esplanade One Mall, Rasulgarh, Bhubaneswar, Odisha – 751010, India.',
  phonePrimary: '+91 63713 04040',
  phoneSecondary: '+91 91246 14040',
  whatsappNumber: '916371304040',
  website: 'www.tathyagroups.com',
  mapsUrl: 'https://maps.google.com/?q=Esplanade+One+Mall+Rasulgarh+Bhubaneswar+Odisha+751010'
};

const DIVISIONS = [
  {
    id: 'real-estate',
    number: '01',
    name: 'Tathya Real Estate',
    shortName: 'Real Estate',
    pillLabel: '01. Buy Prime Land',
    tagline: 'Find Your Space. Invest in Your Future.',
    instagram: '@tathya.realestate.official',
    instagramUrl: 'https://instagram.com/tathya.realestate.official',
    icon: Building2,
    logo: '/logos/brand-realestate.png',
    accentHex: '#10B981',
    themeLabel: 'Sunlit Architectural Minimalism',
    heroDesc: 'Customer-focused property solutions across Bhubaneswar’s fastest-growing corridors—from clear-title residential plots and luxury duplex villas to high-yield investment properties.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    stats: [
      { label: 'Property Segments', value: '7+ Categories' },
      { label: 'Title Verification', value: '100% Clear' },
      { label: 'Prime Hub', value: 'Bhubaneswar & Odisha' }
    ],
    services: [
      'Residential Plots',
      'Premium Plotted Developments',
      'Studio Apartments',
      'Duplex Villas',
      'Residential Properties',
      'Investment Properties',
      'Holiday Homes'
    ],
    whyChoose: [
      'Customer-focused property solutions',
      'Property options for different requirements',
      'Assistance throughout the property selection process',
      'Focus on location and investment potential',
      'Transparent communication'
    ]
  },
  {
    id: 'construction',
    number: '02',
    name: 'Tathya Construction',
    shortName: 'Construction',
    pillLabel: '02. Build Landmark',
    tagline: 'You Dream It. We Build It.',
    instagram: '@tathya_construction',
    instagramUrl: 'https://instagram.com/tathya_construction',
    icon: HardHat,
    logo: '/logos/brand-construction.png',
    accentHex: '#F59E0B',
    themeLabel: 'Architectural Blueprint & Structural Engineering',
    heroDesc: 'End-to-end residential and commercial turnkey construction designed to transform raw visions into high-strength architectural landmarks.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1600&q=85',
    stats: [
      { label: 'Core Capabilities', value: '7 Turnkey Services' },
      { label: 'Engineering Grade', value: 'IS-Code Compliant' },
      { label: 'Execution Model', value: 'Concept to Handover' }
    ],
    services: [
      'Residential Building Construction',
      'Commercial Building Construction',
      'Custom Design & Build',
      'Construction Planning',
      'Structural Development',
      'Renovation & Remodeling',
      'Project Execution & Supervision'
    ],
    whyChoose: [
      'Quality-focused construction',
      'Modern building solutions',
      'Professional project management',
      'Reliable execution',
      'Customer satisfaction'
    ]
  },
  {
    id: 'production',
    number: '03',
    name: 'Tathya Production',
    shortName: 'Production',
    pillLabel: '03. Capture Cinema',
    tagline: 'Stories That Inspire. Visuals That Connect.',
    instagram: '@tathya_production_official',
    instagramUrl: 'https://instagram.com/tathya_production_official',
    icon: Film,
    logo: '/logos/brand-production.png',
    accentHex: '#E11D48',
    themeLabel: 'Cinema & OTT Dark Studio',
    heroDesc: 'Our creative media and film production powerhouse dedicated to bringing stories to life with theatrical cinematography, emotion, and commercial impact.',
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',
    stats: [
      { label: 'Production Format', value: '4K / 8K Cinema RAW' },
      { label: 'Creative Verticals', value: '6 Studio Units' },
      { label: 'Storytelling', value: 'Films & Brand Media' }
    ],
    services: [
      'Film Production',
      'Video Production',
      'Creative Storytelling',
      'Cinematic Content',
      'Media & Entertainment Projects',
      'Promotional Video Production'
    ],
    whyChoose: [
      'Cinema-grade camera & lighting equipment',
      'Concept-to-screen creative direction',
      'High-impact brand & promotional storytelling',
      'Experienced directors, editors & sound designers',
      'Meaningful content that connects with audiences'
    ]
  },
  {
    id: 'narayan-mandap',
    number: '04',
    name: 'Tathya Narayan Mandap',
    shortName: 'Narayan Mandap',
    pillLabel: '04. Host Grand Venue',
    tagline: 'Celebrate Your Special Moments With Us.',
    instagram: '@tathya_narayan_mandap',
    instagramUrl: 'https://instagram.com/tathya_narayan_mandap',
    icon: Sparkles,
    logo: '/logos/brand-mandap.png',
    accentHex: '#D97706',
    themeLabel: 'Royal Heritage Celebration Venue',
    heroDesc: 'A grand, welcoming ceremonial destination where families and communities gather for unforgettable weddings, royal receptions, and sacred milestones.',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85',
    stats: [
      { label: 'Celebration Types', value: '6+ Grand Formats' },
      { label: 'Hospitality Vibe', value: 'Royal & Traditional' },
      { label: 'Flexibility', value: 'Intimate to Grand Scale' }
    ],
    services: [
      'Wedding Ceremonies',
      'Reception Functions',
      'Family Celebrations',
      'Social Gatherings',
      'Cultural Programmes',
      'Special Occasions'
    ],
    whyChoose: [
      'Spacious ceremonial hall & open lawn configurations',
      'Dedicated bridal & family hospitality suites',
      'Seamless catering & decor adaptability',
      'Ample guest parking & prime accessibility',
      'Warm, culturally rooted celebration environment'
    ]
  },
  {
    id: 'events',
    number: '05',
    name: 'Tathya Events',
    shortName: 'Events',
    pillLabel: '05. Plan Royal Event',
    tagline: 'We Plan. We Create. We Celebrate.',
    instagram: '@tathya_events',
    instagramUrl: 'https://instagram.com/tathya_events',
    icon: CalendarHeart,
    logo: '/logos/brand-event.png',
    accentHex: '#EC4899',
    themeLabel: 'High-Energy Experiential & Editorial',
    heroDesc: 'Precision event architecture and experiential design—turning personal milestones, luxury weddings, and corporate galas into seamless spectacles.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
    stats: [
      { label: 'Event Spectrum', value: '7 Bespoke Categories' },
      { label: 'Execution Style', value: '360° Turnkey Planning' },
      { label: 'Detail Focus', value: 'Concept to Curtain Call' }
    ],
    services: [
      'Wedding Events',
      'Corporate Events',
      'Birthday Celebrations',
      'Cultural Events',
      'Social Gatherings',
      'Special Occasions',
      'Private Celebrations'
    ],
    whyChoose: [
      'Bespoke theme conceptualization & stage design',
      'End-to-end vendor & hospitality orchestration',
      'Corporate protocol & VIP guest management',
      'Immersive sound, lighting & floral craftsmanship',
      'Stress-free, punctual execution for hosts'
    ]
  }
];

// Detailed sub-page datasets
const REAL_ESTATE_LISTINGS = [
  {
    id: 1,
    title: 'Tathya Royal Greens Enclave',
    segment: 'Premium Plotted Developments',
    location: 'North Bhubaneswar Growth Corridor',
    size: '1,500 – 4,000 Sq.Ft.',
    highlight: 'Gated Avenue • 40ft Blacktop Roads • Clear Title',
    roiTag: 'High Appreciation Zone',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Tathya Crest Duplex Villas',
    segment: 'Duplex Villas',
    location: 'Hanspal – Rasulgarh Link Belt, Bhubaneswar',
    size: '2,650 Sq.Ft. Built-up (4 BHK)',
    highlight: 'Private Lawn • Double-Height Living • Smart Security',
    roiTag: 'Ready for Customization',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'Esplanade Skyline Studio Suites',
    segment: 'Studio Apartments',
    location: 'Central Bhubaneswar Commercial Zone',
    size: '680 – 920 Sq.Ft.',
    highlight: 'High Rental Yield • Modern Club Amenities',
    roiTag: 'Assured Rental Demand',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    title: 'Tathya Heritage Residential Plots',
    segment: 'Residential Plots',
    location: 'Khordha – Bhubaneswar Smart Ring',
    size: '1,200 – 2,400 Sq.Ft.',
    highlight: 'Immediate Registration • Boundary Wall Ready',
    roiTag: 'Ideal Family Investment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    title: 'Emerald Palms Holiday Retreats',
    segment: 'Holiday Homes',
    location: 'Puri – Konark Marine Drive Corridor',
    size: '1,850 Sq.Ft. Coastal Villa',
    highlight: 'Resort Style Landscaping • Weekend Sanctuary',
    roiTag: 'Lifestyle + Hospitality Asset',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    title: 'Prime Corridor Land Bank',
    segment: 'Investment Properties',
    location: 'NH-16 Expanding Commercial Belt',
    size: '3,000 – 10,000+ Sq.Ft.',
    highlight: 'High Commercial & Institutional Potential',
    roiTag: 'Multi-Bagging Land Asset',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    title: 'Tathya Serene Residency',
    segment: 'Residential Properties',
    location: 'Patia – Trisulia Connector',
    size: '1,450 – 1,980 Sq.Ft. (3 BHK)',
    highlight: 'Vastu Compliant • Cross-Ventilated Architecture',
    roiTag: 'Family Living Standard',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  }
];

const PRODUCTION_PROJECTS = [
  {
    id: 1,
    title: 'Echoes of Kalinga',
    category: 'Film Production',
    format: '4K Cinema Scope • Dolby Atmos',
    duration: 'Feature Narrative',
    synopsis: 'A visually sweeping regional feature production blending emotional storytelling with high-craft cinematography.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Landmarks of Tomorrow – Brand Anthem',
    category: 'Promotional Video Production',
    format: '8K RED RAW • FPV Drone Reel',
    duration: '02:45 Commercial',
    synopsis: 'High-energy architectural and corporate brand film engineered for multi-platform digital campaigns.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'Soul of Celebration – Cinematic Anthology',
    category: 'Cinematic Content',
    format: 'Anamorphic Prime Lenses',
    duration: 'Short Film Series',
    synopsis: 'Capturing human connections, heritage rituals, and unforgettable emotions with theatrical color grading.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    title: 'Rhythm of Odisha – Music & Media Project',
    category: 'Media & Entertainment Projects',
    format: 'Multi-Cam Studio Setup',
    duration: '04:15 Music Video',
    synopsis: 'Vibrant choreography, bespoke studio lighting, and contemporary sound production for mass entertainment.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    title: 'Voices That Matter – Documentary',
    category: 'Creative Storytelling',
    format: '4K Docu-Series',
    duration: '18:00 Episode',
    synopsis: 'Human-first documentary storytelling that inspires communities and builds deep emotional resonance.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    title: 'Corporate Visionaries Showreel',
    category: 'Video Production',
    format: 'Commercial Broadcast Grade',
    duration: '01:50 Showreel',
    synopsis: 'Crisp executive interviews, industrial walkthroughs, and high-conversion digital video assets.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80'
  }
];

const SOCIAL_FEED_POSTS = [
  {
    divisionId: 'real-estate',
    handle: '@tathya.realestate.official',
    caption: 'Prime residential plots and duplex villa opportunities in Bhubaneswar’s fastest-appreciating corridors. Book your site visit today!',
    tag: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    divisionId: 'construction',
    handle: '@tathya_construction',
    caption: 'From soil testing and structural framing to luxury turnkey finishes—You Dream It, We Build It with uncompromising precision.',
    tag: 'Construction',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    divisionId: 'production',
    handle: '@tathya_production_official',
    caption: 'Behind the lens on our latest cinematic schedule. Stories that inspire, visuals that connect with audiences everywhere.',
    tag: 'Production',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80'
  },
  {
    divisionId: 'narayan-mandap',
    handle: '@tathya_narayan_mandap',
    caption: 'Draped in royal marigold and warm chandeliers—Tathya Narayan Mandap is ready to welcome your family’s grandest wedding celebrations.',
    tag: 'Narayan Mandap',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    divisionId: 'events',
    handle: '@tathya_events',
    caption: 'Every floral arch, spotlight cue, and guest experience orchestrated to perfection. We Plan. We Create. We Celebrate.',
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
  }
];

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================

export default function App() {
  // Active View: 'home' | 'real-estate' | 'construction' | 'production' | 'narayan-mandap' | 'events'
  const [activeView, setActiveView] = useState('home');
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [expandedPortal, setExpandedPortal] = useState('real-estate');
  const [socialFilter, setSocialFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global Multi-Intent Enquiry Drawer State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [enquiryDivision, setEnquiryDivision] = useState('real-estate');
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryService, setEnquiryService] = useState('Residential Plots');
  const [enquiryDateOrScale, setEnquiryDateOrScale] = useState('');
  const [enquiryNotes, setEnquiryNotes] = useState('');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // Smooth scroll to top on view switch
  const navigateToView = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    if (viewId !== 'home') {
      setEnquiryDivision(viewId);
      const foundDiv = DIVISIONS.find((d) => d.id === viewId);
      if (foundDiv && foundDiv.services.length > 0) {
        setEnquiryService(foundDiv.services[0]);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Quick Enquiry Drawer pre-filled with specific context
  const openContextualEnquiry = (divisionId, preselectedService = '', customNote = '') => {
    const targetDiv = divisionId || (activeView === 'home' ? 'real-estate' : activeView);
    setEnquiryDivision(targetDiv);
    const divObj = DIVISIONS.find((d) => d.id === targetDiv);
    setEnquiryService(preselectedService || (divObj ? divObj.services[0] : 'General Enquiry'));
    if (customNote) setEnquiryNotes(customNote);
    setEnquirySubmitted(false);
    setDrawerOpen(true);
  };

  // Build WhatsApp URL dynamically
  const handleWhatsAppDispatch = () => {
    const divObj = DIVISIONS.find((d) => d.id === enquiryDivision) || DIVISIONS[0];
    const message = `Hello *Tathya Groups* (${divObj.name}),\n\nI would like to enquire about:\n• *Division:* ${divObj.name}\n• *Requirement:* ${enquiryService}\n• *Name:* ${enquiryName || 'Prospective Client'}\n• *Phone:* ${enquiryPhone || 'Not Provided'}\n${enquiryDateOrScale ? `• *Details/Timeline:* ${enquiryDateOrScale}\n` : ''}${enquiryNotes ? `• *Note:* ${enquiryNotes}\n` : ''}\nPlease connect with me.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-500 selection:text-black antialiased">
      {/* Fonts Injection for Editorial Serif + Sharp Geometric Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans-sharp { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
        .font-mono-blueprint { font-family: 'Space Mono', monospace; }
        .blueprint-grid {
          background-size: 32px 32px;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px);
        }
        .mandap-pattern {
          background-image: radial-gradient(rgba(197, 155, 39, 0.14) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* =========================================================
          PERSISTENT ECOSYSTEM CHAMELEON TOP BAR
      ========================================================= */}
      <div className="bg-[#070709] text-zinc-300 border-b border-white/10 text-xs font-sans-sharp z-50 relative md:sticky md:top-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => navigateToView('home')}
              className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap font-medium text-[11px] sm:text-xs ${
                activeView === 'home'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'hover:text-white text-zinc-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Tathya Groups Hub</span>
            </button>
            <span className="text-zinc-700">|</span>
            {DIVISIONS.map((div) => {
              const Icon = div.icon;
              const isActive = activeView === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => navigateToView(div.id)}
                  className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap text-[11px] sm:text-xs ${
                    isActive
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <img
                    src={div.logo}
                    alt={div.name}
                    className="w-3.5 h-3.5 rounded-full object-cover bg-white"
                  />
                  <span>{div.shortName}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Esplanade One, Bhubaneswar
            </span>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 font-medium text-zinc-200"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              {COMPANY_INFO.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN ADAPTIVE NAVIGATION BAR
      ========================================================= */}
      <header
        className={`sticky top-0 md:top-10 z-40 backdrop-blur-xl transition-colors duration-500 border-b ${
          activeView === 'home' || activeView === 'production' || activeView === 'events'
            ? 'bg-[#0A0A0C]/90 border-white/10 text-white'
            : activeView === 'real-estate'
            ? 'bg-[#FAF9F6]/95 border-emerald-950/10 text-emerald-950'
            : activeView === 'construction'
            ? 'bg-[#F3F4F6]/95 border-slate-300 text-slate-900'
            : 'bg-[#FFFDF9]/95 border-amber-900/15 text-[#4A0E17]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between font-sans-sharp">
          {/* Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            {activeView !== 'home' && (
              <button
                onClick={() => navigateToView('home')}
                className="p-1.5 sm:p-2 rounded-full border border-current/20 hover:scale-105 transition-transform flex items-center justify-center shrink-0"
                title="Back to Tathya Groups Parent Hub"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
            <button onClick={() => navigateToView('home')} className="text-left group flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-[1.5px] sm:p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-md shadow-amber-500/20 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={
                    activeView !== 'home'
                      ? DIVISIONS.find((d) => d.id === activeView)?.logo || '/logos/brand-realestate.png'
                      : '/logos/brand-realestate.png'
                  }
                  alt="Tathya Brand Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-editorial font-bold tracking-wider text-base sm:text-2xl leading-none truncate">
                    TATHYA GROUPS
                  </span>
                  {activeView !== 'home' && (
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-500 border border-amber-500/30 shrink-0">
                      {DIVISIONS.find((d) => d.id === activeView)?.shortName}
                    </span>
                  )}
                </div>
                <p className="text-[10px] sm:text-[11px] opacity-70 tracking-wide mt-0.5 truncate hidden xs:block">
                  Tathya Realestate & Media Pvt. Ltd.
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => navigateToView('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === 'home'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'opacity-75 hover:opacity-100'
              }`}
            >
              Parent Hub
            </button>
            {DIVISIONS.map((div) => (
              <button
                key={div.id}
                onClick={() => navigateToView(div.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeView === div.id
                    ? 'ring-1 ring-current font-semibold opacity-100'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                <span className="text-[10px] font-mono opacity-60">{div.number}</span>
                <span>{div.shortName}</span>
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openContextualEnquiry(activeView === 'home' ? 'real-estate' : activeView)}
              className="px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 shadow-md hover:shadow-amber-500/25 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Quick Enquire</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg border border-current/15"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0A0C] text-white border-b border-white/10 px-4 pt-3 pb-8 space-y-2 font-sans-sharp max-h-[82vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 mb-2">
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-br from-amber-300 to-amber-600 shrink-0">
                <img
                  src="/logos/brand-realestate.png"
                  alt="Tathya Groups"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">TATHYA GROUPS</div>
                <div className="text-[11px] text-zinc-400">Tathya Realestate & Media Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 px-2">
              Select Ecosystem World
            </p>
            <button
              onClick={() => navigateToView('home')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between ${
                activeView === 'home' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-white'
              }`}
            >
              <span>00. Tathya Groups — Corporate Parent Hub</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {DIVISIONS.map((div) => {
                const Icon = div.icon;
                return (
                  <button
                    key={div.id}
                    onClick={() => navigateToView(div.id)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                      activeView === div.id
                        ? 'bg-white text-black border-white font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full p-[1px] bg-gradient-to-br from-amber-300 to-amber-600 shrink-0">
                        <img
                          src={div.logo}
                          alt={div.name}
                          className="w-full h-full object-cover rounded-full bg-white"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{div.name}</div>
                        <div className="text-[11px] opacity-65">{div.tagline}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          CHAMELEON VIEW ROUTER
      ========================================================= */}
      <main className="flex-grow font-sans-sharp">
        {activeView === 'home' && (
          <ParentHomeView
            heroActiveIndex={heroActiveIndex}
            setHeroActiveIndex={setHeroActiveIndex}
            expandedPortal={expandedPortal}
            setExpandedPortal={setExpandedPortal}
            socialFilter={socialFilter}
            setSocialFilter={setSocialFilter}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}

        {activeView === 'real-estate' && (
          <RealEstateChildView
            division={DIVISIONS[0]}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}

        {activeView === 'construction' && (
          <ConstructionChildView
            division={DIVISIONS[1]}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}

        {activeView === 'production' && (
          <ProductionChildView
            division={DIVISIONS[2]}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}

        {activeView === 'narayan-mandap' && (
          <NarayanMandapChildView
            division={DIVISIONS[3]}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}

        {activeView === 'events' && (
          <EventsChildView
            division={DIVISIONS[4]}
            navigateToView={navigateToView}
            openContextualEnquiry={openContextualEnquiry}
          />
        )}
      </main>

      {/* =========================================================
          GLOBAL CORPORATE FOOTER
      ========================================================= */}
      <footer className="bg-[#070709] text-zinc-400 border-t border-white/10 font-sans-sharp">
        {/* Top Ecosystem Switcher Banner inside Footer */}
        <div className="border-b border-white/10 bg-[#0C0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                One Group. Multiple Opportunities. One Vision.
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-1">
                Let’s Build Something Great Together in Odisha.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openContextualEnquiry(activeView === 'home' ? 'real-estate' : activeView)}
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <span>Start an Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all flex items-center gap-2 border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp +91 63713 04040</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 shrink-0">
                <img
                  src="/logos/brand-realestate.png"
                  alt="Tathya Groups Brand Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <div className="font-editorial text-2xl font-bold text-white tracking-wider">
                  TATHYA GROUPS
                </div>
                <div className="text-xs text-zinc-400">{COMPANY_INFO.legalName}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              “{COMPANY_INFO.taglinePrimary}” — A diversified business organization headquartered in
              Bhubaneswar, Odisha, uniting Real Estate, Construction, Film Production, Narayan
              Mandap Hospitality, and Events under one trusted umbrella.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400/90">
              <Award className="w-4 h-4" />
              <span>Leadership: {COMPANY_INFO.founder} (Founder & Owner)</span>
            </div>
          </div>

          {/* Col 2: Our 5 Business Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Our 5 Business Verticals
            </h4>
            <ul className="space-y-2.5 text-sm">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button
                    onClick={() => navigateToView(div.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-2 text-left"
                  >
                    <span className="text-xs font-mono text-zinc-600">{div.number}.</span>
                    <span>{div.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Instagram Handles (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Instagram Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <a
                    href={div.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-zinc-400"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span className="truncate">{div.instagram}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Corporate Headquarters
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300 leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-white hover:text-amber-300 block font-medium">
                    {COMPANY_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="text-zinc-400 hover:text-amber-300 block">
                    {COMPANY_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-zinc-300">{COMPANY_INFO.website}</span>
              </div>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full mt-2 py-2 px-3 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center gap-1.5 font-semibold"
              >
                <span>Open Esplanade One on Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/5 py-6 text-xs text-zinc-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.legalName} (Tathya Groups). All Rights Reserved.
            </p>
            <p className="text-zinc-400 italic font-editorial text-sm">
              “Tathya Groups – Building Beyond Boundaries.”
            </p>
          </div>
        </div>
      </footer>

      {/* =========================================================
          FLOATING SMART ENQUIRY LAUNCHER
      ========================================================= */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        <button
          onClick={() => openContextualEnquiry(activeView === 'home' ? 'real-estate' : activeView)}
          className="group px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-sans-sharp font-bold text-xs sm:text-sm shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all flex items-center gap-2.5 border border-amber-200"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping" />
          <span>All-in-One Enquiry</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* =========================================================
          SLIDE-OVER MULTI-INTENT ENQUIRY DRAWER
      ========================================================= */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn font-sans-sharp">
          <div className="w-full max-w-lg bg-[#0E0E12] text-white h-full overflow-y-auto border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                    Tathya Groups Concierge
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-0.5">
                    One Group. Every Solution.
                  </h3>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Step 1: Select Division Pill */}
              <div className="mt-6">
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2.5">
                  1. Which Tathya Division Can Help You Today?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {DIVISIONS.map((div) => {
                    const Icon = div.icon;
                    const selected = enquiryDivision === div.id;
                    return (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => {
                          setEnquiryDivision(div.id);
                          setEnquiryService(div.services[0]);
                          setEnquirySubmitted(false);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          selected
                            ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-lg'
                            : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2 w-full">
                          <div className="w-6 h-6 rounded-full p-[1px] bg-gradient-to-br from-amber-300 to-amber-600 shrink-0">
                            <img
                              src={div.logo}
                              alt={div.name}
                              className="w-full h-full object-cover rounded-full bg-white"
                            />
                          </div>
                          <Icon className="w-3.5 h-3.5" style={{ color: selected ? '#09090b' : div.accentHex }} />
                        </div>
                        <span className="text-xs leading-tight">{div.shortName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dynamic Service Selector based on Division */}
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    2. Select Specific Service / Segment
                  </label>
                  <select
                    value={enquiryService}
                    onChange={(e) => setEnquiryService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    {DIVISIONS.find((d) => d.id === enquiryDivision)?.services.map((srv) => (
                      <option key={srv} value={srv} className="bg-zinc-900 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5">Your Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Rajesh Mohanty"
                      value={enquiryName}
                      onChange={(e) => setEnquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={enquiryPhone}
                      onChange={(e) => setEnquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Contextual Field that changes per vertical */}
                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5">
                    {enquiryDivision === 'real-estate' && 'Preferred Location / Budget Range in Bhubaneswar'}
                    {enquiryDivision === 'construction' && 'Plot Area (Sq.Ft.) & Location'}
                    {enquiryDivision === 'production' && 'Project Type & Expected Shoot Timeline'}
                    {enquiryDivision === 'narayan-mandap' && 'Preferred Celebration Date & Approx. Guest Count'}
                    {enquiryDivision === 'events' && 'Event Date, Venue & Guest Count'}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      enquiryDivision === 'real-estate'
                        ? 'e.g., Rasulgarh / Patia, 2000 Sq.Ft Plot'
                        : enquiryDivision === 'construction'
                        ? 'e.g., 3,200 Sq.Ft Duplex Construction'
                        : enquiryDivision === 'narayan-mandap'
                        ? 'e.g., 24 Nov 2026 • 600 Guests'
                        : 'Enter key timeline or specifications...'
                    }
                    value={enquiryDateOrScale}
                    onChange={(e) => setEnquiryDateOrScale(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5">Additional Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Share any specific questions for our team..."
                    value={enquiryNotes}
                    onChange={(e) => setEnquiryNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly via WhatsApp (+91 63713 04040)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEnquirySubmitted(true)}
                  className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Log Callback Request at Esplanade One Office</span>
                </button>

                {enquirySubmitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <strong>Priority Callback Registered!</strong> Our specialist from{' '}
                      {DIVISIONS.find((d) => d.id === enquiryDivision)?.name} will contact you shortly, or
                      you can call us right away at <strong>{COMPANY_INFO.phonePrimary}</strong>.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Office Footnote */}
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-zinc-400 space-y-1">
              <div className="text-zinc-200 font-semibold">Corporate Office — Tathya Groups</div>
              <div>{COMPANY_INFO.address}</div>
              <div>Direct Lines: {COMPANY_INFO.phonePrimary} | {COMPANY_INFO.phoneSecondary}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// VIEW 0: PARENT HOMEPAGE (TATHYA GROUPS — EDITORIAL QUIET LUXURY HUB)
// ============================================================================

function ParentHomeView({
  heroActiveIndex,
  setHeroActiveIndex,
  expandedPortal,
  setExpandedPortal,
  socialFilter,
  setSocialFilter,
  navigateToView,
  openContextualEnquiry
}) {
  const activeHeroDivision = DIVISIONS[heroActiveIndex];

  return (
    <div className="bg-[#0A0A0C] text-[#F8F6F0]">
      {/* ---------------------------------------------------------
          1. SPLIT-SCREEN EDITORIAL HERO WITH INTERACTIVE ECOSYSTEM SWITCHER
      --------------------------------------------------------- */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-white/10">
        {/* Dynamic Background Visual with Smooth Crossfade */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeHeroDivision.heroImage}
            alt={activeHeroDivision.name}
            className="w-full h-full object-cover opacity-35 scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/90 to-[#0A0A0C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Conglomerate Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-amber-300 text-xs tracking-widest uppercase">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Odisha’s Premier Multi-Business Conglomerate</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white break-words">
                Five Industries.{' '}
                <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  One Standard
                </span>{' '}
                of Excellence.
              </h1>

              <p className="text-base sm:text-xl text-amber-200/90 font-editorial italic">
                “{COMPANY_INFO.taglinePrimary}” — {COMPANY_INFO.taglineSecondary}
              </p>

              <p className="text-xs sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
                Welcome to <strong>Tathya Groups</strong> ({COMPANY_INFO.legalName}), headquartered at
                Esplanade One, Bhubaneswar. Instead of dealing with disconnected vendors, experience
                one unified ecosystem that helps you <strong>acquire prime land</strong>,{' '}
                <strong>construct iconic buildings</strong>, <strong>host grand mandap weddings</strong>,{' '}
                <strong>orchestrate royal events</strong>, and <strong>produce cinema-grade films</strong>.
              </p>

              {/* Interactive 5-Pillar Magnetic Switcher Pills */}
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                  <span>Click any milestone below to preview our ecosystem:</span>
                </div>
                <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                  {DIVISIONS.map((div, idx) => {
                    const isSelected = idx === heroActiveIndex;
                    return (
                      <button
                        key={div.id}
                        onClick={() => setHeroActiveIndex(idx)}
                        onMouseEnter={() => setHeroActiveIndex(idx)}
                        className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 flex items-center gap-2 border ${
                          isSelected
                            ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                            : 'bg-white/5 text-zinc-300 border-white/15 hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        <span>{div.pillLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => navigateToView(activeHeroDivision.id)}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white text-zinc-950 hover:bg-amber-400 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 shadow-xl"
                >
                  <span>Enter {activeHeroDivision.name} World</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openContextualEnquiry(activeHeroDivision.id)}
                  className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all text-center"
                >
                  Enquire with {activeHeroDivision.shortName}
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Division Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-white/15 overflow-hidden shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activeHeroDivision.heroImage}
                    alt={activeHeroDivision.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-amber-300">
                    DIVISION {activeHeroDivision.number} // {activeHeroDivision.themeLabel}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-amber-300 font-medium">{activeHeroDivision.instagram}</p>
                      <h2 className="font-editorial text-3xl font-bold text-white">
                        {activeHeroDivision.name}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <p className="text-amber-200 font-editorial italic text-lg">
                    “{activeHeroDivision.tagline}”
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {activeHeroDivision.heroDesc}
                  </p>

                  {/* Live Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    {activeHeroDivision.stats.map((st, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white/5">
                        <div className="text-[10px] uppercase text-zinc-400">{st.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{st.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Direct Switch Button */}
                  <button
                    onClick={() => navigateToView(activeHeroDivision.id)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                  >
                    <span>Launch Dedicated {activeHeroDivision.shortName} Experience</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          2. "ALL YOUR DEMANDS, ONE ECOSYSTEM" LIFECYCLE JOURNEY MAP
      --------------------------------------------------------- */}
      <section className="py-20 bg-[#F8F6F0] text-[#0A0A0C] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Why Tathya Is Your Complete Single-Window Solution
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-zinc-950 mt-2">
                Every Milestone of Your Life, Engineered by One Group.
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
              Most customers struggle coordinating five separate agencies for property, construction,
              venues, event decor, and video production. Tathya Groups unites them all under one roof.
            </p>
          </div>

          {/* 5-Step Connected Ecosystem Chain */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {DIVISIONS.map((div, idx) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.id}
                  onClick={() => navigateToView(div.id)}
                  className="group cursor-pointer rounded-2xl bg-white p-6 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div
                    className="h-1.5 w-full absolute top-0 left-0"
                    style={{ backgroundColor: div.accentHex }}
                  />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800">
                        STEP 0{idx + 1}
                      </span>
                      <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-md shrink-0">
                        <img
                          src={div.logo}
                          alt={div.name}
                          className="w-full h-full object-cover rounded-full bg-white"
                        />
                      </div>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-zinc-950 group-hover:text-amber-700 transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 mt-1 italic">
                      “{div.tagline}”
                    </p>
                    <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                      {div.heroDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-amber-700">
                    <span>Open Custom UI</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          3. THE 5 INTERACTIVE EXPANDING VERTICAL PORTAL DOORS
      --------------------------------------------------------- */}
      <section className="py-24 bg-[#0A0A0C] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Interactive Division Portals
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold mt-2">
              Explore Our Five Specialized Worlds
            </h2>
            <p className="text-sm text-zinc-400 mt-3">
              Hover or click any portal below to preview its capabilities, or step inside its dedicated
              purpose-built interface.
            </p>
          </div>

          {/* Horizontal Expanding Accordion Portals */}
          <div className="flex flex-col lg:flex-row gap-3 min-h-[480px]">
            {DIVISIONS.map((div) => {
              const Icon = div.icon;
              const isExpanded = expandedPortal === div.id;
              return (
                <div
                  key={div.id}
                  onMouseEnter={() => setExpandedPortal(div.id)}
                  onClick={() => setExpandedPortal(div.id)}
                  className={`relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col justify-end p-6 sm:p-8 ${
                    isExpanded
                      ? 'lg:flex-[3.2] border-amber-400/50 min-h-[420px]'
                      : 'lg:flex-[1] border-white/10 min-h-[140px] lg:min-h-[420px] opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={div.heroImage}
                    alt={div.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? 'bg-gradient-to-t from-black via-black/75 to-black/25'
                        : 'bg-black/75'
                    }`}
                  />

                  {/* Top Number & Icon */}
                  <div className="relative z-10 flex items-center justify-between mb-auto">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 border border-white/15">
                      {div.number}
                    </span>
                    <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-xl overflow-hidden shrink-0">
                      <img
                        src={div.logo}
                        alt={div.name}
                        className="w-full h-full object-cover rounded-full bg-white"
                      />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 mt-6">
                    <div className="text-[11px] text-amber-300 font-medium mb-1">
                      {div.instagram}
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                      {div.name}
                    </h3>

                    {isExpanded && (
                      <div className="mt-3 space-y-4 animate-fadeIn">
                        <p className="text-amber-200 italic font-editorial text-lg">
                          “{div.tagline}”
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                          {div.heroDesc}
                        </p>

                        {/* Service Tags Preview */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {div.services.slice(0, 5).map((srv) => (
                            <span
                              key={srv}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10"
                            >
                              {srv}
                            </span>
                          ))}
                        </div>

                        <div className="pt-3 flex flex-wrap gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateToView(div.id);
                            }}
                            className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
                          >
                            <span>Enter {div.shortName} Website</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openContextualEnquiry(div.id);
                            }}
                            className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/15"
                          >
                            Quick Enquire
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          4. ASYMMETRIC BENTO GRID: ABOUT US, VISION, MISSION & LEADERSHIP
      --------------------------------------------------------- */}
      <section className="py-24 bg-[#101014] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              About Tathya Groups • Vision, Trust & Excellence
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold mt-2">
              One Group. Multiple Opportunities. One Vision.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bento Box 1: Company Story (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Corporate Profile • Headquartered in Odisha</span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Transforming Ideas into Opportunities, Spaces into Landmarks, and Moments into
                  Unforgettable Experiences.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  <strong>Tathya Groups</strong> (<em>{COMPANY_INFO.legalName}</em>) is a diversified
                  business organization headquartered in Bhubaneswar, Odisha. Founded with an
                  entrepreneurial vision, the group brings together real estate, infrastructure
                  development, construction, media production, and event hospitality under one roof.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Our approach combines professional expertise, creative thinking, and customer-focused
                  solutions—building meaningful relationships and lasting value across every industry
                  we serve.
                </p>
              </div>

              {/* Vision & Mission Dual Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Our Vision
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    To become a trusted and recognized multi-business group by delivering quality,
                    innovation, and excellence across every industry we serve.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">
                    Our Mission
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    To create valuable opportunities, deliver reliable services, and provide
                    exceptional experiences through our diverse business ventures.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Box 2: Founder & Leadership Spotlight (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-amber-500/15 via-zinc-900 to-zinc-950 p-8 sm:p-10 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                    Leadership Spotlight
                  </span>
                  <Award className="w-6 h-6 text-amber-400" />
                </div>

                {/* Founder Avatar / Monogram Crest */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 p-0.5 shadow-xl">
                    <div className="w-full h-full rounded-[14px] bg-zinc-950 flex items-center justify-center font-editorial text-2xl font-bold text-amber-300">
                      NN
                    </div>
                  </div>
                  <div>
                    <h3 className="font-editorial text-3xl font-bold text-white">
                      {COMPANY_INFO.founder}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                      {COMPANY_INFO.founderRole}
                    </p>
                  </div>
                </div>

                <blockquote className="font-editorial italic text-xl text-amber-100/90 border-l-2 border-amber-400 pl-4 py-1">
                  “At Tathya Groups, growth is not limited to one industry. Every project represents
                  an opportunity to build something meaningful for families, investors, and
                  communities.”
                </blockquote>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  An entrepreneur with a vision to build a diversified business organization,{' '}
                  <strong>Mr. Niranjan Nayak</strong> leads Tathya Groups with a focus on business
                  growth, innovation, and creating opportunities across multiple industries. Under his
                  leadership, Tathya Groups continues to expand its footprint across real estate,
                  construction, media, and celebration hospitality in Odisha.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span>Tathya Realestate & Media Pvt. Ltd.</span>
                <span className="text-amber-400 font-semibold">Bhubaneswar, India</span>
              </div>
            </div>

            {/* Bento Row 2: 5 Core Pillars of Why Choose Tathya Groups */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  title: 'Diversified Expertise',
                  desc: 'Our presence across 5 industries allows us to serve property, construction, media, and event needs under one group.',
                  icon: Layers
                },
                {
                  title: 'Customer-Centric Approach',
                  desc: 'We prioritize customer requirements and focus on delivering tailored, high-value solutions.',
                  icon: Users
                },
                {
                  title: 'Quality & Professionalism',
                  desc: 'We maintain uncompromising engineering, creative, and hospitality standards across operations.',
                  icon: ShieldCheck
                },
                {
                  title: 'Innovation & Creativity',
                  desc: 'We continuously explore modern architectural, cinematic, and experiential ideas.',
                  icon: Sparkles
                },
                {
                  title: 'Trust & Relationships',
                  desc: 'We value long-term relationships built through transparent communication, commitment, and service.',
                  icon: HeartHandshake
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all"
                  >
                    <Icon className="w-6 h-6 text-amber-400 mb-3" />
                    <h4 className="font-bold text-base text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          5. LIVE MULTI-HANDLE INSTAGRAM ECOSYSTEM WALL
      --------------------------------------------------------- */}
      <section className="py-20 bg-[#0A0A0C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-pink-400 font-semibold flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>Connected Social Ecosystem</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold mt-1">
                Follow Our 5 Official Business Handles
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSocialFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  socialFilter === 'all'
                    ? 'bg-amber-500 text-black'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                All 5 Handles
              </button>
              {DIVISIONS.map((div) => (
                <button
                  key={div.id}
                  onClick={() => setSocialFilter(div.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    socialFilter === div.id
                      ? 'bg-amber-500 text-black'
                      : 'bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {div.instagram}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOCIAL_FEED_POSTS.filter(
              (post) => socialFilter === 'all' || post.divisionId === socialFilter
            ).map((post, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.handle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 text-[10px] font-semibold text-amber-300">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-pink-400 flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5" />
                      <span className="truncate">{post.handle}</span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-white/5 text-[11px]">
                  <button
                    onClick={() => navigateToView(post.divisionId)}
                    className="text-amber-400 hover:underline font-semibold"
                  >
                    Visit Division Page →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 1: TATHYA REAL ESTATE (/real-estate — WEALTH, LAND & TRUST UI)
// Theme: Warm Ivory (#FAF9F6), Deep Forest Emerald (#0F291E), Gold (#C59B27)
// ============================================================================

function RealEstateChildView({ division, navigateToView, openContextualEnquiry }) {
  const [selectedSegment, setSelectedSegment] = useState('All');

  const segments = ['All', ...division.services];
  const filteredListings =
    selectedSegment === 'All'
      ? REAL_ESTATE_LISTINGS
      : REAL_ESTATE_LISTINGS.filter((item) => item.segment === selectedSegment);

  return (
    <div className="bg-[#FAF9F6] text-[#0F291E] min-h-screen">
      {/* Real Estate Hero */}
      <section className="relative bg-[#0F291E] text-[#FAF9F6] py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={division.heroImage}
            alt={division.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-xl shadow-amber-500/20 shrink-0">
                <img
                  src={division.logo || '/logos/brand-realestate.png'}
                  alt={division.name}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold block truncate">
                  Tathya Realestate & Media Pvt. Ltd.
                </span>
                <span className="text-[11px] sm:text-xs text-emerald-200/80 block truncate">
                  Odisha's Trusted Property & Construction Ecosystem
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>Division 01 • {division.instagram}</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white break-words">
              {division.name}
            </h1>
            <p className="font-editorial italic text-xl sm:text-3xl text-amber-300">
              “{division.tagline}”
            </p>
            <p className="text-xs sm:text-base text-emerald-100/90 leading-relaxed">
              Tathya Real Estate focuses on providing transparent, high-appreciation property solutions
              for individuals, families, and investors across Bhubaneswar and Odisha. Whether you are
              searching for a residential plot, a modern studio apartment, a luxury duplex villa, or a
              holiday home, we guide you at every step.
            </p>
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('transformation-engine');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-950" />
                <span>Experience Apartment Transformation</span>
              </button>
              <button
                onClick={() => openContextualEnquiry('real-estate', 'Residential Plots')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all shadow-lg text-center"
              >
                Schedule a Site Visit / Enquire
              </button>
              <a
                href={division.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 text-amber-300" />
                <span>{division.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          APARTMENT TRANSFORMATION SCROLL ENGINE (TIMELAPSE)
      ======================================================== */}
      <ApartmentScrollTransformation
        onEnquire={(service, note) =>
          openContextualEnquiry('real-estate', service || 'Studio Apartments', note)
        }
        navigateToView={navigateToView}
      />

      {/* Interactive Property Segment Filter & Showcase */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Interactive Portfolio Explorer
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#0F291E] mt-1">
              Explore Our 7 Property Segments
            </h2>
          </div>
          <div className="text-xs text-emerald-900/70 font-medium">
            Showing {filteredListings.length} curated opportunities in Odisha
          </div>
        </div>

        {/* Segment Filter Bar (Horizontal scroll on mobile, wrap on desktop) */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap border-b border-emerald-950/10">
          {segments.map((seg) => (
            <button
              key={seg}
              onClick={() => setSelectedSegment(seg)}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedSegment === seg
                  ? 'bg-[#0F291E] text-amber-300 shadow-md'
                  : 'bg-white text-emerald-950 border border-emerald-950/15 hover:border-emerald-800'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-emerald-950/10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F291E]/90 text-amber-300 text-[11px] font-semibold">
                    {item.segment}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-amber-400 text-zinc-950 text-[10px] font-bold uppercase">
                    {item.roiTag}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#0F291E]">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-900/10">
                    Configuration: {item.size}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.highlight}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() =>
                    openContextualEnquiry(
                      'real-estate',
                      item.segment,
                      `Interested in ${item.title} (${item.location})`
                    )
                  }
                  className="w-full py-3 px-4 rounded-xl bg-[#0F291E] hover:bg-emerald-900 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Enquire / Request Layout</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Tathya Real Estate + Bridge to Construction */}
      <section className="py-16 bg-emerald-950/5 border-t border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              The Tathya Advantage
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F291E]">
              Why Choose Tathya Real Estate?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {division.whyChoose.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-emerald-950/10 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-emerald-950">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem Cross-Sell Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0F291E] text-white space-y-4 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              Next Step in the Tathya Ecosystem
            </span>
            <h4 className="font-editorial text-3xl font-bold">
              Bought Your Plot? Let Tathya Construction Build It.
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Once you select your ideal plot or property with Tathya Real Estate, our in-house
              engineering wing—<strong>Tathya Construction</strong>—handles architectural planning,
              structural framing, and turnkey execution.
            </p>
            <button
              onClick={() => navigateToView('construction')}
              className="px-6 py-3 rounded-full bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-amber-300 transition-all"
            >
              <span>Explore Tathya Construction</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 2: TATHYA CONSTRUCTION (/construction — ARCHITECTURAL BLUEPRINT UI)
// Theme: Concrete Alabaster (#F3F4F6), Slate Charcoal (#0F172A), Safety Amber (#D97706)
// ============================================================================

function ConstructionChildView({ division, navigateToView, openContextualEnquiry }) {
  const [projectType, setProjectType] = useState('Residential Building Construction');
  const [sqFt, setSqFt] = useState(2500);
  const [finishTier, setFinishTier] = useState('Premium Turnkey');

  const rateMap = {
    'Standard Structural': 1650,
    'Premium Turnkey': 2150,
    'Luxury Architectural': 2850
  };
  const estimatedCostLakhs = ((sqFt * rateMap[finishTier]) / 100000).toFixed(2);

  return (
    <div className="bg-[#F3F4F6] text-slate-900 min-h-screen blueprint-grid">
      {/* Construction Hero */}
      <section className="bg-slate-900 text-white py-20 border-b-4 border-amber-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-xl shadow-amber-500/20 shrink-0">
                <img
                  src={division.logo || '/logos/brand-construction.png'}
                  alt={division.name}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                  Tathya Construction
                </span>
                <span className="text-xs text-slate-300">
                  You Dream It. We Build It. • IS-Code Engineering
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono-blueprint text-xs">
              <HardHat className="w-4 h-4" />
              <span>DIVISION 02 // STRUCTURAL & TURNKEY ENGINEERING</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight break-words">
              {division.name}
            </h1>
            <p className="text-xl sm:text-2xl font-editorial italic text-amber-400">“{division.tagline}”</p>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              At Tathya Construction, we believe every great structure begins with a great vision. We
              provide end-to-end construction solutions designed to bring residential and commercial
              projects to life with quality, durability, and professional supervision.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => openContextualEnquiry('construction', projectType)}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg"
              >
                <span>Request Engineering Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={division.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-mono-blueprint flex items-center gap-2 border border-white/15"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span>{division.instagram}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl relative">
              <img
                src={division.heroImage}
                alt={division.name}
                className="w-full h-72 object-cover"
              />
              <div className="bg-slate-950 p-4 font-mono-blueprint text-xs text-amber-400 flex items-center justify-between">
                <span>STATUS: TURNKEY EXECUTION READY</span>
                <span>BHUBANESWAR, ODISHA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Turnkey Project & Area Estimator */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="font-mono-blueprint text-xs uppercase text-amber-600 font-bold">
                // INTERACTIVE BLUEPRINT ESTIMATOR
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Configure Your Construction Scope
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 font-mono-blueprint text-xs text-slate-700">
              Instant Turnkey Roadmap
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Service Type Selector */}
              <div>
                <label className="block text-xs font-mono-blueprint uppercase text-slate-500 mb-2">
                  1. Select Construction Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {division.services.slice(0, 6).map((srv) => (
                    <button
                      key={srv}
                      onClick={() => setProjectType(srv)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        projectType === srv
                          ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Built-up Area Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono-blueprint mb-2">
                  <span className="text-slate-600">2. ESTIMATED BUILT-UP AREA (SQ.FT.)</span>
                  <span className="font-bold text-slate-950 text-sm">
                    {sqFt.toLocaleString()} Sq.Ft.
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={15000}
                  step={250}
                  value={sqFt}
                  onChange={(e) => setSqFt(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono-blueprint text-slate-400 mt-1">
                  <span>1,000 Sq.Ft (Compact Home)</span>
                  <span>7,500 Sq.Ft (Duplex / Villa)</span>
                  <span>15,000 Sq.Ft (Commercial)</span>
                </div>
              </div>

              {/* Specification Grade */}
              <div>
                <label className="block text-xs font-mono-blueprint uppercase text-slate-500 mb-2">
                  3. Execution Specification Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {Object.keys(rateMap).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setFinishTier(tier)}
                      className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                        finishTier === tier
                          ? 'bg-amber-500 text-slate-950 border-amber-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Blueprint Summary Box */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 space-y-5 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono-blueprint text-xs text-amber-400">
                  ESTIMATED PROJECT BRIEF
                </span>
                <Ruler className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Selected Service:</span>
                  <span className="text-white font-semibold">{projectType}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Total Built-Up Area:</span>
                  <span className="text-white font-mono-blueprint">{sqFt.toLocaleString()} Sq.Ft.</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Execution Grade:</span>
                  <span className="text-amber-400 font-semibold">{finishTier}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] uppercase font-mono-blueprint text-slate-400">
                  Indicative Turnkey Budget Estimate
                </div>
                <div className="font-editorial text-4xl font-bold text-amber-400 mt-1">
                  ₹ {estimatedCostLakhs} Lakhs*
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  *Indicative estimate for planning. Final BOQ prepared after architectural blueprint &
                  soil inspection.
                </div>
              </div>

              <button
                onClick={() =>
                  openContextualEnquiry(
                    'construction',
                    projectType,
                    `Blueprint Estimate: ${sqFt} Sq.Ft (${finishTier}) - Approx ₹${estimatedCostLakhs} Lakhs`
                  )
                }
                className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Book Free BOQ & Site Assessment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All 7 Core Construction Services & Commitment */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-editorial text-3xl font-bold text-slate-900 mb-6">
          Our 7 Core Engineering & Construction Capabilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {division.services.map((srv, idx) => (
            <div
              key={srv}
              className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-blueprint text-xs text-amber-600 font-bold">
                  SPEC // 0{idx + 1}
                </span>
                <h4 className="font-bold text-base text-slate-900 mt-2">{srv}</h4>
              </div>
              <button
                onClick={() => openContextualEnquiry('construction', srv)}
                className="mt-4 text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center gap-1"
              >
                <span>Enquire Service</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 3: TATHYA PRODUCTION (/production — CINEMA & OTT DARK STUDIO UI)
// Theme: Pitch Cinema Black (#050507), Spotlight Crimson (#E11D48), Silver
// ============================================================================

function ProductionChildView({ division, openContextualEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeReel, setActiveReel] = useState(PRODUCTION_PROJECTS[0]);

  const categories = ['All', ...division.services];
  const filteredProjects =
    selectedCategory === 'All'
      ? PRODUCTION_PROJECTS
      : PRODUCTION_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#050507] text-white min-h-screen">
      {/* Widescreen 21:9 Cinema Studio Hero */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activeReel.image}
            alt={activeReel.title}
            className="w-full h-full object-cover opacity-30 scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3.5 mb-1">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-rose-400 via-rose-500 to-amber-500 shadow-xl shadow-rose-500/20 shrink-0">
                  <img
                    src={division.logo || '/logos/brand-production.png'}
                    alt={division.name}
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-rose-400 font-bold block">
                    Tathya Production
                  </span>
                  <span className="text-xs text-zinc-300">
                    Stories That Inspire. Visuals That Connect.
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-400 text-xs font-semibold uppercase tracking-widest">
                <Clapperboard className="w-3.5 h-3.5" />
                <span>Division 03 • {division.instagram}</span>
              </div>
              <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-white break-words">
                {division.name}
              </h1>
              <p className="font-editorial italic text-xl sm:text-2xl text-rose-400">“{division.tagline}”</p>
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                Tathya Production is our creative media and film production division, dedicated to
                bringing stories to life through visual creativity and professional production. Every
                story deserves to be presented with creativity, emotion, and cinematic impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <button
                onClick={() => openContextualEnquiry('production', 'Film Production')}
                className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30"
              >
                <Video className="w-4 h-4" />
                <span>Commission a Film / Video Project</span>
              </button>
              <a
                href={division.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm flex items-center gap-2 border border-white/15"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>{division.instagram}</span>
              </a>
            </div>
          </div>

          {/* Interactive 21:9 Director's Monitor Frame */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl">
            <div className="relative h-[300px] sm:h-[420px] overflow-hidden">
              <img
                src={activeReel.image}
                alt={activeReel.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Camera Viewfinder HUD Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                <span className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  REC // {activeReel.format}
                </span>
                <span className="px-2.5 py-1 rounded bg-black/70 border border-white/10">
                  {activeReel.duration}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold">
                    Featured Production Slate • {activeReel.category}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
                    {activeReel.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mt-1">
                    {activeReel.synopsis}
                  </p>
                </div>
                <button
                  onClick={() =>
                    openContextualEnquiry(
                      'production',
                      activeReel.category,
                      `Enquiring about production style similar to "${activeReel.title}"`
                    )
                  }
                  className="px-5 py-3 rounded-full bg-white text-zinc-950 hover:bg-rose-500 hover:text-white font-bold text-xs flex items-center gap-2 transition-all shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Book Crew for This Format</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Creative Areas & Slate Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white'
                  : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveReel(proj)}
              className={`cursor-pointer rounded-2xl bg-zinc-900/90 border overflow-hidden transition-all group ${
                activeReel.id === proj.id
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-rose-400">
                  {proj.category}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="text-[11px] font-mono text-zinc-400">{proj.format}</div>
                <h3 className="font-editorial text-2xl font-bold text-white">{proj.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{proj.synopsis}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 4: TATHYA NARAYAN MANDAP (/narayan-mandap — ROYAL HERITAGE VENUE UI)
// Theme: Royal Silk Cream (#FFFDF9), Sindoor Maroon (#5C1018), Marigold Gold (#C89D28)
// ============================================================================

function NarayanMandapChildView({ division, navigateToView, openContextualEnquiry }) {
  const [occasionType, setOccasionType] = useState('Wedding Ceremonies');
  const [guestScale, setGuestScale] = useState('300 - 700 Guests');
  const [eventDate, setEventDate] = useState('2026-11-28');

  return (
    <div className="bg-[#FFFDF9] text-[#4A0E17] min-h-screen mandap-pattern">
      {/* Royal Ceremonial Hero */}
      <section className="relative bg-[#4A0E17] text-[#FFFDF9] py-20 lg:py-28 border-b-4 border-[#C89D28] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={division.heroImage}
            alt={division.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl flex flex-col items-center">
          <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-2xl mb-4">
            <img
              src={division.logo || '/logos/brand-mandap.png'}
              alt={division.name}
              className="w-full h-full object-cover rounded-full bg-white"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-300/40 text-amber-300 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Division 04 • {division.instagram}</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-4 break-words">
            {division.name}
          </h1>
          <p className="font-editorial italic text-xl sm:text-3xl text-amber-300 mt-2">
            “{division.tagline}”
          </p>
          <p className="text-xs sm:text-base text-amber-100/90 mt-3 sm:mt-4 leading-relaxed">
            Tathya Narayan Mandap is dedicated to providing a welcoming, auspicious venue for
            weddings, receptions, and memorable family occasions. Whether it is an intimate gathering
            or a grand celebration, we make every moment royal.
          </p>
        </div>
      </section>

      {/* Interactive Auspicious Date & Venue Configurator */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="rounded-3xl bg-white border-2 border-[#C89D28] shadow-2xl p-6 sm:p-10">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E2B]">
              Auspicious Muhurat & Venue Availability Checker
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#4A0E17]">
              Plan Your Celebration at Tathya Narayan Mandap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold uppercase text-[#4A0E17]/70 mb-1.5">
                Celebration Category
              </label>
              <select
                value={occasionType}
                onChange={(e) => setOccasionType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-amber-50/70 border border-amber-900/20 text-sm font-semibold text-[#4A0E17]"
              >
                {division.services.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#4A0E17]/70 mb-1.5">
                Preferred Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-amber-50/70 border border-amber-900/20 text-sm font-semibold text-[#4A0E17]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#4A0E17]/70 mb-1.5">
                Expected Guest Capacity
              </label>
              <select
                value={guestScale}
                onChange={(e) => setGuestScale(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-amber-50/70 border border-amber-900/20 text-sm font-semibold text-[#4A0E17]"
              >
                <option>150 - 300 Guests (Intimate)</option>
                <option>300 - 700 Guests (Royal Banquet)</option>
                <option>700 - 1500+ Guests (Full Mandap + Lawn)</option>
              </select>
            </div>

            <button
              onClick={() =>
                openContextualEnquiry(
                  'narayan-mandap',
                  occasionType,
                  `Checking Narayan Mandap availability for ${eventDate} (${guestScale})`
                )
              }
              className="w-full py-3.5 px-5 rounded-xl bg-[#4A0E17] hover:bg-[#691420] text-amber-300 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Check Date & Lock Venue</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Celebration Categories & Royal Amenities */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {division.services.map((srv, idx) => (
            <div
              key={srv}
              className="p-6 rounded-3xl bg-white border border-amber-900/15 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#C89D28] uppercase tracking-widest">
                  Celebration 0{idx + 1}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#4A0E17] mt-1">{srv}</h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Custom mandap stage layouts, auspicious decor themes, and seamless family
                  hospitality tailored for {srv.toLowerCase()}.
                </p>
              </div>
              <button
                onClick={() => openContextualEnquiry('narayan-mandap', srv)}
                className="mt-5 text-xs font-bold text-[#4A0E17] hover:text-[#C89D28] flex items-center gap-1"
              >
                <span>Reserve for {srv}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Cross-Sell to Tathya Events & Tathya Production */}
        <div className="rounded-3xl bg-gradient-to-r from-[#4A0E17] to-[#2D070C] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              Complete Wedding & Celebration Ecosystem
            </span>
            <h3 className="font-editorial text-3xl font-bold">
              Booked Narayan Mandap? Pair It with Tathya Events & Tathya Production.
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80">
              Let <strong>Tathya Events</strong> design your floral stage and guest experience while{' '}
              <strong>Tathya Production</strong> shoots your cinematic wedding film—all coordinated by
              one group.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => navigateToView('events')}
              className="px-5 py-3 rounded-full bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm"
            >
              Explore Tathya Events →
            </button>
            <button
              onClick={() => navigateToView('production')}
              className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-xs sm:text-sm"
            >
              Explore Tathya Production →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 5: TATHYA EVENTS (/events — HIGH-ENERGY EXPERIENTIAL UI)
// Theme: Midnight Indigo (#0D091A), Electric Rose (#F43F5E), Champagne Gold
// ============================================================================

function EventsChildView({ division, openContextualEnquiry }) {
  const [selectedEventCat, setSelectedEventCat] = useState('Wedding Events');
  const [selectedAddons, setSelectedAddons] = useState([
    'Bespoke Stage & Floral Design',
    'Concert Lighting & Sound'
  ]);

  const addonsList = [
    'Bespoke Stage & Floral Design',
    'Concert Lighting & Sound',
    'Luxury Catering & Hospitality',
    'Artist & Celebrity Management',
    'Custom Theme & Entry Concept',
    'VIP Guest Logistics & Security'
  ];

  const toggleAddon = (item) => {
    setSelectedAddons((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="bg-[#0D091A] text-white min-h-screen">
      {/* Events Hero */}
      <section className="relative py-20 lg:py-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={division.heroImage}
            alt={division.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D091A] via-[#0D091A]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-pink-400 via-pink-500 to-amber-400 shadow-xl shadow-pink-500/20 shrink-0">
                <img
                  src={division.logo || '/logos/brand-event.png'}
                  alt={division.name}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-pink-400 font-bold block">
                  Tathya Events
                </span>
                <span className="text-xs text-zinc-300">
                  We Plan. We Create. We Celebrate.
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-semibold uppercase tracking-widest">
              <CalendarHeart className="w-3.5 h-3.5" />
              <span>Division 05 • {division.instagram}</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold break-words">{division.name}</h1>
            <p className="font-editorial italic text-xl sm:text-3xl text-pink-400">
              “{division.tagline}”
            </p>
            <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
              Tathya Events focuses on creating memorable experiences through precision event planning
              and creative management. From grand personal celebrations to high-profile corporate
              gatherings, we bring organization, glamour, and attention to detail to every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive "Build Your Event Brief" Configurator */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#17112B] to-[#0E0A1C] border border-pink-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Interactive Event Brief Designer
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold mt-1">
                  Curate Your Custom Event Experience
                </h2>
              </div>

              {/* Step 1: Event Category */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2.5">
                  1. Choose Your Occasion Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {division.services.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedEventCat(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        selectedEventCat === cat
                          ? 'bg-gradient-to-r from-pink-500 to-amber-500 text-zinc-950 font-bold shadow-lg'
                          : 'bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Bespoke Production Elements */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2.5">
                  2. Select Production & Hospitality Elements
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addonsList.map((addon) => {
                    const active = selectedAddons.includes(addon);
                    return (
                      <button
                        key={addon}
                        onClick={() => toggleAddon(addon)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          active
                            ? 'bg-pink-500/20 border-pink-400 text-white'
                            : 'bg-white/5 border-white/10 text-zinc-400'
                        }`}
                      >
                        <span>{addon}</span>
                        {active && <Check className="w-4 h-4 text-pink-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary & Dispatch */}
            <div className="lg:col-span-5 rounded-2xl bg-black/50 border border-white/10 p-6 sm:p-8 space-y-5">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Your Custom Tathya Event Brief
              </div>
              <div className="space-y-2">
                <div className="text-xs text-zinc-400">Primary Event Category:</div>
                <div className="font-editorial text-3xl font-bold text-white">
                  {selectedEventCat}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-zinc-400">
                  Selected Experience Modules ({selectedAddons.length}):
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAddons.map((a) => (
                    <span
                      key={a}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  openContextualEnquiry(
                    'events',
                    selectedEventCat,
                    `Custom Event Brief with: ${selectedAddons.join(', ')}`
                  )
                }
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-pink-500 to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
              >
                <span>Send Event Brief to Our Planners</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}