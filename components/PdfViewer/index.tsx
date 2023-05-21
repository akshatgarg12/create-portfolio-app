import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ file }: { file: string }) => {
  const [pdfWidth, setPdfWidth] = useState(100);
  useEffect(() => {
    setPdfWidth(window.innerWidth * 0.8);
  }, []);
  return (
    <Document className="flex flex-row justify-center" file={file}>
      <Page
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        renderMode="canvas"
        scale={1}
        width={pdfWidth}
      />
    </Document>
  );
};

export default PdfViewer;
