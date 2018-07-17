window.addEventListener('load', (e) => {
  const loader = $('#loader');

  loader.style.opacity = '0';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 300);


});





// Function for select elements by Id and ClassName
function $ (selector) {
  const firstLetter = selector[0];
  const elem = selector.slice(1);

  switch (firstLetter) {
    case '#': 
      return document.getElementById(elem);
    case '.': 
      return document.getElementsByClassName(elem);
  }
};

// Function for select all siblings od a node

const siblings = n => [...n.parentElement.children].filter(c => c.nodeType == 1 && c!=n);

