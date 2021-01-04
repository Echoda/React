import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import './index.css';

const imgArr = [img1, img2, img3];
const container = document.getElementById('root');
let index = 0;
let timer;

function render() {
    ReactDOM.render( <img src={imgArr[index]}/>, container );
}

function start() {
    clearInterval(timer);
    timer = setInterval(() => {
        render();
        index = (index + 1) % 3;
    }, 1000);
}

function stop() {
    clearInterval(timer);
}

start();

container.onmouseenter = stop;
container.onmouseleave = start;