"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Original architectural line drawing for Vivant Private Clients.
 * Inspired by cabinetmaker concept-drawing language — not a copy of stock artwork.
 */
export function KitchenLineDrawing({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={`kitchen-line-drawing ${reduce ? "kitchen-line-drawing--static" : ""} ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        {/* 1 — Room perspective / construction */}
        <g className="kld-layer kld-layer--1" opacity="0.35">
          <path pathLength={1} d="M40 720 L520 520 L1160 560 L1160 780 L40 780 Z" />
          <path pathLength={1} d="M520 520 L520 80 L1160 60 L1160 560" />
          <path pathLength={1} d="M40 720 L40 200 L520 80" />
          <path pathLength={1} d="M180 690 L280 650 M280 650 L380 610 M380 610 L480 570" />
          <path pathLength={1} d="M200 740 L300 700 M300 700 L400 660 M400 660 L500 620" />
          <path pathLength={1} d="M640 80 L640 60 M800 74 L800 56 M960 68 L960 52" />
        </g>

        {/* 2 — Main cabinetry volumes */}
        <g className="kld-layer kld-layer--2">
          <path pathLength={1} d="M120 580 L420 470 L480 500 L480 620 L180 740 L120 700 Z" />
          <path pathLength={1} d="M120 580 L180 610 L480 500" />
          <path pathLength={1} d="M180 610 L180 740" />
          <path pathLength={1} d="M500 560 L900 500 L980 540 L980 640 L560 720 L500 680 Z" />
          <path pathLength={1} d="M500 560 L560 590 L980 540" />
          <path pathLength={1} d="M560 590 L560 720" />
          <path pathLength={1} d="M980 200 L1140 180 L1140 640 L980 680 Z" />
          <path pathLength={1} d="M980 200 L980 680" />
          <path pathLength={1} d="M1140 180 L1140 640" />
        </g>

        {/* 3 — Counters, island top, major appliances */}
        <g className="kld-layer kld-layer--3">
          <path pathLength={1} d="M110 570 L415 458 L485 492 L180 605 Z" />
          <path pathLength={1} d="M495 548 L905 486 L990 528 L560 585 Z" />
          <path pathLength={1} d="M680 250 L820 232 L840 250 L840 340 L700 360 L680 340 Z" />
          <path pathLength={1} d="M740 250 L760 200 L780 198 L780 250" />
          <ellipse pathLength={1} cx="760" cy="530" rx="48" ry="18" />
          <circle pathLength={1} cx="740" cy="526" r="7" />
          <circle pathLength={1} cx="760" cy="522" r="7" />
          <circle pathLength={1} cx="780" cy="528" r="7" />
          <circle pathLength={1} cx="755" cy="538" r="6" />
          <path pathLength={1} d="M580 575 L640 565 L655 575 L595 586 Z" />
          <path pathLength={1} d="M615 555 L615 572 M608 558 L622 558" />
        </g>

        {/* 4 — Upper cabinets & wall features */}
        <g className="kld-layer kld-layer--4">
          <path pathLength={1} d="M560 220 L670 205 L670 340 L560 355 Z" />
          <path pathLength={1} d="M850 195 L960 182 L960 320 L850 335 Z" />
          <path pathLength={1} d="M575 235 L655 223 L655 255 L575 267 Z" />
          <path pathLength={1} d="M575 275 L655 263 L655 295 L575 307 Z" />
          <path pathLength={1} d="M575 315 L655 303 L655 328 L575 340 Z" />
          <path pathLength={1} d="M865 210 L945 198 L945 230 L865 242 Z" />
          <path pathLength={1} d="M865 250 L945 238 L945 270 L865 282 Z" />
          <path pathLength={1} d="M865 290 L945 278 L945 308 L865 320 Z" />
          <path pathLength={1} d="M90 280 L160 255 L160 310 L90 335 Z" />
          <path pathLength={1} d="M175 250 L245 225 L245 280 L175 305 Z" />
          <path pathLength={1} d="M90 350 L160 325 L160 380 L90 405 Z" />
          <path pathLength={1} d="M175 320 L245 295 L245 350 L175 375 Z" />
        </g>

        {/* 5 — Doors, drawers, details */}
        <g className="kld-layer kld-layer--5">
          <path pathLength={1} d="M200 640 L300 600 L300 690 L200 730 Z" />
          <path pathLength={1} d="M310 595 L400 560 L400 650 L310 685 Z" />
          <path pathLength={1} d="M245 665 L255 661 M350 620 L360 616" />
          <path pathLength={1} d="M580 620 L680 595 L680 685 L580 710 Z" />
          <path pathLength={1} d="M690 590 L790 565 L790 655 L690 680 Z" />
          <path pathLength={1} d="M800 560 L900 535 L900 625 L800 650 Z" />
          <path pathLength={1} d="M620 655 L630 652 M730 625 L740 622 M840 595 L850 592" />
          <path pathLength={1} d="M1000 230 L1120 215 L1120 360 L1000 375 Z" />
          <path pathLength={1} d="M1000 390 L1120 375 L1120 480 L1000 495 Z" />
          <path pathLength={1} d="M1000 510 L1120 495 L1120 620 L1000 635 Z" />
          <path pathLength={1} d="M1020 270 L1100 258 M1020 300 L1100 288" />
          <path pathLength={1} d="M1020 430 L1100 418 M1020 455 L1100 443" />
          <path pathLength={1} d="M1055 350 L1065 348 M1055 470 L1065 468 M1055 570 L1065 568" />
        </g>

        {/* 6 — Annotations / drafting marks */}
        <g className="kld-layer kld-layer--6" opacity="0.45">
          <path pathLength={1} d="M130 500 L130 460 M120 470 L140 470" />
          <path pathLength={1} d="M450 430 L490 415" />
          <path pathLength={1} d="M920 300 L950 290 M945 285 L955 295" />
          <path pathLength={1} d="M300 750 L420 705" />
          <circle pathLength={1} cx="470" cy="450" r="3" />
          <circle pathLength={1} cx="700" cy="400" r="3" />
        </g>
      </g>
    </svg>
  );
}
