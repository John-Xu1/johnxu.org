export default function Travel() {
  const links = [
    "https://www.youtube.com/embed/S4l0ogY84I8?si=0JAvIFHwia3gBiE4",
    "https://www.youtube.com/embed/doeyhw0aEKM?si=QUJ8xWKt4V83xKFP",
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl my-8">Lofi</h1>
      {links.map((link) => (
        <iframe
          width="560"
          height="315"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="my-4"
          allowfullscreen
        ></iframe>
      ))}
      ;
    </div>
  );
}
