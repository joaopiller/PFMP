"use client";

import { useRouter } from "next/navigation";
import ExpandButton from "@/components/ExpandButton";

export default function VerEquipeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/equipe");
    setTimeout(() => {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (_) {
        // no-op
      }
    }, 50);
  };

  return <ExpandButton onClick={handleClick} text="Ver equipe" />;
}
