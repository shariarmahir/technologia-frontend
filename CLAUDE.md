# technoLOgia — Project Specification (claude.md)

> **"If it's not now, then when? This is the time to jump."**

---

## 1. Project Overview

**technoLOgia** is a peer-to-peer academic marketplace based in Bangladesh. It connects two sides:

- **Earners (Bangladeshi university lab students):** University students — especially from EEE, CSE, Physics, and allied STEM departments — earn real income by completing assignments, reports, theses, IEEE papers, research tasks, and IoT projects for international students.
- **Clients (International students & professionals):** Students from any country post their academic work requests with a budget and deadline. technoLOgia matches them with the right Bangladeshi lab student based on subject, skills, and ratings.

**The core insight:** Bangladeshi university students have strong STEM knowledge, excellent English writing skills, and need income. International students — often time-constrained or needing subject-specific depth — need reliable, affordable academic help. technoLOgia is the trusted bridge.

**Additional vertical — School/College STEM Program:** Organizing science fairs, running weekly tech workshops in schools/colleges, building project clubs, teaching entrepreneurship, providing competition logistics, and gamified school profiles. School students who excel can eventually join the earner pool.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js** (latest, App Router) |
| Styling | **Tailwind CSS** (latest) + **shadcn/ui** components |
| Language | TypeScript |
| Auth | NextAuth.js or Clerk (role-based: admin, client, worker, school) |
| Database | PostgreSQL (via Prisma ORM) or Supabase |
| File Storage | Supabase Storage / AWS S3 (for uploads, drive links) |
| Payments | SSLCommerz or bKash API (Bangladesh-native, for worker payouts) + Stripe (for international client payments) |
| Deployment | Vercel |
| Charts | Recharts (earnings graphs, revenue graphs, order analytics) |
| Animations | Framer Motion (page transitions, micro-interactions) |

---

## 3. Design System

### 3.1 Color Palette

```
--color-primary:        #00539C    /* Royal Blue — primary brand color */
--color-primary-light:  #0066B8    /* Royal Blue lighter — hover states */
--color-primary-dark:   #003A6E    /* Royal Blue deep — headers, nav */
--color-accent:         #FFD662    /* Muted Yellow — accent, CTAs, badges */
--color-accent-light:   #FFE48A    /* Yellow lighter — hover, highlights */
--color-accent-soft:    #FFF8DC    /* Yellow very soft — backgrounds */
--color-background:     #FFFFFF    /* White — base background */
--color-surface:        #F8F9FC    /* Off-white — cards, sections */
--color-surface-alt:    #FFFBEB    /* Warm yellow tint — alt sections */
--color-text-primary:   #003A6E    /* Deep blue — body text */
--color-text-secondary: #6B7280    /* Gray — secondary text */
--color-border:         #E5E7EB    /* Light gray — borders, dividers */
--color-success:        #10B981    /* Green — verified, completed */
--color-warning:        #F59E0B    /* Amber — pending, alerts */
--color-danger:         #EF4444    /* Red — cancelled, errors */
```

### 3.2 Typography

- **Display / Headlines:** A distinctive geometric sans — `"Plus Jakarta Sans"`, `"Clash Display"`, or `"Satoshi"` for a modern academic feel.
- **Body:** Clean readable sans-serif — `"DM Sans"`, `"Outfit"`, or `"Manrope"`.
- **Monospace (code/data):** `"JetBrains Mono"` or `"Fira Code"`.

### 3.3 Design Aesthetic

**Direction: "Academic Futurism"** — Clean, structured layouts inspired by academic papers and modern SaaS dashboards, elevated with:

- **Glass morphism buttons** — frosted glass effect with backdrop-blur, border-opacity, and subtle gradient overlays.
- **Royal Blue depth** — `#001A3E` → `#003A6E` → `#00539C` gradients in hero, nav, sidebars.
- **Yellow as energy** — `#FFD662` used for CTAs on dark backgrounds, notification dots, earnings highlights, achievement badges. Yellow text is only used on dark blue backgrounds.
- **White space is structure** — generous spacing, clear hierarchy, academic precision.
- **Subtle motion** — staggered fade-in on load, smooth hover transitions, micro-interactions on buttons.

### 3.4 Glass-Effect Button Spec

```css
.glass-button {
  background: rgba(0, 83, 156, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 214, 98, 0.35);
  border-radius: 14px;
  padding: 12px 28px;
  color: #003A6E;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 83, 156, 0.12);
}
.glass-button:hover {
  background: rgba(0, 83, 156, 0.25);
  box-shadow: 0 6px 24px rgba(255, 214, 98, 0.25);
  transform: translateY(-1px);
}
```

---

## 4. User Roles & Auth

| Role | Who | Access |
|---|---|---|
| **Admin** | technoLOgia team | Full platform control — match assignments to workers, manage quality, revenue dashboard, manage all users |
| **Client** | International students & professionals | Post assignments, set budget, track progress, review work, pay |
| **Worker** | Bangladeshi university lab students | Browse available assignments, bid or accept, submit work, earn via bKash |
| **School/College** | Partner schools | Institutional profile, team management, event tracking, achievement showcase, workshop tracking |

Each role gets a distinct dashboard layout after login. Role is selected at registration. Workers must verify their university affiliation and department before taking paid assignments.

---

## 5. Pages & Features

### 5.1 Landing Homepage (`/`)

Dual-audience landing page — serves both clients (international students needing help) and workers (Bangladeshi students wanting to earn):

- **Hero Section:** Bold headline *"If it's not now, then when?"*. Two clear CTAs: **"Get Assignment Done"** (for clients) + **"Start Earning"** (for workers). Dark navy background with yellow accent orbs.
- **How It Works — For Clients:** 4-step flow: Post Assignment → Get Matched → Review Work → Pay on Approval
- **How It Works — For Workers:** 4-step flow: Verify Profile → Browse Assignments → Submit Work → Get Paid via bKash
- **Why technoLOgia:** Trust signals — "Professor-verified quality", "Bangladeshi expertise", "Secure payments", "48hr average delivery"
- **Subject Areas:** Grid of subject chips — EEE, CSE, Physics, Chemistry, MBA, Medical, Architecture, etc.
- **Earnings Showcase:** "Our top earners made ৳45,000+ last month" — motivates workers
- **School/College Program Section:** STEM initiative stats and "Partner With Us" CTA
- **Testimonials:** Client testimonials (international) + Worker success stories (Bangladeshi students)
- **Quality Assurance Badge:** "All academic work verified by Masum Hawlader, Asst. Prof., EEE, Univ. of Asia Pacific"
- **Footer:** Links, social media, contact info, copyright

### 5.2 Admin Dashboard (`/admin`)

Protected route — admin role only.

- **Platform Overview:** Total assignments posted, active matches, pending payouts, platform revenue
- **Revenue Graph:** Recharts chart — platform commission revenue by month
- **Assignment Pipeline Board:** Kanban view of all assignments:
  - `Posted` → `Bidding` → `Matched` → `In Progress` → `Under Review` → `Completed` / `Disputed`
- **Smart Matching Panel:**
  - View unmatched assignments
  - See auto-suggested workers based on subject + rating
  - Manually assign or approve auto-matches
  - Override worker selection
- **Worker Management:** List of verified workers — department, university, ratings, active assignments, earnings, payout history
- **Client Management:** List of clients — country, assignment history, total spent
- **Quality Control:** Flag assignments for professor review. Issue "Verified" badge on approved work
- **Dispute Resolution:** Handle disputes between clients and workers
- **School/College Overview:** Partnered schools, workshop schedules, event calendar
- **Payout Queue:** Approve pending bKash payouts to workers

### 5.3 Client Dashboard (`/dashboard/client`)

Protected route — client role only. (International student who needs work done)

- **Profile Header:** Name, country/university, profile photo, trust score
- **Post New Assignment:** Form with:
  - Subject area (dropdown: EEE, CSE, Physics, etc.)
  - Assignment type (lab report, thesis chapter, IEEE paper, research, IoT project, etc.)
  - Title + detailed description
  - Deadline picker
  - Budget range (in USD or BDT)
  - File upload (drag-and-drop + Google Drive link)
  - Special instructions / notes
- **Assignment Tracker:** Visual pipeline per assignment — current status with colored badge
- **Matched Worker Profile:** See who is working on your assignment — name, university, department, rating, past work samples
- **Demo Review:** For each in-progress assignment — "View Draft" opens inline preview. Client adds remarks or approves
- **Remarks / Feedback:** Threaded comment system per assignment for change requests
- **Expense Dashboard:** Recharts chart — spending over time, per-assignment breakdown, total spent
- **Payment Flow:** Pay on posting (escrow held) → released to worker on approval. Stripe for international payments
- **Order History:** Table of all assignments — status, worker, date, cost, download deliverable

### 5.4 Worker Dashboard (`/dashboard/worker`)

Protected route — worker role only. (Bangladeshi university lab student who earns)

- **Profile Header:** Name, university, department, lab affiliation, skills tags, overall rating, verification badge
- **Verification Gate:** Before taking paid work, worker must:
  - Upload university student ID
  - Select department + year
  - Optionally link lab (EEE Lab, Robotics Club, etc.)
  - Admin approves → "Verified Worker" badge unlocked
- **Available Assignments Feed:** List of open assignments filtered by:
  - Subject match to worker's department
  - Budget range
  - Deadline feasibility
  - Language requirements
  - Each card shows: subject, type, budget, deadline, client country
- **Bid / Accept Flow:**
  - Workers can place bids with a proposed price and ETA
  - OR accept fixed-price assignments instantly
  - Optionally attach a brief proposal (1–2 sentences)
- **Active Work Panel:** Assignments currently in progress — deadline countdown, submission upload area, message thread with client
- **Earnings Dashboard:**
  - Total earned (all time), this month, pending payout
  - Recharts bar chart — earnings by month
  - Per-assignment breakdown
  - Payout history (bKash transactions)
- **Withdraw Earnings:** Request payout via bKash number — admin approves and sends
- **Rating & Reviews:** See ratings received from clients. Maintain reputation
- **Work Portfolio:** Toggle to make completed work (with client permission) visible as portfolio samples

### 5.5 University Lab Dashboard (`/dashboard/lab`)

Protected route — for university lab coordinators and lab-affiliated workers.

- **Lab Overview:** Lab name, university, affiliated department, number of active worker-members
- **Lab Members:** List of students in this lab who are registered workers on technoLOgia. Their earnings, ratings, active assignments
- **Lab Leaderboard:** Top earners in the lab — drives healthy competition and motivation
- **Competitions & Challenges:** Lab-specific academic competitions organized via technoLOgia
- **Workshops:** Scheduled skill-building workshops (research writing, IEEE formatting, simulation tools, etc.)
- **Lab Earnings Summary:** Total earnings generated through the lab — shareable stat for recruitment

### 5.6 School/College Profile Dashboard (`/dashboard/school`)

Protected route — school role only.

- **Profile Header:** School/college name, logo, location, partnership tier, Level badge
- **Student Team Lists:** Roster of students in the technoLOgia STEM program. Team structure (team leader, EEE member, CSE member per team). Minimum 3 teams per school
- **Event Updates:** Calendar of upcoming competitions, science fairs, hackathons — national, international, zilla, school-level
- **Workshop Tracker:** Weekly workshops (2×/week, 1hr 30min). Lesson topics, attendance, progress
- **Lesson Materials:** Downloadable workshop materials. Home assessments section
- **Alerts & Notifications:** Deadlines, new events, announcements
- **Pathway to Earning:** Top school students can be invited to register as workers when they reach university — clear pipeline message

#### Achievement Showcase (`/dashboard/school/achievements`)

- **Trophy Shelf:** Visual trophy icons for each competition win
- **Competition Records:** Log of all competitions — dates, results, descriptions
- **Winning Team Badges:** "Team of the Month" / "Team of the Year" display
- **Level Up System:**
  - School starts at Level 1. Earn XP for competitions, workshops, events
  - Levels unlock rank titles: "Rising Lab" → "Innovation Hub" → "Tech Leader"
  - Level displayed prominently — drives inter-school competition
- **Shareable Portfolio:** Public link for school marketing

---

## 6. Assignment Matching Logic

The platform's core intelligence is matching international client assignments to the best-fit Bangladeshi worker:

### Auto-Match Algorithm (suggestion for admin to approve)
1. **Subject filter** — match assignment subject to worker's declared department/skills
2. **Availability** — worker has fewer than 2 active assignments
3. **Rating threshold** — worker rating ≥ 4.0 (or any rating if new worker pool is thin)
4. **Budget fit** — worker's typical rate is within assignment budget ±20%
5. **Deadline feasibility** — worker's estimated completion time fits within deadline
6. **Past success** — prioritize workers who have done similar assignment types before

### Bid System
- For non-urgent assignments, post to an open feed — workers bid within 12 hours
- Client sees top 3 bids (ranked by admin or algorithm) — can choose or admin assigns

### Assignment Types → Department Mapping
| Assignment Type | Primary Departments |
|---|---|
| EEE lab reports, circuit simulation, power systems | EEE, Applied Physics |
| Programming assignments, algorithms, web/mobile projects | CSE, Software Engineering |
| IoT projects, embedded systems, firmware | EEE, CSE, Mechatronics |
| IEEE papers, research methodology | Any (PhD students preferred) |
| Chemistry lab reports | Chemistry, Pharmacy, Biochemistry |
| MBA case studies, business reports | BBA, MBA |
| Architecture drawings, CAD | Architecture |
| Medical/nursing reports | Medical, Pharmacy |

---

## 7. Data Models (Simplified)

```
User {
  id, name, email, password, role (admin | client | worker | school),
  profilePhoto, phone, country, createdAt
}

WorkerProfile {
  id, userId, university, department, year, labAffiliation,
  skills[], isVerified, verificationDocUrl, rating, totalEarned,
  activeAssignmentCount, portfolioItems[], bkashNumber, createdAt
}

ClientProfile {
  id, userId, university, country, totalSpent, createdAt
}

Assignment {
  id, clientId, title, description,
  subjectArea (EEE | CSE | Physics | Chemistry | MBA | Medical | Architecture | Other),
  assignmentType (lab_report | thesis | ieee_paper | research | iot_project | programming | case_study | other),
  status (posted | bidding | matched | in_progress | under_review | revision | completed | disputed | cancelled),
  workerId (assigned worker), budget, agreedPrice, currency,
  deadline, files[], driveLink, meetLink,
  isVerified, verifiedBy, remarks[], demoUrl,
  clientRating, workerRating, createdAt, updatedAt
}

Bid {
  id, assignmentId, workerId, proposedPrice, estimatedDays,
  proposal, status (pending | accepted | rejected), createdAt
}

Payout {
  id, workerId, assignmentId, amount, bkashNumber,
  status (pending | approved | sent), transactionId, createdAt
}

School {
  id, userId, name, logo, location, level, xp,
  partnershipTier, teams[], createdAt
}

Team {
  id, schoolId, name, leader, members[], createdAt
}

Achievement {
  id, schoolId, type (trophy | badge | event_memory | competition_record),
  title, description, date, icon, photoUrl
}

Workshop {
  id, schoolId, date, topic, duration, attendance, materials[], notes
}

Event {
  id, title, type (science_fair | hackathon | competition),
  scope (national | international | zilla | school),
  registrationLink, date, location, schoolIds[]
}
```

---

## 8. API Routes (App Router Structure)

```
/api/auth/[...nextauth]              — Authentication

/api/assignments                     — CRUD for assignments
/api/assignments/[id]/status         — Update assignment status
/api/assignments/[id]/remarks        — Add remarks/feedback
/api/assignments/[id]/demo           — Upload/view demo draft
/api/assignments/[id]/verify         — Mark as professor-verified
/api/assignments/[id]/bids           — List / create bids on an assignment
/api/assignments/[id]/match          — Admin assigns a worker to assignment

/api/workers                         — List workers (admin), worker profile CRUD
/api/workers/[id]/verify             — Admin verify worker university ID
/api/workers/[id]/earnings           — Worker earnings summary
/api/workers/[id]/portfolio          — Worker portfolio items

/api/payouts                         — List payout requests (admin)
/api/payouts/[id]/approve            — Admin approve and mark sent

/api/schools                         — CRUD for school profiles
/api/schools/[id]/teams              — Manage teams
/api/schools/[id]/achieve            — CRUD achievements
/api/schools/[id]/level              — Calculate and update level/XP
/api/workshops                       — CRUD for workshops
/api/events                          — CRUD for events

/api/analytics/revenue               — Platform commission revenue (admin)
/api/analytics/expenses              — Client spending history
/api/analytics/earnings              — Worker earnings history

/api/upload                          — File upload handler
/api/match/suggest                   — Auto-suggest workers for an assignment
```

---

## 9. Key UX Principles

1. **Dual audience, equal priority.** The platform serves both international clients and Bangladeshi workers. Every page must be clear about which side it speaks to. The landing page must make both groups feel welcome and understood.
2. **Trust for clients = quality assurance.** Professor-verified badge, worker ratings, revision guarantee, escrow payments. Client must never feel unsafe sending money.
3. **Trust for workers = fair pay, on time.** Transparent earnings, bKash payout within 48 hrs of client approval. Workers must never feel they'll get cheated.
4. **Mobile-first responsive.** Most Bangladeshi workers access via phone. Every page must work on 360px–428px screens.
5. **Bangla-ready.** Language toggle (EN/BN). Text containers handle Bangla script.
6. **Low-bandwidth tolerant.** WebP images, lazy loading, skeleton loaders on all data-fetching pages.
7. **Clear status at all times.** Every assignment — client and worker both always know exact status. Color-coded badges everywhere.

---

## 10. Folder Structure (Next.js App Router)

```
technoLOgia/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                       — Dual-audience landing page
│   ├── (auth)/
│   │   ├── layout.tsx                 — Auth panel layout
│   │   ├── login/page.tsx
│   │   └── register/page.tsx          — Role selection: Client / Worker / School
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx                   — Platform overview
│   │   ├── assignments/page.tsx       — Assignment pipeline + matching
│   │   ├── workers/page.tsx           — Worker management + verification
│   │   ├── clients/page.tsx           — Client management
│   │   ├── payouts/page.tsx           — Payout approval queue
│   │   ├── schools/page.tsx           — School management
│   │   └── analytics/page.tsx         — Revenue analytics
│   ├── dashboard/
│   │   ├── client/
│   │   │   ├── page.tsx               — Client overview + post assignment
│   │   │   ├── assignments/page.tsx   — Assignment list & tracking
│   │   │   ├── assignments/[id]/page.tsx — Single assignment detail + demo review
│   │   │   └── expenses/page.tsx      — Spending analytics
│   │   ├── worker/
│   │   │   ├── page.tsx               — Worker overview + earnings summary
│   │   │   ├── browse/page.tsx        — Available assignment feed
│   │   │   ├── active/page.tsx        — Active assignments + submission
│   │   │   ├── earnings/page.tsx      — Earnings chart + payout history
│   │   │   └── profile/page.tsx       — Worker profile + portfolio
│   │   ├── lab/
│   │   │   ├── page.tsx               — Lab overview
│   │   │   ├── members/page.tsx       — Lab member workers list
│   │   │   ├── leaderboard/page.tsx   — Lab earnings leaderboard
│   │   │   ├── challenges/page.tsx    — Lab academic challenges
│   │   │   ├── competitions/page.tsx  — Competitions
│   │   │   └── workshops/page.tsx     — Skill workshops
│   │   └── school/
│   │       ├── page.tsx
│   │       ├── teams/page.tsx
│   │       ├── workshops/page.tsx
│   │       ├── events/page.tsx
│   │       └── achievements/page.tsx
│   └── api/
├── components/
│   ├── ui/                            — shadcn/ui components
│   ├── layout/                        — DashboardShell, Header, Footer
│   ├── landing/                       — Landing page sections (dual-audience)
│   ├── dashboard/                     — Shared dashboard components
│   └── assignment/                    — Assignment cards, bid components, status tracker
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── matching.ts                    — Assignment-to-worker matching logic
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/assets/
├── app/globals.css
├── tailwind.config.ts
└── next.config.ts
```

---

## 11. Build Phases

### Phase 1 — Foundation (Week 1–2)
- Project setup (Next.js + Tailwind + shadcn)
- Design system (Royal Blue + Yellow palette, glass-button component)
- Landing homepage — dual-audience (client CTA + worker CTA)
- Auth system (login, register with role selection: Client / Worker / School)

### Phase 2 — Client Side (Week 3–4)
- Client registration and profile
- Post assignment form (subject, type, budget, deadline, file upload)
- Assignment status tracker UI
- Demo review and remarks system
- Expense graph (Recharts)
- Payment integration (Stripe for international)

### Phase 3 — Worker Side (Week 5–6)
- Worker registration, profile, university verification flow
- Available assignments browse feed with subject-based filtering
- Bid system (place bid + proposal)
- Active assignments panel + work submission
- Earnings dashboard (Recharts)
- bKash payout request flow

### Phase 4 — Admin & Matching (Week 7–8)
- Admin dashboard overview
- Assignment pipeline kanban
- Smart matching panel (auto-suggest + manual assign)
- Worker verification queue
- Payout approval queue
- Quality control + professor verification badge
- Client and worker management views

### Phase 5 — Lab & School (Week 9–10)
- University lab dashboard (members, leaderboard, challenges, workshops)
- School dashboard (teams, events, workshops, achievements)
- Level Up / XP system for schools
- Achievement showcase

### Phase 6 — Polish & Launch (Week 11–12)
- Bangla language support (EN/BN toggle)
- Performance optimization (skeleton loaders, image optimization)
- Mobile testing (360px–428px)
- SEO and meta tags
- Deployment to Vercel

---

## 12. Important Notes for Developers

- **This is a two-sided marketplace.** Every major design decision must serve both sides — clients need confidence in quality, workers need confidence in payment. Never optimise for one at the expense of the other.
- **Royal Blue (`#00539C`) is dominant.** Sidebar headers, hero section, nav, primary buttons. It represents trust and professionalism.
- **Yellow (`#FFD662`) is the earner's color.** Earnings highlights, payout amounts, worker badges, CTA buttons on dark backgrounds. It signals reward and opportunity. Never use yellow text on white backgrounds.
- **Worker verification is the quality gate.** Unverified workers can browse but not accept paid work. The verification badge must look official and prominent.
- **Escrow model builds trust.** Client pays upfront (held in escrow), worker gets paid only after client approves. This is non-negotiable for platform trust.
- **The "Verified by Professor" badge is a premium quality signal.** Make it visually prominent — green check, professor's name, university affiliation. Clients pay a premium for verified work.
- **Earnings data is motivational content.** Show workers their earnings clearly, prominently, and in real-time. The earnings dashboard should make workers want to take more assignments.
- **Every dashboard should load with skeleton screens**, not spinners. Data must feel fast even on slow connections.
- **Assignment subject matching is the core IP.** The matching logic that connects the right Bangladeshi worker to the right international assignment is what makes the platform valuable. Invest in making it accurate.
