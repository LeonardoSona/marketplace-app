// Sample app data - Manufacturing Data Products
const appData = [
    {
        id: 1,
        name: "Production Dashboard",
        vendor: "Siemens",
        description: "Real-time manufacturing dashboard displaying production metrics, equipment status, and performance KPIs across all production lines.",
        rating: 4.6,
        licenseType: "Enterprise",
        users: 2850,
        category: "Operational Analytics",
        logo: "analytics",
        bgColor: "#e1f5fe",
        features: [
            { 
                title: "Real-time Monitoring", 
                description: "Live tracking of production throughput, cycle times, and equipment utilization" 
            },
            { 
                title: "OEE Analytics", 
                description: "Overall Equipment Effectiveness calculations and trend analysis" 
            },
            { 
                title: "Alert Management", 
                description: "Automated notifications for production anomalies and downtime events" 
            },
            { 
                title: "Custom KPI Views", 
                description: "Configurable dashboards for different roles and departments" 
            }
        ],
        fullDescription: "The Production Dashboard provides comprehensive real-time visibility into manufacturing operations. It integrates data from MES, SCADA, and IoT sensors to deliver critical insights on production performance, equipment health, and quality metrics. Manufacturing managers can monitor OEE, track production against targets, and quickly identify bottlenecks or issues requiring attention."
    },
    {
        id: 2,
        name: "Quality Analytics Platform",
        vendor: "Honeywell",
        description: "Advanced quality management system that tracks defect rates, performs statistical process control, and provides predictive quality insights.",
        rating: 4.7,
        licenseType: "Enterprise",
        users: 1645,
        category: "Quality Management",
        logo: "chart",
        bgColor: "#e8f5e9",
        features: [
            { 
                title: "SPC Monitoring", 
                description: "Statistical Process Control charts and control limit analysis" 
            },
            { 
                title: "Defect Tracking", 
                description: "Real-time defect classification and root cause analysis" 
            },
            { 
                title: "Quality Predictions", 
                description: "ML-powered predictions of quality issues before they occur" 
            },
            { 
                title: "Compliance Reporting", 
                description: "Automated generation of quality reports for regulatory compliance" 
            }
        ],
        fullDescription: "The Quality Analytics Platform enables proactive quality management through advanced statistical analysis and machine learning. It monitors quality parameters in real-time, identifies trends that may lead to defects, and provides actionable insights to maintain consistent product quality. The platform integrates with inspection systems and laboratory data to provide a complete quality picture."
    },
    {
        id: 3,
        name: "SAP Manufacturing Execution",
        vendor: "SAP",
        description: "Comprehensive MES solution for managing production orders, work instructions, material tracking, and shop floor operations.",
        rating: 4.4,
        licenseType: "Enterprise",
        users: 3120,
        category: "Manufacturing Execution",
        logo: "erp",
        bgColor: "#fff8e1",
        features: [
            { 
                title: "Production Planning", 
                description: "Advanced scheduling and capacity planning capabilities" 
            },
            { 
                title: "Material Traceability", 
                description: "Complete genealogy tracking from raw materials to finished products" 
            },
            { 
                title: "Work Instructions", 
                description: "Digital work instructions with real-time updates and version control" 
            },
            { 
                title: "Shop Floor Integration", 
                description: "Seamless integration with production equipment and automation systems" 
            }
        ],
        fullDescription: "SAP Manufacturing Execution provides end-to-end visibility and control over manufacturing processes. It manages production orders from planning through execution, ensures material traceability, and maintains detailed records of all manufacturing activities. The system enables lean manufacturing practices and supports compliance with industry standards and regulations."
    },
    {
        id: 4,
        name: "Predictive Maintenance Suite",
        vendor: "GE Digital",
        description: "AI-powered predictive maintenance platform that analyzes equipment sensor data to predict failures and optimize maintenance schedules.",
        rating: 4.8,
        licenseType: "Subscription",
        users: 1890,
        category: "Asset Management",
        logo: "service",
        bgColor: "#e0f7fa",
        features: [
            { 
                title: "Failure Prediction", 
                description: "Machine learning models to predict equipment failures weeks in advance" 
            },
            { 
                title: "Condition Monitoring", 
                description: "Continuous monitoring of vibration, temperature, and other key parameters" 
            },
            { 
                title: "Maintenance Optimization", 
                description: "Optimize maintenance schedules based on actual equipment condition" 
            },
            { 
                title: "ROI Analytics", 
                description: "Track maintenance cost savings and equipment uptime improvements" 
            }
        ],
        fullDescription: "The Predictive Maintenance Suite transforms maintenance from reactive to predictive through advanced analytics and machine learning. It continuously monitors equipment health, predicts potential failures, and recommends optimal maintenance timing. This approach reduces unplanned downtime, extends equipment life, and significantly lowers maintenance costs."
    },
    {
        id: 5,
        name: "Supply Chain Visibility",
        vendor: "Oracle",
        description: "Comprehensive supply chain analytics platform providing end-to-end visibility from suppliers to customers with demand forecasting.",
        rating: 4.5,
        licenseType: "Enterprise",
        users: 2240,
        category: "Supply Chain",
        logo: "team",
        bgColor: "#f3e5f5",
        features: [
            { 
                title: "Demand Forecasting", 
                description: "AI-driven demand prediction using historical data and market signals" 
            },
            { 
                title: "Inventory Optimization", 
                description: "Real-time inventory tracking and optimization across all locations" 
            },
            { 
                title: "Supplier Performance", 
                description: "Monitor supplier delivery performance, quality, and reliability" 
            },
            { 
                title: "Risk Management", 
                description: "Identify and mitigate supply chain risks and disruptions" 
            }
        ],
        fullDescription: "Supply Chain Visibility provides comprehensive oversight of the entire supply chain ecosystem. It combines internal operations data with external market intelligence to optimize inventory levels, improve supplier relationships, and enhance customer satisfaction. The platform enables proactive decision-making through predictive analytics and scenario planning."
    },
    {
        id: 6,
        name: "Energy Management System",
        vendor: "Schneider Electric",
        description: "Real-time energy monitoring and optimization platform that tracks consumption, identifies waste, and optimizes energy usage across facilities.",
        rating: 4.6,
        licenseType: "Subscription",
        users: 1575,
        category: "Sustainability",
        logo: "analytics",
        bgColor: "#e8f5e9",
        features: [
            { 
                title: "Energy Monitoring", 
                description: "Real-time tracking of energy consumption by department and equipment" 
            },
            { 
                title: "Carbon Footprint", 
                description: "Calculate and track carbon emissions and sustainability metrics" 
            },
            { 
                title: "Cost Optimization", 
                description: "Identify opportunities to reduce energy costs and improve efficiency" 
            },
            { 
                title: "Renewable Integration", 
                description: "Monitor and optimize use of renewable energy sources" 
            }
        ],
        fullDescription: "The Energy Management System enables comprehensive monitoring and optimization of energy consumption across manufacturing facilities. It provides real-time visibility into energy usage patterns, identifies inefficiencies, and recommends actions to reduce consumption and costs. The platform supports sustainability initiatives and regulatory compliance reporting."
    },
    {
        id: 7,
        name: "Manufacturing Intelligence",
        vendor: "Rockwell Automation",
        description: "Advanced manufacturing analytics platform that transforms operational data into actionable insights for continuous improvement.",
        rating: 4.7,
        licenseType: "Enterprise",
        users: 2180,
        category: "Operational Analytics",
        logo: "chart",
        bgColor: "#e1f5fe",
        features: [
            { 
                title: "Process Analytics", 
                description: "Deep analysis of manufacturing processes to identify optimization opportunities" 
            },
            { 
                title: "Performance Benchmarking", 
                description: "Compare performance across lines, shifts, and facilities" 
            },
            { 
                title: "Root Cause Analysis", 
                description: "Automated identification of factors contributing to performance issues" 
            },
            { 
                title: "Continuous Improvement", 
                description: "Track and measure the impact of improvement initiatives" 
            }
        ],
        fullDescription: "Manufacturing Intelligence aggregates data from across the manufacturing ecosystem to provide deep insights into operational performance. It uses advanced analytics to identify patterns, trends, and opportunities for improvement. The platform enables data-driven decision making and supports lean manufacturing and Six Sigma initiatives."
    },
    {
        id: 8,
        name: "Workforce Analytics",
        vendor: "Kronos",
        description: "Comprehensive workforce management platform that optimizes labor scheduling, tracks productivity, and manages skill development.",
        rating: 4.4,
        licenseType: "Subscription",
        users: 1920,
        category: "Human Resources",
        logo: "team",
        bgColor: "#ffebee",
        features: [
            { 
                title: "Labor Optimization", 
                description: "Optimize workforce scheduling based on production demands and skills" 
            },
            {
                title: "Productivity Tracking", 
                description: "Monitor individual and team productivity metrics" 
            },
            { 
                title: "Skills Management", 
                description: "Track employee certifications and training requirements" 
            },
            { 
                title: "Safety Analytics", 
                description: "Monitor safety incidents and identify risk factors" 
            }
        ],
        fullDescription: "Workforce Analytics provides comprehensive insights into human resource utilization and performance in manufacturing environments. It optimizes labor scheduling, tracks productivity trends, and manages skill development programs. The platform helps ensure the right people with the right skills are in the right place at the right time while maintaining safety standards."
    },
    {
        id: 9,
        name: "Cost Analytics Platform",
        vendor: "Microsoft",
        description: "Advanced cost management system that provides detailed cost breakdowns, profitability analysis, and budget variance reporting.",
        rating: 4.5,
        licenseType: "Enterprise",
        users: 1680,
        category: "Financial Analytics",
        logo: "office",
        bgColor: "#fff3e0",
        features: [
            { 
                title: "Product Costing", 
                description: "Detailed cost analysis by product, process, and resource" 
            },
            { 
                title: "Profitability Analysis", 
                description: "Real-time profitability tracking and margin analysis" 
            },
            { 
                title: "Budget Management", 
                description: "Track actual vs. planned costs with variance analysis" 
            },
            { 
                title: "Cost Optimization", 
                description: "Identify opportunities to reduce manufacturing costs" 
            }
        ],
        fullDescription: "The Cost Analytics Platform provides comprehensive financial visibility into manufacturing operations. It tracks costs at granular levels, analyzes profitability by product and customer, and identifies opportunities for cost reduction. The platform enables accurate pricing decisions and supports financial planning and budgeting processes."
    },
    {
        id: 10,
        name: "Environmental Compliance",
        vendor: "Enviance",
        description: "Environmental monitoring and compliance platform that tracks emissions, waste, and regulatory requirements across facilities.",
        rating: 4.6,
        licenseType: "Subscription",
        users: 945,
        category: "Compliance",
        logo: "document",
        bgColor: "#e8f5e9",
        features: [
            { 
                title: "Emissions Monitoring", 
                description: "Track air and water emissions across all manufacturing facilities" 
            },
            { 
                title: "Waste Management", 
                description: "Monitor waste generation and disposal tracking" 
            },
            { 
                title: "Regulatory Reporting", 
                description: "Automated generation of environmental compliance reports" 
            },
            { 
                title: "Incident Management", 
                description: "Track and manage environmental incidents and corrective actions" 
            }
        ],
        fullDescription: "Environmental Compliance provides comprehensive monitoring and reporting capabilities for environmental regulations. It tracks emissions, waste generation, and resource consumption while ensuring compliance with local and federal environmental regulations. The platform automates reporting processes and helps identify opportunities for environmental improvement."
    }
];
