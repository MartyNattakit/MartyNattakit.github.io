document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("toggle-image");
    const introText = document.getElementById("intro-text");
    const schoolText = document.getElementById("school-text");
    const programText = document.getElementById("program-text");
    const hobbyText = document.getElementById("hobby-text");
    const newParagraph = document.getElementById("new-paragraph");
  
    image.addEventListener("click", function () {
      if (newParagraph.style.display === "none" || newParagraph.style.display === "") {
        // Hide original text and show the new paragraph
        introText.style.display = "none";
        schoolText.style.display = "none";
        programText.style.display = "none";
        hobbyText.style.display = "none";
        newParagraph.style.display = "block";
      } else {
        // Show original text and hide the new paragraph
        introText.style.display = "block";
        schoolText.style.display = "block";
        programText.style.display = "block";
        hobbyText.style.display = "block";
        newParagraph.style.display = "none";
      }
    });
  });
  