export default function Resume() {
  const pdfUrl = "/resume.pdf?timestamp=" + Date.now();
  return (
    <div>
      <iframe src="/Resume.pdf" className="w-full h-screen" title="Resume" />
    </div>
  );
}
