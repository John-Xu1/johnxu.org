export default function Resume() {
  const pdfUrl = "/resume.pdf?timestamp=" + Date.now();
  return (
    <div>
      <embed
        src="/Website Resume.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
      />
    </div>
  );
}
