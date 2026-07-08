type NexusLogoProps = {
  className?: string;
};

export function NexusLogo({ className }: NexusLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 1.75 29 9.05v6.2L23.55 12.2 16 7.95V1.75Z" fill="#15104A" />
      <path d="m29 9.05-5.45 3.15v8.48L29 17.6V9.05Z" fill="#3425D0" />
      <path d="m29 17.6-13 7.3v5.35l13-7.3V17.6Z" fill="#5A38FF" />
      <path d="M16 30.25 3 22.95V17.6l5.45 3.08L16 24.9v5.35Z" fill="#6847FF" />
      <path d="m3 22.95 5.45-3.15v-8.48L3 14.4v8.55Z" fill="#3B2BE0" />
      <path d="m3 14.4 13-7.3V1.75L3 9.05v5.35Z" fill="#241AAB" />
      <path
        d="m16 7.95 7.55 4.25v8.48L16 24.9l-7.55-4.22V12.2L16 7.95Z"
        fill="#F8F9FF"
      />
    </svg>
  );
}
