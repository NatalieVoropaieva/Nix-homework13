const panes = document.querySelectorAll('.pane');

panes.forEach((pane) => {
   const btn = document.createElement('button');
   btn.classList.add('remove-button');
   btn.innerText = '[x]';
   btn.onclick = () => {
       pane.classList.add('closed');
   }
   pane.append(btn);
});