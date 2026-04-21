export type Project = {
  slug: string;
  title: string;
  category: string;
  domain: string;
  image: string;
  url?: string;
  description: string;
  testimonial?: {
    quote: string;
    name: string;
    title: string;
    initials: string;
  };
};

/**
 * Refacint project portfolio.
 * Add new projects here — they auto-appear across:
 *   - Homepage hero carousel
 *   - /work page
 *   - Testimonials section (any project with a `testimonial` field)
 */
export const projects: Project[] = [
  {
    slug: "molek-schools",
    title: "MOLEK Schools",
    category: "EdTech Platform",
    domain: "molekschool.com",
    image: "/images/projects/molek-schools-academics.webp",
    url: "https://www.molekschool.com",
    description:
      "A full school management platform for MOLEK Schools — a secondary school in Osun, Nigeria. Public-facing website showcasing academic programs plus a full student portal with dashboards, grades, profiles, and event announcements.",
    testimonial: {
      quote:
        "Refacint built us more than a website — they built the backbone of how we operate. Parents can now see their kids' progress in real time, our admin work is cut in half, and enrolment inquiries have doubled since launch. Every detail was thought through.",
      name: "Proprietor Alhaja F A adeniyi",
      title: "Proprietor, MOLEK Schools",
      initials: "FA",
    },
  },
  {
    slug: "molek-student-portal",
    title: "MOLEK Student Portal",
    category: "Custom Dashboard",
    domain: "molekschool.com/student",
    image: "/images/projects/molek-schools-dashboard.webp",
    url: "https://www.molekschool.com",
    description:
      "The student-facing side of MOLEK Schools — personalised dashboards, grade tracking, event calendars, profile management, and role-based access. Built to feel welcoming for students while giving admins total control.",
    testimonial: {
      quote:
        "The student portal changed everything. Before this, we were sending grades in printed reports and answering the same parent questions over and over. Now it's all self-service, and our students actually enjoy logging in. The team delivered exactly what we pictured.",
      name: "Mr M Oladele",
      title: "ICT INSTRUCTOR, MOLEK Schools",
      initials: "MO",
    },
  },
  {
    slug: "klassrun",
    title: "Klassrun Technologies",
    category: "AI EdTech SaaS",
    domain: "klassrun.com",
    image: "/images/projects/klassrun-platform.webp",
    url: "https://www.klassrun.com",
    description:
      "An AI-powered EdTech SaaS for Nigerian schools. Generates NERDC-aligned lesson notes, exam questions, and scheme of work automatically — saving teachers 10–15 hours a week. Built with WAEC/NECO standards in mind, fully branded per school.",
    testimonial: {
      quote:
        "We had the idea but no clear path to building it. Refacint took our rough concept and turned it into a real product used by teachers every day. The AI actually understands the Nigerian curriculum — that's not something you get with generic tools.",
      name: "Afeez Temitope",
      title: "Co-Founder, Klassrun Technologies",
      initials: "AT",
    },
  },
  {
    slug: "tenderville",
    title: "Tenderville School",
    category: "School Website",
    domain: "tenderville.onrender.com",
    image: "/images/projects/tenderville-school.webp",
    url: "https://tenderville.onrender.com",
    description:
      "A warm, welcoming website for Tenderville — a Nigerian primary and nursery school. Built to communicate the school's philosophy (\"no child left behind\"), showcase facilities, and streamline admissions inquiries for prospective parents.",
    testimonial: {
      quote:
        "Our old website didn't represent who we actually are. Refacint took the time to understand our school's culture, then built something that parents tell us looks professional but still feels personal. Admissions inquiries have tripled since launch.",
      name: "Mrs. Adebayo",
      title: "Head Teacher, Tenderville School",
      initials: "MA",
    },
  },
];

// Helper: get only projects that have testimonials
export const testimonialProjects = projects.filter((p) => p.testimonial);
