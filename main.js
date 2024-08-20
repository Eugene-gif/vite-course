import {template} from '@/12/12.jsx';
import '@/assets/03.css';
import  imageUrl from '@/assets/images/vite.svg';

document.querySelector('#image').src = imageUrl;
document.querySelector('#app').appendChild(template);
