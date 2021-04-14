function goToSectionPage(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "center" });
}

function addEventHandlerToHeaderButton(buttonId, sectionId) {
  const buttonTarget = document.getElementById(buttonId);
  buttonTarget.addEventListener("click", function () {
    goToSectionPage(sectionId);
  });
}

addEventHandlerToHeaderButton("headerSection1", "section1");
addEventHandlerToHeaderButton("headerSection2", "section2");
addEventHandlerToHeaderButton("headerSection3", "section3");
addEventHandlerToHeaderButton("headerSection4", "section4");
addEventHandlerToHeaderButton("headerSection5", "section5");
addEventHandlerToHeaderButton("headerSection6", "section6");
addEventHandlerToHeaderButton("headerSection7", "section7");
addEventHandlerToHeaderButton("headerAbout", "about");
