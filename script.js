$(document).ready(function () {
    $("#darkModeBtn").click(function () {
        $(this).toggleClass("active");
        $("body").toggleClass("dark-mode");
    });

    $("#exportPdfBtn").click(function () {
        // Chiamata alla funzione di esportazione PDF
        exportToPdf();
    });

    function exportToPdf() {
        var doc = new jsPDF();
        doc.text('Contenuto della pagina', 20, 20);
        // Aggiungi ulteriori contenuti o personalizzazioni secondo le tue esigenze
        doc.save('pagina.pdf');
    }
});
