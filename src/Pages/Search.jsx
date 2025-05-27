import React, { useRef } from "react";

const Search = () => {
  const cards = [
    { id: 1, title: "Card 1", url: "https://example.com/1" },
    { id: 2, title: "Card 2", url: "https://example.com/2" },
    { id: 3, title: "Card 3", url: "https://example.com/3" },
  ];

  const shareRefs = useRef([]); // this will store references to all share boxes

  const handleToggleShare = (index) => {
    const el = shareRefs.current[index];
    if (el) {
      el.style.display = el.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={card.id} style={{ marginBottom: "20px" }}>
          <h3>{card.title}</h3>
          <button onClick={() => handleToggleShare(index)}>
            Share
          </button>

          <div
            ref={(el) => (shareRefs.current[index] = el)}
            style={{ display: "none", background: "#eee", padding: "10px" }}
          >
            <a
              href={`https://wa.me/?text=${encodeURIComponent(card.url)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
