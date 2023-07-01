$(document).ready(function() {
    $("#tags-head").click(function() {
        $("#tags-section").show();
        $("#questions-section, #answers-section, #saved-section, #votes-section").hide();
    });

    $("#questions-head").click(function() {
        $("#tags-section, #answers-section, #saved-section, #votes-section").hide();
        $("#questions-section").show();
    });

    $("#answers-head").click(function() {
        $("#tags-section, #questions-section, #saved-section, #votes-section").hide();
        $("#answers-section").show();
    });

    $("#saved-head").click(function() {
        $("#tags-section, #questions-section, #answers-section, #votes-section").hide();
        $("#saved-section").show();
    });

    $("#votes-head").click(function() {
        $("#tags-section, #questions-section, #answers-section, #saved-section").hide();
        $("#votes-section").show();
    });
});