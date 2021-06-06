import React from 'react';
import { Line } from 'react-chartjs-2';



function LineData(props) {
  const data = ()=> {
    {props.contents.map((items) => {
      return(
        {
          labels:items.state,
          datasets: [
            {
              label: items.state,
              data: items.confirmed,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        }
      );
    })
  }
   
  };
   
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
       <Line data={data} options={options} />
    </div>
  )
}

export default LineData;
