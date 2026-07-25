export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  detail: string;
  placeholder?: boolean;
};

/**
 * Placeholder voice until real client testimonials arrive.
 * Marked as representative so we stay honest.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Every drawer, every reveal, every finish felt intentional. Vivant didn’t just build our kitchen—they composed it.",
    attribution: "Homeowner",
    detail: "Lake Minnetonka residence",
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "From the first consultation to the final install, the process felt like working with a private atelier. Quiet excellence throughout.",
    attribution: "Homeowner",
    detail: "Edina primary suite",
    placeholder: true,
  },
  {
    id: "t3",
    quote:
      "We trusted them with the heart of our home. Years later, the cabinetry still feels as considered as the day it was installed.",
    attribution: "Homeowner",
    detail: "Wayzata library & den",
    placeholder: true,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Private Consultation",
    description:
      "We listen—how you live, gather, and move through your home—then translate that into a clear design direction.",
  },
  {
    number: "02",
    title: "Bespoke Design",
    description:
      "Detailed drawings, material selections, and finishes refined until every detail feels inevitable.",
  },
  {
    number: "03",
    title: "Artisan Craft",
    description:
      "In our workshop, skilled hands shape, join, and finish each piece with furniture-grade precision.",
  },
  {
    number: "04",
    title: "White-Glove Installation",
    description:
      "Meticulous install, final adjustments, and a walkthrough that ensures your space is ready to live in beautifully.",
  },
];

export const faqs = [
  {
    question: "How long does a custom cabinetry project usually take?",
    answer:
      "Most residential kitchen or whole-room projects span several months from consultation through installation—design and selections typically take 4–8 weeks, fabrication another 8–14 weeks depending on scope, with installation scheduled to align with your renovation timeline. We’ll give you a clear schedule once your design is finalized.",
  },
  {
    question: "What’s the difference between inset and overlay cabinets?",
    answer:
      "Inset doors and drawers sit flush within the cabinet face frame, creating a furniture-like look with precise reveals—often preferred for heirloom kitchens. Overlay doors sit on top of the frame, offering a cleaner contemporary silhouette and efficient construction while remaining fully custom.",
  },
  {
    question: "Which wood species work best for a bright kitchen?",
    answer:
      "White oak and maple are excellent for light-filled kitchens—oak with a natural oil finish keeps warmth without darkening the room; maple takes soft painted or clear finishes beautifully. Walnut can be used as an accent (islands, open shelving) for depth without overwhelming the light.",
  },
  {
    question: "What cabinet styles fit a modern farmhouse?",
    answer:
      "Shaker doors in painted maple or soft white, paired with natural oak accents, matte black or aged brass hardware, and simple crown profiles. We often mix painted perimeter cabinets with a wood island for that modern farmhouse balance of comfort and craft.",
  },
];
