import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Sliders,
  Building2,
  Layers,
  Eye,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Volume2,
  VolumeX,
  Zap,
  Info,
  ChevronRight,
  Home,
  Check
} from 'lucide-react';

interface ApartmentScrollTransformationProps {
  onEnquire?: (service?: string, customNote?: string) => void;
  navigateToView?: (viewId: string) => void;
}

const TOTAL_FRAMES = 239;

// Transformation milestone data
const MILESTONES = [
  {
    phase: '01',
    label: 'Civil Shell',
    sublabel: 'Bare Structure',
    range: [0, 45],
    targetFrame: 0,
    accent: '#10B981',
    headline: 'Raw Concrete Slab & Structural Handover',
    description:
      'Clear-title property possession verified by Tathya Real Estate. Comprehensive 3D laser spatial scan, load-bearing assessment, and preparation of raw structural envelope.',
    specs: [
      { label: 'Super Built-Up Area', value: '2,450 sq.ft' },
      { label: 'Ceiling Clearance', value: '11.2 ft Clear' },
      { label: 'Title Verification', value: '100% Freehold' },
      { label: 'Structural Grade', value: 'M30 Reinforced' }
    ],
    synergy: 'Tathya Real Estate delivers 100% legally vetted, prime-location foundations ready for turnkey development.',
    hotspots: [
      { x: '28%', y: '42%', label: 'Reinforced Column', detail: 'Structural integrity certified to IS 456-2000' },
      { x: '72%', y: '58%', label: 'Open Layout Envelope', detail: 'Unpartitioned space ready for custom architectural planning' }
    ]
  },
  {
    phase: '02',
    label: 'Framing & MEP',
    sublabel: 'Concealed Services',
    range: [46, 95],
    targetFrame: 70,
    accent: '#F59E0B',
    headline: 'Precision Drywall Framing & Mechanical Routing',
    description:
      'High-grade galvanized light gauge steel framing, multi-zone VRV air conditioning refrigerant lines, fire-rated acoustic dampening, and automated electrical conduits.',
    specs: [
      { label: 'Framing Material', value: 'Zinc-Galvanized LGSF' },
      { label: 'Acoustic Rating', value: 'STC 48 Sound Isolation' },
      { label: 'Concealed Piping', value: 'Multilayer Composite' },
      { label: 'Automation Pre-wire', value: 'KNX / Cat6A Bus' }
    ],
    synergy: 'Tathya Construction executes all structural, plumbing, and electrical services with strict engineering rigor.',
    hotspots: [
      { x: '35%', y: '30%', label: 'Concealed VRV Ducts', detail: 'Ducted air circulation with zero visible external piping' },
      { x: '65%', y: '65%', label: 'Steel Stud Framing', detail: 'Laser-leveled acoustic partition framework' }
    ]
  },
  {
    phase: '03',
    label: 'Surfaces & Coves',
    sublabel: 'Flooring & Lights',
    range: [96, 150],
    targetFrame: 120,
    accent: '#3B82F6',
    headline: 'Italian Porcelain Flooring & Recessed Ambient Coves',
    description:
      'Installation of large-format bookmatched porcelain slabs, precision drop-ceiling with plaster-in architectural LED coves, and acoustic double-glazed panoramic windows.',
    specs: [
      { label: 'Flooring Surface', value: '1200×2400mm Porcelain' },
      { label: 'Color Temperature', value: '2700K Warm Ambient' },
      { label: 'Fenestration', value: 'DGU Low-E Glazing' },
      { label: 'Wall Preparation', value: 'Level 5 Skim Coat' }
    ],
    synergy: 'Premium material curation directly sourced for timeless durability and effortless maintenance.',
    hotspots: [
      { x: '48%', y: '78%', label: 'Polished Porcelain', detail: 'Continuous seamless tile with anti-stain micro-grout' },
      { x: '52%', y: '18%', label: 'Architectural Coves', detail: 'Indirect architectural lighting channels with soft diffusion' }
    ]
  },
  {
    phase: '04',
    label: 'Bespoke Joinery',
    sublabel: 'Kitchen & Millwork',
    range: [151, 200],
    targetFrame: 175,
    accent: '#8B5CF6',
    headline: 'Custom Fluted Walnut Millwork & Waterfall Island',
    description:
      'Architectural timber paneling with concealed flush doors, custom monolithic quartz waterfall kitchen island, integrated induction cooktop, and soft-close German hardware.',
    specs: [
      { label: 'Cabinetry Wood', value: 'American Walnut Veneer' },
      { label: 'Island Counter', value: 'Calacatta Engineered Quartz' },
      { label: 'Hardware Mechanism', value: 'Blum Soft-Close' },
      { label: 'Integrated Tech', value: 'Hidden Push-Latch Panels' }
    ],
    synergy: 'Custom in-house design & millwork workshop bringing bespoke artisanal sophistication.',
    hotspots: [
      { x: '68%', y: '50%', label: 'Quartz Island Counter', detail: 'Continuous waterfall edge with seating overhang' },
      { x: '24%', y: '45%', label: 'Fluted Wall Paneling', detail: 'Acoustic fluted walnut paneling concealing smart storage' }
    ]
  },
  {
    phase: '05',
    label: 'Turnkey Luxury',
    sublabel: '100% Ready-To-Move',
    range: [201, 238],
    targetFrame: 238,
    accent: '#EC4899',
    headline: 'Curated Designer Living & White-Glove Handover',
    description:
      'Turnkey luxury handover with bespoke furnishings, sculptural pendant illumination, integrated smart lighting scenes, curated styling, and comprehensive 5-year warranty.',
    specs: [
      { label: 'Handover Status', value: '100% Move-in Ready' },
      { label: 'Furnishing Tier', value: 'Italian Contemporary' },
      { label: 'Smart Home Hub', value: 'Voice & App Automated' },
      { label: 'Warranty & Care', value: '5 Years Comprehensive' }
    ],
    synergy: 'The complete Tathya promise: From plot acquisition to turnkey luxury living, flawlessly united.',
    hotspots: [
      { x: '55%', y: '68%', label: 'Curated Lounge Ensemble', detail: 'Designer bouclé seating and sculptural travertine coffee table' },
      { x: '80%', y: '35%', label: 'Panoramic Cityscape', detail: 'Expansive natural light with motorized sheer drapes' }
    ]
  }
];

export default function ApartmentScrollTransformation({
  onEnquire,
  navigateToView
}: ApartmentScrollTransformationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));

  const [currentFrame, setCurrentFrame] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState<1 | 1.5 | 2>(1);
  const [showHotspots, setShowHotspots] = useState(true);
  const [activeHotspotIndex, setActiveHotspotIndex] = useState<number | null>(null);
  const [isInitialReady, setIsInitialReady] = useState(false);

  // Active milestone based on current frame
  const activeMilestone =
    MILESTONES.find(
      (m) => currentFrame >= m.range[0] && currentFrame <= m.range[1]
    ) || MILESTONES[0];

  // Helper to get formatted frame file name
  const getFrameUrl = (idx: number) => {
    const padded = String(idx).padStart(6, '0');
    return `/transformation-frames/frame_${padded}.webp`;
  };

  // Find nearest available image in cache
  const getNearestLoadedImage = useCallback((targetIndex: number): HTMLImageElement | null => {
    if (imageCache.current[targetIndex]?.complete && imageCache.current[targetIndex]?.naturalWidth) {
      return imageCache.current[targetIndex];
    }
    // Search outward
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && imageCache.current[prev]?.complete && imageCache.current[prev]?.naturalWidth) {
        return imageCache.current[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && imageCache.current[next]?.complete && imageCache.current[next]?.naturalWidth) {
        return imageCache.current[next];
      }
    }
    return null;
  }, []);

  // Draw frame to canvas with aspect-ratio cover
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = getNearestLoadedImage(frameIndex);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = displayWidth / displayHeight;

      let drawWidth = displayWidth;
      let drawHeight = displayHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = displayWidth / imgRatio;
        offsetY = (displayHeight - drawHeight) / 2;
      } else {
        drawWidth = displayHeight * imgRatio;
        offsetX = (displayWidth - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    },
    [getNearestLoadedImage]
  );

  // Progressive Preloading
  useEffect(() => {
    let isCancelled = false;

    // 1. Load frame 0 immediately
    const img0 = new Image();
    img0.src = getFrameUrl(0);
    img0.onload = () => {
      if (isCancelled) return;
      imageCache.current[0] = img0;
      setLoadedCount((prev) => prev + 1);
      setIsInitialReady(true);
      drawFrame(0);
    };

    // 2. Preload milestones first
    const milestoneFrames = [0, 45, 95, 150, 200, 238];
    milestoneFrames.forEach((frameIdx) => {
      if (frameIdx === 0) return;
      const img = new Image();
      img.src = getFrameUrl(frameIdx);
      img.onload = () => {
        if (isCancelled) return;
        imageCache.current[frameIdx] = img;
        setLoadedCount((prev) => prev + 1);
      };
    });

    // 3. Batch load remaining frames progressively
    let queueIndex = 1;
    const loadBatch = () => {
      if (isCancelled || queueIndex >= TOTAL_FRAMES) return;
      const batchSize = 6;
      let completedInBatch = 0;

      for (let i = 0; i < batchSize && queueIndex < TOTAL_FRAMES; i++) {
        const idx = queueIndex++;
        if (imageCache.current[idx]) continue;

        const img = new Image();
        img.src = getFrameUrl(idx);
        img.onload = () => {
          if (isCancelled) return;
          imageCache.current[idx] = img;
          setLoadedCount((prev) => prev + 1);
          completedInBatch++;
          if (completedInBatch === batchSize) {
            setTimeout(loadBatch, 16);
          }
        };
        img.onerror = () => {
          completedInBatch++;
          if (completedInBatch === batchSize) {
            setTimeout(loadBatch, 16);
          }
        };
      }
    };

    const initialTimer = setTimeout(loadBatch, 80);

    return () => {
      isCancelled = true;
      clearTimeout(initialTimer);
    };
  }, [drawFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrame);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame, drawFrame]);

  // Scroll listener for sticky container
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!containerRef.current || isPlaying) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      // When container top reaches top of viewport, scrolled = 0
      // When container bottom reaches bottom of viewport, scrolled = totalScrollable
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      const targetFrame = Math.round(progress * (TOTAL_FRAMES - 1));

      if (targetFrame !== currentFrame) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          setCurrentFrame(targetFrame);
          drawFrame(targetFrame);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [currentFrame, drawFrame, isPlaying]);

  // Autoplay loop
  useEffect(() => {
    if (!isPlaying) return;

    let rafId: number;
    let lastTime = performance.now();
    const fps = 30 * playSpeed;
    const interval = 1000 / fps;

    const loop = (currentTime: number) => {
      const elapsed = currentTime - lastTime;

      if (elapsed >= interval) {
        lastTime = currentTime - (elapsed % interval);
        setCurrentFrame((prev) => {
          const next = prev >= TOTAL_FRAMES - 1 ? 0 : prev + 1;
          drawFrame(next);
          return next;
        });
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying, playSpeed, drawFrame]);

  // Jump to specific frame
  const jumpToFrame = (frame: number) => {
    setIsPlaying(false);
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, frame));
    setCurrentFrame(clamped);
    drawFrame(clamped);

    // Scroll sticky container to match progress
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      const targetY = containerTop + (clamped / (TOTAL_FRAMES - 1)) * totalScrollable;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const progressPercent = Math.round((currentFrame / (TOTAL_FRAMES - 1)) * 100);

  return (
    <section
      ref={containerRef}
      id="transformation-engine"
      className="relative h-[380vh] bg-[#0A0A0C] text-white selection:bg-amber-400 selection:text-black"
    >
      {/* Sticky Fullscreen Scrollytelling Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Background Canvas Layer */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            style={{ touchAction: 'none' }}
          />
          {/* Subtle cinematic vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/75 via-transparent to-black/90" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>

        {/* TOP HUD BAR */}
        <header className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Left: Brand & Engine Tag */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 shrink-0">
                <img
                  src="/logos/brand-realestate.png"
                  alt="Tathya Real Estate & Media"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-editorial font-bold text-sm sm:text-base tracking-wide text-white">
                    TATHYA REAL ESTATE
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    Interactive Engine
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Apartment Transformation Time-Lapse • Scroll to scrub or play
                </p>
              </div>
            </div>

            {/* Right: Active Phase & Status */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: activeMilestone.accent }}
                />
                <span className="text-zinc-400">Phase {activeMilestone.phase}:</span>
                <span className="font-semibold text-white">{activeMilestone.label}</span>
              </div>

              {/* Buffer indicator */}
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-300 flex items-center gap-2">
                <span>{progressPercent}% Transformed</span>
                <span className="hidden sm:inline text-zinc-500">
                  [{currentFrame + 1}/{TOTAL_FRAMES}]
                </span>
              </div>

              {/* Hotspot Toggle */}
              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all ${
                  showHotspots
                    ? 'bg-amber-400/20 border-amber-400/40 text-amber-300'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                }`}
                title="Toggle Architectural Hotspots"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden lg:inline text-[11px] font-medium">Specs</span>
              </button>
            </div>
          </div>
        </header>

        {/* INTERACTIVE HOTSPOTS OVERLAY */}
        {showHotspots && (
          <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 pointer-events-none">
            {activeMilestone.hotspots.map((spot, idx) => (
              <div
                key={idx}
                className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: spot.x, top: spot.y }}
              >
                <button
                  onClick={() =>
                    setActiveHotspotIndex(activeHotspotIndex === idx ? null : idx)
                  }
                  className="relative group p-2 focus:outline-none"
                >
                  <span
                    className="absolute -inset-1 rounded-full animate-ping opacity-60"
                    style={{ backgroundColor: activeMilestone.accent }}
                  />
                  <div
                    className="relative w-7 h-7 rounded-full flex items-center justify-center shadow-lg border border-white text-zinc-950 font-bold text-xs"
                    style={{ backgroundColor: activeMilestone.accent }}
                  >
                    +
                  </div>
                  {/* Tooltip Card */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/20 text-left shadow-2xl transition-all duration-300 ${
                      activeHotspotIndex === idx
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                      Engineering Spec
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">{spot.label}</div>
                    <p className="text-[11px] text-zinc-300 mt-1 leading-relaxed">{spot.detail}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM HUD: DYNAMIC STORY CARD & INTERACTIVE CONTROLS */}
        <footer className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 space-y-3">
          {/* Milestone Story Drawer Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left Story Panel */}
            <div className="lg:col-span-8 p-4 sm:p-5 rounded-3xl bg-black/75 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-950"
                    style={{ backgroundColor: activeMilestone.accent }}
                  >
                    Stage {activeMilestone.phase} of 05
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {activeMilestone.sublabel}
                  </span>
                </div>
                <div className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Odisha Real Estate & Construction Synergized</span>
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeMilestone.headline}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-white/10">
                {activeMilestone.specs.map((spec, i) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider">
                      {spec.label}
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5 truncate">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action / Synergy Callout */}
            <div className="lg:col-span-4 p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-950/80 to-zinc-900/90 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Turnkey Transformation</span>
                </div>
                <h4 className="font-editorial text-lg font-bold text-white mt-1 leading-snug">
                  Want This in Your New Apartment or Plot?
                </h4>
                <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                  {activeMilestone.synergy}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() =>
                    onEnquire?.(
                      'Studio Apartments',
                      `Transformation Inquiry: Phase ${activeMilestone.phase} (${activeMilestone.label})`
                    )
                  }
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#C59B27] hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg"
                >
                  <span>Enquire for Fit-Out</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {navigateToView && (
                  <button
                    onClick={() => navigateToView('construction')}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs font-medium transition-all"
                    title="Explore Tathya Construction Wing"
                  >
                    <Building2 className="w-4 h-4 text-amber-300" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Scrub & Playback Controller */}
          <div className="p-3 sm:p-4 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
            {/* Playback Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 flex items-center justify-center transition-all shadow-lg font-bold"
                title={isPlaying ? 'Pause Transformation' : 'Play Cinematic Time-Lapse'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={() => jumpToFrame(0)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-all"
                title="Reset to Bare Shell (Frame 0)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Speed control */}
              <button
                onClick={() => setPlaySpeed((s) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))}
                className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 text-xs font-mono transition-all"
                title="Playback Speed"
              >
                {playSpeed}x
              </button>
            </div>

            {/* Milestone Quick Jump Buttons */}
            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              {MILESTONES.map((m) => {
                const isActive = activeMilestone.phase === m.phase;
                return (
                  <button
                    key={m.phase}
                    onClick={() => jumpToFrame(m.targetFrame)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white text-zinc-950 shadow-md'
                        : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: m.accent }}
                    />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Slider Scrubber Track */}
            <div className="flex-grow w-full flex items-center gap-3">
              <span className="text-[11px] font-mono text-zinc-400 shrink-0">0%</span>
              <div className="relative flex-grow flex items-center">
                <input
                  type="range"
                  min={0}
                  max={TOTAL_FRAMES - 1}
                  value={currentFrame}
                  onChange={(e) => jumpToFrame(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 accent-amber-400 focus:outline-none"
                />
              </div>
              <span className="text-[11px] font-mono text-amber-300 shrink-0">100%</span>
            </div>

            {/* Before / After Instant Toggle */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => jumpToFrame(0)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                  currentFrame === 0
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => jumpToFrame(TOTAL_FRAMES - 1)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                  currentFrame === TOTAL_FRAMES - 1
                    ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white'
                }`}
              >
                After
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

