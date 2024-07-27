<template>
  <div class="">
    <svg
      width="1044"
      height="896"
      viewBox="0 0 1044 896"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_201_909)">
        <rect x="556" y="296" width="171.12" height="171.12" fill="#4BFB7E" />
        <circle cx="533" cy="577" r="94" fill="black" />
        <path d="M462.5 180L658.655 519.75H266.345L462.5 180Z" fill="#4BFB7E" />
        <path
          d="M712.08 468.28L854.905 715.66H569.255L712.08 468.28Z"
          fill="#4BFB7E"
        />
      </g>
      <g style="mix-blend-mode: color-dodge" filter="url(#filter1_f_201_909)">
        <rect x="589" y="406" width="171.12" height="171.12" fill="#4BFB7E" />
        <circle cx="394.5" cy="568.5" r="136.5" fill="black" />
        <path d="M287 296L393.521 480.5H180.479L287 296Z" fill="#4BFB7E" />
        <path
          d="M720.92 227L863.745 474.38H578.095L720.92 227Z"
          fill="#4BFB7E"
        />
      </g>
      <g filter="url(#filter2_f_201_909)">
        <circle cx="530" cy="443" r="189" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_f_201_909"
          x="86.3452"
          y="0"
          width="948.56"
          height="895.66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="90"
            result="effect1_foregroundBlur_201_909"
          />
        </filter>
        <filter
          id="filter1_f_201_909"
          x="0.47876"
          y="47"
          width="1043.27"
          height="838"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="90"
            result="effect1_foregroundBlur_201_909"
          />
        </filter>
        <filter
          id="filter2_f_201_909"
          x="291"
          y="204"
          width="478"
          height="478"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25"
            result="effect1_foregroundBlur_201_909"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
  z-index: 0;
  left: -50%;
  max-width: 100%;
  transition: 3s all;
  animation: blink 4s infinite;
  svg {
    width: 200%;
  }
}
@keyframes blink {
  50% {
    opacity: 0.4;
  }
}
</style>
