import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import i18next from "i18next";
// import getLocaleFormat from "./utils";
// const { dateByMonth: dateFormat } = getLocaleFormat();
// import styled from "styled-components";
// import { AllProps } from "../type.d";

// const DemoStyle = styled.div`
//   width: 100%;
//   height: 100%;
//   iframe {
//     width: 100%;
//     height: 100%;
//     border: 0;
//   }
// `;

const Chart = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    console.log("pdf change");
    const pdf = new jsPDF();
    let trueValue: any = {
      "20181031": 760.55,
      "20181130": 750.26,
      "20181231": 642.89,
      "20190131": 657.15,
      "20190228": 681.62,
      "20190331": 691.53,
      "20190430": 678.6,
      "20190531": 653.62,
      "20190630": 531.98,
      "20190731": 500.87,
      "20190831": 478.21,
      "20190930": 465.91,
      "20191031": 459.66,
      "20191130": 457.33,
      "20191231": 456.92,
      "20200131": 461.45,
      "20200229": 460.98,
      "20200331": 461.75,
      "20200430": 465.25,
      "20200531": 468.19,
      "20200630": 460.54,
      "20200731": 442.94,
      "20200831": 443.04,
      "20200930": 449.59,
      "20201031": 455.42,
      "20201130": 464.27,
      "20201231": 499.08,
      "20210131": 541.99,
      "20210228": 617.22,
      "20210331": 729.97,
      "20210430": 774.7,
      "20210531": 777.92,
      "20210630": 759.29,
      "20210731": 647.96,
      "20210831": 629.15,
      "20210930": 580.0,
    };
    let mapObj = new Map();
    for (let i in trueValue) {
      let year = moment(i).format("YYYY-MM").split(",")[1];
      let headerObj: Record<string, string | number> = {};
      if (mapObj.has(year)) {
        headerObj = mapObj.get(year);
      } else {
        let headerName = [
          "Time",
          "Value",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        headerName.map((item) => {
          headerObj[item] = "-";
        });
        headerObj["Time"] = year;
        headerObj["Value"] = "Value";
      }
      let month = moment(i).format("YYYY-MM").split(",")[0];
      headerObj[month] = trueValue[i];
      mapObj.set(year, headerObj);
    }

    let array = Array.from(mapObj);
    array.sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });
    let arr: Array<any> = new Array<any>();
    array.map((item) => {
      arr.push(item[1]);
    });
    let arr1 = arr.splice(-3);

    // const mapArr=mapObj.values();
    console.log(arr1, "mapObj");
    // arr1.unshift({content: 'Time', colSpan: 2, rowSpan: 2 })
    console.log(arr1, "arr1");
    // autoTable(pdf, {
    //     head: [["Name", "Email", "Country"]],
    //     body: [{ content: 'Text', colSpan: 2, rowSpan: 2 }],
    //     // columns:[{header: 'ID', dataKey: 'id'}, {header: 'Name', dataKey: 'name'}],
    //     // theme:'plain',
    //     headStyles: {
    //         fillColor: "red",
    //     },
    // });
    // autoTable(pdf, {
    //     columnStyles: { europe: { halign: 'center' } }, // European countries centered
    //     body: arr1,
    //     columns: [
    //         { header: 'Time', dataKey: 'Time' },
    //         { header: 'Value', dataKey: 'Value' },
    //         { header: 'Jan', dataKey: 'Jan' },
    //         { header: 'Feb', dataKey: 'Feb' },
    //         { header: 'Mar', dataKey: 'Mar' },
    //         { header: 'Apr', dataKey: 'Apr' },
    //         { header: 'May', dataKey: 'May' },
    //         { header: 'June', dataKey: 'Jun' },
    //         { header: 'July', dataKey: 'Jul' },
    //         { header: 'Aug', dataKey: 'Aug' },
    //         { header: 'Sep', dataKey: 'Sep' },
    //         { header: 'Oct', dataKey: 'Oct' },
    //         { header: 'Nov', dataKey: 'Nov' },
    //         { header: 'Dec', dataKey: 'Dec' },

    //     ],
    // })
    //
    let bodyArr = [
      [
        {
          content: "2021",
          rowSpan: 2,
          styles: {
            halign: "center",
            valign: "middle",
            cellWidth: "wrap",
            fillColor: "#f6f6f6",
          },
        },
        {
          content: "Value",
          styles: {
            fillColor: "#f6f6f6",
            halign: "center",
            valign: "middle",
            cellWidth: "wrap",
          },
        },
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
      ],
      [
        {
          content: "%Change",
          styles: {
            halign: "center",
            valign: "middle",
            cellWidth: "wrap",
            fillColor: "#f6f6f6",
          },
        },
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
      ],
      [
        {
          content: "2022",
          rowSpan: 2,
          styles: {
            halign: "center",
            valign: "middle",
            fillColor: "#f6f6f6",
          },
        },
        {
          content: "Value",
          styles: {
            halign: "center",
            valign: "middle",
            fillColor: "#f6f6f6",
          },
        },
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
        "5,228,31",
      ],
      [
        {
          content: "%Change",
          styles: {
            halign: "center",
            valign: "middle",
            fillColor: "#f6f6f6",
          },
        },
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
        "4.49%",
      ],
    ];
    console.log(bodyArr, "bodyArr");
    autoTable(pdf, {
      theme: "plain",
      headStyles: {
        fillColor: "#f6f6f6",
        textColor: "#000",
        cellWidth: "wrap",
        fontSize: 8,
      },
      bodyStyles: {
        textColor: "#000",
        cellWidth: "wrap",
        fontSize: 8,
      },
      head: [
        [
          {
            content: "Forecast Value",
            colSpan: 2,
            styles: {
              halign: "center",
              valign: "middle",
              fillColor: "#f6f6f6",
            },
          },
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      ],
      body: [
        [
          {
            content: "2021",
            rowSpan: 2,
            styles: {
              halign: "center",
              valign: "middle",
              cellWidth: "wrap",
              fillColor: "#f6f6f6",
            },
          },
          {
            content: "Value",
            styles: {
              fillColor: "#f6f6f6",
              halign: "center",
              valign: "middle",
              cellWidth: "wrap",
            },
          },
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
        ],
        [
          {
            content: "%Change",
            styles: {
              halign: "center",
              valign: "middle",
              cellWidth: "wrap",
              fillColor: "#f6f6f6",
            },
          },
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
        ],
        [
          {
            content: "2022",
            rowSpan: 2,
            styles: {
              halign: "center",
              valign: "middle",
              fillColor: "#f6f6f6",
            },
          },
          {
            content: "Value",
            styles: {
              halign: "center",
              valign: "middle",
              fillColor: "#f6f6f6",
            },
          },
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
          "5,228,31",
        ],
        [
          {
            content: "%Change",
            styles: {
              halign: "center",
              valign: "middle",
              fillColor: "#f6f6f6",
            },
          },
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
          "4.49%",
        ],
      ],
    });
    setIframeSrc(pdf.output("datauristring"));
  }, []);

  return (
    <div>
      {/* iframeSrc{{ iframeSrc }} */}
      <iframe
        style={{ width: "2000px", height: "400px" }}
        src={iframeSrc}
        title="preview"
      />
    </div>
  );
};

export default Chart;
