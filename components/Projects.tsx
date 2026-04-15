'use client';

import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sports Metrics Tracking System",
      desc: "A large-scale, enterprise-grade sports analytics platform built with React Native and NestJS, integrating deeply with custom hardware for real-time performance tracking. The system captures and processes advanced athlete metrics such as distance, speed, heart rate, power score, player load, accelerations, and decelerations with high precision. It features a multi-tenant architecture with role-based access for business administrators, clubs, and coaches. Business admins oversee hardware lifecycle management and large-scale deployment operations, while clubs and coaches can create and manage events that seamlessly communicate with connected devices. The platform includes real-time data synchronization, complex event-driven hardware–software integration, and advanced visual analytics for comparing player performance, making it a comprehensive and scalable solution for professional sports performance optimization.",
      images: "/h10.jpg"
    },
    {
      title: "Tools Management System",
      desc: "A comprehensive enterprise-grade asset and tools management platform developed using Laravel and Inertia.js, designed to handle large-scale organizational operations. The system manages the complete lifecycle of tools across multiple departments, including check-in/check-out workflows, maintenance scheduling, damage and loss tracking, and expiry monitoring. It supports high-volume data operations such as bulk import/export and ensures accurate real-time tracking of tool allocation across employees. Built with a structured and scalable architecture, the platform incorporates advanced reporting, audit trails, and status management to streamline operational efficiency and eliminate tracking inconsistencies in organizations handling extensive tool inventories.",
      images: "/tms.png"
    },
    {
      title: "Shopping Cart System",
      desc: "A full-stack, scalable e-commerce application built using Laravel and React Native, featuring a dynamic admin panel for real-time product and content management. The system enables seamless handling of product catalogs with images, pricing, discounts, and detailed descriptions, all managed through an intuitive backend interface. It includes end-to-end cart and checkout workflows, dynamic data synchronization between mobile and backend, and structured API integration for efficient state management. Designed with scalability in mind, the platform supports extensible features such as user interaction flows, order processing, and real-time updates, delivering a robust and production-ready mobile commerce solution.",
      images: ["/shopping cart .png", "/adminpanel shopping cart.png"]
    },
    {
      title: "Smart Accident Detection & Emergency Response System",
      desc: "An intelligent, IoT-driven safety system designed to detect vehicular accidents in real time and initiate automated emergency response protocols. The system integrates hardware sensors with a software application to accurately identify collision events and instantly trigger safety mechanisms such as airbag deployment. Upon detection, it transmits critical data including location coordinates to nearby hospitals and emergency services, enabling rapid response and reducing reaction time. Additionally, the platform incorporates geospatial analysis to identify and notify users of accident-prone zones through real-time alerts within the mobile application. Built with a focus on reliability and real-time communication, the system combines embedded hardware, networked data transmission, and mobile integration to enhance road safety and emergency management efficiency.",
      images: ["/ads.jpg", "/ads (2).jpg"]
    },
    {
      title: "AI-Based Skin Cancer Detection System",
      desc: "An advanced machine learning-powered diagnostic system designed to detect skin cancer from dermoscopic images through a web-based interface. The platform allows users to upload skin images, which are then processed using a trained deep learning model capable of identifying cancerous patterns with high accuracy. The system incorporates image preprocessing, feature extraction, and classification pipelines to ensure reliable predictions. Integrated with a responsive web application, it provides real-time analysis and results, making the solution accessible and user-friendly. Built with a focus on scalability and performance, the project demonstrates the application of computer vision and AI in healthcare, enabling early detection and supporting clinical decision-making.",
      images: ["/cd.jpg", "/cd (2).jpg", "/cd (3).jpg"]
    },
    {
      title: "Travel Insurance Analytics Dashboard",
      desc: "A comprehensive and data-intensive analytics dashboard developed in Tableau, designed to transform complex travel insurance datasets into actionable business insights. The dashboard integrates multiple dimensions such as income distribution, policy duration, sales performance, claim rates, and destination coverage into a unified, interactive visualization system. It enables dynamic filtering across regions, insurance plans, and time periods, supporting deep exploratory analysis. Advanced visual components such as comparative charts, geographic mapping, and segmentation analysis provide a clear understanding of purchaser behavior, agency performance, and risk patterns. Built to handle large datasets efficiently, the solution enhances decision-making by uncovering trends, optimizing policy strategies, and identifying key drivers of insurance adoption and claims.",
      image: "/travel insurance tableau.png"
    },
    {
      title: "Global Climate Data Analysis & Visualization System",
      desc: "A data-intensive analytical system developed using Python, leveraging libraries such as Pandas, NumPy, Matplotlib, Seaborn, and Folium to process, analyze, and visualize large-scale climate datasets. The project performs advanced time-series analysis on temperature data, identifying seasonal trends, anomalies, and long-term patterns. It includes comparative modeling of historical record highs and lows, with detection of record-breaking temperature events. Additionally, it integrates geospatial visualization using interactive maps to represent global data distribution and clustering. The system combines statistical analysis, temporal data processing, and geographic insights into a unified workflow, enabling deep exploration of climate behavior and providing meaningful insights into environmental trends and variability.",
      images: ["/temperature analysis.png", "/temperature analysis (2).png", "/temperature analysis (3).png"]
    },
    {
      title: "COVID-19 India Analytics Dashboard",
      desc: "A large-scale, data-driven analytics dashboard developed in Tableau to provide comprehensive insights into the spread and impact of COVID-19 across India. The system integrates multi-dimensional datasets including state-wise cases, deaths, testing statistics, vaccination progress, and demographic distributions. It features advanced interactive visualizations such as geospatial mapping, time-series trend analysis, and comparative breakdowns by age group, gender, and vaccine type. The dashboard enables dynamic filtering and drill-down capabilities, allowing users to explore patterns across regions and time periods in real time. Designed to handle high-volume public health data, it delivers actionable insights for understanding infection trends, resource allocation, and vaccination effectiveness, making it a powerful tool for data-driven decision-making during critical scenarios.",
      image: "/covid.jpg"
    },
    {
      title: "Global Streaming & Sales Analytics Dashboard",
      desc: "A comprehensive, data-driven analytics dashboard developed using Power BI to analyze global streaming behavior and sales performance across movies and TV shows. The system integrates large-scale datasets to track viewership trends, discount impacts, and content performance across different regions worldwide. It features advanced interactive visualizations including time-series analysis, geographic distribution mapping, and category-based segmentation of movies and TV shows. The dashboard enables dynamic filtering by region, content type, and pricing strategies, allowing deep insights into user engagement, revenue trends, and the effectiveness of discount campaigns. Designed for high-performance data processing, the solution supports data-driven decision-making by uncovering consumption patterns and optimizing content and pricing strategies on a global scale.",
      image: "/netflix.jpg"
    }
  ];

  return (
    <>
      <section className="py-20 px-6 md:px-20">

      <h2 
        className="text-3xl font-semibold mb-10 animate-fade-in-up"
        style={{ animationDelay: '0.2s' }}
      >
        Projects
      </h2>

      <div className="space-y-16">

        {projects.map((p, i) => (
          <div
            key={i}
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up"
          >

            {/* 🔥 IMAGE GALLERY LEFT - CLICKABLE */}
            <div 
              onClick={() => setSelectedProject(p)}
              className="rounded-xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md h-64 w-full cursor-pointer group"
            >
              {(() => {
                const imageList = Array.isArray(p.images)
                  ? p.images
                  : typeof p.images === 'string'
                  ? [p.images]
                  : p.image
                  ? [p.image]
                  : [];

                return (
                  <div className="flex gap-4 h-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {imageList.map((img, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-full h-full flex items-center justify-center p-4 snap-center group-hover:opacity-75 transition-opacity duration-300"
                      >
                        <img
                          src={img}
                          alt={`${p.title} ${idx + 1}`}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* 🔥 TEXT RIGHT */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase" style={{ letterSpacing: '0.5px' }}>{p.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed italic" style={{ lineHeight: '1.7', fontWeight: '300' }}>{p.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>

      {/* 🔥 MODAL POPUP */}
      {selectedProject && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={() => setSelectedProject(null)}
      >
        <div 
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-11/12 h-[90vh] max-w-6xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER WITH TITLE AND CLOSE BUTTON */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight" style={{ letterSpacing: '0.5px' }}>{selectedProject.title}</h2>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-gray-500 hover:text-gray-700 text-3xl flex-shrink-0"
            >
              ✕
            </button>
          </div>

          {/* TWO COLUMN LAYOUT: Images Left, Text Right */}
          <div className="flex-1 overflow-auto flex">
            {/* LEFT: IMAGES */}
            <div className="w-1/2 p-6 border-r border-gray-200 overflow-hidden flex flex-col">
              <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden">
                {(() => {
                  const imageList = Array.isArray(selectedProject.images)
                    ? selectedProject.images
                    : typeof selectedProject.images === 'string'
                    ? [selectedProject.images]
                    : selectedProject.image
                    ? [selectedProject.image]
                    : [];

                  return (
                    <div className="flex gap-4 h-full overflow-x-auto scroll-smooth snap-x snap-mandatory
                      [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                      {imageList.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 w-full h-full flex items-center justify-center p-2 snap-center"
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${idx + 1}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* RIGHT: DESCRIPTION */}
            <div className="w-1/2 p-6 overflow-y-auto flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed italic font-light" style={{ lineHeight: '1.7' }}>
                {selectedProject.desc}
              </p>
            </div>
          </div>
          {/* CLOSE BUTTON */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={() => setSelectedProject(null)}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  );
}