import React from 'react';
import ReactDOM from 'react-dom';
import StudentsList from './components/StudentsList';

async function fetchAllStudents() {
    const stus = await fetch('http://open.duyiedu.com//api/student/findAll?appkey=echo_sun_1598860417768')
    .then(res => res.json())
    .then(res => res.data);
    return stus;
};

async function render() {
    ReactDOM.render('正在加载...', document.getElementById('root'));
    const stus = await fetchAllStudents();
    ReactDOM.render( <StudentsList stus={stus}/>, document.getElementById('root'));
}

render();
