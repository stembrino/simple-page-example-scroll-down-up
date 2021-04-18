function goToSectionPage(sectionElement) {
  sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function addCssToSelecedtSession(parentWrapSectionElements, selectedSectionElement, className) {
  for (const section of parentWrapSectionElements.children) {
    section.classList.remove(className);
  }
  selectedSectionElement.classList.add(className);
}
function addEventHandlerToHeaderButton(buttonId, sectionId) {
  const buttonTarget = document.getElementById(buttonId);

  buttonTarget.addEventListener('click', () => {
    const parentSectionElement = document.querySelector('main');
    const targetSection = document.getElementById(sectionId);

    goToSectionPage(targetSection);
    addCssToSelecedtSession(parentSectionElement, targetSection, 'selected');
  });
}

addEventHandlerToHeaderButton('headerSection1', 'section1');
addEventHandlerToHeaderButton('headerSection2', 'section2');
addEventHandlerToHeaderButton('headerSection3', 'section3');
addEventHandlerToHeaderButton('headerSection4', 'section4');
addEventHandlerToHeaderButton('headerSection5', 'section5');
addEventHandlerToHeaderButton('headerSection6', 'section6');
addEventHandlerToHeaderButton('headerSection7', 'section7');
addEventHandlerToHeaderButton('headerAbout', 'about');
