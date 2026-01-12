import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function ArrowRoundedIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_40_332)">
        <path
          d="M18.1779 7.27112L17.0615 8.38747L25.8738 17.2096H8.46655V18.7903H25.8738L17.0615 27.6026L18.1779 28.719L27.7805 19.1163L28.8969 18L27.7805 16.8836L18.1779 7.27112Z"
          fill="url(#paint0_linear_40_332)"
        />
        <path
          d="M18 0C8.06147 0 0 8.06147 0 18C0 27.9385 8.06147 36 18 36C27.9385 36 36 27.9385 36 18C36 8.06147 27.9385 0 18 0ZM18 34.3897C8.94072 34.3897 1.60044 27.0494 1.60044 17.9901C1.60044 8.93084 8.94072 1.60044 18 1.60044C27.0593 1.60044 34.3996 8.94072 34.3996 18C34.3996 27.0593 27.0593 34.3996 18 34.3996V34.3897Z"
          fill="url(#paint1_linear_40_332)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_40_332"
          x1="8.46655"
          y1={18}
          x2="28.8969"
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_40_332"
          x1={0}
          y1={0}
          x2={36}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <clipPath id="clip0_40_332">
          <rect width={36} height={36} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRoundedIcon;
