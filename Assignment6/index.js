var colStore1 = ["Roll-Number:", 12341, 12342, 12343, 12344, 12345, 12346, 12347, 12348, 12349, 123410];
var col1 = document.getElementsByClassName("col1");
var colItem1 = "";

var col2 = ["Name:", "Ahmed", "Saad", "Raza", "Sameer", "Ubaid", "Shehriar", "Hamza", "Amaan", "Umer", "Shahid"];
var colStore2 = document.getElementsByClassName("col1");
var colItem2 = "";

var colStore3 = ["Skill", "Web-Develper", "App-Developer", "UI/UX-Designer", "Graphic-Designer", "SEO-Expert", "Web-Develper", "App-Developer", "UI/UX-Designer", "Graphic-Designer", "SEO-Expert"];
var col3 = document.getElementsByClassName("col1");
var colItem3 = "";

for (var i = 0; i < colStore1.length; i++){
    colItem1 += `<span><p>${colStore1[i]}</p></span> \n`;
}
col1.innerHTML = colItem1;
console.log(col1.innerHTML)
