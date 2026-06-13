import { useState } from "react";
import logo from "../assets/oric-logo.png";
import oricBg from "../assets/oric-bg.jpg";

// ── NAV ──────────────────────────────────────────────────────────
const navItems = [
  { icon: "ti-layout-dashboard", label: "Dashboard",      id: "dashboard"    },
  { icon: "ti-speakerphone",     label: "News & Updates", id: "news"         },
  { icon: "ti-calendar-event",   label: "Events",         id: "events"       },
  { icon: "ti-users",            label: "Collaborations", id: "collaborations"},
  { icon: "ti-flask",            label: "Research Themes",id: "research"     },
  { icon: "ti-bulb",             label: "Innovation/BIC", id: "innovation"   },
  { icon: "ti-building-factory-2",label:"Recruitment",    id: "recruitment"  },
  { icon: "ti-school",           label: "Scholarships",   id: "scholarships" },
  { icon: "ti-trophy",           label: "Achievements",   id: "achievements" },
];

// ── STATS — 100% from oric.muet.edu.pk ───────────────────────────
const stats = [
  { icon: "ti-certificate",         label: "Patents",               value: "32+", color: "stat-blue"   },
  { icon: "ti-report-money",        label: "Funded Projects",       value: "20+", color: "stat-teal"   },
  { icon: "ti-building-community",  label: "Industry Collaborators",value: "21+", color: "stat-purple" },
  { icon: "ti-world",               label: "Intl. Collaborators",   value: "8+",  color: "stat-amber"  },
  { icon: "ti-star",                label: "Years of Excellence",   value: "60+", color: "stat-green"  },
  { icon: "ti-users",               label: "FB Followers",          value: "5K+", color: "stat-coral"  },
];

// ── SECTION DATA — only real info from FB page + website ─────────
const sectionData = {

  news: {
    icon: "ti-speakerphone", title: "News & Updates",
    colorKey: "coral", dot: "#ff6366",
    items: [
      {
        title: "MUET Participates in SEIC Ecosystem Roundtable 2026",
        meta:  "Jun 9, 2026 · Prof. Dr. Sheeraz Ahmed Memon (Director ORIC) & Director BIC attended",
        badge: "New",
      },
      {
        title: "MUET Students Win 3rd Prize – Huawei ICT Skills Competition Global Finals 2025–26",
        meta:  "Jun 6, 2026 · Remarkable display of talent by MUET students globally",
        badge: "New",
      },
      {
        title: "MUET Faculty Congratulated on Research Publication Milestone",
        meta:  "May 30, 2026 · Distinguished faculty members celebrated by ORIC",
        badge: "Update",
      },
      {
        title: "MUET–Sapienza University of Rome Dialogue – EU-Funded Capacity Building",
        meta:  "May 30, 2026 · Focus: Low-Carbon & Resilient Infrastructure",
        badge: "New",
      },
      {
        title: "MUET Maintains X Category – HEC ORIC Validation Report 2024–2025",
        meta:  "May 23, 2026 · Highest ORIC category reflecting research & innovation culture",
        badge: "Official",
      },
      {
        title: "NextGen Summer Camp 2026 Announced – AI, Arduino & Electronics",
        meta:  "May 21, 2026 · MUET Jamshoro · For school & college students",
        badge: "Announced",
      },
      {
        title: "ORIC–MUET Recruitment Drive Announcement",
        meta:  "May 20, 2026 · New positions open at ORIC MUET",
        badge: "Hiring",
      },
      {
        title: "Prof. Dr. Mujibuddin Memon Receives Lifetime Achievement Award",
        meta:  "May 18, 2026 · Former Meritorious Professor & Principal MUET Khairpur Campus",
        badge: "Award",
      },
      {
        title: "Prof. Dr. Rasool Bux Mahar Receives Lifetime Achievement Award",
        meta:  "May 18, 2026 · Vice Chancellor BBSUTSD Khairpur Mirs",
        badge: "Award",
      },
      {
        title: "Engr. Prof. Dr. Aneel Kumar – International Recognition Announced",
        meta:  "May 14, 2026 · Pro-Vice Chancellor MUET congratulated by ORIC",
        badge: "Award",
      },
      {
        title: "Faculty Research Publication Milestone Celebrated",
        meta:  "May 13, 2026 · MUET faculty members achieve research excellence milestone",
        badge: "Update",
      },
      {
        title: "MUET Explores Strategic Collaboration with Pakistan Machine Tool Factory",
        meta:  "May 12, 2026 · High-level meeting at Vice Chancellor's office",
        badge: "Meeting",
      },
      {
        title: "HEC NRPU Research Grants Secured by MUET Faculty",
        meta:  "May 12, 2026 · Prestigious HEC NRPU grants awarded to distinguished faculty",
        badge: "Funded",
      },
      {
        title: "Recruitment Drive with Cybernet Pakistan Hosted at MUET",
        meta:  "May 11, 2026 · Organized by ORIC MUET for students",
        badge: "Drive",
      },
      {
        title: "Researchers of MUET Congratulated on Publication Achievement",
        meta:  "May 10, 2026 · ORIC celebrates research excellence",
        badge: "Update",
      },
    ],
  },

  events: {
    icon: "ti-calendar-event", title: "Events & Programs",
    colorKey: "blue", dot: "#388bff",
    items: [
      {
        title: "SEIC Ecosystem Roundtable 2026",
        meta:  "Jun 9, 2026 · ORIC & BIC MUET represented by Director",
        badge: "Recent",
      },
      {
        title: "NextGen Summer Camp 2026 – AI, Arduino & Electronics",
        meta:  "May 21, 2026 · MUET Jamshoro · School & college students",
        badge: "Camp",
      },
      {
        title: "ORIC–MUET Recruitment Drive",
        meta:  "May 20, 2026 · Open positions announced",
        badge: "Drive",
      },
      {
        title: "Faculty Development Workshop – Dept. of Basic Sciences & Related Studies",
        meta:  "May 6–7, 2026 · First session conducted · ORIC organized",
        badge: "Workshop",
      },
      {
        title: "Seminar on MEXT Government Scholarship for Pakistani Students",
        meta:  "May 5, 2026 · Hybrid mode · Japanese Govt scholarship information",
        badge: "Seminar",
      },
      {
        title: "Recruitment Drive – PMLTC (Pak Matiari-Lahore Transmission Company)",
        meta:  "May 5, 2026 · Facilitated by ORIC MUET",
        badge: "Drive",
      },
      {
        title: "PHC Job Fair & Education Expo 4.0",
        meta:  "May 5, 2026 · Pakistan Hindu Council · MUET participated",
        badge: "Expo",
      },
      {
        title: "MUET–NIC Hyderabad Collaboration Signing",
        meta:  "May 5, 2026 · National Incubation Center · AI Era Entrepreneur Educators",
        badge: "Signing",
      },
      {
        title: "Recruitment Drive – Cybernet Pakistan at MUET",
        meta:  "May 11, 2026 · Hosted by ORIC for MUET students",
        badge: "Drive",
      },
      {
        title: "SINCERE Research Centre Launch",
        meta:  "Apr 30, 2026 · Smart Sustainable Infrastructure Research Centre · MUET",
        badge: "Launch",
      },
    ],
  },

  collaborations: {
    icon: "ti-users", title: "Collaborations",
    colorKey: "teal", dot: "#00d4aa",
    items: [
      {
        title: "Sapienza University of Rome, Italy",
        meta:  "EU-Funded Capacity Building · Low-Carbon & Resilient Infrastructure · May 2026",
        badge: "Active",
      },
      {
        title: "Pakistan Machine Tool Factory (PMTF)",
        meta:  "Strategic collaboration · High-level meeting with VC MUET · May 12, 2026",
        badge: "Active",
      },
      {
        title: "National Incubation Center (NIC) Hyderabad",
        meta:  "AI Entrepreneur Educators program · May 5, 2026",
        badge: "MoU",
      },
      {
        title: "Cybernet Pakistan",
        meta:  "Industry-academia recruitment drive for MUET students · May 2026",
        badge: "Active",
      },
      {
        title: "Pak Matiari-Lahore Transmission Company (PMLTC)",
        meta:  "Recruitment drive · industry-academia collaboration · May 2026",
        badge: "Active",
      },
      {
        title: "Huawei Pakistan",
        meta:  "ICT Skills Competition · MUET students won 3rd prize globally · 2025–26",
        badge: "Active",
      },
      {
        title: "Pakistan Hindu Council (PHC)",
        meta:  "PHC Job Fair & Education Expo 4.0 · MUET represented",
        badge: "Active",
      },
      {
        title: "HEC – Higher Education Commission Pakistan",
        meta:  "NRPU Research Grants · ORIC Validation · X Category · Ongoing",
        badge: "Official",
      },
      {
        title: "SEIC – Sindh Entrepreneurship & Innovation Council",
        meta:  "Ecosystem Roundtable 2026 · ORIC & BIC MUET represented",
        badge: "Active",
      },
      {
        title: "21+ Industry Collaborators (Total)",
        meta:  "As reported on oric.muet.edu.pk · Bridging academia and industry",
        badge: "Ongoing",
      },
    ],
  },

  research: {
    icon: "ti-flask", title: "Key Research Themes",
    colorKey: "purple", dot: "#a57dff",
    items: [
      {
        title: "Societal Benefits",
        meta:  "Research focused on improving quality of life and addressing social challenges",
        badge: "Theme",
      },
      {
        title: "Infrastructure Development",
        meta:  "Innovative solutions for sustainable and resilient urban and rural infrastructure",
        badge: "Theme",
      },
      {
        title: "Expansion of Endowment Funds",
        meta:  "Financial models and strategies to support long-term research sustainability",
        badge: "Theme",
      },
      {
        title: "Promoting Creativity and Innovation",
        meta:  "Fostering creative thinking and breakthrough innovations across disciplines",
        badge: "Theme",
      },
      {
        title: "Implementation of Cutting-Edge Technology",
        meta:  "Development and application of advanced technologies in various sectors",
        badge: "Theme",
      },
      {
        title: "Patent Developments",
        meta:  "From ideation to commercialization of patented technologies · 32+ patents filed",
        badge: "Theme",
      },
      {
        title: "SINCERE – Smart Sustainable Infrastructure Research Centre",
        meta:  "Launched Apr 30, 2026 · Led by Prof. Dr. Sheeraz Ahmed Memon, Director ORIC",
        badge: "Active",
      },
      {
        title: "HEC NRPU Funded Research Projects",
        meta:  "20+ funded projects · Multiple faculty members awarded May 2026",
        badge: "Funded",
      },
      {
        title: "EU-Funded Low-Carbon & Resilient Infrastructure Research",
        meta:  "In collaboration with Sapienza University of Rome, Italy",
        badge: "Funded",
      },
      {
        title: "International Research Publications",
        meta:  "MUET faculty celebrated for research publications · May 10 & 13, 2026",
        badge: "Active",
      },
    ],
  },

  innovation: {
    icon: "ti-bulb", title: "Innovation & BIC",
    colorKey: "blue", dot: "#388bff",
    items: [
      {
        title: "Business Incubation Center (BIC) – MUET",
        meta:  "HEC-funded · Consortium led by MUET · Agreement signed at Dawood University, Karachi (2022)",
        badge: "Active",
      },
      {
        title: "SINCERE – Smart Sustainable Infrastructure Research Centre",
        meta:  "Launched Apr 30, 2026 · Led by Prof. Dr. Sheeraz Ahmed Memon",
        badge: "New",
      },
      {
        title: "MUET–NIC Hyderabad: Entrepreneur Educators in the AI Era",
        meta:  "Strategic collaboration signed May 5, 2026 · Innovation ecosystem strengthened",
        badge: "MoU",
      },
      {
        title: "SEIC Ecosystem Roundtable 2026",
        meta:  "Jun 9, 2026 · Startup & innovation ecosystem discussions · ORIC & BIC attended",
        badge: "Active",
      },
      {
        title: "NextGen Summer Camp 2026 – AI, Arduino & Electronics",
        meta:  "May 21, 2026 · Youth innovation for school & college students · MUET Jamshoro",
        badge: "Running",
      },
      {
        title: "32+ Patent Portfolio",
        meta:  "Ongoing pipeline from ideation to commercialization of patented technologies",
        badge: "Active",
      },
      {
        title: "Huawei ICT Skills Competition – MUET 3rd Prize Globally",
        meta:  "2025–26 Global Finals · MUET students recognized internationally",
        badge: "Won",
      },
      {
        title: "EU-Funded Capacity Building for Low-Carbon Infrastructure",
        meta:  "Sapienza University Rome collaboration · May 30, 2026",
        badge: "Funded",
      },
      {
        title: "Pakistan Machine Tool Factory – Technology Collaboration",
        meta:  "Strategic manufacturing & technology collaboration · May 12, 2026",
        badge: "Active",
      },
      {
        title: "HEC X Category – ORIC Validation 2024–2025",
        meta:  "Highest category · Reflects growing culture of research & innovation at MUET",
        badge: "Achieved",
      },
    ],
  },

  recruitment: {
    icon: "ti-building-factory-2", title: "Recruitment & Job Drives",
    colorKey: "green", dot: "#34c759",
    items: [
      {
        title: "ORIC–MUET Internal Recruitment Drive",
        meta:  "May 20, 2026 · New positions open at ORIC MUET",
        badge: "Hiring",
      },
      {
        title: "Cybernet Pakistan Recruitment Drive at MUET",
        meta:  "May 11, 2026 · Hosted by ORIC for MUET students",
        badge: "Completed",
      },
      {
        title: "PMLTC (Pak Matiari-Lahore Transmission Co.) Recruitment Drive",
        meta:  "May 5, 2026 · Facilitated by ORIC MUET",
        badge: "Completed",
      },
      {
        title: "PHC Job Fair & Education Expo 4.0",
        meta:  "May 5, 2026 · Pakistan Hindu Council · MUET participated",
        badge: "Completed",
      },
      {
        title: "SEIC Ecosystem Roundtable 2026 – Career Opportunities",
        meta:  "Jun 9, 2026 · Industry linkage for MUET graduates",
        badge: "Active",
      },
      {
        title: "NextGen Summer Camp 2026 – Student Participation",
        meta:  "May 21, 2026 · AI, Arduino & Electronics · School & college students",
        badge: "Open",
      },
      {
        title: "HEC-Funded Project Research Positions",
        meta:  "20+ funded projects across MUET · Research assistant vacancies",
        badge: "Open",
      },
      {
        title: "SINCERE Research Centre – New Openings",
        meta:  "Smart Sustainable Infrastructure Research Centre · Apr 2026",
        badge: "New",
      },
      {
        title: "BIC Startup Program – Student Entrepreneurs",
        meta:  "Business Incubation Center MUET · HEC-funded consortium",
        badge: "Open",
      },
      {
        title: "Faculty Development Workshop Facilitators",
        meta:  "May 6–7, 2026 · Basic Sciences & Related Studies Dept. · ORIC organized",
        badge: "Completed",
      },
    ],
  },

  scholarships: {
    icon: "ti-school", title: "Scholarships & Grants",
    colorKey: "amber", dot: "#f5a623",
    items: [
      {
        title: "MEXT Government Scholarship – Japan",
        meta:  "Seminar held May 5, 2026 (hybrid) · Information session for Pakistani students",
        badge: "Info",
      },
      {
        title: "HEC NRPU Research Grants",
        meta:  "Prestigious grants secured by MUET faculty · Announced May 12, 2026",
        badge: "Awarded",
      },
      {
        title: "HEC Need-Based Scholarships",
        meta:  "HEC Pakistan · Undergraduate & Postgraduate · Ongoing program",
        badge: "Open",
      },
      {
        title: "HEC Indigenous PhD Scholarship",
        meta:  "Full funding · PhD programs · HEC Pakistan · Ongoing",
        badge: "Open",
      },
      {
        title: "EU-Funded Capacity Building Grant",
        meta:  "Via Sapienza University Rome collaboration · Low-Carbon Infrastructure",
        badge: "Available",
      },
      {
        title: "HEC ORIC X Category Research Funding",
        meta:  "MUET maintains highest X Category · Maximum research funding tier",
        badge: "Active",
      },
      {
        title: "MUET Endowment Fund Scholarships",
        meta:  "Long-term sustainability program · Internal MUET funding",
        badge: "Open",
      },
      {
        title: "International Fellowships via 8+ Intl. Collaborators",
        meta:  "Exchange & research fellowships from international partner institutions",
        badge: "Various",
      },
      {
        title: "Industry-Sponsored Opportunities (21+ Partners)",
        meta:  "Cybernet, PMLTC & 21+ industry collaborators · Student sponsorships",
        badge: "Various",
      },
      {
        title: "BIC HEC Consortium Project Funding",
        meta:  "Business Incubation Center · HEC-funded startup & innovation grants",
        badge: "Active",
      },
    ],
  },

  achievements: {
    icon: "ti-trophy", title: "Achievements & Awards",
    colorKey: "amber", dot: "#f5a623",
    items: [
      {
        title: "HEC ORIC X Category – Validation Report 2024–2025",
        meta:  "May 23, 2026 · Highest category · Reflects culture of research & innovation",
        badge: "Top",
      },
      {
        title: "MUET Students – 3rd Prize at Huawei ICT Skills Competition Global Finals",
        meta:  "2025–26 · Global recognition for MUET talent",
        badge: "Global",
      },
      {
        title: "Prof. Dr. Mujibuddin Memon – Lifetime Achievement Award",
        meta:  "May 18, 2026 · Former Meritorious Professor & Principal MUET Khairpur Campus",
        badge: "Award",
      },
      {
        title: "Prof. Dr. Rasool Bux Mahar – Lifetime Achievement Award",
        meta:  "May 18, 2026 · Vice Chancellor BBSUTSD Khairpur Mirs",
        badge: "Award",
      },
      {
        title: "Engr. Prof. Dr. Aneel Kumar – International Recognition",
        meta:  "May 14, 2026 · Pro-Vice Chancellor MUET",
        badge: "Award",
      },
      {
        title: "32+ Patents Filed & Commercialized",
        meta:  "Ongoing · ORIC MUET intellectual property portfolio",
        badge: "Patents",
      },
      {
        title: "20+ HEC-Funded Research Projects",
        meta:  "Active funded projects across departments at MUET",
        badge: "Funded",
      },
      {
        title: "21+ Industry Collaborators Established",
        meta:  "Strong industry-academia linkage · Source: oric.muet.edu.pk",
        badge: "Active",
      },
      {
        title: "8+ International Collaborators",
        meta:  "Global partnerships including Sapienza Rome, Huawei & others",
        badge: "Global",
      },
      {
        title: "60+ Years of Engineering Excellence at MUET",
        meta:  "Decades of contribution to Pakistan's engineering & technology",
        badge: "Legacy",
      },
    ],
  },
};

// ── COLOR MAPS ────────────────────────────────────────────────────
const colorMap = {
  blue:   { bg: "rgba(37,99,235,0.18)",    color: "#60a5fa" },
  teal:   { bg: "rgba(6,182,212,0.16)",    color: "#22d3ee" },
  purple: { bg: "rgba(124,58,237,0.16)",   color: "#a78bfa" },
  amber:  { bg: "rgba(245,158,11,0.16)",   color: "#fbbf24" },
  green:  { bg: "rgba(16,185,129,0.16)",   color: "#34d399" },
  coral:  { bg: "rgba(239,68,68,0.16)",    color: "#f87171" },
};

const statColors = {
  "stat-blue":   { bg: "rgba(37,99,235,0.18)",   ic: "rgba(37,99,235,0.28)",   c: "#60a5fa" },
  "stat-teal":   { bg: "rgba(6,182,212,0.15)",   ic: "rgba(6,182,212,0.25)",   c: "#22d3ee" },
  "stat-purple": { bg: "rgba(124,58,237,0.15)",  ic: "rgba(124,58,237,0.25)",  c: "#a78bfa" },
  "stat-amber":  { bg: "rgba(245,158,11,0.15)",  ic: "rgba(245,158,11,0.25)",  c: "#fbbf24" },
  "stat-green":  { bg: "rgba(16,185,129,0.15)",  ic: "rgba(16,185,129,0.25)",  c: "#34d399" },
  "stat-coral":  { bg: "rgba(239,68,68,0.15)",   ic: "rgba(239,68,68,0.25)",   c: "#f87171" },
};

// ── SECTION FULL VIEW ─────────────────────────────────────────────
function SectionView({ sectionKey }) {
  const data = sectionData[sectionKey];
  if (!data) return null;
  const cm = colorMap[data.colorKey];
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
        <i className={`ti ${data.icon}`} style={{ fontSize:22, color:cm.color }}></i>
        <h2 style={{ fontSize:18, fontWeight:700, color:"#e8f4ff", margin:0 }}>{data.title}</h2>
        <span style={{ fontSize:12, background:cm.bg, color:cm.color, padding:"3px 10px", borderRadius:20 }}>
          {data.items.length} Items
        </span>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {data.items.map((item, i) => (
          <div key={i}
            style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(10,25,70,0.42)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:12, padding:"14px 18px", backdropFilter:"blur(14px)", cursor:"pointer", transition:"background 0.18s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(20,50,120,0.55)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(10,25,70,0.42)"}
          >
            <span style={{ minWidth:28, height:28, borderRadius:"50%", background:`${data.dot}22`, border:`1.5px solid ${data.dot}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:data.dot, flexShrink:0 }}>
              {i + 1}
            </span>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:14, fontWeight:600, color:"#d0e8ff", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.title}</div>
              <div style={{ fontSize:12, color:"#6a9fd8", marginTop:3 }}>{item.meta}</div>
            </div>
            <span style={{ fontSize:11, fontWeight:600, padding:"4px 12px", borderRadius:20, background:cm.bg, color:cm.color, whiteSpace:"nowrap" }}>
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────
function Dashboard() {
  const [active, setActive]       = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display:"flex", height:"100vh", width:"100vw", overflow:"hidden", fontFamily:"'Inter', sans-serif" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width:collapsed?68:240, minWidth:collapsed?68:240, background:"rgba(8,18,55,0.97)", borderRight:"1px solid rgba(255,255,255,0.10)", display:"flex", flexDirection:"column", transition:"width 0.25s, min-width 0.25s", zIndex:100, overflow:"hidden", flexShrink:0 }}>

        {/* Logo row */}
        <div style={{ display:"flex", alignItems:"center", gap:10, padding:"18px 12px 14px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <img src={logo} alt="ORIC Logo" style={{ width:36, height:36, borderRadius:8, objectFit:"contain", flexShrink:0 }} />
          {!collapsed && (
            <div style={{ flex:1, overflow:"hidden" }}>
              <div style={{ fontSize:13, fontWeight:700, color:"#e8f0ff", whiteSpace:"nowrap" }}>ORIC Portal</div>
              <div style={{ fontSize:10, color:"#5a7ab0", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:1 }}>MUET Jamshoro</div>
            </div>
          )}
          <button onClick={() => setCollapsed(!collapsed)} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:6, color:"#5a7ab0", cursor:"pointer", padding:"4px 6px", fontSize:14, display:"flex", alignItems:"center", flexShrink:0 }}>
            <i className={`ti ${collapsed ? "ti-chevron-right" : "ti-chevron-left"}`}></i>
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ flex:1, padding:"10px 6px", display:"flex", flexDirection:"column", gap:2, overflowY:"auto" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActive(item.id)}
              style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 10px", borderRadius:8, background:active===item.id?"rgba(37,99,235,0.20)":"none", border:"none", color:active===item.id?"#60a5fa":"#7a9ec8", cursor:"pointer", fontSize:13, fontWeight:500, fontFamily:"'Inter',sans-serif", textAlign:"left", transition:"all 0.18s", whiteSpace:"nowrap", position:"relative" }}
              onMouseEnter={e => { if(active!==item.id) e.currentTarget.style.background="rgba(255,255,255,0.07)"; }}
              onMouseLeave={e => { if(active!==item.id) e.currentTarget.style.background="none"; }}
            >
              <i className={`ti ${item.icon}`} style={{ fontSize:18, flexShrink:0 }}></i>
              {!collapsed && <span style={{ flex:1 }}>{item.label}</span>}
              {active===item.id && <span style={{ width:4, height:18, background:"#2563eb", borderRadius:2, position:"absolute", right:-1, top:"50%", transform:"translateY(-50%)" }}></span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div style={{ padding:"10px 14px", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize:11, color:"#60a5fa", marginBottom:2, fontWeight:600 }}>Director: Prof. Dr. Sheeraz Ahmed Memon</div>
            <div style={{ fontSize:10, color:"#4a7ab0" }}>oric@admin.muet.edu.pk</div>
            <div style={{ fontSize:10, color:"#4a7ab0" }}>(022) 2772280</div>
          </div>
        )}
      </aside>

      {/* ── MAIN ── */}
      <main style={{ flex:1, overflowY:"auto", position:"relative", backgroundImage:`linear-gradient(160deg, rgba(10,30,80,0.70) 0%, rgba(15,50,110,0.58) 50%, rgba(8,25,65,0.65) 100%), url(${oricBg})`, backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed" }}>

        {/* Sticky topbar */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 32px 14px", borderBottom:"1px solid rgba(255,255,255,0.10)", background:"rgba(12,28,75,0.55)", backdropFilter:"blur(18px)", position:"sticky", top:0, zIndex:50 }}>
          <div>
            <h1 style={{ fontSize:22, fontWeight:700, color:"#e8f4ff", letterSpacing:"-0.3px", margin:0 }}>MUET ORIC Dashboard</h1>
            <p style={{ fontSize:13, color:"#90b8e8", margin:"2px 0 0" }}>Office of Research, Innovation &amp; Commercialization · Jamshoro, Sindh 76062</p>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#90b8e8", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:8, padding:"6px 12px" }}>
              <i className="ti ti-calendar" style={{ fontSize:15, color:"#388bff" }}></i>
              <span>{new Date().toLocaleDateString("en-PK",{ day:"numeric", month:"long", year:"numeric" })}</span>
            </div>
            <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#1a5fc8,#388bff)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#fff" }}>SM</div>
          </div>
        </div>

        <div style={{ padding:"24px 32px 40px" }}>

          {/* ── STAT CARDS (real numbers from oric.muet.edu.pk) ── */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:14, marginBottom:28 }}>
            {stats.map((s, i) => {
              const col = statColors[s.color];
              return (
                <div key={i}
                  style={{ background:col.bg, border:"1px solid rgba(255,255,255,0.13)", borderRadius:14, padding:"16px 14px", display:"flex", alignItems:"center", gap:10, backdropFilter:"blur(14px)", cursor:"pointer", transition:"transform 0.18s" }}
                  onMouseEnter={e => e.currentTarget.style.transform="translateY(-3px)"}
                  onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}
                >
                  <div style={{ width:40, height:40, borderRadius:10, background:col.ic, display:"flex", alignItems:"center", justifyContent:"center", fontSize:19, color:col.c, flexShrink:0 }}>
                    <i className={`ti ${s.icon}`}></i>
                  </div>
                  <div>
                    <div style={{ fontSize:19, fontWeight:700, color:col.c, lineHeight:1.1 }}>{s.value}</div>
                    <div style={{ fontSize:10.5, fontWeight:500, color:col.c, opacity:0.72, marginTop:3, lineHeight:1.3 }}>{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── DASHBOARD overview or section detail ── */}
          {active === "dashboard" ? (
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {["news","events","collaborations","achievements"].map((key) => {
                const data = sectionData[key];
                const cm   = colorMap[data.colorKey];
                return (
                  <div key={key} style={{ background:"rgba(10,25,70,0.45)", border:"1px solid rgba(255,255,255,0.13)", borderRadius:16, backdropFilter:"blur(16px)", overflow:"hidden" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, padding:"14px 18px 11px", borderBottom:"1px solid rgba(255,255,255,0.10)" }}>
                      <i className={`ti ${data.icon}`} style={{ fontSize:17, color:cm.color }}></i>
                      <h2 style={{ flex:1, fontSize:14, fontWeight:600, color:"#c8dcf8", margin:0 }}>{data.title}</h2>
                      <button onClick={() => setActive(key)} style={{ background:"none", border:"none", fontSize:12, color:"#388bff", cursor:"pointer", fontFamily:"'Inter',sans-serif", display:"flex", alignItems:"center", gap:3, padding:0 }}>
                        View all <i className="ti ti-arrow-right" style={{ fontSize:13 }}></i>
                      </button>
                    </div>
                    <div>
                      {data.items.slice(0,5).map((item, i) => (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 18px", borderBottom:i<4?"1px solid rgba(255,255,255,0.03)":"none" }}>
                          <span style={{ width:8, height:8, borderRadius:"50%", background:data.dot, flexShrink:0 }}></span>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontSize:13, fontWeight:500, color:"#c8dcf8", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.title}</div>
                            <div style={{ fontSize:11, color:"#6a9fd8", marginTop:2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.meta}</div>
                          </div>
                          <span style={{ fontSize:11, fontWeight:600, padding:"3px 9px", borderRadius:20, background:cm.bg, color:cm.color, whiteSpace:"nowrap" }}>{item.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <SectionView sectionKey={active} />
          )}

        </div>
      </main>
    </div>
  );
}

export default Dashboard;