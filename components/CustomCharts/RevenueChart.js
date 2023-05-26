import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
// import ReactApexChart from 'react-apexcharts';

const RevenueChart = ({Data}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false // Hide the toolbar (includes the scale)
      },
      height: 200
    },
    series: [
      {
        name: 'Series 1',
        data: Data,
        
      },
    ],
    stroke: {
      curve: 'smooth', // Set the line curve to smooth for a curvy line
      width: 5,
      colors:['#9B51FF'] // Set the line width
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Thu', 'Wed', 'Fri', 'Sat', 'Sun'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#9B51FF'],
        inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false, // Hide the data point values
    },
  };

  return <ReactApexChart options={options} series={options.series} type="area" />;
};

export default RevenueChart;
