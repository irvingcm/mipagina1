function showSection(sectionId) {
  // Oculta todas las secciones
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].hidden = true;
  }
  
  // Muestra la sección seleccionada
  var section = document.getElementById(sectionId);
  section.hidden = false;
}

