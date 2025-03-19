const InstagramReel = ({ reelId }) => {
  if (!reelId) {
    return null; // Caso reelId esteja vazio, não renderiza nada
  }

  const reelInstagramUrl = `https://www.instagram.com/reel/${reelId}/?utm_source=ig_embed&utm_campaign=loading`;

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={reelInstagramUrl}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "400px",
        minWidth: "200px",
        padding: "0",
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={reelInstagramUrl}
          style={{
            background: "#FFFFFF",
            lineHeight: "0",
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver esse reel no Instagram
        </a>
      </div>
      <script async src="//www.instagram.com/embed.js"></script>
    </blockquote>
  );
};

export default InstagramReel;
