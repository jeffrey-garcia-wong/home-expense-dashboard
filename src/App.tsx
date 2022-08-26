import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { Chart, ChartItem, registerables } from 'chart.js'
Chart.register(...registerables);

function App() {
  
  //const myData = Object.create({id: 123});
  const myData = {
    id: 123
  }

  var chartData = {
    // type: 'bar',
    // data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    // },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
  };
  
  var chartOptions = {
    scales: {
      y: {
          beginAtZero: true
      }
    }   
  };

  const handleClick = (() => {
    const inputCtx = document.getElementById('myInput') as HTMLInputElement;
    if (inputCtx != null) {
      inputCtx.value = '456';
    } else {
      console.error(`error`);
    }
    const chartCtx = document.getElementById('myChart') as ChartItem;
    if (chartCtx != null) {
      const myChart = new Chart(chartCtx, {type:'bar', data:chartData, options:chartOptions});
    }
  });



  return (
    <div>
      <div className="header">
        <h1>UK HOME</h1>
      </div>

      <div className="row">
        <div className="col-3 col-s-3 menu">
          <ul>
            <li>Expenses</li>
            <li>Investments</li>
            <li>Outstanding</li>
            <li>Tax</li>    
          </ul>
        </div>

        <div className="col-6 col-s-9">
          <h1>Expenses by Category</h1>
          {/* <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p> */}
          <div>
            <input type="text" id="myInput" width="400" height="400" defaultValue={myData.id} />
            <input type="button" id="myBtn" onClick={handleClick} />
            <script>
              myBtn.addEventListener("click", handleClick);            
            </script>
          </div>
          <div>
            <canvas id="myChart" width="400" height="400"></canvas>
            <script>
            </script>
          </div>
        </div>

        <div className="col-3 col-s-12">
          <div className="aside">
            <h2>Fixed Expenses</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Household Expenses</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>Micellaneous</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>             
    </div>
  );
}

export default App;
