"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../utils/animations";

interface Props {
  href: string;
  label: string;
}

export default function TransitionLink({ href, label }: Props) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
