import Image from "next/image";

interface CustomImagesProps {
  imgSrc: string;
  pt: string;
}

export default function CustomImages({ imgSrc }: CustomImagesProps) {
  return (
    <div className="custom-image" >
      <Image
        src={imgSrc}
        alt="Custom"
        width={300} // You can adjust this value to match the actual image's aspect ratio
        height={300} // Adjust the height accordingly
        objectFit="contain" // Ensures the image covers the space without distortion
      />
    </div>
  );
}
