// Sample app data
const appData = [
    {
        id: 1,
        name: "Microsoft 365",
        vendor: "Microsoft",
        description: "Comprehensive productivity suite including Word, Excel, PowerPoint, Outlook, and Teams for collaboration and document management.",
        rating: 4.7,
        licenseType: "User-based",
        users: 3250,
        category: "Productivity",
        logo: "office",
        bgColor: "#e1f5fe",
        features: [
            { 
                title: "Document Creation", 
                description: "Create and edit documents, spreadsheets, and presentations" 
            },
            { 
                title: "Email & Calendar", 
                description: "Enterprise-grade email and scheduling capabilities" 
            },
            { 
                title: "Team Collaboration", 
                description: "Chat, meetings, and file sharing with Teams" 
            },
            { 
                title: "Cloud Storage", 
                description: "Secure document storage with OneDrive for Business" 
            }
        ],
        fullDescription: "Microsoft 365 is a comprehensive productivity suite that provides essential tools for document creation, communication, and collaboration. The suite includes applications such as Word, Excel, PowerPoint, Outlook, and Teams, enabling Roche employees to create documents, analyze data, communicate via email, and collaborate in real-time. All applications are cloud-connected, allowing for secure document storage and seamless access across devices."
    },
    {
        id: 2,
        name: "Salesforce Healthcare",
        vendor: "Salesforce",
        description: "Customer relationship management platform specialized for healthcare and pharmaceutical companies to manage relationships with healthcare providers.",
        rating: 4.5,
        licenseType: "Enterprise",
        users: 1875,
        category: "CRM",
        logo: "crm",
        bgColor: "#e8f5e9",
        features: [
            { 
                title: "Contact Management", 
                description: "Track relationships with healthcare providers and institutions" 
            },
            { 
                title: "Sales Analytics", 
                description: "Data-driven insights for pharmaceutical sales teams" 
            },
            { 
                title: "Marketing Automation", 
                description: "Streamline healthcare marketing campaigns" 
            },
            { 
                title: "Compliance Tools", 
                description: "Ensure compliance with healthcare regulations" 
            }
        ],
        fullDescription: "Salesforce Healthcare is a specialized CRM platform designed for pharmaceutical and healthcare organizations. It helps Roche manage relationships with healthcare providers, institutions, and other stakeholders in the healthcare ecosystem. The platform provides tools for contact management, opportunity tracking, marketing automation, and compliance management. With Salesforce Healthcare, Roche's sales and marketing teams can operate more efficiently while ensuring compliance with healthcare regulations."
    },
    {
        id: 3,
        name: "SAP S/4HANA",
        vendor: "SAP",
        description: "Enterprise resource planning system for managing finances, supply chain, procurement, and other core business functions.",
        rating: 4.4,
        licenseType: "Enterprise",
        users: 2720,
        category: "ERP",
        logo: "erp",
        bgColor: "#fff8e1",
        features: [
            { 
                title: "Financial Management", 
                description: "Comprehensive tools for accounting and financial reporting" 
            },
            { 
                title: "Supply Chain", 
                description: "End-to-end management of pharmaceutical supply chains" 
            },
            { 
                title: "Procurement", 
                description: "Streamlined purchasing processes for research materials" 
            },
            { 
                title: "Analytics", 
                description: "Real-time business insights with embedded analytics" 
            }
        ],
        fullDescription: "SAP S/4HANA is an enterprise resource planning system that helps Roche manage core business functions such as finance, supply chain, procurement, and human resources. Built on SAP's advanced in-memory database, S/4HANA provides real-time processing capabilities, simplified data models, and embedded analytics. The system streamlines business processes, improves operational efficiency, and enables data-driven decision making across the organization."
    },
    {
        id: 4,
        name: "Veeva Vault",
        vendor: "Veeva Systems",
        description: "Unified platform for regulated content, quality processes, and clinical operations designed specifically for life sciences companies.",
        rating: 4.8,
        licenseType: "Enterprise",
        users: 2388,
        category: "Document Management",
        logo: "document",
        bgColor: "#e0f7fa",
        features: [
            { 
                title: "Regulatory Document Management", 
                description: "Manage regulatory submissions and correspondence" 
            },
            { 
                title: "Quality Management", 
                description: "Track quality processes and compliance" 
            },
            { 
                title: "Clinical Operations", 
                description: "Streamline clinical trial documentation" 
            },
            { 
                title: "Validation Ready", 
                description: "Pre-validated to meet GxP requirements" 
            }
        ],
        fullDescription: "Veeva Vault is a cloud-based content management platform designed specifically for life sciences companies. It provides a unified approach to managing regulated content, quality processes, and clinical operations. Veeva Vault helps Roche maintain compliance with regulatory requirements, streamline document approval workflows, and ensure proper version control of critical documentation. The platform is pre-validated to meet GxP requirements, reducing validation effort and compliance risk."
    },
    {
        id: 5,
        name: "Tableau",
        vendor: "Salesforce",
        description: "Interactive data visualization platform for creating dashboards and reports to analyze research data and business performance.",
        rating: 4.7,
        licenseType: "User-based",
        users: 1945,
        category: "Data Visualization",
        logo: "chart",
        bgColor: "#f3e5f5",
        features: [
            { 
                title: "Interactive Dashboards", 
                description: "Create dynamic visualizations of research data" 
            },
            { 
                title: "Data Connectivity", 
                description: "Connect to a wide range of data sources and formats" 
            },
            { 
                title: "Advanced Analytics", 
                description: "Statistical and predictive analytics capabilities" 
            },
            { 
                title: "Collaboration", 
                description: "Share insights securely across the organization" 
            }
        ],
        fullDescription: "Tableau is an interactive data visualization platform that helps Roche turn complex data into actionable insights. The software enables users to create dynamic dashboards and reports without extensive technical knowledge. Tableau connects to a wide range of data sources, provides powerful analytical capabilities, and allows for secure sharing of insights across the organization. With Tableau, Roche researchers and business leaders can quickly visualize trends, patterns, and outliers in their data."
    },
    {
        id: 6,
        name: "Slack",
        vendor: "Salesforce",
        description: "Business communication platform that organizes conversations by channels for more focused and effective team collaboration.",
        rating: 4.7,
        licenseType: "User-based",
        users: 2350,
        category: "Collaboration",
        logo: "chat",
        bgColor: "#e8f5e9",
        features: [
            { 
                title: "Channel-based Communication", 
                description: "Organize conversations by project, topic, or team" 
            },
            { 
                title: "File Sharing", 
                description: "Securely share and find documents in conversation threads" 
            },
            { 
                title: "App Integration", 
                description: "Connect with other enterprise applications" 
            },
            { 
                title: "Search Capabilities", 
                description: "Quickly find past conversations and shared content" 
            }
        ],
        fullDescription: "Slack is a business communication platform that helps Roche teams collaborate more effectively. The platform organizes conversations into channels by project, topic, or team, making communication more focused and reducing email overload. Slack supports file sharing, integration with other enterprise applications, and powerful search capabilities. With Slack, Roche teams can communicate more efficiently, find information quickly, and stay connected whether working in the office or remotely."
    },
    {
        id: 7,
        name: "DataAnalyzer Pro",
        vendor: "BioStat Systems",
        description: "Advanced statistical analysis tool designed specifically for pharmaceutical research and clinical trials.",
        rating: 4.7,
        licenseType: "Subscription",
        users: 532,
        category: "Data Analysis",
        logo: "analytics",
        bgColor: "#e1f5fe",
        features: [
            { 
                title: "Statistical Analysis", 
                description: "Comprehensive statistical tools for clinical data" 
            },
            { 
                title: "Data Visualization", 
                description: "Interactive charts and graphs for research data" 
            },
            { 
                title: "Export Capabilities", 
                description: "Export results in multiple formats compatible with regulatory submissions" 
            },
            { 
                title: "Automated Reporting", 
                description: "Generate customizable reports for stakeholders" 
            }
        ],
        fullDescription: "DataAnalyzer Pro is a comprehensive statistical analysis tool designed specifically for pharmaceutical research and clinical trials. The software provides researchers with a wide range of statistical methods, data visualization tools, and reporting capabilities to analyze complex clinical data efficiently. DataAnalyzer Pro is compliant with regulatory requirements and supports GxP validation."
    },
    {
        id: 8,
        name: "GenomeSeq Analyzer",
        vendor: "BioGenomics Ltd.",
        description: "Specialized tool for genomic sequencing analysis with powerful algorithms for variant detection and annotation.",
        rating: 4.9,
        licenseType: "Subscription",
        users: 312,
        category: "Research Tools",
        logo: "dna",
        bgColor: "#ffebee",
        features: [
            { 
                title: "Variant Detection", 
                description: "Advanced algorithms for identifying genetic variants" 
            },
            {
                title: "Sequence Alignment", 
                description: "Tools for aligning and comparing genomic sequences" 
            },
            { 
                title: "Annotation Capabilities", 
                description: "Annotate variants with functional and clinical information" 
            },
            { 
                title: "Pipeline Integration", 
                description: "Seamless integration with bioinformatics workflows" 
            }
        ],
        fullDescription: "GenomeSeq Analyzer is a specialized tool for genomic sequencing analysis with powerful algorithms for variant detection and annotation. The software provides tools for variant detection, sequence alignment, annotation, and pipeline integration. GenomeSeq Analyzer accelerates genomic research by automating complex bioinformatics analyses and providing powerful visualization and interpretation capabilities."
    }
];

// Function to generate app card logos
function generateLogo(type) {
    switch(type) {
        case 'analytics':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>';
        case 'document':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
        case 'team':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
        case 'chart':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>';
        case 'dna':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2l20 20"></path><path d="M9 21A10 2 0 0 1 9 3"></path><path d="M15 3a10 2 0 0 1 0 18"></path><path d="M9 7a10 2 0 0 1 6 0"></path><path d="M9 17a10 2 0 0 0 6 0"></path></svg>';
        case 'office':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><line x1="2" y1="10" x2="22" y2="10"></line></svg>';
        case 'crm':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        case 'erp':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
        case 'service':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>';
        case 'chat':
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
        default:
            return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';
    }
}

// Function to generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let html = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        html += '<span>★</span>';
    }
    
    // Half star
    if (halfStar) {
        html += '<span>★</span>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        html += '<span style="opacity: 0.3">★</span>';
    }
    
    return html;
}

// Function to create app cards
function createAppCards() {
    const appGrid = document.getElementById('appGrid');
    appGrid.innerHTML = '';
    
    appData.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.dataset.id = app.id;
        
        appCard.innerHTML = `
            <div class="app-image" style="background-color: ${app.bgColor}">
                ${generateLogo(app.logo)}
            </div>
            <div class="app-info">
                <div class="app-header">
                    <div class="app-title">
                        <h3>${app.name}</h3>
                        <div class="app-vendor">${app.vendor}</div>
                    </div>
                    <div class="app-rating">
                        ${generateStarRating(app.rating)}
                    </div>
                </div>
                <div class="app-description">${app.description}</div>
                <div class="app-meta">
                    <div class="app-license">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                        ${app.licenseType}
                    </div>
                    <div class="app-users">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        ${app.users} users
                    </div>
                </div>
            </div>
        `;
        
        appCard.addEventListener('click', () => openAppDetail(app.id));
        appGrid.appendChild(appCard);
    });
}

// Function to open app detail modal
function openAppDetail(appId) {
    const app = appData.find(a => a.id === appId);
    if (!app) return;
    
    const modal = document.getElementById('appDetailModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="app-detail-header">
            <div class="app-detail-logo" style="background-color: ${app.bgColor}">
                ${generateLogo(app.logo)}
            </div>
            <div class="app-detail-info">
                <div class="app-detail-title">
                    <div>
                        <h2>${app.name}</h2>
                        <div class="app-detail-vendor">${app.vendor}</div>
                    </div>
                    <div class="app-detail-actions">
                        <button class="btn">Request Access</button>
                    </div>
                </div>
                <div class="app-detail-meta">
                    <div class="app-detail-rating">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${app.rating} rating
                    </div>
                    <div class="app-detail-license">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                        ${app.licenseType} license
                    </div>
                    <div class="app-detail-users">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        ${app.users} users
                    </div>
                    <div class="app-detail-category">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                        ${app.category}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="app-detail-tabs">
            <div class="tab active" data-tab="overview">Overview</div>
            <div class="tab" data-tab="features">Features</div>
            <div class="tab" data-tab="requirements">Requirements</div>
            <div class="tab" data-tab="reviews">Reviews</div>
        </div>
        
        <div class="tab-content active" data-tab="overview">
            <h3>Description</h3>
            <div class="app-description-full">
                ${app.fullDescription}
            </div>
            
            <div class="related-apps">
                <h3>Related Applications</h3>
                <div class="related-apps-grid">
                    ${getRelatedApps(app.id, app.category)}
                </div>
            </div>
        </div>
        
        <div class="tab-content" data-tab="features">
            <h3>Key Features</h3>
            <div class="features-list">
                ${app.features.map(feature => `
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h4>${feature.title}</h4>
                            <p>${feature.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="tab-content" data-tab="requirements">
            <h3>System Requirements</h3>
            <div class="app-description-full">
                <p>This application can be accessed via standard web browsers including:</p>
                <ul style="margin-left: 20px; margin-top: 10px; margin-bottom: 20px;">
                    <li>Google Chrome (latest version)</li>
                    <li>Mozilla Firefox (latest version)</li>
                    <li>Microsoft Edge (latest version)</li>
                    <li>Safari (latest version)</li>
                </ul>
                <p>For optimal performance, we recommend:</p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>4GB RAM or higher</li>
                    <li>High-speed internet connection</li>
                    <li>Screen resolution of 1280x720 or higher</li>
                </ul>
            </div>
        </div>
        
        <div class="tab-content" data-tab="reviews">
            <h3>User Reviews</h3>
            <div class="app-description-full">
                <p>User reviews are currently being collected. Check back soon for feedback from other Roche employees.</p>
            </div>
        </div>
    `;
    
    // Add tab functionality
    const tabs = modalBody.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            modalBody.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            modalBody.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            modalBody.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active');
        });
    });
    
    // Show modal
    modal.style.display = 'flex';
    
    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Function to get related apps based on category
function getRelatedApps(currentAppId, category) {
    // Get apps in the same category, excluding the current app
    const relatedApps = appData
        .filter(app => app.category === category && app.id !== currentAppId)
        .slice(0, 3); // Limit to 3 related apps
    
    // If not enough apps in the same category, add some popular apps
    if (relatedApps.length < 3) {
        const popularApps = appData
            .filter(app => app.id !== currentAppId && !relatedApps.some(a => a.id === app.id))
            .sort((a, b) => b.users - a.users)
            .slice(0, 3 - relatedApps.length);
        
        relatedApps.push(...popularApps);
    }
    
    return relatedApps.map(app => `
        <div class="related-app-card" data-id="${app.id}">
            <div class="related-app-logo" style="background-color: ${app.bgColor}">
                ${generateLogo(app.logo)}
            </div>
            <div class="related-app-name">${app.name}</div>
            <div class="related-app-vendor">${app.vendor}</div>
        </div>
    `).join('');
}

// Category filtering
function setupCategoryFilters() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            categories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked category
            category.classList.add('active');
            
            // Filter apps based on category
            const selectedCategory = category.textContent;
            filterApps(selectedCategory);
        });
    });
}

// Function to filter apps based on category
function filterApps(category) {
    const appGrid = document.getElementById('appGrid');
    appGrid.innerHTML = '';
    
    let filteredApps = appData;
    
    // Filter by category if not "All Applications"
    if (category !== 'All Applications') {
        filteredApps = appData.filter(app => app.category === category);
    }
    
    // If no apps found, show message
    if (filteredApps.length === 0) {
        appGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px;">No applications found in this category.</div>';
        return;
    }
    
    // Create cards for filtered apps
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.dataset.id = app.id;
        
        appCard.innerHTML = `
            <div class="app-image" style="background-color: ${app.bgColor}">
                ${generateLogo(app.logo)}
            </div>
            <div class="app-info">
                <div class="app-header">
                    <div class="app-title">
                        <h3>${app.name}</h3>
                        <div class="app-vendor">${app.vendor}</div>
                    </div>
                    <div class="app-rating">
                        ${generateStarRating(app.rating)}
                    </div>
                </div>
                <div class="app-description">${app.description}</div>
                <div class="app-meta">
                    <div class="app-license">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                        ${app.licenseType}
                    </div>
                    <div class="app-users">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        ${app.users} users
                    </div>
                </div>
            </div>
        `;
        
        appCard.addEventListener('click', () => openAppDetail(app.id));
        appGrid.appendChild(appCard);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    // Search when button is clicked
    searchButton.addEventListener('click', () => {
        searchApps(searchInput.value);
    });
    
    // Search when Enter key is pressed
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchApps(searchInput.value);
        }
    });
}

// Function to search apps
function searchApps(query) {
    query = query.toLowerCase().trim();
    
    // If query is empty, show all apps
    if (!query) {
        createAppCards();
        return;
    }
    
    const appGrid = document.getElementById('appGrid');
    appGrid.innerHTML = '';
    
    // Filter apps based on search query
    const filteredApps = appData.filter(app => {
        return (
            app.name.toLowerCase().includes(query) ||
            app.vendor.toLowerCase().includes(query) ||
            app.description.toLowerCase().includes(query) ||
            app.category.toLowerCase().includes(query)
        );
    });
    
    // If no apps found, show message
    if (filteredApps.length === 0) {
        appGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 30px;">No applications found matching "${query}".</div>`;
        return;
    }
    
    // Reset category filter visual state
    document.querySelectorAll('.category').forEach((cat, index) => {
        cat.classList.toggle('active', index === 0);
    });
    
    // Create cards for filtered apps
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.dataset.id = app.id;
        
        appCard.innerHTML = `
            <div class="app-image" style="background-color: ${app.bgColor}">
                ${generateLogo(app.logo)}
            </div>
            <div class="app-info">
                <div class="app-header">
                    <div class="app-title">
                        <h3>${app.name}</h3>
                        <div class="app-vendor">${app.vendor}</div>
                    </div>
                    <div class="app-rating">
                        ${generateStarRating(app.rating)}
                    </div>
                </div>
                <div class="app-description">${app.description}</div>
                <div class="app-meta">
                    <div class="app-license">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                        ${app.licenseType}
                    </div>
                    <div class="app-users">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        ${app.users} users
                    </div>
                </div>
            </div>
        `;
        
        appCard.addEventListener('click', () => openAppDetail(app.id));
        appGrid.appendChild(appCard);
    });
}

// Set up related app click handlers
function setupRelatedAppClicks() {
    document.addEventListener('click', (e) => {
        const relatedApp = e.target.closest('.related-app-card');
        if (relatedApp) {
            const appId = parseInt(relatedApp.dataset.id);
            openAppDetail(appId);
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createAppCards();
    setupCategoryFilters();
    setupSearch();
    setupRelatedAppClicks();
});