import type { OrderStatus } from "@/components/ui/status-badge";

export type Category = "student" | "project" | "content";

export type MockOrder = {
  id: string;
  client: string;
  title: string;
  category: Category;
  status: OrderStatus;
  assignedTo: string | null;
  budget: number;
  deadline: string;
  verified: boolean;
};

export const orders: MockOrder[] = [
  {
    id: "TL-2041",
    client: "Ishrat Rahman",
    title: "IEEE paper · Smart-grid load forecasting",
    category: "project",
    status: "in_progress",
    assignedTo: "Nafis H.",
    budget: 18500,
    deadline: "2026-04-22",
    verified: false,
  },
  {
    id: "TL-2040",
    client: "Mehreen Siddique",
    title: "MBA thesis · Fintech adoption in rural BD",
    category: "student",
    status: "pending_review",
    assignedTo: "Mehek",
    budget: 12000,
    deadline: "2026-04-20",
    verified: true,
  },
  {
    id: "TL-2039",
    client: "Voltaire-3 Team",
    title: "IoT smart-lab kit · firmware + docs",
    category: "project",
    status: "assigned",
    assignedTo: "Nafis H.",
    budget: 22000,
    deadline: "2026-04-30",
    verified: false,
  },
  {
    id: "TL-2038",
    client: "Tariq Ahmed",
    title: "Research article humanisation + edit",
    category: "student",
    status: "requested",
    assignedTo: null,
    budget: 4500,
    deadline: "2026-04-19",
    verified: false,
  },
  {
    id: "TL-2037",
    client: "Praava Health",
    title: "Brand refresh · marketing creatives Q2",
    category: "content",
    status: "submitted",
    assignedTo: "Jamil",
    budget: 32000,
    deadline: "2026-04-15",
    verified: false,
  },
  {
    id: "TL-2036",
    client: "Samiha Kabir",
    title: "EEE lab report · power electronics",
    category: "student",
    status: "completed",
    assignedTo: "Mehek",
    budget: 2200,
    deadline: "2026-04-12",
    verified: true,
  },
  {
    id: "TL-2035",
    client: "Farhan Azim",
    title: "AI video explainer · fintech startup",
    category: "content",
    status: "in_progress",
    assignedTo: "Rusafa",
    budget: 15000,
    deadline: "2026-04-24",
    verified: false,
  },
  {
    id: "TL-2034",
    client: "Zarin Tasnim",
    title: "Assignment bundle · ML foundations",
    category: "student",
    status: "cancelled",
    assignedTo: "Mehek",
    budget: 3800,
    deadline: "2026-04-10",
    verified: false,
  },
];

export const revenueSeries = [
  { month: "Oct", revenue: 142000, orders: 24 },
  { month: "Nov", revenue: 168000, orders: 28 },
  { month: "Dec", revenue: 198000, orders: 32 },
  { month: "Jan", revenue: 221000, orders: 35 },
  { month: "Feb", revenue: 256000, orders: 41 },
  { month: "Mar", revenue: 289000, orders: 46 },
  { month: "Apr", revenue: 321000, orders: 52 },
];

export const clientExpenseSeries = [
  { month: "Nov", spent: 4200 },
  { month: "Dec", spent: 6800 },
  { month: "Jan", spent: 3200 },
  { month: "Feb", spent: 9400 },
  { month: "Mar", spent: 7100 },
  { month: "Apr", spent: 12000 },
];

export const employees = [
  {
    id: "e1",
    name: "Mehek",
    role: "Researcher & Editor",
    workload: 7,
    capacity: 10,
    speciality: "Academic writing · IEEE",
  },
  {
    id: "e2",
    name: "Nafis H.",
    role: "IoT Lead",
    workload: 5,
    capacity: 8,
    speciality: "IoT · Embedded · IEEE",
  },
  {
    id: "e3",
    name: "Rusafa",
    role: "Content & PR",
    workload: 4,
    capacity: 8,
    speciality: "Content · AI video",
  },
  {
    id: "e4",
    name: "Jamil",
    role: "Creative Lead",
    workload: 3,
    capacity: 6,
    speciality: "Brand · Design systems",
  },
  {
    id: "e5",
    name: "Disa",
    role: "Marketing",
    workload: 2,
    capacity: 6,
    speciality: "Social · Growth",
  },
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
  {
    id: "a1",
    type: "trophy" as const,
    title: "1st — IoT Smart-Lab Hackathon",
    date: "2026-03-14",
    team: "Voltaire-3",
    xp: 320,
  },
  {
    id: "a2",
    type: "trophy" as const,
    title: "2nd — Zilla Science Fair",
    date: "2026-02-10",
    team: "Nova-1",
    xp: 220,
  },
  {
    id: "a3",
    type: "badge" as const,
    title: "Team of the Month · March",
    date: "2026-03-31",
    team: "Voltaire-3",
    xp: 120,
  },
  {
    id: "a4",
    type: "event_memory" as const,
    title: "Science fair day — 400 visitors, 18 demos",
    date: "2026-02-10",
    team: "All teams",
    xp: 60,
  },
  {
    id: "a5",
    type: "competition_record" as const,
    title: "IEEE Day participation",
    date: "2025-10-06",
    team: "Nova-1, Voltaire-3",
    xp: 80,
  },
  {
    id: "a6",
    type: "trophy" as const,
    title: "3rd — National Idea Contest",
    date: "2025-12-02",
    team: "Atlas-2",
    xp: 180,
  },
];

export const schoolTeams = [
  {
    id: "t1",
    name: "Voltaire-3",
    leader: "Raisa Hossain (Final yr, EEE)",
    eee: "Adib Rahman (3rd yr, EEE)",
    cse: "Tashfia K. (3rd yr, CSE)",
    xp: 980,
    wins: 5,
  },
  {
    id: "t2",
    name: "Nova-1",
    leader: "Rafi Khan (Final yr, CSE)",
    eee: "Nahiyan S. (3rd yr, EEE)",
    cse: "Orpita D. (3rd yr, CSE)",
    xp: 740,
    wins: 3,
  },
  {
    id: "t3",
    name: "Atlas-2",
    leader: "Sara Ahmed (Final yr, EEE)",
    eee: "Tanzim R. (3rd yr, EEE)",
    cse: "Mushfiq A. (3rd yr, CSE)",
    xp: 620,
    wins: 2,
  },
];
