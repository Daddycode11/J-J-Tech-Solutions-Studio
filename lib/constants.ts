export const SERVICES = [
  {
    id: "basic-website",
    icon: "🌐",
    title: "Basic Website Package",
    description: "Clean, fast, and responsive landing page or company website. Perfect for getting your business online quickly.",
    targets: ["Small businesses", "Freelancers", "Startups"],
    color: "blue",
  },
  {
    id: "business-menu",
    icon: "🍽️",
    title: "Business Website + Menu System",
    description: "Full website with digital menu management. Update your offerings anytime without technical knowledge.",
    targets: ["Restaurants", "Cafés", "Food businesses"],
    color: "amber",
  },
  {
    id: "booking-ordering",
    icon: "📅",
    title: "Booking / Ordering System",
    description: "Let customers book appointments or place orders online 24/7. Reduce no-shows and streamline operations.",
    targets: ["Salons", "Clinics", "Service businesses"],
    color: "blue",
  },
  {
    id: "custom-systems",
    icon: "⚙️",
    title: "Custom Business Systems",
    description: "POS systems, inventory management, and dashboards tailored to your exact workflow and business needs.",
    targets: ["Retail stores", "Warehouses", "Growing businesses"],
    color: "amber",
  },
  {
    id: "industry-solutions",
    icon: "🏪",
    title: "Industry Solutions",
    description: "Ready-made solutions for coffee shops, salons, gyms, hardware stores, and more. Plug-and-play ready.",
    targets: ["Coffee shops", "Salons", "Gyms", "Hardware stores"],
    color: "blue",
  },
];

export const PORTFOLIO = [
  {
    id: "brew-haven",
    title: "Brew Haven Coffee Shop",
    category: "Website + Menu System",
    description: "Modern coffee shop website with digital menu, online ordering, and loyalty points integration.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    preview: "☕",
    accentColor: "#F59E0B",
    bgColor: "#1a1200",
  },
  {
    id: "pos-system",
    title: "SmartPOS Dashboard",
    category: "POS System",
    description: "Full-featured point-of-sale system with real-time inventory tracking, sales analytics, and multi-cashier support.",
    tech: ["React", "Node.js", "PostgreSQL"],
    preview: "🖥️",
    accentColor: "#3B82F6",
    bgColor: "#001133",
  },
  {
    id: "booking-system",
    title: "FlexBook Booking System",
    category: "Booking System",
    description: "Online appointment scheduling with SMS reminders, staff management, and integrated payment processing.",
    tech: ["Next.js", "Prisma", "Stripe"],
    preview: "📆",
    accentColor: "#10B981",
    bgColor: "#001a12",
  },
  {
    id: "inventory-dashboard",
    title: "InvenTrack Dashboard",
    category: "Inventory Management",
    description: "Real-time inventory dashboard with low-stock alerts, supplier management, and purchase order automation.",
    tech: ["React", "Express", "MongoDB"],
    preview: "📊",
    accentColor: "#8B5CF6",
    bgColor: "#0d0022",
  },
];

export const SYSTEMS = [
  {
    id: "website-starter",
    name: "Website Starter",
    buyPrice: "₱4,999",
    customPrice: "₱8,000+",
    buyFeatures: ["5-page responsive website", "Basic SEO setup", "Contact form", "Mobile-optimized", "1 revision round"],
    customFeatures: ["Unlimited pages", "Custom design & branding", "Advanced SEO", "CMS integration", "3 revision rounds", "Priority support"],
    delivery: { buy: "3–5 days", custom: "1–2 weeks" },
    popular: false,
  },
  {
    id: "business-system",
    name: "Business System",
    buyPrice: "₱14,999",
    customPrice: "₱25,000+",
    buyFeatures: ["Website + menu/catalog", "Admin dashboard", "Basic analytics", "Mobile app-ready", "2-week support"],
    customFeatures: ["Custom workflow", "Multi-user access", "Advanced analytics", "API integrations", "1-month support", "Training included"],
    delivery: { buy: "1 week", custom: "2–3 weeks" },
    popular: true,
  },
  {
    id: "pos-complete",
    name: "POS Complete Suite",
    buyPrice: "₱29,999",
    customPrice: "₱50,000+",
    buyFeatures: ["POS + inventory", "Sales reports", "Staff management", "Receipt printing", "Offline mode"],
    customFeatures: ["Multi-branch support", "Custom integrations", "Advanced reporting", "Hardware setup", "On-site training", "3-month support"],
    delivery: { buy: "2 weeks", custom: "4–6 weeks" },
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Santos",
    business: "Brew Haven Coffee",
    role: "Owner",
    text: "J&J Tech built our entire online presence in under a week. Our digital menu reduced order errors by 80% and customers love the modern look.",
    emoji: "☕",
    rating: 5,
  },
  {
    name: "Carlo Reyes",
    business: "FitZone Gym",
    role: "Manager",
    text: "The booking system they built saved us hours every week. No more manual scheduling and our no-show rate dropped dramatically.",
    emoji: "💪",
    rating: 5,
  },
  {
    name: "Ana Mendoza",
    business: "Glow Beauty Salon",
    role: "Owner",
    text: "Professional, fast, and affordable. They understood exactly what we needed and delivered something even better than what we imagined.",
    emoji: "💅",
    rating: 5,
  },
  {
    name: "Bong Lim",
    business: "LimHard Hardware",
    role: "Business Owner",
    text: "The inventory system transformed how we manage stock. Real-time tracking and low-stock alerts have been game-changers for us.",
    emoji: "🔧",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Basic websites take 3–5 business days. More complex systems like POS or booking platforms take 1–3 weeks depending on features and customization scope.",
  },
  {
    q: "Do you offer payment in installments?",
    a: "Yes! We offer 50% downpayment and 50% upon delivery for most projects. For larger systems, we can arrange a 3-stage payment schedule.",
  },
  {
    q: "What if I want to modify the system after launch?",
    a: "All projects include a free support period (varies by package). After that, we offer affordable maintenance retainers or hourly rates for modifications.",
  },
  {
    q: "Can you integrate with my existing tools or platforms?",
    a: "Absolutely. We can integrate with Facebook, GCash, Maya, Shopee, and most third-party APIs your business uses.",
  },
  {
    q: "Do I own the website/system after it's built?",
    a: "Yes — 100%. You get full source code ownership and all credentials upon final payment. No lock-in contracts.",
  },
  {
    q: "I'm not tech-savvy. Will I be able to manage my website?",
    a: "We build with user-friendliness in mind and include a training session with every project. Most clients manage their content independently within a day.",
  },
];

export const BUDGET_RANGES = [
  "Under ₱5,000",
  "₱5,000 – ₱15,000",
  "₱15,000 – ₱30,000",
  "₱30,000 – ₱60,000",
  "₱60,000+",
  "Not sure yet",
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Systems", href: "#systems" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];