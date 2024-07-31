<template>
  <div class="green_block">
    <svg
      width="617"
      height="845"
      viewBox="0 0 617 845"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_43_862)">
        <path
          d="M370.954 200.611L502.201 644.869L53.6943 538.156L370.954 200.611Z"
          fill="#4BFB7E"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_43_862"
          x="-146.306"
          y="0.610352"
          width="848.506"
          height="844.258"
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
            stdDeviation="100"
            result="effect1_foregroundBlur_43_862"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.green_block {
  animation: blink 4s infinite;
  svg {
    width: 100%;
    height: auto;
  }
}
@keyframes blink {
  50% {
    opacity: 0.2;
  }
}
</style>
