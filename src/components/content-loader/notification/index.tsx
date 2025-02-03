import React from "react";
import ContentLoader from "react-content-loader";

const NewsCardLoader: React.FC = () => (
 
  <div className="mb-2">
     <ContentLoader
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    className="rounded-lg"
  >
    {/* Sarlavha uchun joy */}
    <rect x="20" y="15" rx="5" ry="5" width="300" height="20" />

    {/* Matn uchun joy */}
    <rect x="20" y="45" rx="5" ry="5" width="250" height="15" />

    {/* Vaqt uchun joy */}
    <rect x="20" y="70" rx="5" ry="5" width="200" height="10" />
  </ContentLoader>
  </div>
);

export default NewsCardLoader;
