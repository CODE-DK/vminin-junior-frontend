import './index.css';
import javaScript from './assets/javaScript.png';

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.append(h1);

const img = document.createElement('img');
img.src = javaScript;
document.body.append(img);