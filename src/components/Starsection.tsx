'use client';

import Image from 'next/image';

export default function Starsection() {
  const images = [
    "/img/gallery/img 0 (1).jpg",
    "/img/gallery/img 0 (2).jpg",
    "/img/gallery/img 0 (3).jpg",
    "/img/gallery/img 0 (4).jpg",
    "/img/gallery/img 0 (5).jpg",
    "/img/gallery/img 0 (6).jpg",
    "/img/gallery/img 0 (7).jpg",
    "/img/gallery/img 0 (8).jpg",
    "/img/gallery/img 0 (9).jpg",
  ];

  return (
    <div className="section-star">
      <div className="typography">
        <h1 className="title">About Us</h1>
        <p className="info">
          Welcome to Foodily Ever After, where great food meets a warm, inviting atmosphere. Our restaurant offers a delightful dining experience with a carefully crafted menu featuring a variety of flavorful dishes made from the finest ingredients. Foodily Ever After is the perfect spot to create memorable moments over delicious food.
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="gallery">
        {images.map((src, index) => (
          <div className="custom-image" key={index}>
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
