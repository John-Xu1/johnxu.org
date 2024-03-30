export default function Travel() {
  const links = [
    "https://www.youtube.com/embed/fnVKR1cW-X0",
    "https://www.youtube.com/embed/xwwTNmM-EEE",
    "https://www.youtube.com/embed/5J8vW7HspkI",
    "https://www.youtube.com/embed/KsN0WOGfo-c?si=tzUKC8owaXDDFND3",
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl my-8">Travel Montages</h1>
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
