import { savePDF } from "@progress/kendo-react-pdf";

class DocService {
  createPdf = html => {
    savePDF(html, {
      paperSize: "A4",
      fileName: "FirstName-LastName.pdf",
      margin: 3
    });
  };
}

const Doc = new DocService();
export default Doc;
