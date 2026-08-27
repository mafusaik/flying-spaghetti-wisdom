import React, { useEffect, useRef, useState } from 'react';
import meatballImg1 from '../assets/images/space_meatball_texture_1787859048221.jpg';
import meatballImg2 from '../assets/images/space_meatball_sphere_1787859073311.jpg';
import nebulaBgImg from '../assets/images/cosmic_nebula_bg_1787859091004.jpg';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  isFlare?: boolean;
}

interface Meatball {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  depth: number; // 0.3 (far) to 1.0 (near)
  textureType: number; // 0 or 1
  opacity: number;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [meatballCount] = useState<number>(7);
  const [isInteractive] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Preload image assets
    const loadedImages: HTMLImageElement[] = [];
    const imageSources = [meatballImg1, meatballImg2];
    let imagesLoaded = 0;

    imageSources.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded++;
      };
      loadedImages[idx] = img;
    });

    const nebulaImg = new Image();
    let nebulaLoaded = false;
    nebulaImg.src = nebulaBgImg;
    nebulaImg.onload = () => {
      nebulaLoaded = true;
    };

    // Offscreen cached circular sprite canvases
    const spriteCanvases: HTMLCanvasElement[] = [];

    const getMeatballSprite = (type: number, size: number) => {
      const cacheKey = `${type}_${Math.round(size)}`;
      // Prepare crisp circular mask with soft dark edge for each meatball
      const img = loadedImages[type % loadedImages.length];
      if (!img || !img.complete || img.naturalWidth === 0) return null;

      const spriteCanvas = document.createElement('canvas');
      const spriteSize = Math.max(32, Math.round(size * 2));
      spriteCanvas.width = spriteSize;
      spriteCanvas.height = spriteSize;
      const sCtx = spriteCanvas.getContext('2d');
      if (!sCtx) return null;

      const center = spriteSize / 2;
      const r = center * 0.92;

      sCtx.save();
      // Circular clip
      sCtx.beginPath();
      sCtx.arc(center, center, r, 0, Math.PI * 2);
      sCtx.clip();

      // Draw meatball image
      sCtx.drawImage(img, 0, 0, spriteSize, spriteSize);

      // Add rich 3D planetary lighting overlay matching the reference picture
      // 1. Shadow side gradient (dark shading on bottom-right)
      const shadowGrad = sCtx.createRadialGradient(
        center - r * 0.3,
        center - r * 0.3,
        r * 0.2,
        center + r * 0.2,
        center + r * 0.2,
        r * 1.05
      );
      shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      shadowGrad.addColorStop(0.5, 'rgba(30, 5, 2, 0.15)');
      shadowGrad.addColorStop(0.8, 'rgba(15, 2, 0, 0.65)');
      shadowGrad.addColorStop(1, 'rgba(5, 0, 0, 0.92)');
      sCtx.fillStyle = shadowGrad;
      sCtx.beginPath();
      sCtx.arc(center, center, r, 0, Math.PI * 2);
      sCtx.fill();

      // 2. Glossy marinara glint highlight on top-left
      const highlightGrad = sCtx.createRadialGradient(
        center - r * 0.4,
        center - r * 0.4,
        0,
        center - r * 0.4,
        center - r * 0.4,
        r * 0.7
      );
      highlightGrad.addColorStop(0, 'rgba(255, 200, 150, 0.25)');
      highlightGrad.addColorStop(0.4, 'rgba(234, 88, 12, 0.1)');
      highlightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = highlightGrad;
      sCtx.beginPath();
      sCtx.arc(center, center, r, 0, Math.PI * 2);
      sCtx.fill();

      // 3. Subtle edge darkening for spherical contour
      const edgeGrad = sCtx.createRadialGradient(
        center,
        center,
        r * 0.75,
        center,
        center,
        r
      );
      edgeGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      edgeGrad.addColorStop(1, 'rgba(10, 2, 1, 0.75)');
      sCtx.fillStyle = edgeGrad;
      sCtx.beginPath();
      sCtx.arc(center, center, r, 0, Math.PI * 2);
      sCtx.fill();

      sCtx.restore();

      return spriteCanvas;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Initialize stars with prominent cosmic blue flares
    let stars: Star[] = [];
    const initStars = () => {
      stars = [];
      const starDensity = Math.min(180, Math.floor((width * height) / 8000));
      const starColors = ['#ffffff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#fed7aa', '#fef08a'];

      for (let i = 0; i < starDensity; i++) {
        const isFlare = i % 25 === 0;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isFlare ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.4,
          brightness: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: isFlare ? '#93c5fd' : starColors[Math.floor(Math.random() * starColors.length)],
          isFlare,
        });
      }
    };

    initStars();

    // Initialize meatballs with depth distribution matching the reference image layout
    const meatballs: Meatball[] = [];
    const initMeatballs = () => {
      meatballs.length = 0;
      // Pre-set a distribution inspired by the user's picture (huge foreground bottom right, large top left, midground center & upper right, smaller background ones)
      const presets = [
        { xPct: 0.78, yPct: 0.75, radius: 68, depth: 1.0, vx: -0.06, vy: 0.04, textureType: 0 }, // Foreground bottom-right giant
        { xPct: 0.20, yPct: 0.18, radius: 52, depth: 0.88, vx: 0.05, vy: 0.06, textureType: 1 },  // Large top-left
        { xPct: 0.76, yPct: 0.24, radius: 42, depth: 0.75, vx: -0.04, vy: -0.05, textureType: 0 }, // Upper right
        { xPct: 0.48, yPct: 0.44, radius: 36, depth: 0.65, vx: 0.03, vy: -0.04, textureType: 1 },  // Center
        { xPct: 0.83, yPct: 0.56, radius: 26, depth: 0.48, vx: -0.05, vy: 0.05, textureType: 0 },  // Mid-right small
        { xPct: 0.24, yPct: 0.69, radius: 24, depth: 0.42, vx: 0.06, vy: -0.03, textureType: 1 },  // Lower-left small
        { xPct: 0.52, yPct: 0.88, radius: 32, depth: 0.58, vx: -0.03, vy: 0.06, textureType: 0 },  // Bottom-center
      ];

      for (let i = 0; i < presets.length; i++) {
        const p = presets[i];
        meatballs.push({
          x: p.xPct * width,
          y: p.yPct * height,
          radius: p.radius * (width < 640 ? 0.65 : width < 1024 ? 0.85 : 1.0),
          vx: p.vx * 0.4,
          vy: p.vy * 0.4,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.005,
          depth: p.depth,
          textureType: p.textureType,
          opacity: 0.85 + p.depth * 0.15,
        });
      }
    };

    initMeatballs();

    // Fallback procedural renderer if image not loaded yet
    const drawProceduralMeatball = (c: CanvasRenderingContext2D, mb: Meatball) => {
      const r = mb.radius;
      c.save();
      c.translate(mb.x, mb.y);
      c.rotate(mb.rotation);
      c.globalAlpha = mb.opacity;

      // Base rich sienna/red meatball gradient
      const sphereGrad = c.createRadialGradient(
        -r * 0.35,
        -r * 0.35,
        r * 0.1,
        r * 0.2,
        r * 0.2,
        r
      );
      sphereGrad.addColorStop(0, '#c2410c');
      sphereGrad.addColorStop(0.35, '#9a3412');
      sphereGrad.addColorStop(0.7, '#601b08');
      sphereGrad.addColorStop(0.92, '#2d0a03');
      sphereGrad.addColorStop(1, '#150401');

      c.fillStyle = sphereGrad;
      c.beginPath();
      c.arc(0, 0, r, 0, Math.PI * 2);
      c.fill();
      c.restore();
    };

    // Draw meatball with sprite or procedural
    const drawMeatball = (c: CanvasRenderingContext2D, mb: Meatball) => {
      const r = mb.radius;

      // 1. Soft atmospheric halo glow around meatball in cosmos
      const haloGrad = c.createRadialGradient(
        mb.x - r * 0.2,
        mb.y - r * 0.2,
        r * 0.6,
        mb.x,
        mb.y,
        r * 1.55
      );
      haloGrad.addColorStop(0, 'rgba(234, 88, 12, 0.3)');
      haloGrad.addColorStop(0.5, 'rgba(180, 60, 10, 0.08)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      c.fillStyle = haloGrad;
      c.beginPath();
      c.arc(mb.x, mb.y, r * 1.55, 0, Math.PI * 2);
      c.fill();

      // 2. Render textured sprite
      const sprite = getMeatballSprite(mb.textureType, r);
      if (sprite) {
        c.save();
        c.translate(mb.x, mb.y);
        c.rotate(mb.rotation);
        c.globalAlpha = mb.opacity;
        c.drawImage(sprite, -r, -r, r * 2, r * 2);
        c.restore();
      } else {
        drawProceduralMeatball(c, mb);
      }
    };

    // Cosmic Blue Nebula cloud in the center (matching reference picture)
    const drawCosmicNebulae = () => {
      if (nebulaLoaded && nebulaImg.complete && nebulaImg.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = 0.38;
        // Cover-fit nebula image to canvas center
        const hRatio = canvas.width / nebulaImg.naturalWidth;
        const vRatio = canvas.height / nebulaImg.naturalHeight;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - nebulaImg.naturalWidth * ratio) / 2;
        const centerShiftY = (canvas.height - nebulaImg.naturalHeight * ratio) / 2;
        ctx.drawImage(
          nebulaImg,
          0,
          0,
          nebulaImg.naturalWidth,
          nebulaImg.naturalHeight,
          centerShiftX,
          centerShiftY,
          nebulaImg.naturalWidth * ratio,
          nebulaImg.naturalHeight * ratio
        );
        ctx.restore();
      }

      // Central vibrant cyan-blue cosmic cloud
      const cx = width * 0.52;
      const cy = height * 0.44;
      const g1 = ctx.createRadialGradient(
        cx,
        cy,
        20,
        cx,
        cy,
        Math.min(width, height) * 0.55
      );
      g1.addColorStop(0, 'rgba(14, 116, 144, 0.22)');
      g1.addColorStop(0.35, 'rgba(30, 58, 138, 0.18)');
      g1.addColorStop(0.7, 'rgba(15, 23, 42, 0.08)');
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Deep space subtle red/warm dust
      const g2 = ctx.createRadialGradient(
        width * 0.78,
        height * 0.78,
        40,
        width * 0.78,
        height * 0.78,
        Math.min(width, height) * 0.45
      );
      g2.addColorStop(0, 'rgba(154, 52, 18, 0.12)');
      g2.addColorStop(0.5, 'rgba(67, 20, 7, 0.05)');
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    };

    // Draw bright star flare glint
    const drawStarFlare = (c: CanvasRenderingContext2D, s: Star) => {
      const flareSize = s.size * 5;
      c.save();
      c.strokeStyle = 'rgba(186, 230, 253, 0.6)';
      c.lineWidth = 0.75;
      c.beginPath();
      // Horizontal cross
      c.moveTo(s.x - flareSize, s.y);
      c.lineTo(s.x + flareSize, s.y);
      // Vertical cross
      c.moveTo(s.x, s.y - flareSize);
      c.lineTo(s.x, s.y + flareSize);
      c.stroke();
      c.restore();
    };

    // Animation Loop
    let lastTime = performance.now();
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Dark cosmos background
      ctx.fillStyle = '#03050c';
      ctx.fillRect(0, 0, width, height);

      // Render cosmic nebulae
      drawCosmicNebulae();

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinklePhase += s.twinkleSpeed;
        const currentAlpha =
          s.brightness * (0.6 + 0.4 * Math.sin(s.twinklePhase));

        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.isFlare && currentAlpha > 0.6) {
          drawStarFlare(ctx, s);
        }
      }
      ctx.globalAlpha = 1.0;

      // Sort meatballs by depth (background first, foreground on top)
      meatballs.sort((a, b) => a.depth - b.depth);

      // Render and update flying meatballs
      for (let i = 0; i < meatballs.length; i++) {
        const mb = meatballs[i];

        // Motion update
        mb.x += mb.vx * 60 * dt;
        mb.y += mb.vy * 60 * dt;
        mb.rotation += mb.vRot * 60 * dt;

        // Wrap around boundaries smoothly
        const padding = mb.radius * 2 + 50;
        if (mb.x < -padding) mb.x = width + padding;
        if (mb.x > width + padding) mb.x = -padding;
        if (mb.y < -padding) mb.y = height + padding;
        if (mb.y > height + padding) mb.y = -padding;

        drawMeatball(ctx, mb);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Interactive click to push meatballs or summon new ones
    const handleClick = (e: MouseEvent) => {
      if (!isInteractive) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      let hit = false;
      meatballs.forEach((mb) => {
        const dx = mb.x - clickX;
        const dy = mb.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mb.radius * 2) {
          mb.vx += (dx / dist) * 1.2;
          mb.vy += (dy / dist) * 1.2;
          mb.vRot += (Math.random() - 0.5) * 0.04;
          hit = true;
        }
      });

      if (!hit && meatballs.length < 12) {
        const depth = Math.random() * 0.5 + 0.4;
        meatballs.push({
          x: clickX,
          y: clickY,
          radius: (30 + Math.random() * 30) * depth,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.015,
          depth,
          textureType: Math.random() > 0.5 ? 1 : 0,
          opacity: 0.9,
        });
      }
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [meatballCount, isInteractive]);

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        title="Interactive Pastafarian Cosmos (Click anywhere to interact with floating celestial meatballs)"
      />
      {/* Subtle overlay gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050c]/30 via-transparent to-[#03050c]/85 pointer-events-none" />
    </div>
  );
};
