import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = ({chartColor,Data}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const options = {
    chart: {
      type: 'line',
      toolbar:{
        show:false,
      },
      height: 100, // Set the chart height to 100px
      width: 100, // Set the chart width to 100px
  
    },
    series: [
      {
        name: 'Series 1',
        data: Data,
      },
    ],
    stroke:{
        curve : 'smooth',
        width:3,
        colors:[chartColor]
    },
    xaxis: {
        labels: {
          show: false // Hide the y-axis labels
        },
        axisBorder: {
          show: false // Hide the y-axis line
        },
        tooltip: {
          enabled: false // Disable tooltip for y-axis
        },
      },
    yaxis: {
      labels: {
        show: false // Hide the y-axis labels
      },
      axisBorder: {
        show: false // Hide the y-axis line
      },
      tooltip: {
        enabled: false // Disable tooltip for y-axis
      },

    },
    responsive: [
        {
          breakpoint: 100, // Adjust this breakpoint value as needed
          options: {
    
          },
        },
      ],
    
    grid: {
        show: false, // Hide the background vertical lines
      },

  };

  return <ReactApexChart options={options} series={options.series} type="line" />;
};

export default Chart;
