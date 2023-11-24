import React, { useEffect, useState } from 'react';

// Combine props for BlobImageRenderer with native img props
type BlobImageRendererProps = {
  blobData: Blob;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const BlobImageRenderer: React.FC<BlobImageRendererProps> = ({ blobData, ...imgProps }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const imageUrl = URL.createObjectURL(blobData);
    setImageUrl(imageUrl);

    // Clean up the URL when the component unmounts
    return () => URL.revokeObjectURL(imageUrl);
  }, [blobData]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Blob Image" {...imgProps} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default BlobImageRenderer;
