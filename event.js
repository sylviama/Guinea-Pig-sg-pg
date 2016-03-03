var output = document.getElementById("output-target");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var articleArray = document.getElementsByClassName("article-section");

for(i=0; i<articleArray.length; i++){
	articleArray[i].addEventListener("click", function(event){
		output.innerHTML = "You clicked on the "+ event.target.innerHTML + " section.";
	});
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var h1Tag = document.getElementsByTagName("h1");

for(i=0;i<h1Tag.length; i++){
	h1Tag[i].addEventListener("mouseover", function(){
		output.innerHTML = "You moved your mouse over the header.";
	});
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
for(i=0;i<h1Tag.length; i++){
	h1Tag[i].addEventListener("mouseout", function(){
		output.innerHTML = "You left me!!.";
	});
}

// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function(){
	output.innerHTML = event.target.value;

});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", addColor);
function addColor() {
	document.getElementById("guinea-pig").style.color = "blue";
}

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", makeLarge);
function makeLarge() {
	document.getElementById("guinea-pig").style.fontSize= "xx-large";
}

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", addBorder);
function addBorder() {
	document.getElementById("guinea-pig").style.border= "thick solid #0000FF";
}

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", addRounding);
function addRounding() {
	document.getElementById("guinea-pig").style.border= "thick solid #0000FF";
	document.getElementById("guinea-pig").style.borderRadius= "25px";

}

// The first section's text should be bold.
articleArray[0].style.fontWeight = "bold";

// The last section's text should be bold and italicized.
articleArray[5].style.fontWeight = "bold";
articleArray[5].style.fontStyle = "italic";
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

