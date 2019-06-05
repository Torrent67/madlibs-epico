$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var adj1Input = $("input#adj1").val();
    var adj2Input = $("input#adj2").val();
    var name1Input = $("input#name1").val();
    var pastVerb1Input = $("input#pastVerb1").val();
    var name2Input = $("input#name2").val();
    var adj3Input = $("input#adj3").val();
    var adj4Input = $("input#adj4").val();
    var pNoun1Input = $("input#pNoun1").val();
    var LanimalInput = $("input#L-animal").val();
    var SanimalInput = $("input#S-animal").val();
    var girlNameInput = $("input#girlName").val();
    var adj5Input = $("input#adj5").val();
    var pNoun2Input = $("input#pNoun2").val();
    var adj6Input = $("input#adj6").val();
    var pNoun3Input = $("input#pNoun3").val();
    var wNumberInput = $("input#wNumber").val();
    var name1Input = $("input#name1").val();
    var number1Input = $("input#number1").val();
    var pNoun4Input = $("input#pNoun4").val();
    var number2Input = $("input#number2").val();
    var pNoun5Input = $("input#pNoun5").val();

    $(".adj1").text(adj1Input);
    $(".adj2").text(adj2Input);
    $(".name1").text(name1Input);
    $(".pasVerb1").text(pastVerb1Input);
    $(".name2").text(name2Input);
    $(".adj3").text(adj3Input);
    $(".adj4").text(adj4Input);
    $(".pNoun1").text(pNoun1Input);
    $(".L-animal").text(LanimalInput);
    $(".S-animal").text(SanimalInput);
    $(".girlName").text(girlNameInput);
    $(".adj5").text(adj5Input);
    $(".pNoun2").text(pNoun2Input);
    $(".adj6").text(adj6Input);
    $(".pNoun3").text(pNoun3Input);
    $(".wNumber").text(wNumberInput);
    $(".name1").text(name1Input);
    $(".number1").text(number1Input);
    $(".pNoun4").text(pNoun4Input);
    $(".number2").text(number2Input);
    $(".pNoun5").text(pNoun5Input);

    $("#story").show();
    event.preventDefault();
  })
})
