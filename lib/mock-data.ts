import type { AssignmentStatus } from "@/components/ui/status-badge";

export type SubjectArea = "EEE" | "CSE" | "Physics" | "Chemistry" | "MBA" | "Medical" | "Architecture" | "Other";
export type AssignmentType = "lab_report" | "thesis" | "ieee_paper" | "research" | "iot_project" | "programming" | "case_study" | "other";

export type MockAssignment = {
  id: string;
  client: string;
  clientCountry: string;
  title: string;
  subjectArea: SubjectArea;
  assignmentType: AssignmentType;
  status: AssignmentStatus;
  worker: string | null;
  workerDepartment: string | null;
  budget: number;
  currency: "BDT" | "USD";
  deadline: string;
  verified: boolean;
};

export const assignments: MockAssignment[] = [
  {
    id: "TL-2041",
    client: "James Harrington",
    clientCountry: "UK",
    title: "IEEE paper · Smart-grid load forecasting",
    subjectArea: "EEE",
    assignmentType: "ieee_paper",
    status: "in_progress",
    worker: "Nafis H.",
    workerDepartment: "EEE",
    budget: 85,
    currency: "USD",
    deadline: "2026-04-22",
    verified: false,
  },
  {
    id: "TL-2040",
    client: "Sophie Müller",
    clientCountry: "Germany",
    title: "MBA thesis · Fintech adoption in emerging markets",
    subjectArea: "MBA",
    assignmentType: "thesis",
    status: "under_review",
    worker: "Mehek",
    workerDepartment: "BBA",
    budget: 120,
    currency: "USD",
    deadline: "2026-04-20",
    verified: true,
  },
  {
    id: "TL-2039",
    client: "Liam O'Brien",
    clientCountry: "Ireland",
    title: "IoT smart-lab kit · firmware + docs",
    subjectArea: "EEE",
    assignmentType: "iot_project",
    status: "matched",
    worker: "Nafis H.",
    workerDepartment: "EEE",
    budget: 200,
    currency: "USD",
    deadline: "2026-04-30",
    verified: false,
  },
  {
    id: "TL-2038",
    client: "Priya Sharma",
    clientCountry: "Canada",
    title: "Research article humanisation + edit",
    subjectArea: "Other",
    assignmentType: "research",
    status: "bidding",
    worker: null,
    workerDepartment: null,
    budget: 40,
    currency: "USD",
    deadline: "2026-04-19",
    verified: false,
  },
  {
    id: "TL-2037",
    client: "Marco Rossi",
    clientCountry: "Italy",
    title: "Python data analysis · pandas + matplotlib",
    subjectArea: "CSE",
    assignmentType: "programming",
    status: "posted",
    worker: null,
    workerDepartment: null,
    budget: 55,
    currency: "USD",
    deadline: "2026-04-25",
    verified: false,
  },
  {
    id: "TL-2036",
    client: "Emily Chen",
    clientCountry: "Australia",
    title: "EEE lab report · power electronics",
    subjectArea: "EEE",
    assignmentType: "lab_report",
    status: "completed",
    worker: "Mehek",
    workerDepartment: "EEE",
    budget: 30,
    currency: "USD",
    deadline: "2026-04-12",
    verified: true,
  },
  {
    id: "TL-2035",
    client: "Noah Williams",
    clientCountry: "USA",
    title: "MBA case study · Netflix market strategy",
    subjectArea: "MBA",
    assignmentType: "case_study",
    status: "in_progress",
    worker: "Rusafa",
    workerDepartment: "BBA",
    budget: 65,
    currency: "USD",
    deadline: "2026-04-24",
    verified: false,
  },
  {
    id: "TL-2034",
    client: "Aisha Al-Farsi",
    clientCountry: "UAE",
    title: "Chemistry lab report · titration analysis",
    subjectArea: "Chemistry",
    assignmentType: "lab_report",
    status: "cancelled",
    worker: null,
    workerDepartment: null,
    budget: 25,
    currency: "USD",
    deadline: "2026-04-10",
    verified: false,
  },
];

export const revenueSeries = [
  { month: "Oct", revenue: 142000, assignments: 24 },
  { month: "Nov", revenue: 168000, assignments: 28 },
  { month: "Dec", revenue: 198000, assignments: 32 },
  { month: "Jan", revenue: 221000, assignments: 35 },
  { month: "Feb", revenue: 256000, assignments: 41 },
  { month: "Mar", revenue: 289000, assignments: 46 },
  { month: "Apr", revenue: 321000, assignments: 52 },
];

export const clientExpenseSeries = [
  { month: "Nov", spent: 4200 },
  { month: "Dec", spent: 6800 },
  { month: "Jan", spent: 3200 },
  { month: "Feb", spent: 9400 },
  { month: "Mar", spent: 7100 },
  { month: "Apr", spent: 12000 },
];

export const workerEarningsSeries = [
  { month: "Nov", earned: 8200 },
  { month: "Dec", earned: 12400 },
  { month: "Jan", earned: 9800 },
  { month: "Feb", earned: 15600 },
  { month: "Mar", earned: 18900 },
  { month: "Apr", earned: 22100 },
];

export type MockWorker = {
  id: string;
  name: string;
  university: string;
  department: string;
  rating: number;
  totalEarned: number;
  activeAssignments: number;
  isVerified: boolean;
  skills: string[];
};

export const workers: MockWorker[] = [
  {
    id: "w1",
    name: "Nafis Hossain",
    university: "UAP",
    department: "EEE",
    rating: 4.9,
    totalEarned: 87400,
    activeAssignments: 2,
    isVerified: true,
    skills: ["IoT", "Embedded Systems", "IEEE Papers", "Circuit Simulation"],
  },
  {
    id: "w2",
    name: "Mehek Chowdhury",
    university: "BUET",
    department: "EEE",
    rating: 4.8,
    totalEarned: 64200,
    activeAssignments: 1,
    isVerified: true,
    skills: ["Lab Reports", "Power Systems", "Research Writing"],
  },
  {
    id: "w3",
    name: "Rusafa Islam",
    university: "NSU",
    department: "BBA",
    rating: 4.7,
    totalEarned: 52800,
    activeAssignments: 2,
    isVerified: true,
    skills: ["MBA Case Studies", "Business Reports", "Marketing"],
  },
  {
    id: "w4",
    name: "Jamil Ahmed",
    university: "BRAC",
    department: "CSE",
    rating: 4.6,
    totalEarned: 41500,
    activeAssignments: 1,
    isVerified: true,
    skills: ["Python", "Data Analysis", "Machine Learning", "Algorithms"],
  },
  {
    id: "w5",
    name: "Disa Rahman",
    university: "DIU",
    department: "Chemistry",
    rating: 4.5,
    totalEarned: 28900,
    activeAssignments: 0,
    isVerified: true,
    skills: ["Chemistry Lab Reports", "Organic Chemistry", "Analysis"],
  },
];

export type BidEntry = {
  id: string;
  workerName: string;
  department: string;
  university: string;
  proposedPrice: number;
  estimatedDays: number;
  rating: number;
};

export type OpenAssignment = MockAssignment & {
  description: string;
  pages?: number;
  bids: number;
  bidEntries?: BidEntry[];
  urgency: "low" | "medium" | "high";
};

export const openAssignments: OpenAssignment[] = [
  {
    id: "TL-2044",
    client: "Oliver Thornton",
    clientCountry: "UK",
    title: "Power systems lab report · load flow analysis",
    subjectArea: "EEE",
    assignmentType: "lab_report",
    status: "posted",
    worker: null,
    workerDepartment: null,
    budget: 45,
    currency: "USD",
    deadline: "2026-04-30",
    verified: false,
    description: "Need a detailed lab report on load flow analysis using Newton-Raphson method. Must include hand calculations, MATLAB simulation, and discussion. 3,000 words approx.",
    pages: 12,
    bids: 0,
    urgency: "medium",
  },
  {
    id: "TL-2043",
    client: "Chloe Dupont",
    clientCountry: "France",
    title: "Machine learning · classification model with sklearn",
    subjectArea: "CSE",
    assignmentType: "programming",
    status: "bidding",
    worker: null,
    workerDepartment: null,
    budget: 70,
    currency: "USD",
    deadline: "2026-04-28",
    verified: false,
    description: "Build a multi-class classification model using scikit-learn. Must include EDA, model comparison (logistic regression, SVM, random forest), confusion matrix, and a short report.",
    pages: undefined,
    bids: 3,
    urgency: "medium",
    bidEntries: [
      { id: "b1", workerName: "Jamil Ahmed", department: "CSE", university: "BRAC", proposedPrice: 65, estimatedDays: 3, rating: 4.6 },
      { id: "b2", workerName: "Tariq Hasan", department: "CSE", university: "UIU", proposedPrice: 60, estimatedDays: 4, rating: 4.4 },
      { id: "b3", workerName: "Fariha Noor", department: "CSE", university: "NSU", proposedPrice: 68, estimatedDays: 2, rating: 4.7 },
    ],
  },
  {
    id: "TL-2042",
    client: "Amir Khalil",
    clientCountry: "UAE",
    title: "Organic chemistry report · ester synthesis",
    subjectArea: "Chemistry",
    assignmentType: "lab_report",
    status: "posted",
    worker: null,
    workerDepartment: null,
    budget: 35,
    currency: "USD",
    deadline: "2026-04-27",
    verified: false,
    description: "Lab report covering Fischer esterification reaction. Must include mechanism, yield calculations, IR spectroscopy interpretation, and conclusion.",
    pages: 8,
    bids: 0,
    urgency: "high",
  },
  {
    id: "TL-2041",
    client: "Priya Sharma",
    clientCountry: "Canada",
    title: "Research article humanisation + edit",
    subjectArea: "Other",
    assignmentType: "research",
    status: "bidding",
    worker: null,
    workerDepartment: null,
    budget: 40,
    currency: "USD",
    deadline: "2026-04-26",
    verified: false,
    description: "Re-write an existing research article (2,800 words) to reduce AI-detection scores while preserving academic quality. Must pass Turnitin + Originality.ai.",
    pages: 10,
    bids: 2,
    urgency: "high",
    bidEntries: [
      { id: "b4", workerName: "Rusafa Islam", department: "BBA", university: "NSU", proposedPrice: 38, estimatedDays: 2, rating: 4.7 },
      { id: "b5", workerName: "Maliha Akter", department: "English", university: "DU", proposedPrice: 35, estimatedDays: 3, rating: 4.5 },
    ],
  },
  {
    id: "TL-2040",
    client: "Marco Rossi",
    clientCountry: "Italy",
    title: "Python data analysis · pandas + matplotlib",
    subjectArea: "CSE",
    assignmentType: "programming",
    status: "posted",
    worker: null,
    workerDepartment: null,
    budget: 55,
    currency: "USD",
    deadline: "2026-05-02",
    verified: false,
    description: "Exploratory data analysis on a provided CSV dataset (~5,000 rows). Visualise key trends, correlations, and outliers. Deliver a Jupyter notebook with markdown explanations.",
    pages: undefined,
    bids: 0,
    urgency: "low",
  },
  {
    id: "TL-2039",
    client: "Sarah Mitchell",
    clientCountry: "Australia",
    title: "MBA thesis chapter · digital transformation in retail",
    subjectArea: "MBA",
    assignmentType: "thesis",
    status: "bidding",
    worker: null,
    workerDepartment: null,
    budget: 130,
    currency: "USD",
    deadline: "2026-05-05",
    verified: false,
    description: "Write Chapter 3 (Methodology) and Chapter 4 (Findings) of an MBA thesis on digital transformation in Australian retail sector. 6,000 words total, Harvard referencing, SPSS outputs needed.",
    pages: 24,
    bids: 4,
    urgency: "low",
    bidEntries: [
      { id: "b6", workerName: "Rusafa Islam", department: "BBA", university: "NSU", proposedPrice: 120, estimatedDays: 7, rating: 4.7 },
      { id: "b7", workerName: "Nasrin Akter", department: "MBA", university: "IBA", proposedPrice: 125, estimatedDays: 6, rating: 4.8 },
      { id: "b8", workerName: "Tanvir Hossain", department: "BBA", university: "BRAC", proposedPrice: 115, estimatedDays: 8, rating: 4.5 },
      { id: "b9", workerName: "Fahmida Islam", department: "MBA", university: "NSU", proposedPrice: 118, estimatedDays: 7, rating: 4.6 },
    ],
  },
];

export const availableAssignments: MockAssignment[] = assignments.filter(
  (a) => a.status === "posted" || a.status === "bidding"
);

export type MockEmployee = {
  id: string;
  name: string;
  role: string;
  speciality: string;
  workload: number;
  capacity: number;
};

export const employees: MockEmployee[] = [
  { id: "e1", name: "Mahir Shahriar", role: "Platform Lead", speciality: "Operations & QA", workload: 6, capacity: 8 },
  { id: "e2", name: "Masum Hawlader", role: "Academic Reviewer", speciality: "EEE · Research Verification", workload: 4, capacity: 5 },
  { id: "e3", name: "Tasnim Akter", role: "Client Success", speciality: "Onboarding · Support", workload: 7, capacity: 10 },
  { id: "e4", name: "Rifat Hassan", role: "Tech Coordinator", speciality: "IoT · Embedded Systems", workload: 5, capacity: 8 },
];

export const partnerSchools = [
  {
    id: "s1",
    name: "Dhaka Residential Model College",
    location: "Mirpur Cantonment",
    level: 7,
    xp: 2840,
    xpMax: 4000,
    teams: 4,
    trophies: 14,
  },
  {
    id: "s2",
    name: "Notre Dame College",
    location: "Motijheel",
    level: 5,
    xp: 1820,
    xpMax: 3000,
    teams: 3,
    trophies: 9,
  },
  {
    id: "s3",
    name: "Viqarunnisa Noon School & College",
    location: "Bailey Road",
    level: 6,
    xp: 2310,
    xpMax: 3500,
    teams: 3,
    trophies: 11,
  },
  {
    id: "s4",
    name: "Scholastica",
    location: "Uttara",
    level: 4,
    xp: 1220,
    xpMax: 2500,
    teams: 3,
    trophies: 6,
  },
];

export const upcomingEvents = [
  {
    id: "ev1",
    title: "Bangladesh Robot Olympiad",
    scope: "national" as const,
    date: "2026-05-04",
    location: "ICCB, Dhaka",
    registrationLink: "#",
  },
  {
    id: "ev2",
    title: "IEEE Xtreme 18.0 (registrations open)",
    scope: "international" as const,
    date: "2026-10-18",
    location: "Online · global",
    registrationLink: "#",
  },
  {
    id: "ev3",
    title: "Zilla Science Fair — Dhaka",
    scope: "zilla" as const,
    date: "2026-06-12",
    location: "Dhaka Science Museum",
    registrationLink: "#",
  },
  {
    id: "ev4",
    title: "DRMC Innovators' Hackathon",
    scope: "school" as const,
    date: "2026-05-22",
    location: "DRMC Project Lab",
    registrationLink: "#",
  },
];

export const weeklyWorkshops = [
  {
    id: "w1",
    day: "Tuesday",
    time: "4:30 – 6:00 PM",
    topic: "IoT Basics · Sensors & Microcontrollers",
    lead: "Nafis H.",
    week: 6,
    total: 12,
  },
  {
    id: "w2",
    day: "Thursday",
    time: "4:30 – 6:00 PM",
    topic: "How to build a startup · Lean MVP",
    lead: "Mahir",
    week: 3,
    total: 8,
  },
];

export const achievements = [
  { id: "a1", type: "trophy" as const, title: "1st — IoT Smart-Lab Hackathon", date: "2026-03-14", team: "Voltaire-3", xp: 320 },
  { id: "a2", type: "trophy" as const, title: "2nd — Zilla Science Fair", date: "2026-02-10", team: "Nova-1", xp: 220 },
  { id: "a3", type: "badge" as const, title: "Team of the Month · March", date: "2026-03-31", team: "Voltaire-3", xp: 120 },
  { id: "a4", type: "event_memory" as const, title: "Science fair day — 400 visitors, 18 demos", date: "2026-02-10", team: "All teams", xp: 60 },
  { id: "a5", type: "competition_record" as const, title: "IEEE Day participation", date: "2025-10-06", team: "Nova-1, Voltaire-3", xp: 80 },
  { id: "a6", type: "trophy" as const, title: "3rd — National Idea Contest", date: "2025-12-02", team: "Atlas-2", xp: 180 },
];

export const schoolTeams = [
  { id: "t1", name: "Voltaire-3", leader: "Raisa Hossain (Final yr, EEE)", eee: "Adib Rahman (3rd yr, EEE)", cse: "Tashfia K. (3rd yr, CSE)", xp: 980, wins: 5 },
  { id: "t2", name: "Nova-1", leader: "Rafi Khan (Final yr, CSE)", eee: "Nahiyan S. (3rd yr, EEE)", cse: "Orpita D. (3rd yr, CSE)", xp: 740, wins: 3 },
  { id: "t3", name: "Atlas-2", leader: "Sara Ahmed (Final yr, EEE)", eee: "Tanzim R. (3rd yr, EEE)", cse: "Mushfiq A. (3rd yr, CSE)", xp: 620, wins: 2 },
];

// ─── University Lab mock data ────────────────────────────────────────────────

export type LabWorkshopStatus = "scheduled" | "ongoing" | "completed" | "cancelled";
export type ChallengeStatus = "open" | "active" | "judging" | "completed";
export type CompetitionStatus = "upcoming" | "registration" | "active" | "completed";

export const labWorkshops = [
  { id: "lw1", session: 8, totalSessions: 12, topic: "MQTT Protocol · IoT networking deep-dive", day: "Tuesday", date: "2026-04-22", time: "4:00 – 5:30 PM", lead: "Dr. Mehedi Hassan", attendance: 34, capacity: 40, status: "scheduled" as LabWorkshopStatus, materials: true, tags: ["IoT", "Networking", "Embedded"] },
  { id: "lw2", session: 7, totalSessions: 12, topic: "PCB Design & Fabrication — KiCad workflow", day: "Thursday", date: "2026-04-17", time: "4:00 – 5:30 PM", lead: "Nafis H.", attendance: 38, capacity: 40, status: "completed" as LabWorkshopStatus, materials: true, tags: ["PCB", "Hardware", "EEE"] },
  { id: "lw3", session: 9, totalSessions: 12, topic: "Edge AI · TensorFlow Lite on microcontrollers", day: "Tuesday", date: "2026-04-29", time: "4:00 – 5:30 PM", lead: "Dr. Mehedi Hassan", attendance: 0, capacity: 40, status: "scheduled" as LabWorkshopStatus, materials: false, tags: ["AI", "ML", "Embedded"] },
  { id: "lw4", session: 6, totalSessions: 12, topic: "LoRaWAN & long-range wireless sensor networks", day: "Thursday", date: "2026-04-10", time: "4:00 – 5:30 PM", lead: "Nafis H.", attendance: 36, capacity: 40, status: "completed" as LabWorkshopStatus, materials: true, tags: ["IoT", "Wireless", "LoRa"] },
  { id: "lw5", session: 10, totalSessions: 12, topic: "Project showcase prep — demo day briefing", day: "Tuesday", date: "2026-05-06", time: "4:00 – 5:30 PM", lead: "Lab Coordinator", attendance: 0, capacity: 40, status: "scheduled" as LabWorkshopStatus, materials: false, tags: ["Presentation", "Demo"] },
];

export const labChallenges = [
  { id: "ch1", title: "Smart Campus IoT Showdown", challenger: "BUET EEE Project Lab", challenged: "UAP Embedded Systems Lab", deadline: "2026-05-15", rubric: "Technical depth, working demo, documentation", status: "active" as ChallengeStatus, submissions: { challenger: true, challenged: false }, xpPrize: 500 },
  { id: "ch2", title: "Edge-AI Benchmark Challenge", challenger: "UAP Embedded Systems Lab", challenged: "NSU ECE Lab", deadline: "2026-06-01", rubric: "Inference accuracy, latency, model size", status: "open" as ChallengeStatus, submissions: { challenger: false, challenged: false }, xpPrize: 400 },
  { id: "ch3", title: "PCB Speedrun · Sub-24h design sprint", challenger: "RUET Power Lab", challenged: "BUET EEE Project Lab", deadline: "2026-04-10", rubric: "DRC pass, BOM cost, trace routing quality", status: "completed" as ChallengeStatus, submissions: { challenger: true, challenged: true }, xpPrize: 300, winner: "BUET EEE Project Lab" },
];

export const labCompetitions = [
  { id: "comp1", title: "Inter-Lab IoT Innovation Cup 2026", scope: "national" as const, type: "intra" as const, registrationDeadline: "2026-04-30", eventDate: "2026-05-20", registeredLabs: 12, maxLabs: 20, prizes: ["৳50,000", "৳25,000", "৳10,000"], status: "registration" as CompetitionStatus, tags: ["IoT", "Hardware", "AI"] },
  { id: "comp2", title: "Embedded Systems Battle Royal", scope: "national" as const, type: "intra" as const, registrationDeadline: "2026-05-10", eventDate: "2026-06-08", registeredLabs: 6, maxLabs: 16, prizes: ["৳30,000", "৳15,000"], status: "upcoming" as CompetitionStatus, tags: ["Embedded", "C/C++", "RTOS"] },
  { id: "comp3", title: "UAP Smart-Lab Hackathon — Spring 2026", scope: "school" as const, type: "intra" as const, registrationDeadline: "2026-04-15", eventDate: "2026-04-18", registeredLabs: 8, maxLabs: 8, prizes: ["Scholarship + badge", "Badge"], status: "completed" as CompetitionStatus, tags: ["Hardware", "Software", "Pitch"] },
];

export const labLeaderboard = [
  { rank: 1, lab: "BUET EEE Project Lab", university: "BUET", xp: 4820, wins: 7, workshops: 24 },
  { rank: 2, lab: "UAP Embedded Systems Lab", university: "UAP", xp: 3960, wins: 5, workshops: 20, isOwn: true },
  { rank: 3, lab: "NSU ECE Lab", university: "NSU", xp: 3410, wins: 4, workshops: 18 },
  { rank: 4, lab: "RUET Power Lab", university: "RUET", xp: 2980, wins: 3, workshops: 16 },
  { rank: 5, lab: "BRAC Robotics Lab", university: "BRAC", xp: 2640, wins: 3, workshops: 14 },
  { rank: 6, lab: "DIU IoT Research Lab", university: "DIU", xp: 2110, wins: 2, workshops: 12 },
  { rank: 7, lab: "IUT EEE Lab", university: "IUT", xp: 1870, wins: 1, workshops: 10 },
  { rank: 8, lab: "CUET Systems Lab", university: "CUET", xp: 1540, wins: 1, workshops: 9 },
];

// ─── Worker earnings leaderboard (for lab dashboard) ─────────────────────────

export const labWorkerEarnings = [
  { rank: 1, name: "Nafis Hossain", department: "EEE", earned: 87400, assignments: 42, rating: 4.9 },
  { rank: 2, name: "Mehek Chowdhury", department: "EEE", earned: 64200, assignments: 31, rating: 4.8 },
  { rank: 3, name: "Rusafa Islam", department: "BBA", earned: 52800, assignments: 26, rating: 4.7 },
  { rank: 4, name: "Jamil Ahmed", department: "CSE", earned: 41500, assignments: 22, rating: 4.6 },
  { rank: 5, name: "Disa Rahman", department: "Chemistry", earned: 28900, assignments: 15, rating: 4.5 },
];
