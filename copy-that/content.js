// Remove restrictions on copying
document.addEventListener('copy', (event) => {
    event.stopImmediatePropagation();
    return true;
  });
  
  // Enable text selection and copying on sites that disable these functionalities
  document.body.style.userSelect = 'auto';
  document.body.style.cursor = 'auto';
  
  // Remove event listeners that block Ctrl+C, right-click, and other actions
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    element.style.userSelect = 'auto';
    element.oncopy = null;
    element.oncut = null;
    element.onpaste = null;
    element.oncontextmenu = null;
    element.onselectstart = null;
    element.ondragstart = null;
  });
  