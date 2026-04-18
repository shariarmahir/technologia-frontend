# technoLOgia — Project Specification (claude.md)

> **"If it's not now, then when? This is the time to jump."**

---

## 1. Project Overview

**technoLOgia** is a fintech-meets-edtech service platform based in Bangladesh. It operates two core verticals:

- **Service Product-1 (Academic & Content Services):** Assignments, reports, theses, lab reports, IEEE publications, research, IoT projects, content writing, corporate creatives, and AI content — delivered to international students and professionals.
- **Unique Contribution (School/College STEM Program):** Organizing science fairs, running weekly tech workshops in schools/colleges, building project clubs, teaching entrepreneurship, providing competition logistics, and gamified school profiles.

The platform connects clients (students, professionals, schools) with technoLOgia's team for work delivery, progress tracking, and educational engagement.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js** (latest, App Router) |
| Styling | **Tailwind CSS** (latest) + **shadcn/ui** components |
| Language | TypeScript |
| Auth | NextAuth.js or Clerk (role-based: admin, client, school) |
| Database | PostgreSQL (via Prisma ORM) or Supabase |
| File Storage | Supabase Storage / AWS S3 (for uploads, drive links) |
| Payments | SSLCommerz or bKash API (Bangladesh-native) |
| Deployment | Vercel |
| Charts | Recharts (for dashboards, expense graphs, revenue graphs) |
| Animations | Framer Motion (glass-effect buttons, page transitions) |

---

## 3. Design System

### 3.1 Color Palette

```
--color-primary:        #1B1464    /* Blue Void — primary brand color */
--color-primary-light:  #2E21A3    /* Blue Void lighter — hover states */
--color-primary-dark:   #0F0B3D    /* Blue Void deep — headers, nav */
--color-accent:         #7C3AED    /* Purple — accents, CTAs, badges */
--color-accent-light:   #A78BFA    /* Purple light — hover, highlights */
--color-background:     #FFFFFF    /* White — base background */
--color-surface:        #F8F9FC    /* Off-white — cards, sections */
--color-surface-alt:    #F1F0FB    /* Lavender tint — alt sections */
--color-text-primary:   #0F0B3D    /* Near-black blue — body text */
--color-text-secondary: #6B7280    /* Gray — secondary text */
--color-border:         #E5E7EB    /* Light gray — borders, dividers */
--color-success:        #10B981    /* Green — verified, completed */
--color-warning:        #F59E0B    /* Amber — pending, alerts */
--color-danger:         #EF4444    /* Red — cancelled, errors */
```

### 3.2 Typography

- **Display / Headlines:** A distinctive serif or geometric sans — avoid Inter/Roboto/Arial. Consider: `"Plus Jakarta Sans"`, `"Clash Display"`, `"Satoshi"`, or `"General Sans"` for a modern academic feel.
- **Body:** Clean readable sans-serif — `"DM Sans"`, `"Outfit"`, or `"Manrope"`.
- **Monospace (code/data):** `"JetBrains Mono"` or `"Fira Code"`.

### 3.3 Design Aesthetic

**Direction: "Academic Futurism"** — Clean, structured layouts inspired by academic papers and modern SaaS dashboards, elevated with:

- **Glass morphism buttons** — frosted glass effect with backdrop-blur, border-opacity, and subtle gradient overlays. Must feel like a polished iPhone UI element.
- **Blue Void depth** — dark-to-light blue gradients in hero sections, nav bars, and key cards to create visual depth.
- **Purple as energy** — used sparingly for CTAs, active states, badges, achievement icons, and accent elements. Never as a background fill.
- **White space is structure** — generous spacing, clear hierarchy, academic precision in grid alignment.
- **Subtle motion** — staggered fade-in on page load, smooth hover transitions on cards, micro-interactions on buttons (scale + glow on press).

### 3.4 Glass-Effect Button Spec

```css
.glass-button {
  background: rgba(27, 20, 100, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding: 12px 28px;
  color: var(--color-primary);
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(27, 20, 100, 0.1);
}
.glass-button:hover {
  background: rgba(27, 20, 100, 0.25);
  box-shadow: 0 6px 24px rgba(124, 58, 237, 0.2);
  transform: translateY(-1px);
}
```

---

## 4. User Roles & Auth

| Role | Access |
|---|---|
| **Admin** | Full platform control — revenue dashboard, assign/manage work, manage employees, manage all users |
| **Client (Student)** | Personal dashboard, order services, track work status, upload files, review demos, expense tracking |
| **School/College** | Institutional profile, team management, event tracking, achievement showcase, workshop tracking |

Each role gets a distinct dashboard layout after login. Role is determined at registration.

---

## 5. Pages & Features

### 5.1 Landing Homepage (`/`)

A modern, high-impact landing page:

- **Hero Section:** Bold headline with tagline *"If it's not now, then when?"*. Animated glass-effect CTA buttons ("Get Started" / "Explore Services"). Subtle background with geometric shapes or gradient mesh in Blue Void tones.
- **Services Overview:** Three-column card grid for the three service categories — Student, Project, Content. Each card has an icon, brief description, and glass-button link. Hover reveals detail.
- **School/College Program Section:** Dedicated section showcasing the STEM education initiative. Statistics counters (schools partnered, students impacted, workshops delivered — placeholder data). Glass card with "Partner With Us" CTA.
- **How It Works:** 3–4 step visual flow (Sign Up → Submit Request → Track Progress → Get Delivered). Horizontal timeline or step cards.
- **Quality Assurance Badge:** Section highlighting "All academic reports verified by Masum Hawlader, Assistant Professor, EEE, University of Asia Pacific." Verified checkmark icon with green accent.
- **Testimonials:** Carousel or grid of client testimonials (placeholder).
- **CTA Section:** Final call-to-action with gradient Blue Void background and glass buttons.
- **Footer:** Links, social media, contact info, copyright.

### 5.2 Admin Dashboard (`/admin`)

Protected route — admin role only.

- **Revenue Graph:** Recharts area/bar chart showing monthly revenue. Filter by time range.
- **Work Pipeline Board:** Kanban-style or table view with columns/statuses:
  - `Requested` → `Assigned` → `In Progress` → `Pending Review` → `Submitted` → `Completed` / `Cancelled`
- **Work Management Actions:**
  - Assign work (to an employee/team member)
  - View pending work requests
  - View submitted/completed work
  - Cancel work orders
- **Employee Management:** List of team members. Assign roles. Track workload.
- **Client Overview:** List of all clients with status, orders, and spending.
- **School/College Overview:** List of partnered schools. Workshop schedules. Event calendar.

### 5.3 Client Profile Dashboard (`/dashboard/client`)

Protected route — client role only.

- **Profile Header:** Student name, university, profile photo, membership status.
- **Work Status Tracker:** Visual pipeline showing current order status (Requested → Assigned → In Progress → Review → Submitted). Real-time status indicator with colored badges.
- **Demo Review Button:** For each active order — click "View Demo" to see a preview of the work. Inline viewer or modal.
- **Remarks / Feedback:** Text area to submit opinions, change requests, and notes on each order. Threaded comment style.
- **Expense Graph:** Recharts line/bar chart showing spending over time. Total spent, per-order breakdown.
- **File Upload Section:**
  - Drag-and-drop file uploader
  - Google Drive link input field
  - Google Meet link input field (for live discussions)
- **Price Bidding:** For each service request, client can set a budget or see suggested pricing. Negotiation flow between client and admin.
- **Verified Badge:** Orders that have been quality-checked by the assistant professor display a green "✓ Verified by Masum Hawlader" badge.
- **Order History:** Table of past orders with status, date, cost, and download link for deliverables.

### 5.4 School/College Profile Dashboard (`/dashboard/school`)

Protected route — school role only.

- **Profile Header:** School/college name, logo, location, partnership tier, Level badge.
- **Student Team Lists:** Roster of students in the technoLOgia program at this school. Team structure (team leader, EEE member, CSE member per team). At least 3 teams per school.
- **Event Updates:** Calendar or feed of upcoming competitions, science fairs, hackathons. Registration links (national, international, zilla-level, school-level).
- **Workshop Tracker:** Schedule of weekly workshops (2x/week, 1hr 30min each). Lesson topics, attendance, progress notes.
- **Lesson Materials:** Downloadable/viewable workshop materials. Home assessments section.
- **Alerts & Notifications:** Updates on deadlines, new events, improvements, important announcements.

#### Achievement Showcase Section (`/dashboard/school/achievements`)

This is a flagship feature for schools — a public-facing portfolio:

- **Trophy Icons:** Add winning trophy icons for each competition win. Visual trophy shelf/grid.
- **Competition Memory Records:** Log of all competitions participated in, with descriptions, dates, results.
- **Event Memory Notes:** Short descriptions of memorable events — photos, highlights.
- **Winning Team Badges:** "Team of the Month" / "Team of the Year" badge display. Badge icons that winners can symbolically "wear" (displayed on their profile).
- **Level Up System:**
  - School starts at Level 1.
  - Earn XP for: completing a competition, winning, participating in events, completing workshops.
  - Levels unlock visual badges and rank titles (e.g., "Rising Lab", "Innovation Hub", "Tech Leader").
  - Level displayed prominently on the school profile — drives inter-school competition.
- **Shareable Portfolio:** Public link that the school can share for marketing and recruitment purposes.

---

## 6. Data Models (Simplified)

```
User {
  id, name, email, password, role (admin | client | school),
  profilePhoto, university, phone, createdAt
}

Order {
  id, clientId, title, description, category (student | project | content),
  subcategory, status (requested | assigned | in_progress | pending_review | submitted | completed | cancelled),
  assignedTo, budget, finalPrice, files[], driveLink, meetLink,
  isVerified, remarks[], demoUrl, createdAt, updatedAt
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

Employee {
  id, name, role, assignedOrders[], workload
}
```

---

## 7. API Routes (App Router Structure)

```
/api/auth/[...nextauth]     — Authentication
/api/orders                 — CRUD for orders (client creates, admin manages)
/api/orders/[id]/status     — Update order status
/api/orders/[id]/remarks    — Add remarks/feedback
/api/orders/[id]/demo       — Upload/view demo
/api/orders/[id]/verify     — Mark as verified
/api/schools                — CRUD for school profiles
/api/schools/[id]/teams     — Manage teams
/api/schools/[id]/achieve   — CRUD achievements
/api/schools/[id]/level     — Calculate and update level/XP
/api/workshops              — CRUD for workshops
/api/events                 — CRUD for events
/api/employees              — Manage employees (admin only)
/api/analytics/revenue      — Revenue data for admin dashboard
/api/analytics/expenses     — Expense data for client dashboard
/api/upload                 — File upload handler
```

---

## 8. Key UX Principles

1. **Mobile-first responsive.** Many Bangladeshi users access via phone. Every page must work flawlessly on 360px–428px screens.
2. **Bangla-ready.** Design with internationalization in mind. Text containers must handle Bangla script (wider glyphs, different line height). Include language toggle (EN/BN) in nav.
3. **Low-bandwidth tolerant.** Optimize images (WebP, lazy loading). Minimize JS bundle. Skeleton loaders on all data-fetching pages.
4. **Clear status communication.** Every order, every workshop, every event — the user should never wonder "what's happening?" Color-coded status badges everywhere.
5. **Trust signals.** Verified badge, professor endorsement, achievement showcase — these build credibility in a market where trust is the biggest barrier.

---

## 9. Folder Structure (Next.js App Router)

```
technoLOgia/
├── app/
│   ├── layout.tsx                 — Root layout (fonts, theme, nav)
│   ├── page.tsx                   — Landing homepage
│   ├── login/page.tsx             — Login page
│   ├── register/page.tsx          — Registration (role selection)
│   ├── admin/
│   │   ├── layout.tsx             — Admin sidebar layout
│   │   ├── page.tsx               — Admin dashboard overview
│   │   ├── orders/page.tsx        — Work pipeline management
│   │   ├── employees/page.tsx     — Employee management
│   │   ├── schools/page.tsx       — School management
│   │   └── analytics/page.tsx     — Revenue analytics
│   ├── dashboard/
│   │   ├── client/
│   │   │   ├── layout.tsx         — Client sidebar layout
│   │   │   ├── page.tsx           — Client dashboard overview
│   │   │   ├── orders/page.tsx    — Order history & tracking
│   │   │   ├── orders/[id]/page.tsx — Single order detail
│   │   │   └── expenses/page.tsx  — Expense analytics
│   │   └── school/
│   │       ├── layout.tsx         — School sidebar layout
│   │       ├── page.tsx           — School dashboard overview
│   │       ├── teams/page.tsx     — Team management
│   │       ├── workshops/page.tsx — Workshop schedule
│   │       ├── events/page.tsx    — Events & competitions
│   │       └── achievements/page.tsx — Achievement Showcase
│   └── api/                       — API route handlers
├── components/
│   ├── ui/                        — shadcn/ui components
│   ├── layout/                    — Header, Sidebar, Footer
│   ├── landing/                   — Landing page sections
│   ├── dashboard/                 — Shared dashboard components
│   ├── glass-button.tsx           — Glass-effect button component
│   └── status-badge.tsx           — Color-coded status badges
├── lib/
│   ├── db.ts                      — Database client (Prisma)
│   ├── auth.ts                    — Auth configuration
│   └── utils.ts                   — Utility functions
├── prisma/
│   └── schema.prisma              — Database schema
├── public/
│   └── assets/                    — Static images, icons
├── styles/
│   └── globals.css                — Global styles, CSS variables
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 10. Build Phases

### Phase 1 — Foundation (Week 1–2)
- Project setup (Next.js + Tailwind + shadcn)
- Design system (colors, typography, glass-button component)
- Landing homepage (fully responsive, animated)
- Auth system (login, register, role-based routing)

### Phase 2 — Client Dashboard (Week 3–4)
- Client registration and profile
- Order creation flow with file upload
- Work status tracker UI
- Demo review and remarks system
- Expense graph

### Phase 3 — Admin Dashboard (Week 5–6)
- Admin overview with revenue chart
- Work pipeline (kanban/table)
- Assign work to employees
- Employee management
- Client and order management views

### Phase 4 — School Dashboard (Week 7–8)
- School registration and profile
- Team management
- Workshop tracker
- Event calendar with registration links
- Achievement Showcase with Level Up system

### Phase 5 — Polish & Launch (Week 9–10)
- Bangla language support
- Performance optimization
- Mobile testing and fixes
- SEO and meta tags
- Deployment to Vercel

---

## 11. Important Notes for Developers

- **Glass buttons are a signature element.** Use them for all primary CTAs across the platform. They must look and feel like premium iOS UI elements with smooth hover/press animations.
- **Blue Void (#1B1464) is dominant.** It should appear in the navbar, hero section, sidebar headers, and key accent areas. White is the canvas; blue void is the ink.
- **Purple (#7C3AED) is secondary energy.** Use for active states, notification dots, achievement badges, Level Up indicators, and select CTA variants. Never let purple compete with Blue Void for dominance.
- **The "Verified" badge is a trust anchor.** Make it visually prominent — green check, professor's name, university affiliation. It should feel official and authoritative.
- **The Level Up system for schools must feel gamified and rewarding.** Progress bars, XP counters, level-up animations, rank badges — this is what makes schools want to engage and compete.
- **Every dashboard should load with skeleton screens**, not spinners. Data should feel fast even on slow connections.