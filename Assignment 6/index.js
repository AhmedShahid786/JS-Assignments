// Variables For First Column
var colStore1 = ["Roll-Num:", 12341, 12342, 12343, 12344, 12345, 12346, 12347, 12348, 12349, 123410];
var col1 = document.querySelector(".col1");
var colItem1 = "";

// Variables For Second Column
var colStore2 = ["Name:", "Ahmed", "Saad", "Raza", "Sameer", "Ubaid", "Shehriar", "Hamza", "Amaan", "Umer", "Shahid"];
var col2 = document.querySelector(".col2");
var colItem2 = "";

// Variables For Third Column
var colStore3 = ["Skill:", "Web-Develper", "App-Developer", "UI/UX-Designer", "Graphic-Designer", "SEO-Expert", "Web-Develper", "App-Developer", "UI/UX-Designer", "Graphic-Designer", "SEO-Expert"];
var col3 = document.querySelector(".col3");
var colItem3 = "";

// Using Loop To Push Values Stored In "Store-Named" Arrays To The Columns In Form Of <p> Elements 
for (var i = 0; i < colStore1.length; i++){
    colItem1 += `<p class="p${i}">${colStore1[i]}</p> \n`;
    colItem2 += `<p class="p${i}">${colStore2[i]}</p> \n`;
    colItem3 += `<p class="p${i}">${colStore3[i]}</p> \n`;
}

// Assigning The List Of <p> Elements To The Respective Columns As Inner html
col1.innerHTML = colItem1
col2.innerHTML = colItem2
col3.innerHTML = colItem3

// Printing The Inner htmls To The Console
console.log("Inner html Of First Column \n" + col1.innerHTML)
console.log("Inner html Of Second Column \n" + col2.innerHTML)
console.log("Inner html Of Third Column \n" + col3.innerHTML)
