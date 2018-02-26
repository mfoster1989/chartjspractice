var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2014", "2015", "2016"],
        datasets: [{
            label: '# of Graduates',
            data: [73, 199, 395],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "# of Students"
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "# of Students"
                }
            }]
        }
    }
});