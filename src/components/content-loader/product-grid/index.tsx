import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={120}
    viewBox="0 0 400 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="rounded-lg"
  >
    {/* Rasm uchun joy */}
    <rect x="10" y="10" rx="8" ry="8" width="80" height="80" />

    {/* Mahsulot nomi */}
    <rect x="100" y="10" rx="4" ry="4" width="200" height="15" />

    {/* Tavsif */}
    <rect x="100" y="35" rx="4" ry="4" width="150" height="10" />

    {/* Narx */}
    <rect x="100" y="60" rx="4" ry="4" width="100" height="20" />

    {/* Yurak icon */}
    <rect x="320" y="20" rx="8" ry="8" width="20" height="20" />

    {/* Arrow icon */}
    <rect x="350" y="60" rx="8" ry="8" width="20" height="20" />
  </ContentLoader>
);

export default CardLoader;
