import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={200}
    viewBox="0 0 150 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="rounded-lg"
  >
    {/* Rasm uchun joy */}
    <rect x="15" y="15" rx="10" ry="10" width="120" height="100" />

    {/* Yurak ikonkasi */}
    <circle cx="125" cy="25" r="10" />

    {/* Mahsulot nomi */}
    <rect x="15" y="125" rx="5" ry="5" width="80" height="15" />

    {/* Narx */}
    <rect x="15" y="150" rx="5" ry="5" width="50" height="15" />
  </ContentLoader>
);

export default CardLoader;