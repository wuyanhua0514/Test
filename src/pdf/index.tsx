import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const Pdf = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    console.log("pdf change");
    const pdf = new jsPDF();
    autoTable(pdf, {
      theme: "plain",
      styles: {
        fillColor: "#024DA0",
        textColor: "#ffffff",
        fontSize: 12,
        halign: "center",
        fontStyle: "normal",
        valign: "middle",
      },
      head: [
        [
          {
            content:
              "Thank you for reading. Please feel free to comment or send us your questions, we will follow",
            colSpan: 2,
            styles: {
              halign: "left",
              cellPadding: { left: 10, top: 10 },
            },
          },
        ],
      ],
      body: [
        [
          {
            content: " and answer you asap! Contact : ",
            styles: {
              cellWidth: 200,
              halign: "left",
              cellPadding: { left: 10, top: 2, bottom: 8 },
            },
          },
          {
            content: `${"123@163.com"}`,
            styles: {
              halign: "left",
              textColor: "#00CC65",
              cellPadding: { left: 0, top: 2, bottom: 8 },
              cellWidth: 39,
            },
          },
        ],
      ],
      startY: 761,
      margin: { bottom: 0, left: 0 },
    });
    setIframeSrc(pdf.output("datauristring"));
  }, []);

  return (
    <div>
      {/* iframeSrc{{ iframeSrc }} */}
      <iframe
        style={{ width: "595px", height: "841px" }}
        src={iframeSrc}
        title="preview"
      />
    </div>
  );
};

export default Pdf;
