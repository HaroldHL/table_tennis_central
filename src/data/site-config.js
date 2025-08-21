export const siteConfig = {
  name: "Table Tennis Central",
  tagline: "Play table tennis, anytime!",
  description: "Australia's premier dedicated table tennis venue. State of the art facility with professional tables, flooring, and inviting atmosphere. Open everyday including public holidays.",
  
  hero: {
    title: "Play Table Tennis, Anytime!",
    subtitle: "Australia's first dedicated table tennis venue",
    primaryCTA: "RESERVE A TABLE NOW",
    secondaryCTA: "Not a member? Register NOW",
    stats: [
      { value: "10+", label: "Professional Tables" },
      { value: "365", label: "Days Open" },
      { value: "24/7", label: "Online Booking" },
      { value: "1000+", label: "Happy Players" }
    ]
  },

  about: {
    title: "About Table Tennis Central",
    subtitle: "Making it easier for people to play table tennis",
    description: "Our vision is to make it easier for people to play table tennis. Table Tennis Central is easily accessible and is available to people of all ages and skill levels. We aim to provide a safe and comfortable space for all people to play table tennis, from veterans to young families, covering social play, competitive training, and professional coaching.",
    features: [
      {
        icon: "🏢",
        title: "State of the Art Venue",
        description: "Professional tables, premium flooring, and inviting atmosphere designed for optimal play experience."
      },
      {
        icon: "📅",
        title: "Open Everyday",
        description: "Available 365 days a year including public holidays. Play whenever you want, however you want."
      },
      {
        icon: "💻",
        title: "Online Booking System",
        description: "Hassle-free booking with our easy-to-use online system. All tables available and set up each time you play."
      },
      {
        icon: "🔐",
        title: "Unique Access Code",
        description: "Access the venue with your unique code. No waiting, no hassle - just pure table tennis enjoyment."
      }
    ]
  },

  services: [
    {
      id: 1,
      icon: "🏓",
      title: "Table Rental",
      description: "Rent professional tables by the hour for casual play, practice, or small tournaments",
      features: [
        "Professional tournament-grade tables",
        "Climate-controlled environment", 
        "Premium lighting setup",
        "Equipment provided"
      ],
      price: "From $25/hour"
    },
    {
      id: 2,
      icon: "👨‍🏫",
      title: "Professional Coaching",
      description: "One-on-one and group coaching sessions with experienced certified coaches",
      features: [
        "Beginner to advanced levels",
        "Technique development",
        "Strategy and tactics",
        "Competition preparation"
      ],
      price: "From $75/hour"
    },
    {
      id: 3,
      icon: "🏆",
      title: "Tournaments & Events",
      description: "Regular tournaments, leagues, and special events for all skill levels",
      features: [
        "Weekly social tournaments",
        "Competitive leagues",
        "Corporate events",
        "Birthday parties"
      ],
      price: "Various pricing"
    }
  ],

  coaches: [
    {
      id: 1,
      name: "Nana Yaw Boateng",
      title: "Head Coach",
      bio: "Australian champion left-handed attacker with significant achievements including National under 17 champion. Brings years of competitive experience and proven coaching methods.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Advanced Technique", "Competition Prep", "Left-hand Attack"],
      experience: "15+ years",
      rate: "$75 per hour (1 on 1)",
      achievements: [
        "Australian National Under 17 Champion",
        "Multiple state championships",
        "Professional tournament experience",
        "Certified coaching qualification"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Youth Development Coach",
      bio: "Specializing in youth development and beginner training. Patient and encouraging approach to help new players build confidence and fundamental skills.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["Youth Training", "Fundamentals", "Beginner Development"],
      experience: "10+ years",
      rate: "$65 per hour",
      achievements: [
        "Youth coaching certification",
        "Former junior state player",
        "200+ students coached",
        "School program coordinator"
      ]
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      title: "Technique Specialist",
      bio: "Former professional player with expertise in technical development and advanced strategies. Focuses on precision and tactical game improvement.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Technical Analysis", "Strategy Development", "Advanced Training"],
      experience: "12+ years",
      rate: "$70 per hour",
      achievements: [
        "Former professional player",
        "Technical coaching specialist",
        "International tournament experience",
        "Advanced coaching certification"
      ]
    }
  ],

  booking: {
    timeSlots: [
      "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
      "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
    ],
    tableTypes: [
      { id: 1, name: "Standard Table", price: 25 },
      { id: 2, name: "Premium Table", price: 35 },
      { id: 3, name: "Tournament Table", price: 45 }
    ]
  },

  contact: {
    address: "123 Champions Way, Sydney Olympic Park NSW 2127, Australia",
    phone: "(02) 9XXX-PING",
    email: "info@tabletenniscentral.com.au",
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      weekends: "8:00 AM - 10:00 PM",
      holidays: "8:00 AM - 8:00 PM"
    },
    location: {
      lat: -33.8688,
      lng: 151.2093
    },
    parking: {
      available: true,
      details: "Free 2-hour street parking available. Secure underground parking $5/day."
    },
    publicTransport: {
      train: "Olympic Park Station (5 min walk)",
      bus: "Routes 401, 403, 407 stop nearby"
    }
  },

  social: {
    facebook: "https://facebook.com/tabletenniscentral",
    instagram: "https://instagram.com/tabletenniscentral", 
    twitter: "https://twitter.com/tabletenniscentral",
    youtube: "https://youtube.com/tabletenniscentral"
  },

  seo: {
    title: "Table Tennis Central - Play Anytime | Professional Table Tennis Venue",
    metaDescription: "Australia's premier table tennis venue. Professional tables, online booking, expert coaching. Open everyday including holidays. Book your table now!",
    keywords: ["table tennis", "ping pong", "Australia", "Sydney", "booking", "coaching", "professional tables", "tournaments", "lessons"]
  }
}