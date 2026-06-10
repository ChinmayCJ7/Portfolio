import { useState } from 'react';

const PROJECTS = [
  {
    id: "saas-platform",
    title: "Multi-Tenant SaaS Subscription Platform",
    icon: "dns",
    description: "A production-grade multi-tenant SaaS backend from scratch using Spring Boot 3.5, Spring Security 6, and PostgreSQL 15 — starting from a full BRD and TDD before writing a single line of code.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "AWS EC2/RDS", "Docker", "Flyway"],
    bullets: [
      "Built a production-grade multi-tenant SaaS backend from scratch using Spring Boot 3.5, Spring Security 6, and PostgreSQL 15 — starting from a full BRD and TDD.",
      "Implemented row-level multi-tenancy (every table with tenant_id), JWT stateless auth (access + refresh tokens), and RBAC with three roles (OWNER / ADMIN / MEMBER).",
      "Enforced subscription plan gating server-side (Free / Pro / Enterprise) — Free plan capped at 3 projects; logic lives in the service layer.",
      "Deployed live on AWS EC2 with RDS PostgreSQL; Flyway versioned migrations for zero manual DDL. Swagger UI exposed at the public API base URL."
    ],
    githubUrl: "https://github.com/ChinmayCJ7",
    demoUrl: "http://54.206.99.89:8080/swagger-ui.html",
    hasDetails: true,
    details: {
      liveDemo: "http://54.206.99.89:8080",
      swaggerUi: "http://54.206.99.89:8080/swagger-ui.html",
      techStack: [
        { layer: "Backend", technology: "Spring Boot 3.5.1, Spring Security 6, Spring Data JPA" },
        { layer: "Auth", technology: "JWT (access token + refresh token), RBAC (OWNER/ADMIN/MEMBER)" },
        { layer: "Database", technology: "PostgreSQL 15, Flyway migrations" },
        { layer: "Frontend", technology: "React.js (in progress)" },
        { layer: "Cloud", technology: "AWS EC2, RDS PostgreSQL" },
        { layer: "Build & Ops", technology: "Maven, Java 17, Docker, Docker Compose" }
      ],
      architecture: [
        "React SPA → Spring Boot REST API → PostgreSQL (AWS RDS)",
        "Row-level multi-tenancy — every table has tenant_id",
        "JWT stateless auth with role-based access (OWNER / ADMIN / MEMBER)",
        "Subscription plan gating enforced server-side (Free / Pro / Enterprise)",
        "Flyway versioned migrations — zero manual DDL"
      ],
      features: [
        "Tenant registration and onboarding",
        "JWT authentication — register, login, token refresh",
        "Role-based access control (OWNER, ADMIN, MEMBER)",
        "Project management — full CRUD with pagination",
        "Subscription plan enforcement — Free plan limited to 3 projects",
        "Task management",
        "Team member invitation",
        "AWS EC2/RDS deployment & Docker environment"
      ],
      apiEndpoints: [
        {
          category: "Auth",
          endpoints: [
            { method: "POST", path: "/api/auth/register", auth: "None", desc: "Register + create tenant" },
            { method: "POST", path: "/api/auth/login", auth: "None", desc: "Login, returns JWT" }
          ]
        },
        {
          category: "Projects",
          endpoints: [
            { method: "GET", path: "/api/projects", auth: "JWT", desc: "List all projects (paginated)" },
            { method: "POST", path: "/api/projects", auth: "JWT", desc: "Create project" },
            { method: "GET", path: "/api/projects/{id}", auth: "JWT", desc: "Get project by ID" },
            { method: "PUT", path: "/api/projects/{id}", auth: "JWT", desc: "Update project" },
            { method: "DELETE", path: "/api/projects/{id}", auth: "JWT", desc: "Delete project" }
          ]
        }
      ],
      gettingStarted: {
        prerequisites: ["Java 17+", "Docker Desktop", "Maven"],
        steps: [
          { title: "1. Start PostgreSQL", cmd: "docker compose up -d" },
          { title: "2. Run the application", cmd: "./mvnw spring-boot:run" }
        ]
      },
      envVars: [
        { name: "DB_URL", desc: "JDBC URL to PostgreSQL database" },
        { name: "DB_USERNAME", desc: "Database username" },
        { name: "DB_PASSWORD", desc: "Database password" },
        { name: "JWT_SECRET", desc: "Min 256-bit base64 string" },
        { name: "CORS_ALLOWED_ORIGINS", desc: "Frontend origin URL" }
      ]
    }
  },
  {
    id: "college-erp",
    title: "College ERP System",
    icon: "school",
    description: "Built a full-stack academic management platform designed for comprehensive university operation and role mapping.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
    bullets: [
      "Designed RESTful APIs with JWT-based authentication and role-based access control.",
      "Developed modular backend services with CRUD operations, validation, exception handling, and secure data flow.",
      "Optimized database queries and improved scalability through structured debugging and clean architecture."
    ],
    githubUrl: "https://github.com/ChinmayCJ7/CollegeERP",
    hasDetails: false
  },
  {
    id: "lostfinder",
    title: "LostFinder",
    icon: "search",
    description: "Developed a front-end web application for reporting lost and found items.",
    tags: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Implemented client-side validation, event-driven programming, and dynamic DOM updates.",
      "Improved usability and performance while maintaining clean, maintainable UI code."
    ],
    githubUrl: "https://github.com/ChinmayCJ7/LostFinder",
    hasDetails: false
  }
];

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [activeTabs, setActiveTabs] = useState({}); // Stores active tab key per project ID

  const toggleDetails = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
      if (!activeTabs[projectId]) {
        setActiveTabs(prev => ({ ...prev, [projectId]: 'specs' }));
      }
    }
  };

  const selectTab = (projectId, tabName) => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tabName }));
  };

  const getMethodBadgeColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'POST': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'PUT': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'DELETE': return 'bg-rose-100 text-rose-800 border-rose-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <main className="grid-background min-h-screen pt-32 md:pt-40 px-6 lg:px-12 pb-24">
      <section className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl text-primary">Key Projects</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A selection of my recent full-stack applications, architectures, and development platforms.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {PROJECTS.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const currentTab = activeTabs[project.id] || 'specs';

            return (
              <div 
                key={project.id}
                className="flex flex-col gap-8 bg-surface-container-low p-6 md:p-10 rounded-xl forest-glow group hover:bg-surface-bright transition-colors duration-500 border border-outline-variant/10"
              >
                {/* Upper Project Section */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                  <div className="lg:w-1/3 min-w-[280px]">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">
                        {project.icon}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">
                        {project.title}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-xl text-on-surface leading-relaxed font-light">
                      {project.description}
                    </p>
                    <ul className="space-y-4">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                          <p className="text-lg text-on-surface-variant">{bullet}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="border border-outline border-outline-variant/30 text-on-surface px-6 py-3 rounded-full text-md font-bold hover:bg-surface-container-high transition-all active:scale-95 inline-flex items-center gap-2"
                      >
                        View on GitHub
                        <span className="material-symbols-outlined text-lg">public</span>
                      </a>

                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-secondary text-on-secondary px-6 py-3 rounded-full text-md font-bold hover:bg-secondary/90 transition-all active:scale-95 inline-flex items-center gap-2"
                        >
                          Live Demo
                          <span className="material-symbols-outlined text-lg">rocket_launch</span>
                        </a>
                      )}

                      {project.hasDetails && (
                        <button
                          onClick={() => toggleDetails(project.id)}
                          className="border border-primary text-primary px-6 py-3 rounded-full text-md font-bold hover:bg-primary/5 transition-all active:scale-95 inline-flex items-center gap-2"
                        >
                          {isExpanded ? 'Hide Specs' : 'View Detailed Specs'}
                          <span 
                            className="material-symbols-outlined text-lg transition-transform duration-300" 
                            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                          >
                            {isExpanded ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible Details Section */}
                {project.hasDetails && isExpanded && (
                  <div className="mt-6 border-t border-outline-variant/20 pt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-outline-variant/20 mb-8 overflow-x-auto gap-4 scrollbar-none">
                      <button
                        onClick={() => selectTab(project.id, 'specs')}
                        className={`pb-4 px-2 text-md font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                          currentTab === 'specs' 
                            ? 'border-secondary text-primary font-bold' 
                            : 'border-transparent text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">architecture</span>
                        Architecture & Stack
                      </button>
                      <button
                        onClick={() => selectTab(project.id, 'api')}
                        className={`pb-4 px-2 text-md font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                          currentTab === 'api' 
                            ? 'border-secondary text-primary font-bold' 
                            : 'border-transparent text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">api</span>
                        API Endpoints
                      </button>
                      <button
                        onClick={() => selectTab(project.id, 'setup')}
                        className={`pb-4 px-2 text-md font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                          currentTab === 'setup' 
                            ? 'border-secondary text-primary font-bold' 
                            : 'border-transparent text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">terminal</span>
                        Setup & Config
                      </button>
                    </div>

                    {/* Tab Panel Content */}
                    <div className="space-y-6">
                      {/* Tab 1: Specs & Architecture */}
                      {currentTab === 'specs' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                              <span className="material-symbols-outlined text-secondary">layers</span>
                              Tech Stack Breakdown
                            </h3>
                            <div className="overflow-hidden rounded-lg border border-outline-variant/30">
                              <table className="min-w-full divide-y divide-outline-variant/20">
                                <thead className="bg-surface-container">
                                  <tr>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Layer</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Technology</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-surface divide-y divide-outline-variant/10">
                                  {project.details.techStack.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                                      <td className="px-4 py-3 text-sm font-bold text-primary">{item.layer}</td>
                                      <td className="px-4 py-3 text-sm text-on-surface-variant">{item.technology}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="space-y-3">
                              <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">settings_ethernet</span>
                                Architecture Design
                              </h3>
                              <ul className="space-y-3">
                                {project.details.architecture.map((arch, idx) => (
                                  <li key={idx} className="flex items-start gap-3 bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                                    <span className="material-symbols-outlined text-secondary text-md pt-0.5">schema</span>
                                    <span className="text-sm text-on-surface-variant leading-relaxed">{arch}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-3">
                              <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">task_alt</span>
                                Key Implemented Features
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-on-surface-variant">
                                {project.details.features.map((feat, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-emerald-600 text-lg">check</span>
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: API Endpoints */}
                      {currentTab === 'api' && (
                        <div className="space-y-8">
                          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-outline-variant/10 pb-4">
                            <div>
                              <p className="text-sm text-on-surface-variant">
                                <span className="font-bold text-primary">Base URL: </span>
                                <code className="bg-surface-container px-2 py-1 rounded font-mono text-sm text-secondary">{project.details.apiBaseUrl}</code>
                              </p>
                            </div>
                            <a 
                              href={project.details.swaggerUi} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-sm text-secondary hover:text-primary font-bold flex items-center gap-1 hover:underline"
                            >
                              Explore in Swagger UI
                              <span className="material-symbols-outlined text-md">open_in_new</span>
                            </a>
                          </div>

                          <div className="space-y-8">
                            {project.details.apiEndpoints.map((cat, idx) => (
                              <div key={idx} className="space-y-4">
                                <h4 className="text-lg font-headline font-bold text-primary border-l-4 border-secondary pl-3">
                                  {cat.category} API
                                </h4>
                                <div className="overflow-x-auto rounded-lg border border-outline-variant/30">
                                  <table className="min-w-full divide-y divide-outline-variant/20">
                                    <thead className="bg-surface-container">
                                      <tr>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider w-24">Method</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Endpoint</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider w-24">Auth</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Description</th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-surface divide-y divide-outline-variant/10 font-sans">
                                      {cat.endpoints.map((ep, epIdx) => (
                                        <tr key={epIdx} className="hover:bg-surface-container-low transition-colors">
                                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                                            <span className={`px-2.5 py-1 rounded text-xs font-bold border ${getMethodBadgeColor(ep.method)}`}>
                                              {ep.method}
                                            </span>
                                          </td>
                                          <td className="px-4 py-3 whitespace-nowrap text-sm font-mono font-bold text-primary">
                                            {ep.path}
                                          </td>
                                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                              ep.auth === 'None' 
                                                ? 'bg-gray-100 text-gray-800 border border-gray-200' 
                                                : 'bg-primary-fixed text-on-primary-fixed border border-primary/20'
                                            }`}>
                                              {ep.auth}
                                            </span>
                                          </td>
                                          <td className="px-4 py-3 text-sm text-on-surface-variant">
                                            {ep.desc}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Setup & Config */}
                      {currentTab === 'setup' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div className="space-y-3">
                              <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">checklist</span>
                                Prerequisites
                              </h3>
                              <ul className="flex flex-wrap gap-2">
                                {project.details.gettingStarted.prerequisites.map((prereq, idx) => (
                                  <li key={idx} className="bg-surface-container-highest px-3 py-1 rounded-full text-sm text-on-surface font-semibold">
                                    {prereq}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">play_circle</span>
                                Run Locally
                              </h3>
                              {project.details.gettingStarted.steps.map((step, idx) => (
                                <div key={idx} className="space-y-2">
                                  <p className="text-sm font-bold text-primary">{step.title}</p>
                                  <pre className="bg-surface-container-highest p-3 rounded font-mono text-sm border border-outline-variant/30 text-on-surface overflow-x-auto">
                                    <code>{step.cmd}</code>
                                  </pre>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2">
                              <span className="material-symbols-outlined text-secondary">key</span>
                              Environment Variables
                            </h3>
                            <div className="overflow-hidden rounded-lg border border-outline-variant/30 text-sm">
                              <table className="min-w-full divide-y divide-outline-variant/20">
                                <thead className="bg-surface-container">
                                  <tr>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Variable</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-on-surface uppercase tracking-wider">Description</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-surface divide-y divide-outline-variant/10">
                                  {project.details.envVars.map((env, idx) => (
                                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                                      <td className="px-4 py-3 font-mono font-bold text-secondary">{env.name}</td>
                                      <td className="px-4 py-3 text-on-surface-variant">{env.desc}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
