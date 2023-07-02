export default function Design() {
  const logos1 = [
    "/logos/EYA logo.png",
    "/logos/Monogram.png",
    "/logos/Perspective Photography Logo.png",
    "/logos/Built Better Logo.png",
  ];
  const logos2 = [
    "/logos/Toddler Town Logo.png",
    "/logos/Bear Furniture Logo.png",
  ];

  const logos3 = ["/logos/Focal Logo.png", "/logos/Meditune Logo.png"];
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl my-8">Design</h1>
      <div className="w-full flex flex-col items-center overflow-scroll">
        <div className="flex">
          {logos1.map((logo) => (
            <img src={logo} className="m-4 h-80 w-auto" />
          ))}
        </div>
        <div className="flex">
          {logos2.map((logo) => (
            <img src={logo} className="m-4 h-96 w-auto  min-w-max" />
          ))}
        </div>
        <div className="flex">
          <img src="/logos/Simpoli Logo.png" className="m-4 h-96 w-auto" />
          <div>
            {logos3.map((logo) => (
              <img src={logo} className="m-4 h-48 w-auto min-w-max" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
