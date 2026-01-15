import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_40_380)">
        <path
          d="M14.2584 0L12.6236 1.55777L25.5612 13.8961H0V16.1039H25.5612L12.6236 28.4422L14.2584 30L28.3652 16.5578L30 15L28.3652 13.4422L14.2584 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_380">
          <rect width={30} height={30} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRightIcon;
