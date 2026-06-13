import logo from "../assets/oric-logo.png";

function Sidebar({
  collapsed,
  setCollapsed,
  active,
  setActive,
  navItems,
}) {
  return (
    <aside
      style={{
        width: collapsed ? 70 : 250,
        minWidth: collapsed ? 70 : 250,
        background: "rgba(8,18,55,0.97)",
        borderRight: "1px solid rgba(255,255,255,0.10)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "18px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <img
          src={logo}
          alt="ORIC"
          style={{
            width: 40,
            height: 40,
            objectFit: "contain",
          }}
        />

        {!collapsed && (
          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              ORIC Portal
            </div>

            <div
              style={{
                color: "#6a9fd8",
                fontSize: 11,
              }}
            >
              MUET Jamshoro
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            border: "none",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            borderRadius: 8,
            cursor: "pointer",
            padding: "6px 8px",
          }}
        >
          <i
            className={`ti ${
              collapsed
                ? "ti-chevron-right"
                : "ti-chevron-left"
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          padding: "12px 8px",
          overflowY: "auto",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "none",
              cursor: "pointer",
              padding: "12px",
              borderRadius: 12,
              marginBottom: 6,
              background:
                active === item.id
                  ? "rgba(37,99,235,0.25)"
                  : "transparent",
              color:
                active === item.id
                  ? "#60a5fa"
                  : "#9bb8dd",
            }}
          >
            <i
              className={`ti ${item.icon}`}
              style={{ fontSize: 18 }}
            />

            {!collapsed && (
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div
          style={{
            padding: 15,
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            Director ORIC
          </div>

          <div
            style={{
              color: "#b7d3ff",
              fontSize: 11,
              marginTop: 4,
            }}
          >
            Prof. Dr. Sheeraz Ahmed Memon
          </div>

          <div
            style={{
              color: "#6a9fd8",
              fontSize: 11,
              marginTop: 6,
            }}
          >
            oric@admin.muet.edu.pk
          </div>

          <div
            style={{
              color: "#6a9fd8",
              fontSize: 11,
            }}
          >
            (022) 2772280
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;