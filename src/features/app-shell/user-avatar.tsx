type UserAvatarProps = {
  className?: string;
};

export function UserAvatar({ className }: UserAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        "relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#1b1e35] text-white shadow-[0_6px_18px_rgba(21,25,52,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-[#171b33]/10",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(255,255,255,0.28),transparent_27%),linear-gradient(145deg,transparent_34%,rgba(181,143,121,0.68)_100%)]" />
      <span className="relative font-semibold">K</span>
    </span>
  );
}
