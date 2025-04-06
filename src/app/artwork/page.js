export default function Artwork() {
  const artworks = [
    "/art/day_lockscreen.jpg",
    "/art/afternoon_lockscreen.jpg",
    "/art/forest.jpg",
    "/art/landscape.jpg",
    "/art/night.jpg"
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl my-8">Digital Art</h1>
      <div className="w-full flex flex-col items-center overflow-scroll">
        <div className="flex flex-wrap justify-center">
          {artworks.map((artwork, index) => (
            <img 
              key={index}
              src={artwork} 
              alt={`Artwork ${index + 1}`}
              className="m-4 h-80 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 