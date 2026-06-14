



import { useState, useEffect, useCallback } from "react";

/* ════════════════════════════════════════════
   COLORS
════════════════════════════════════════════ */
const C = {
  bg:        "#0e1c2f",
  sidebar:   "#0a1628",
  card:      "#0f2140",
  cardB:     "#1a3355",
  topbar:    "#0a1628",
  accent:    "#1a6ed8",
  accentL:   "#4fa3e0",
  text:      "#dceeff",
  muted:     "#5a86b0",
  success:   "#3dba6e",
  danger:    "#e85050",
  warning:   "#e8a030",
};

/* ════════════════════════════════════════════
   STATIC DATA
════════════════════════════════════════════ */
const STATS = [
  { label:"Patents",                value:"32+", color:"#4da6e8", bg:"#0d2540", icon:"🗂️" },
  { label:"Funded Projects",        value:"20+", color:"#3dbfaa", bg:"#0a2828", icon:"📁" },
  { label:"Industry Collaborators", value:"21+", color:"#9070e8", bg:"#1a1535", icon:"🏗️" },
  { label:"Intl. Collaborators",    value:"8+",  color:"#e8a030", bg:"#2a1c08", icon:"🌐" },
  { label:"Years of Excellence",    value:"60+", color:"#3dba6e", bg:"#0a2018", icon:"⭐" },
  { label:"FB Followers",           value:"5K+", color:"#e85050", bg:"#280e0e", icon:"👥" },
];

const NEWS = [
  { id:1, title:"MUET Participates in SEIC Ecosystem Roundtable 2026",         date:"Jun 9, 2026",  tag:"New",      tc:"#e85050" },
  { id:2, title:"MUET Students Win 3rd Prize – Huawei ICT Skills Competition", date:"Jun 6, 2026",  tag:"New",      tc:"#e85050" },
  { id:3, title:"MUET Faculty Secures Landmark Research Publication Milestone",date:"May 30, 2026", tag:"Update",   tc:"#4da6e8" },
  { id:4, title:"IICT'26 IEEE Conference Proceedings Now Available Online",    date:"May 1, 2026",  tag:"Research", tc:"#3dba6e" },
  { id:5, title:"ORIC Launches New Industry Linkage Program 2026",             date:"Apr 20, 2026", tag:"Program",  tc:"#a060e8" },
  { id:6, title:"MUET Signs MoU with Huawei for Research Collaboration",       date:"Mar 10, 2026", tag:"MoU",      tc:"#e8a030" },
];

const EVENTS = [
  { id:1, title:"SEIC Ecosystem Roundtable 2026",                      date:"Jun 9, 2026",  tag:"Recent",    tc:"#4da6e8" },
  { id:2, title:"NextGen Summer Camp 2026 – AI, Arduino & Electronics", date:"May 21, 2026", tag:"Camp",      tc:"#3dba6e" },
  { id:3, title:"ORIC-MUET Recruitment Drive",                         date:"May 15, 2026", tag:"Drive",     tc:"#e8c030" },
  { id:4, title:"National Innovation Challenge – MUET Chapter",        date:"Apr 10, 2026", tag:"Challenge", tc:"#a060e8" },
  { id:5, title:"Entrepreneurship Boot Camp – Batch 4",                date:"Mar 25, 2026", tag:"Camp",      tc:"#3dba6e" },
  { id:6, title:"International Research Symposium MUET 2026",          date:"Feb 14, 2026", tag:"Symposium", tc:"#4da6e8" },
];

const RESEARCH = [
  { name:"Artificial Intelligence & Data Science",  projects:8,  color:"#4da6e8" },
  { name:"ICT & Telecommunications",                projects:7,  color:"#a060e8" },
  { name:"Renewable Energy & Sustainability",        projects:6,  color:"#3dba6e" },
  { name:"Smart Agriculture & Water Management",     projects:5,  color:"#e8a030" },
  { name:"Biomedical Engineering",                   projects:4,  color:"#e85050" },
];

const COLLABS = [
  { org:"HEC Pakistan",              type:"Funding",       status:"Active",  year:"2020–Present" },
  { org:"IGNITE – National Tech Fund",type:"Research",     status:"Active",  year:"2021–Present" },
  { org:"Huawei Technologies",       type:"Industry",      status:"Active",  year:"2023–Present" },
  { org:"USAID – Pakistan",          type:"International", status:"Active",  year:"2022–Present" },
  { org:"COMSATS University",        type:"Academia",      status:"Active",  year:"2019–Present" },
  { org:"PTCL",                      type:"Industry",      status:"Ongoing", year:"2022–Present" },
  { org:"Pakistan Science Foundation",type:"Funding",      status:"Active",  year:"2020–Present" },
  { org:"NESCOM",                    type:"Research",      status:"Active",  year:"2021–Present" },
];

const ACHIEVEMENTS = [
  { year:"2024", title:"60th Founding Anniversary Celebrated",        icon:"🎓", desc:"MUET celebrates 6 decades of engineering excellence." },
  { year:"2025", title:"32+ Patents Filed & Approved",               icon:"📜", desc:"Record number of patents filed through ORIC." },
  { year:"2025", title:"IICT International Conference IEEE Published",icon:"🔬", desc:"Research proceedings indexed globally on IEEE Xplore." },
  { year:"2026", title:"SEIC Ecosystem Roundtable Hosted",           icon:"🌐", desc:"Regional innovation leaders gathered at MUET Jamshoro." },
  { year:"2026", title:"Huawei MoU Signed for AI Research",         icon:"🤝", desc:"Strategic partnership for AI & telecom research." },
  { year:"2026", title:"20+ Active Funded Projects Running",         icon:"📊", desc:"Highest count of concurrent funded projects in ORIC history." },
];

const NAV = [
  { id:"dashboard",      label:"Dashboard",        icon:"⊞", section:"OVERVIEW" },
  { id:"news",           label:"News & Updates",   icon:"📢", section:null },
  { id:"events",         label:"Events",           icon:"📅", section:null },
  { id:"collaborations", label:"Collaborations",   icon:"🤝", section:"RESEARCH" },
  { id:"research",       label:"Research Themes",  icon:"🔬", section:null },
  { id:"achievements",   label:"Achievements",     icon:"🏆", section:null },
  { id:"settings",       label:"Settings",         icon:"⚙️", section:"PROGRAMS" },
];

/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
function useNow() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function fmtDate(d) {
  return d.toLocaleDateString("en-GB", { day:"numeric", month:"long", year:"numeric" });
}
function fmtTime(d) {
  return d.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit", second:"2-digit" });
}
function greeting(d) {
  const h = d.getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

function Tag({ label, color }) {
  return (
    <span style={{
      background: color + "25", color,
      border: `1px solid ${color}50`,
      borderRadius: 5, padding: "2px 9px",
      fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
    }}>{label}</span>
  );
}

function Avatar({ initials = "SA", size = 36, bg = C.accent }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.36, fontWeight: 800, color: "#fff",
      flexShrink: 0, userSelect: "none",
    }}>{initials}</div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: C.card, border: `1px solid ${C.cardB}`,
      borderRadius: 13, ...style,
    }}>{children}</div>
  );
}

function SectionHead({ title, icon, onViewAll }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:16 }}>{icon}</span>
        <span style={{ fontWeight:700, fontSize:14, color:C.text }}>{title}</span>
      </div>
      {onViewAll && (
        <button onClick={onViewAll} style={{
          background:"none", border:"none", color:C.accentL,
          fontSize:12, cursor:"pointer",
        }}>View all →</button>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════
   SIDEBAR
════════════════════════════════════════════ */
function Sidebar({ page, setPage, collapsed, setCollapsed }) {
  const W = collapsed ? 62 : 242;
  return (
    <div style={{
      width: W, height: "100%", background: C.sidebar,
      borderRight: `1px solid ${C.cardB}`,
      display: "flex", flexDirection: "column",
      transition: "width .22s ease", flexShrink: 0,
      overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{
        display:"flex", alignItems:"center", gap:10,
        padding: collapsed ? "16px 13px" : "16px 14px",
        borderBottom: `1px solid ${C.cardB}`,
      }}>
        <div style={{
          width:36, height:36, borderRadius:8, flexShrink:0,
          background:"linear-gradient(135deg,#1a6ed8,#4da6e8)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontWeight:900, fontSize:12, color:"#fff",
        }}>OR</div>
        {!collapsed && (
          <div>
            <div style={{ fontSize:13, fontWeight:800, color:C.text, whiteSpace:"nowrap" }}>ORIC Portal</div>
            <div style={{ fontSize:9.5, color:C.muted, whiteSpace:"nowrap", letterSpacing:.8 }}>MUET JAMSHORO</div>
          </div>
        )}
        <button onClick={() => setCollapsed(c => !c)} style={{
          marginLeft:"auto", background:"none", border:"none",
          color:C.muted, fontSize:18, cursor:"pointer", flexShrink:0,
          lineHeight:1, padding:"2px 3px",
        }}>{collapsed ? "›" : "‹"}</button>
      </div>

      {/* User */}
      <div style={{
        margin:"10px 8px",
        background:"#0d1e38", border:`1px solid ${C.cardB}`,
        borderRadius:9, padding:"9px 10px",
        display:"flex", alignItems:"center", gap:9, overflow:"hidden",
      }}>
        <Avatar initials="SA" size={33} bg="#1a6ed8" />
        {!collapsed && (
          <div style={{ overflow:"hidden" }}>
            <div style={{ fontSize:12, fontWeight:700, color:C.text, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
              Dr. Syed Ahmed Shah
            </div>
            <div style={{ fontSize:10, color:C.muted, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
              oric@admin.muet.edu.pk
            </div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex:1, padding:"2px 7px", display:"flex", flexDirection:"column", gap:1, overflowY:"auto", overflowX:"hidden" }}>
        {NAV.map(item => (
          <div key={item.id}>
            {item.section && !collapsed && (
              <div style={{ fontSize:9.5, color:C.muted, padding:"11px 8px 2px", fontWeight:700, letterSpacing:1.3 }}>
                {item.section}
              </div>
            )}
            <button
              onClick={() => setPage(item.id)}
              style={{
                width:"100%", display:"flex", alignItems:"center",
                gap: collapsed ? 0 : 9,
                padding: collapsed ? "9px 0" : "9px 10px",
                justifyContent: collapsed ? "center" : "flex-start",
                background: page === item.id ? "#1a3a60" : "none",
                border:"none", borderRadius:7,
                color: page === item.id ? C.accentL : C.muted,
                fontSize:13, fontWeight: page === item.id ? 700 : 400,
                cursor:"pointer", transition:"all .12s",
              }}
            >
              <span style={{ fontSize:15, flexShrink:0 }}>{item.icon}</span>
              {!collapsed && <span style={{ whiteSpace:"nowrap" }}>{item.label}</span>}
              {!collapsed && page === item.id && (
                <div style={{ width:6, height:6, borderRadius:"50%", background:C.accentL, marginLeft:"auto" }} />
              )}
            </button>
          </div>
        ))}
      </nav>

     {/* Sign Out */}
      <div style={{ padding:"8px 7px 18px" }}>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          style={{
            width:"100%", display:"flex", alignItems:"center",
            gap: collapsed ? 0 : 9,
            padding: collapsed ? "9px 0" : "9px 10px",
            justifyContent: collapsed ? "center" : "flex-start",
            background:"none", border:"none", borderRadius:7,
            color:C.danger, fontSize:13, cursor:"pointer",
          }}
        >
          <span style={{ fontSize:15 }}>🚪</span>
          {!collapsed && <span style={{ fontWeight:600 }}>Sign Out</span>}
        </button>
      </div>

    </div> 
  );          
}             


/* ════════════════════════════════════════════
   TOPBAR  — live clock
════════════════════════════════════════════ */
function TopBar({ pageTitle, crumbs }) {
  const now = useNow();
  return (
    <div style={{
      background: C.topbar,
      borderBottom: `1px solid ${C.cardB}`,
      padding:"11px 24px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      flexShrink:0,
    }}>
      <div>
        <div style={{ fontSize:11, color:C.muted, marginBottom:1 }}>
          {crumbs.map((b, i) => (
            <span key={i}>
              {i > 0 && <span style={{ margin:"0 5px", color:C.cardB }}>›</span>}
              <span style={{ color: i === crumbs.length - 1 ? C.muted : C.accentL }}>{b}</span>
            </span>
          ))}
        </div>
        <h1 style={{ fontSize:19, fontWeight:800, color:C.text, margin:0 }}>{pageTitle}</h1>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        {/* Live date + clock */}
        <div style={{
          background:"#0d1e38", border:`1px solid ${C.cardB}`,
          borderRadius:8, padding:"6px 14px",
          display:"flex", alignItems:"center", gap:8,
        }}>
          <span style={{ fontSize:13 }}>📅</span>
          <span style={{ fontSize:12, color:C.text, fontWeight:600 }}>{fmtDate(now)}</span>
          <span style={{ fontSize:11, color:C.muted, fontFamily:"monospace" }}>{fmtTime(now)}</span>
        </div>
        <Avatar initials="SA" size={33} bg="#1a6ed8" />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   DASHBOARD PAGE
════════════════════════════════════════════ */
function DashboardPage({ setPage }) {
  const now = useNow();

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

      {/* Welcome */}
      <Card style={{ padding:"20px 24px", background:"linear-gradient(120deg,#0e2545,#122e56)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <h2 style={{ fontSize:21, fontWeight:800, margin:"0 0 5px", color:C.text }}>
              {greeting(now)}, Dr. Shah 👋
            </h2>
            <p style={{ fontSize:12.5, color:C.muted, margin:0 }}>
              Welcome to ORIC Portal · Your central hub for research, innovation &amp; collaboration at MUET Jamshoro.
            </p>
          </div>
          <div style={{
            background:"#1a3a6088", border:"1px solid #2a5080",
            borderRadius:7, padding:"4px 16px",
            fontSize:12, fontWeight:700, color:C.accentL,
          }}>Director</div>
        </div>
      </Card>

      {/* Stats */}
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        {STATS.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      {/* News + Events */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        <FeedCard title="News & Updates" icon="📢" items={NEWS} onViewAll={() => setPage("news")} />
        <FeedCard title="Events & Programs" icon="📅" items={EVENTS} onViewAll={() => setPage("events")} />
      </div>

      {/* Quick stats bar */}
      <Card style={{ padding:"16px 22px" }}>
        <SectionHead title="Research Overview" icon="📊" />
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {RESEARCH.map(r => (
            <div key={r.name} style={{ flex:"1 1 160px", minWidth:140 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                <span style={{ fontSize:11.5, color:C.muted }}>{r.name}</span>
                <span style={{ fontSize:11.5, color:r.color, fontWeight:700 }}>{r.projects}</span>
              </div>
              <div style={{ background:"#0a1628", borderRadius:5, height:5 }}>
                <div style={{ width:`${r.projects * 10}%`, height:"100%", background:r.color, borderRadius:5 }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function StatCard({ label, value, color, bg, icon }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex:"1 1 120px", minWidth:110,
        background: hov ? bg : C.card,
        border:`1px solid ${hov ? color + "90" : C.cardB}`,
        borderRadius:12, padding:"18px 15px",
        transition:"all .18s", cursor:"default",
        transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? `0 8px 22px ${color}30` : "none",
      }}
    >
      <div style={{ fontSize:24, marginBottom:7 }}>{icon}</div>
      <div style={{ fontSize:28, fontWeight:900, color, lineHeight:1 }}>{value}</div>
      <div style={{ fontSize:11.5, color:C.muted, marginTop:5 }}>{label}</div>
    </div>
  );
}

function FeedCard({ title, icon, items, onViewAll }) {
  return (
    <Card style={{ padding:"16px 18px" }}>
      <SectionHead title={title} icon={icon} onViewAll={onViewAll} />
      {items.slice(0, 3).map((item, i) => (
        <div key={item.id} style={{
          display:"flex", alignItems:"flex-start", gap:10,
          padding:"9px 0",
          borderBottom: i < 2 ? `1px solid ${C.cardB}` : "none",
        }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:item.tc, marginTop:5, flexShrink:0 }} />
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12.5, color:C.text, lineHeight:1.4, marginBottom:2 }}>{item.title}</div>
            <div style={{ fontSize:11, color:C.muted }}>{item.date}</div>
          </div>
          <Tag label={item.tag} color={item.tc} />
        </div>
      ))}
    </Card>
  );
}

/* ════════════════════════════════════════════
   NEWS PAGE
════════════════════════════════════════════ */
function NewsPage() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "New", "Update", "Research", "Program", "MoU"];
  const filtered = filter === "All" ? NEWS : NEWS.filter(n => n.tag === filter);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      {/* Filter */}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            background: filter === t ? C.accent : C.card,
            border:`1px solid ${filter === t ? C.accent : C.cardB}`,
            color: filter === t ? "#fff" : C.muted,
            borderRadius:7, padding:"5px 14px", fontSize:12, cursor:"pointer",
            fontWeight: filter === t ? 700 : 400,
          }}>{t}</button>
        ))}
      </div>
      {filtered.map(n => (
        <Card key={n.id} style={{ padding:"14px 20px", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:n.tc, flexShrink:0 }} />
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13.5, fontWeight:600, color:C.text, marginBottom:3 }}>{n.title}</div>
            <div style={{ fontSize:11, color:C.muted }}>{n.date}</div>
          </div>
          <Tag label={n.tag} color={n.tc} />
        </Card>
      ))}
      {filtered.length === 0 && (
        <div style={{ textAlign:"center", color:C.muted, padding:"40px 0", fontSize:13 }}>No items found.</div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════
   EVENTS PAGE
════════════════════════════════════════════ */
function EventsPage() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Recent", "Camp", "Drive", "Challenge", "Symposium"];
  const filtered = filter === "All" ? EVENTS : EVENTS.filter(e => e.tag === filter);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            background: filter === t ? C.accent : C.card,
            border:`1px solid ${filter === t ? C.accent : C.cardB}`,
            color: filter === t ? "#fff" : C.muted,
            borderRadius:7, padding:"5px 14px", fontSize:12, cursor:"pointer",
            fontWeight: filter === t ? 700 : 400,
          }}>{t}</button>
        ))}
      </div>
      {filtered.map(e => (
        <Card key={e.id} style={{ padding:"14px 20px", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:e.tc, flexShrink:0 }} />
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13.5, fontWeight:600, color:C.text, marginBottom:3 }}>{e.title}</div>
            <div style={{ fontSize:11, color:C.muted }}>{e.date}</div>
          </div>
          <Tag label={e.tag} color={e.tc} />
        </Card>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   COLLABORATIONS PAGE
════════════════════════════════════════════ */
function CollaborationsPage() {
  const [search, setSearch] = useState("");
  const filtered = COLLABS.filter(c =>
    c.org.toLowerCase().includes(search.toLowerCase()) ||
    c.type.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="🔍  Search collaborations..."
        style={{
          background:C.card, border:`1px solid ${C.cardB}`,
          borderRadius:8, padding:"9px 14px", color:C.text,
          fontSize:13, outline:"none", maxWidth:340,
        }}
      />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:12 }}>
        {filtered.map(c => (
          <Card key={c.org} style={{ padding:"18px 20px" }}>
            <div style={{ fontSize:14.5, fontWeight:700, color:C.text, marginBottom:6 }}>{c.org}</div>
            <div style={{ fontSize:11, color:C.muted, marginBottom:10 }}>{c.year}</div>
            <div style={{ display:"flex", gap:7 }}>
              <Tag label={c.type}   color="#4da6e8" />
              <Tag label={c.status} color={c.status === "Active" ? C.success : C.warning} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   RESEARCH PAGE
════════════════════════════════════════════ */
function ResearchPage() {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      {RESEARCH.map(r => (
        <Card key={r.name} style={{ padding:"16px 22px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
            <div style={{ fontSize:13.5, fontWeight:600, color:C.text }}>{r.name}</div>
            <div style={{ fontSize:13, color:r.color, fontWeight:800 }}>{r.projects} Projects</div>
          </div>
          <div style={{ background:"#0a1628", borderRadius:6, height:8 }}>
            <div style={{
              width:`${r.projects * 10}%`, height:"100%",
              background:r.color, borderRadius:6,
              transition:"width .6s ease",
            }} />
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   ACHIEVEMENTS PAGE
════════════════════════════════════════════ */
function AchievementsPage() {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:14 }}>
      {ACHIEVEMENTS.map(a => (
        <Card key={a.title} style={{ padding:"22px 20px" }}>
          <div style={{ fontSize:32, marginBottom:10 }}>{a.icon}</div>
          <div style={{ fontSize:11, color:C.accentL, fontWeight:700, marginBottom:5 }}>{a.year}</div>
          <div style={{ fontSize:14, fontWeight:700, color:C.text, marginBottom:6 }}>{a.title}</div>
          <div style={{ fontSize:12, color:C.muted, lineHeight:1.5 }}>{a.desc}</div>
        </Card>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   SETTINGS PAGE
════════════════════════════════════════════ */
function SettingsPage() {
  const [profile, setProfile] = useState({
    name:  "Dr. Syed Ahmed Shah",
    email: "oric@admin.muet.edu.pk",
    role:  "Director",
    phone: "+92 22 2772280 Ext. 6500",
    dept:  "Office of Research, Innovation & Commercialization",
  });
  const [pw,     setPw]     = useState({ current:"", newPw:"", confirm:"" });
  const [showPw, setShowPw] = useState({ current:false, newPw:false, confirm:false });
  const [pwErr,  setPwErr]  = useState("");
  const [pwOk,   setPwOk]   = useState("");
  const [profOk, setProfOk] = useState("");
  const [profErr,setProfErr]= useState("");

  const inp = {
    background:"#0a1628", border:`1px solid ${C.cardB}`,
    borderRadius:8, padding:"10px 13px", color:C.text,
    fontSize:13, width:"100%", outline:"none",
  };
  const lbl = { fontSize:11.5, color:C.muted, display:"block", marginBottom:5 };
  const box = {
    background:C.card, border:`1px solid ${C.cardB}`,
    borderRadius:13, padding:22,
    display:"flex", flexDirection:"column", gap:15,
  };

  function saveProfile() {
    setProfErr("");
    if (!profile.name.trim())  return setProfErr("Name cannot be empty.");
    if (!profile.email.includes("@")) return setProfErr("Enter a valid email.");
    setProfOk("✅ Profile updated successfully.");
    setTimeout(() => setProfOk(""), 3000);
  }

  function updatePw() {
    setPwErr(""); setPwOk("");
    if (!pw.current)              return setPwErr("Enter your current password.");
    if (pw.newPw.length < 6)      return setPwErr("New password must be at least 6 characters.");
    if (pw.newPw !== pw.confirm)  return setPwErr("Passwords do not match.");
    setPwOk("✅ Password updated successfully!");
    setPw({ current:"", newPw:"", confirm:"" });
    setTimeout(() => setPwOk(""), 3000);
  }

  const Alert = ({ msg, color }) => (
    <div style={{ background:color+"22", color, borderRadius:8, padding:"9px 14px", fontSize:12.5 }}>{msg}</div>
  );

  const PwInput = ({ label, fkey, ph }) => (
    <div>
      <label style={lbl}>{label}</label>
      <div style={{ position:"relative" }}>
        <input
          type={showPw[fkey] ? "text" : "password"}
          style={{ ...inp, paddingRight:40 }}
          placeholder={ph}
          value={pw[fkey]}
          onChange={e => setPw(p => ({ ...p, [fkey]: e.target.value }))}
          onKeyDown={e => e.key === "Enter" && updatePw()}
        />
        <button
          onClick={() => setShowPw(s => ({ ...s, [fkey]: !s[fkey] }))}
          style={{
            position:"absolute", right:10, top:"50%", transform:"translateY(-50%)",
            background:"none", border:"none", color:C.muted, cursor:"pointer", fontSize:15,
          }}
        >{showPw[fkey] ? "🙈" : "👁️"}</button>
      </div>
    </div>
  );

  return (
    <div style={{ display:"flex", gap:20, flexWrap:"wrap", alignItems:"flex-start" }}>

      {/* Left col */}
      <div style={{ flex:"1 1 300px", display:"flex", flexDirection:"column", gap:18 }}>

        {/* Profile */}
        <div style={box}>
          <div style={{ fontSize:14, fontWeight:700, color:C.text, borderBottom:`1px solid ${C.cardB}`, paddingBottom:11 }}>
            👤 Profile Information
          </div>
          {[
            ["Full Name",          "name",  "text"],
            ["Email Address",      "email", "email"],
            ["Role / Designation", "role",  "text"],
            ["Phone",              "phone", "text"],
            ["Department",         "dept",  "text"],
          ].map(([label, key, type]) => (
            <div key={key}>
              <label style={lbl}>{label}</label>
              <input
                type={type} style={inp}
                value={profile[key]}
                onChange={e => setProfile(p => ({ ...p, [key]: e.target.value }))}
              />
            </div>
          ))}
          {profErr && <Alert msg={"⚠️ " + profErr} color={C.danger} />}
          {profOk  && <Alert msg={profOk}           color={C.success} />}
          <button
            onClick={saveProfile}
            style={{
              background:C.accent, color:"#fff", border:"none",
              borderRadius:8, padding:"10px 22px", fontWeight:700,
              fontSize:13, cursor:"pointer", alignSelf:"flex-start",
            }}
          >Save Changes</button>
        </div>

        {/* Password */}
        <div style={box}>
          <div style={{ fontSize:14, fontWeight:700, color:C.text, borderBottom:`1px solid ${C.cardB}`, paddingBottom:11 }}>
            🔒 Update Password
          </div>
          <PwInput label="Current Password" fkey="current" ph="Enter current password" />
          <PwInput label="New Password"     fkey="newPw"   ph="Minimum 6 characters" />
          <PwInput label="Confirm Password" fkey="confirm" ph="Re-enter new password" />
          {pwErr && <Alert msg={"⚠️ " + pwErr} color={C.danger} />}
          {pwOk  && <Alert msg={pwOk}           color={C.success} />}
          <button
            onClick={updatePw}
            style={{
              background:"#145c28", color:"#fff", border:"none",
              borderRadius:8, padding:"10px 22px", fontWeight:700,
              fontSize:13, cursor:"pointer", alignSelf:"flex-start",
            }}
          >Update Password</button>
        </div>
      </div>

      {/* Right col */}
      <div style={{ flex:"1 1 260px", display:"flex", flexDirection:"column", gap:18 }}>

        {/* ORIC Info */}
        <div style={box}>
          <div style={{ fontSize:14, fontWeight:700, color:C.text, borderBottom:`1px solid ${C.cardB}`, paddingBottom:11 }}>
            🏛️ ORIC Contact Details
          </div>
          {[
            ["Organization",    "Office of Research, Innovation & Commercialization"],
            ["University",      "Mehran University of Engineering & Technology"],
            ["Location",        "Jamshoro, Sindh – 76062"],
            ["Official Email",  "oric@admin.muet.edu.pk"],
            ["Phone",           "+92 22 2772280 Ext. 6500"],
            ["Fax",             "+92 22 2772281"],
            ["Facebook",        "fb.com/oric.muet.edu.pk"],
          ].map(([k, v]) => (
            <div key={k} style={{ display:"flex", gap:12, fontSize:12.5 }}>
              <span style={{ color:C.muted, width:120, flexShrink:0 }}>{k}</span>
              <span style={{ color:C.text }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Portal Info */}
        <div style={box}>
          <div style={{ fontSize:14, fontWeight:700, color:C.text, borderBottom:`1px solid ${C.cardB}`, paddingBottom:11 }}>
            ℹ️ Portal Information
          </div>
          {[
            ["Version",       "v2.0.0"],
            ["Last Updated",  "June 2026"],
            ["Built With",    "React + Vite"],
            ["Role",          "Director"],
            ["Session",       "Active"],
          ].map(([k, v]) => (
            <div key={k} style={{ display:"flex", gap:12, fontSize:12.5 }}>
              <span style={{ color:C.muted, width:120, flexShrink:0 }}>{k}</span>
              <span style={{ color: v === "Active" ? C.success : C.text, fontWeight: v === "Active" ? 700 : 400 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   PAGE META
════════════════════════════════════════════ */
const PAGES = {
  dashboard:      { title:"MUET ORIC Dashboard",  crumbs:["ORIC","Dashboard"] },
  news:           { title:"News & Updates",        crumbs:["ORIC","News & Updates"] },
  events:         { title:"Events & Programs",     crumbs:["ORIC","Events & Programs"] },
  collaborations: { title:"Collaborations",        crumbs:["ORIC","Collaborations"] },
  research:       { title:"Research Themes",       crumbs:["ORIC","Research Themes"] },
  achievements:   { title:"Achievements",          crumbs:["ORIC","Achievements"] },
  settings:       { title:"Settings",              crumbs:["ORIC","Settings"] },
};

/* ════════════════════════════════════════════
   APP ROOT
════════════════════════════════════════════ */
export default function App() {
  const [page,      setPage]      = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const { title, crumbs } = PAGES[page];

  return (
    <div style={{
      display:"flex", width:"100vw", height:"100vh",
      background:C.bg,
      fontFamily:"'Segoe UI', system-ui, sans-serif",
      color:C.text,
      overflow:"hidden",
      position:"fixed", top:0, left:0,
    }}>
      <style>{`
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body, #root { width:100%; height:100%; overflow:hidden; background:#0e1c2f; }
        ::-webkit-scrollbar        { width:5px; }
        ::-webkit-scrollbar-track  { background:#0a1628; }
        ::-webkit-scrollbar-thumb  { background:#1a3355; border-radius:4px; }
        button, input { font-family:inherit; }
        input::placeholder { color:#3a6080; }
      `}</style>

      <Sidebar page={page} setPage={setPage} collapsed={collapsed} setCollapsed={setCollapsed} />

      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <TopBar pageTitle={title} crumbs={crumbs} />

        <main style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
          {page === "dashboard"      && <DashboardPage  setPage={setPage} />}
          {page === "news"           && <NewsPage />}
          {page === "events"         && <EventsPage />}
          {page === "collaborations" && <CollaborationsPage />}
          {page === "research"       && <ResearchPage />}
          {page === "achievements"   && <AchievementsPage />}
          {page === "settings"       && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}