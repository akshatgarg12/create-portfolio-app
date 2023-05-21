import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = ({ file }: { file: string }) => {
  return (
    <Document className="flex flex-row justify-center" file={file}>
      <Page
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        renderMode="canvas"
        scale={0.8}
        width={window.innerWidth}
      />
    </Document>
  );
};

export default PdfViewer;
