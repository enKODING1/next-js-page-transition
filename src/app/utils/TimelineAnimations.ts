import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animatePageIn() {
  const bannerOne = document.getElementById("banner-1");
  const bannerTWo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTWo && bannerThree && bannerFour) {
    const tl = gsap.timeline();
    tl.set([bannerOne, bannerTWo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTWo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
}

export function animatePageOut(href: string, router: AppRouterInstance) {
  const bannerOne = document.getElementById("banner-1");
  const bannerTWo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTWo && bannerThree && bannerFour) {
    const tl = gsap.timeline();
    tl.set([bannerOne, bannerTWo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTWo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      }
    });
  }
}
