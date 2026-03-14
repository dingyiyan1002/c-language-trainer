export const IconSpark = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sparkGradient1" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#4a4a4a"/><stop offset="50%" stop-color="#2a2a2a"/><stop offset="100%" stop-color="#1a1a1a"/>
      </linearGradient>
      <linearGradient id="sparkGradient2" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#6a6a6a"/><stop offset="100%" stop-color="#3a3a3a"/>
      </linearGradient>
    </defs>
    <path d="M32 8 C32 8 34 20 36 26 C38 32 42 34 42 34 C42 34 38 36 36 42 C34 48 32 56 32 56 C32 56 30 48 28 42 C26 36 22 34 22 34 C22 34 26 32 28 26 C30 20 32 8 32 8Z" fill="url(#sparkGradient1)" stroke="#000" stroke-width="1.5"/>
    <path d="M32 16 C32 16 33 24 34 28 C35 32 37 34 37 34 C37 34 35 36 34 40 C33 44 32 48 32 48 C32 48 31 44 30 40 C29 36 27 34 27 34 C27 34 29 32 30 28 C31 24 32 16 32 16Z" fill="url(#sparkGradient2)" opacity="0.6"/>
    <circle cx="42" cy="22" r="2" fill="#5a5a5a"/><circle cx="22" cy="42" r="2" fill="#5a5a5a"/><circle cx="44" cy="34" r="1.5" fill="#5a5a5a"/><circle cx="20" cy="34" r="1.5" fill="#5a5a5a"/>
  </svg>
);

export const IconGraduation = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradCap1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#505050"/><stop offset="50%" stop-color="#303030"/><stop offset="100%" stop-color="#202020"/>
      </linearGradient>
      <linearGradient id="gradCap2" x1="32" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#707070"/><stop offset="100%" stop-color="#404040"/>
      </linearGradient>
    </defs>
    <path d="M32 12 L52 22 L32 32 L12 22 L32 12Z" fill="url(#gradCap1)" stroke="#000" stroke-width="1.5"/>
    <path d="M20 26 L44 26 L44 38 C44 42 40 44 32 44 C24 44 20 42 20 38 L20 26Z" fill="url(#gradCap2)" stroke="#000" stroke-width="1.5"/>
    <circle cx="48" cy="20" r="3" fill="#606060" stroke="#000" stroke-width="1"/><path d="M48 23 L48 32" stroke="#505050" stroke-width="1.5"/><circle cx="48" cy="34" r="2" fill="#505050"/><path d="M24 24 L40 24" stroke="#808080" stroke-width="1" opacity="0.5"/>
  </svg>
);

export const IconTrending = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trendGrad1" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#555555"/><stop offset="100%" stop-color="#252525"/>
      </linearGradient>
    </defs>
    <path d="M12 52 L12 16 L14 16 L14 50 L50 50 L50 52 L12 52Z" fill="#3a3a3a"/>
    <path d="M18 44 L18 28 L28 28 L28 18 L32 14 L36 18 L36 28 L46 28 L46 30 L34 30 L34 42 L32 44 L30 42 L30 30 L20 30 L20 44 L18 44Z" fill="url(#trendGrad1)" stroke="#000" stroke-width="1.5"/>
    <circle cx="22" cy="38" r="2" fill="#606060"/><circle cx="26" cy="34" r="2" fill="#606060"/><circle cx="30" cy="28" r="2" fill="#606060"/><circle cx="38" cy="24" r="2" fill="#606060"/><circle cx="42" cy="22" r="2" fill="#606060"/><path d="M20 26 L26 26" stroke="#808080" stroke-width="1" opacity="0.4"/>
  </svg>
);

export const IconBrain = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGrad1" x1="32" y1="14" x2="32" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#5a5a5a"/><stop offset="100%" stop-color="#2a2a2a"/>
      </linearGradient>
      <linearGradient id="brainGrad2" x1="32" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#707070"/><stop offset="100%" stop-color="#404040"/>
      </linearGradient>
    </defs>
    <path d="M32 14 C24 14 18 20 18 28 C18 32 20 35 22 37 C20 39 18 42 18 46 C18 50 22 54 28 54 C30 54 32 53 32 53 C32 53 34 53 36 53 C42 53 46 50 46 46 C46 42 44 39 42 37 C44 35 46 32 46 28 C46 20 40 14 32 14Z" fill="url(#brainGrad1)" stroke="#000" stroke-width="1.5"/>
    <path d="M24 22 Q26 26 24 30" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/><path d="M22 28 Q26 30 28 28" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/><path d="M24 34 Q26 38 24 42" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/>
    <path d="M40 22 Q38 26 40 30" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/><path d="M42 28 Q38 30 36 28" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/><path d="M40 34 Q38 38 40 42" stroke="url(#brainGrad2)" stroke-width="2" fill="none"/>
    <path d="M32 16 L32 50" stroke="#404040" stroke-width="1.5"/><ellipse cx="26" cy="24" rx="3" ry="2" fill="#808080" opacity="0.4"/><ellipse cx="38" cy="24" rx="3" ry="2" fill="#808080" opacity="0.4"/>
  </svg>
);

export const IconZap = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zapGrad1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#606060"/><stop offset="100%" stop-color="#303030"/>
      </linearGradient>
    </defs>
    <path d="M34 12 L20 34 L28 34 L26 52 L42 28 L34 28 L34 12Z" fill="url(#zapGrad1)" stroke="#000" stroke-width="1.5"/>
    <path d="M32 18 L24 32 L28 32 L27 44 L38 28 L32 28 L32 18Z" fill="#808080" opacity="0.5"/>
    <circle cx="34" cy="10" r="2" fill="#707070"/><circle cx="18" cy="34" r="2" fill="#707070"/><circle cx="26" cy="54" r="2" fill="#707070"/><circle cx="44" cy="28" r="2" fill="#707070"/><path d="M28 22 L30 28" stroke="#909090" stroke-width="1.5" opacity="0.6"/>
  </svg>
);

export const IconCrown = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crownGrad1" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#656565"/><stop offset="100%" stop-color="#353535"/>
      </linearGradient>
      <linearGradient id="crownGrad2" x1="32" y1="24" x2="32" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#757575"/><stop offset="100%" stop-color="#454545"/>
      </linearGradient>
    </defs>
    <path d="M16 24 L16 40 C16 44 20 48 32 48 C44 48 48 44 48 40 L48 24 L40 32 L32 16 L24 32 L16 24Z" fill="url(#crownGrad1)" stroke="#000" stroke-width="1.5"/>
    <path d="M20 28 L20 38 C20 41 23 44 32 44 C41 44 44 41 44 38 L44 28 L38 34 L32 22 L26 34 L20 28Z" fill="url(#crownGrad2)" opacity="0.7"/>
    <circle cx="32" cy="20" r="3" fill="#505050" stroke="#000" stroke-width="1"/><circle cx="24" cy="30" r="2" fill="#505050" stroke="#000" stroke-width="1"/><circle cx="40" cy="30" r="2" fill="#505050" stroke="#000" stroke-width="1"/><path d="M22 26 L42 26" stroke="#858585" stroke-width="1" opacity="0.5"/>
  </svg>
);

export const IconHand = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="handGrad1" x1="32" y1="14" x2="32" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#585858"/><stop offset="100%" stop-color="#282828"/>
      </linearGradient>
    </defs>
    <path d="M24 30 C24 30 22 38 22 42 C22 46 26 50 32 50 C38 50 42 46 42 42 C42 38 40 30 40 30 L40 24 C40 22 38 20 36 20 L36 20 C34 20 32 22 32 24 L32 30 C32 30 30 30 30 28 L30 22 C30 20 28 18 26 18 L26 18 C24 18 22 20 22 22 L22 28 L22 30 Z" fill="url(#handGrad1)" stroke="#000" stroke-width="1.5"/>
    <path d="M26 22 L26 28" stroke="#404040" stroke-width="2"/><path d="M30 24 L30 30" stroke="#404040" stroke-width="2"/><path d="M34 24 L34 30" stroke="#404040" stroke-width="2"/><path d="M38 26 L38 32" stroke="#404040" stroke-width="2"/>
    <path d="M26 36 Q30 38 34 36" stroke="#454545" stroke-width="1.5" fill="none"/><path d="M26 40 Q30 42 34 40" stroke="#454545" stroke-width="1.5" fill="none"/><ellipse cx="32" cy="34" rx="4" ry="3" fill="#787878" opacity="0.4"/>
  </svg>
);

export const IconShield = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#606060"/><stop offset="100%" stop-color="#303030"/>
      </linearGradient>
      <linearGradient id="shieldGrad2" x1="32" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#707070"/><stop offset="100%" stop-color="#404040"/>
      </linearGradient>
    </defs>
    <path d="M32 12 L48 18 L48 32 C48 42 42 50 32 52 C22 50 16 42 16 32 L16 18 L32 12Z" fill="url(#shieldGrad1)" stroke="#000" stroke-width="1.5"/>
    <path d="M32 18 L44 22 L44 32 C44 40 40 46 32 48 C24 46 20 40 20 32 L20 22 L32 18Z" fill="url(#shieldGrad2)" opacity="0.7"/>
    <path d="M26 34 L30 38 L38 30" stroke="#808080" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 20 L46 20" stroke="#505050" stroke-width="1" opacity="0.5"/><path d="M24 24 L40 24" stroke="#858585" stroke-width="1" opacity="0.4"/>
  </svg>
);

export const IconBird = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="birdGrad1" x1="32" y1="18" x2="32" y2="46" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#5a5a5a"/><stop offset="100%" stop-color="#2a2a2a"/>
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="32" rx="14" ry="10" fill="url(#birdGrad1)" stroke="#000" stroke-width="1.5"/>
    <circle cx="42" cy="28" r="6" fill="#505050" stroke="#000" stroke-width="1.5"/>
    <path d="M48 26 L54 28 L48 30 L48 26Z" fill="#454545" stroke="#000" stroke-width="1"/>
    <path d="M26 30 Q32 26 38 30 Q32 34 26 30Z" fill="#656565" stroke="#000" stroke-width="1"/>
    <path d="M18 32 L12 28 L12 36 L18 32Z" fill="#4a4a4a" stroke="#000" stroke-width="1"/>
    <circle cx="44" cy="27" r="1.5" fill="#202020"/><circle cx="44.5" cy="26.5" r="0.5" fill="#ffffff"/><path d="M22 36 Q28 40 36 38" stroke="#707070" stroke-width="1.5" fill="none" opacity="0.6"/>
  </svg>
);

export const IconCpu = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cpuGrad1" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#5c5c5c"/><stop offset="100%" stop-color="#2c2c2c"/>
      </linearGradient>
      <linearGradient id="cpuGrad2" x1="32" y1="22" x2="32" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#727272"/><stop offset="100%" stop-color="#424242"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="24" height="24" rx="2" fill="url(#cpuGrad1)" stroke="#000" stroke-width="1.5"/>
    <rect x="24" y="24" width="16" height="16" rx="1" fill="url(#cpuGrad2)" opacity="0.8"/>
    <path d="M28 28 L28 32 L32 32" stroke="#808080" stroke-width="1.5"/><path d="M36 28 L36 32 L32 32" stroke="#808080" stroke-width="1.5"/><path d="M28 36 L28 32 L32 32" stroke="#808080" stroke-width="1.5"/><path d="M36 36 L36 32 L32 32" stroke="#808080" stroke-width="1.5"/>
    <circle cx="32" cy="32" r="2" fill="#909090"/>
    <rect x="30" y="14" width="4" height="4" fill="#505050" stroke="#000" stroke-width="1"/><rect x="30" y="46" width="4" height="4" fill="#505050" stroke="#000" stroke-width="1"/><rect x="14" y="30" width="4" height="4" fill="#505050" stroke="#000" stroke-width="1"/><rect x="46" y="30" width="4" height="4" fill="#505050" stroke="#000" stroke-width="1"/>
    <path d="M22 22 L42 22" stroke="#858585" stroke-width="1" opacity="0.4"/>
  </svg>
);

export const IconCode2 = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="codeGrad1" x1="32" y1="14" x2="32" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#5e5e5e"/><stop offset="100%" stop-color="#2e2e2e"/>
      </linearGradient>
    </defs>
    <path d="M28 20 L18 32 L28 44" fill="none" stroke="url(#codeGrad1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36 20 L46 32 L36 44" fill="none" stroke="url(#codeGrad1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="2" fill="#606060"/>
    <path d="M22 26 L26 26" stroke="#707070" stroke-width="2" stroke-linecap="round"/><path d="M38 38 L42 38" stroke="#707070" stroke-width="2" stroke-linecap="round"/>
    <rect x="14" y="14" width="36" height="36" rx="4" stroke="#505050" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
    <path d="M20 30 L24 32" stroke="#858585" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><path d="M44 30 L40 32" stroke="#858585" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </svg>
);
