const printPdf = document.querySelectorAll(".print");

printPdf.forEach((e) => {
  e.addEventListener("click", () => {
    let pdf = document.querySelector("#pdf-object");
    if (pdf) {
      pdf.contentWindow.print();
    }
  });
});
