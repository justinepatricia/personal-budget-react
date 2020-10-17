import axios from 'axios';
import {
    Pie, Doughnut
} from 'react';
var Chart = require('chart.js');

    var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#7D3C98',
                '#9A7D0A ',
                '#212F3D '
            ],
        }
    ],
    labels: []     
};

function createChart(){
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}

function getBudget(){
    axios.get('http://localhost:3000/budget')
    .then(function (res) {
        console.log(res.data);
        for (var i = 0; i < res.data.budget.length; i++){
            dataSource.datasets[0].data[i] = res.data.budget[i].budget;
            dataSource.labels[i] = res.data.budget[i].title;
        }
        createChart();
    });
}

export default Chart;
