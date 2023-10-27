"use client"

import React from 'react';
import { FcLineChart, FcFlowChart, FcComboChart, FcAreaChart } from 'react-icons/fc';
import AreaChartPlot from './AreaChartPlot';
import BarChartPlot from './BarChartPlot';
import PieChartPlot from './PieChartPlot';
import LineChartPlot from './LineChartPlot';
import RadarChartPlot from './RadarChartPlot';

const chartData = [
  {
    icon: <FcLineChart size={48} />,
    title: 'Total returns',
    amount: '$30,000',
    percentage: '+34.5%',
  },
  {
    icon: <FcAreaChart size={48} />,
    title: 'Total returns',
    amount: '$30,000',
    percentage: '+34.5%',
  },
  {
    icon: <FcComboChart size={48} />,
    title: 'Total returns',
    amount: '$30,000',
    percentage: '+34.5%',
  },
  {
    icon: <FcFlowChart size={48} />,
    title: 'Total returns',
    amount: '$30,000',
    percentage: '+34.5%',
  },
];

const Charts = () => {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 m-4 gap-4">
          {chartData.map((chart, index) => (
            <div key={index} className="px-2 justify-center bg-[#001529] shadow rounded-2xl h-300px">
              <div className="flex items-center justify-between">
                <div className="mx-auto">{chart.icon}</div>
                <div className="pr-6 mt-3">
                  <p className="text-gray-400 text-xs font-bold">{chart.title}</p>
                  <p className="font-bold text-2xl py-1 text-gray-200">{chart.amount}</p>
                  <p className="text-green-300">{chart.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 my-4 px-4 gap-4">
        <div className="h-[300px] bg-[#001529] rounded-2xl">
          <AreaChartPlot />
        </div>

        <div className="h-[300px] bg-[#001529] rounded-2xl">
          <BarChartPlot />
        </div>
      </section>

      <section className="grid lg:grid-cols-3 my-4 px-4 gap-4">
        <div className="h-[250px] bg-[#001529] rounded-2xl">
          <PieChartPlot />
        </div>
        <div className="h-[250px] bg-[#001529] rounded-2xl">
          <LineChartPlot />
        </div>
        <div className="h-[250px] bg-[#001529] rounded-2xl">
          <RadarChartPlot />
        </div>
      </section>
    </>
  );
};

export default Charts;
