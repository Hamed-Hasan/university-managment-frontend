"use client"

import React, { useState } from 'react';
import { FcLineChart, FcFlowChart, FcComboChart, FcAreaChart } from 'react-icons/fc';
import CountUp from 'react-countup';
import AreaChartPlot from './AreaChartPlot';
import BarChartPlot from './BarChartPlot';
import PieChartPlot from './PieChartPlot';
import LineChartPlot from './LineChartPlot';
import RadarChartPlot from './RadarChartPlot';
import { useDepartmentsQuery } from '@/redux/api/departmentApi';



const Charts = () => {
  const { data } = useDepartmentsQuery([]);
  const departments = (data?.departments as unknown as any[]);
  const chartData = [
    {
      icon: <FcLineChart size={48} />,
      title: 'Total Courses',
      amount: 25000,
      percentage: '+34.5%',
    },
    {
      icon: <FcAreaChart size={48} />,
      title: 'Total Faculty',
      amount: 30000,
      percentage: '+34.5%',
    },
    {
      icon: <FcComboChart size={48} />,
      title: 'Total Departments',
      amount: departments?.length,
      percentage: '+34.5%',
    },
    {
      icon: <FcFlowChart size={48} />,
      title: 'Total Semesters',
      amount: 49000,
      percentage: '+34.5%',
    },
  ];

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
                  <p className="font-bold text-center text-2xl py-1 text-gray-200">
                  <CountUp end={chart.amount} duration={5} />
                  </p>
                  <p className="text-green-300 text-center">{chart.percentage}</p>
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
