type Props = {
  className?: string
  /** @type string: tailwind class, default: p-[23px] py-[22px] */
  containerPadding?: string
  /** @type string: tailwind class, default: rounded-[27px] */
  containerRadius?: string
  children: React.ReactNode
}
const IPhone11 = ({
  children,
  className,
  containerPadding='p-[23px] py-[22px]',
  containerRadius='rounded-[27px]'
}:Props) => {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full relative z-10 pointer-events-none" viewBox="0 0 285 568" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_6_42)">
          <g filter="url(#filter0_i_6_42)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M241.836 0H43.1639C19.9783 0 1.18262 18.7957 1.18262 41.9813V525.654C1.18262 548.839 19.9783 567.635 43.1639 567.635H241.836C265.022 567.635 283.818 548.839 283.818 525.654V41.9813C283.818 18.7957 265.022 0 241.836 0ZM20.1037 18.9212H264.896V548.714H20.1037V18.9212Z"
              fill="#272727" />
          </g>
          <g filter="url(#filter1_i_6_42)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M279.087 42.5726C279.087 21.6729 262.145 4.73029 241.245 4.73029H43.7552C22.8554 4.73029 5.91284 21.6729 5.91284 42.5726V525.062C5.91284 545.962 22.8554 562.905 43.7552 562.905H241.245C262.145 562.905 279.087 545.962 279.087 525.062V42.5726ZM88.6929 38.4336C80.8555 38.4336 74.5021 32.0801 74.5021 24.2427V21.2863C74.5021 19.9801 73.4431 18.9212 72.1369 18.9212H43.7552C30.6928 18.9212 20.1037 29.5103 20.1037 42.5726V525.062C20.1037 538.125 30.6928 548.714 43.7552 548.714H241.245C254.307 548.714 264.896 538.125 264.896 525.062V42.5726C264.896 29.5103 254.307 18.9212 241.245 18.9212H212.863C211.557 18.9212 210.498 19.9801 210.498 21.2863V24.2427C210.498 32.0801 204.144 38.4336 196.307 38.4336H88.6929Z"
              fill="#1F1F1F" />
          </g>
          <path
            d="M241.245 4.87811C262.063 4.87811 278.939 21.7545 278.939 42.5726V525.062C278.939 545.88 262.063 562.757 241.245 562.757H43.7552C22.9371 562.757 6.06066 545.88 6.06066 525.062V42.5726C6.06066 21.7545 22.9371 4.87811 43.7552 4.87811H241.245ZM88.6929 38.2858C80.9372 38.2858 74.6499 31.9985 74.6499 24.2427V21.2863C74.6499 19.8984 73.5248 18.7733 72.1369 18.7733H43.7552C30.6112 18.7733 19.9559 29.4286 19.9559 42.5726V525.062C19.9559 538.206 30.6112 548.862 43.7552 548.862H241.245C254.389 548.862 265.044 538.206 265.044 525.062V42.5726C265.044 29.4286 254.389 18.7733 241.245 18.7733H212.863C211.475 18.7733 210.35 19.8984 210.35 21.2863V24.2427C210.35 31.9985 204.063 38.2858 196.307 38.2858H88.6929Z"
            stroke="#3F3F3F" stroke-width="0.295643" />
          <g filter="url(#filter2_ii_6_42)">
            <path
              d="M282.635 135.939C282.635 134.014 282.886 132.098 283.382 130.238V130.238C283.499 129.798 283.898 129.492 284.353 129.492H284.707C284.869 129.492 285 129.623 285 129.785V189.51C285 189.672 284.869 189.803 284.707 189.803H284.353C283.898 189.803 283.499 189.497 283.382 189.056V189.056C282.886 187.197 282.635 185.281 282.635 183.356V135.939Z"
              fill="#1F1F1F" />
          </g>
          <g filter="url(#filter3_ii_6_42)">
            <path
              d="M2.36523 171.553C2.36523 170.193 2.08305 168.847 1.53652 167.602V167.602C1.46523 167.439 1.30456 167.334 1.12709 167.334H0.332704C0.149006 167.334 8.89301e-05 167.483 8.89301e-05 167.667V203.661C8.89301e-05 203.845 0.149006 203.994 0.332704 203.994H1.12708C1.30455 203.994 1.46523 203.889 1.53652 203.726V203.726C2.08305 202.481 2.36523 201.135 2.36523 199.775V171.553Z"
              fill="#1F1F1F" />
          </g>
          <g filter="url(#filter4_ii_6_42)">
            <path
              d="M2.36523 119.52C2.36523 118.16 2.08305 116.814 1.53652 115.568V115.568C1.46523 115.406 1.30456 115.301 1.12709 115.301H0.332704C0.149006 115.301 8.89301e-05 115.45 8.89301e-05 115.633V151.628C8.89301e-05 151.812 0.149006 151.961 0.332704 151.961H1.12708C1.30455 151.961 1.46523 151.856 1.53652 151.693V151.693C2.08305 150.447 2.36523 149.102 2.36523 147.741V119.52Z"
              fill="#1F1F1F" />
          </g>
          <g filter="url(#filter5_ii_6_42)">
            <path
              d="M2.36523 80.5446C2.36523 79.6526 2.04804 78.7896 1.47035 78.11V78.11C1.43789 78.0718 1.39029 78.0498 1.34016 78.0498H0.428531C0.191909 78.0498 8.89301e-05 78.2416 8.89301e-05 78.4782V96.5425C8.89301e-05 96.7791 0.191909 96.971 0.428531 96.971H1.34016C1.39029 96.971 1.43789 96.9489 1.47035 96.9108V96.9108C2.04804 96.2311 2.36523 95.3682 2.36523 94.4762V80.5446Z"
              fill="#1F1F1F" />
          </g>
          <rect x="279.087" y="53.8071" width="4.73029" height="5.91286" fill="#7E818A" />
          <rect x="279.087" y="505.55" width="4.73029" height="5.91286" fill="#7E818A" />
          <rect x="1.18262" y="53.8071" width="4.73029" height="5.91286" fill="#7E818A" />
          <rect x="1.18262" y="505.55" width="4.73029" height="5.91286" fill="#7E818A" />
          <circle cx="170.882" cy="23.0602" r="3.54772" fill="#3F3F3F" stroke="#1B1B1B" stroke-width="1.18257" />
          <rect x="127.866" y="20.8428" width="31.0425" height="4.43465" rx="2.21732" fill="#3F3F3F" stroke="#1B1B1B"
            stroke-width="0.295643" />
        </g>
        <defs>
          <filter id="filter0_i_6_42" x="1.18262" y="0" width="282.635" height="567.635" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="2.36515" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.879152 0 0 0 0 0.879152 0 0 0 0 0.879152 0 0 0 0.56 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
          </filter>
          <filter id="filter1_i_6_42" x="5.91284" y="4.73029" width="273.174" height="559.948"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="1.77386" />
            <feGaussianBlur stdDeviation="2.36515" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
          </filter>
          <filter id="filter2_ii_6_42" x="282.339" y="129.492" width="2.66088" height="60.3112"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dx="-0.295643" />
            <feGaussianBlur stdDeviation="0.295643" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.591286" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_6_42" result="effect2_innerShadow_6_42" />
          </filter>
          <filter id="filter3_ii_6_42" x="0" y="167.334" width="2.66088" height="36.6598" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dx="0.295643" />
            <feGaussianBlur stdDeviation="0.295643" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.591286" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_6_42" result="effect2_innerShadow_6_42" />
          </filter>
          <filter id="filter4_ii_6_42" x="0" y="115.301" width="2.66088" height="36.6598" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dx="0.295643" />
            <feGaussianBlur stdDeviation="0.295643" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.591286" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_6_42" result="effect2_innerShadow_6_42" />
          </filter>
          <filter id="filter5_ii_6_42" x="0" y="78.0498" width="2.66088" height="18.9212" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dx="0.295643" />
            <feGaussianBlur stdDeviation="0.295643" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_42" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.591286" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_6_42" result="effect2_innerShadow_6_42" />
          </filter>
          <clipPath id="clip0_6_42">
            <rect width="285" height="567.635" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className={`absolute inset-0 ${containerPadding}`}>
        <div className={`h-full overflow-hidden ${containerRadius}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default IPhone11