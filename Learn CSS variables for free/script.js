var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var blue = rootStyles.getPropertyValue('--blue');
console.log('blue:',blue);

// root.style.setProperty('--blue','yellow');
// root.style.setProperty('--white','black');
