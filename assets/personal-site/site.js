(() => {
  'use strict';

  const openLink = document.querySelector('#cv-open');
  const dialog = document.querySelector('#cv-dialog');
  const closeButton = document.querySelector('#cv-close');
  const pages = document.querySelector('.cv-pages');
  if (!openLink || !dialog || !closeButton || !pages) return;
  // The CV link opens the PDF directly if dialogs are unavailable.
  if (typeof dialog.showModal !== 'function') return;

  openLink.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    pages.scrollTop = 0;
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });
  dialog.addEventListener('close', () => openLink.focus({ preventScroll: true }));
})();
