function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "12px 18px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "14px",
          outline: "none",
          letterSpacing: "0.3px",
          boxSizing: "border-box",
          transition: "border 0.2s",
          fontFamily: "inherit",
        }}
        onFocus={e => e.target.style.border = "1px solid rgba(0,255,136,0.4)"}
        onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
      />
    </div>
  );
}

export default SearchBar;
