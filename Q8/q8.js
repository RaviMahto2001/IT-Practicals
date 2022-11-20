$(document).ready(function () {
    $("#reDesign").click(function () {
        $("body").css({ "margin": "0px", "padding": "0px" });
        $("#headDiv").css({ "margin": "0px", "padding": "10px 20px", "background-color": "#1c8b32", "text-align": "center" });
        $("#headDiv h1").css({ "color": "white", "font-family": "sans-serif" });
        $(".container").css({ "margin": "0px", "padding": "20px 0px 0px 0px", "background-color": "#cef9c5" });
        $(".container-section").css({ "margin": "30px 10px 0px 10px" });
        $(".container-section-head").css({ "margin": "0px", "padding": "5px", "background-color": "#00b93e", "color": "white" });
        $(".container-section-body").css({ "margin": "0px", "padding": "10px 0px 5px 0px", "background-color": "azure", "font-family": "cursive" });
        $(".container-section-body p").css({ "margin": "0px", "padding": "0px 10px" });
        $("table").css({ "border-collapse": "collapse", "font-family": "sans-serif", "margin": "auto", "width": "600px", });
        $("table th").css({ "border": "2px solid white", "padding": "8px", "padding": "12px 8px 12px 8px", "background-color": "#04AA6D", "color": "white" });
        $("table td").css({ "border": "2px solid white", "padding": "8px" });
        $("table tr:nth-child(even)").css({ "background-color": "#f2f2f2" });
        $("table tr:nth-child(odd)").css({ "background-color": "white" });
        $(".btn-section").css({ "text-align": "center", "padding": "10px" });
        $("#reDesign").attr("disabled", "disabled");
    });
});
