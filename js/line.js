$(function(){

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");

    //line chart data
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Dashboard",
                data: [191, 197, 193, 197, 180, 204, 193, 208, 213, 204, 188, 198, 211, 206, 198, 203, 208, 203],
                backgroundColor: "#fff",
                borderColor: "#8d7f67",
                fill: false,
                lineTension: 0,
                radius: 7
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Dashboard",
            fontSize: 18,
            fontColor: "#f3f3f3"
        },
        legend: {
            display: false
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});