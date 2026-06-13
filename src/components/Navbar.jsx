function Topbar() {
  const today = new Date().toLocaleDateString(
    "en-PK",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 30px",
        background: "rgba(10,25,70,0.65)",
        backdropFilter: "blur(18px)",
        borderBottom:
          "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Left */}
      <div>
        <h1
          style={{
            color: "#e8f4ff",
            fontSize: "24px",
            margin: 0,
            fontWeight: 700,
          }}
        >
          MUET ORIC Dashboard
        </h1>

        <p
          style={{
            color: "#8eb7e7",
            fontSize: "13px",
            marginTop: 4,
          }}
        >
          Office of Research, Innovation &
          Commercialization
        </p>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background:
              "rgba(255,255,255,0.08)",
            border:
              "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            width: 250,
          }}
        >
          <i
            className="ti ti-search"
            style={{
              color: "#60a5fa",
            }}
          />

          <input
            type="text"
            placeholder="Search..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              width: "100%",
            }}
          />
        </div>

        {/* Date */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 12,
            background:
              "rgba(255,255,255,0.08)",
            border:
              "1px solid rgba(255,255,255,0.12)",
            color: "#d7e9ff",
            fontSize: 13,
          }}
        >
          <i
            className="ti ti-calendar"
            style={{
              color: "#60a5fa",
            }}
          />
          {today}
        </div>

        {/* Notifications */}
        <button
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border:
              "1px solid rgba(255,255,255,0.12)",
            background:
              "rgba(255,255,255,0.08)",
            color: "#60a5fa",
            cursor: "pointer",
          }}
        >
          <i className="ti ti-bell" />
        </button>

        {/* Messages */}
        <button
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border:
              "1px solid rgba(255,255,255,0.12)",
            background:
              "rgba(255,255,255,0.08)",
            color: "#60a5fa",
            cursor: "pointer",
          }}
        >
          <i className="ti ti-message" />
        </button>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 10px",
            borderRadius: 12,
            background:
              "rgba(255,255,255,0.08)",
            border:
              "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#2563eb,#60a5fa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            MT
          </div>

          <div>
            <div
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Maria Talpur
            </div>

            <div
              style={{
                color: "#8eb7e7",
                fontSize: 11,
              }}
            >
              ORIC Admin
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;