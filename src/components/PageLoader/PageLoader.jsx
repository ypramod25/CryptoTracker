import React from 'react';
import ContentLoader from 'react-content-loader';

const PageLoader = () => (
  <div className="w-full px-4 py-8 flex justify-center">
    <ContentLoader 
      speed={2}
      viewBox="0 0 800 200"  // Larger viewbox
      backgroundColor="grey"
      foregroundColor="grey"
      width="100%"
      style={{ maxWidth: '800px' }}
    >
      {/* Large avatar placeholder */}
      <circle cx="100" cy="100" r="60" />
      
      {/* Main title line - extra large */}
      <rect x="200" y="40" rx="5" ry="5" width="500" height="30" />
      
      {/* Subtitle line - large */}
      <rect x="200" y="90" rx="4" ry="4" width="450" height="25" />
      
      {/* Content block 1 */}
      <rect x="200" y="140" rx="3" ry="3" width="600" height="20" />

    </ContentLoader>
  </div>
);

export default PageLoader;