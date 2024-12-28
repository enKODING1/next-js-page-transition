"use client";

import { useEffect } from "react";
import { animatePageIn } from "./utils/TimelineAnimations";
// import TimelineTransition from "./components/TimelineTransition";
import BlindTransition from "./components/BlindTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      {/* <TimelineTransition>{children}</TimelineTransition> */}
      <BlindTransition>{children}</BlindTransition>
    </>
  );
}
