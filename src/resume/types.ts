
export interface IExperience {
    company: string;
    shortName: string;
    title: string;
    from: string;
    to: string;
    responsibilities: string[];
    skills: string[];
}

export const experiences: IExperience[] = [
    {
        company: "Cigent Technology, Inc.",
        shortName: "Cigent",
        title: "Software Engineer, DevOps Engineer",
        from: "November 2019",
        to: "Present",
        responsibilities: [
            "Designed and implemented automated infrastructure provisioning with Ansible and Terraform, bringing repeatability and confidence and reducing deployment time and effort.",
            "Introduced blue-green deployment strategy and CI/CD pipelines (Jenkins), improving release frequency and system reliability.",
            "Developed monitoring and logging integrations with Prometheus, Grafana, and Loki to ensure observability across distributed systems.",
            "Containerized applications (Docker, Kubernetes) and streamline cross-cloud deployments on AWS and Azure.",
            "Contributed to two customer-facing web portals (Flask + Angular), delivering large new features while ensuring backend scalability and performance.",
        ],
        skills: [
            "Terraform",
            "Ansible",
            "CI/CD (Jenkins, GitHub Actions)",
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure",
            "Linux",
            "Python",
            "Flask",
            "MariaDB / SQLAlchemy",
            "TypeScript",
            "Angular",
            "Git",
        ],
    },
    {
        company: "Zoomi, Inc.",
        shortName: "Zoomi",
        title: "Software Engineer",
        from: "August 2017",
        to: "November 2019",
        responsibilities: [
            "Built and optimized ETL components to parse, transform, and analyze customer datasets, improving data accuracy and reporting speed.",
            "Developed REST APIs (Django + Python) to enhance data quality checks and integrations.",
            "Contributed to a single-page web application, improving user experience and responsiveness.",
            "Provided DevOps support for peers with Docker, AWS, Nginx, and Ansible, helping the team adopt automation best practices.",
        ],
        skills: [
            "Python",
            "Django",
            "AWS",
            "Ansible",
            "Docker",
            "MySQL (Aurora)",
            "Git",
            "JavaScript",
            "HTML/CSS",
        ],
    },
    {
        company: "Mirror Image Internet, Inc.",
        shortName: "Mirror Image",
        title: "Software Engineer",
        from: "February 2017",
        to: "June 2017",
        responsibilities: [
            "Enhanced an AngularJS 1.x customer portal and Node.js API, improving performance and maintainability.",
            "Wrote unit tests and improved test coverage to increase overall software reliability.",
        ],
        skills: [
            "JavaScript",
            "Node.js",
            "MongoDB",
            "AngularJS",
            "HTML/CSS",
            "Git",
        ],
    },
    {
        company: "Google, Inc.",
        shortName: "Google",
        title: "Software Engineer, Tools and Infrastructure",
        from: "April 2014",
        to: "January 2017",
        responsibilities: [
            "Developed internal tools that improved developer velocity by automating test coverage, build systems, and integration workflows.",
            "Created large-scale integration and Selenium test suites to improve quality across distributed systems.",
        ],
        skills: [
            "Python",
            "C++",
            "Java",
            "Selenium",
            "Git",
            "JavaScript",
        ],
    },
    {
        company: "ITA Software by Google, Inc.",
        shortName: "Google",
        title: "Software Engineer / Site Reliability Engineer",
        from: "April 2011",
        to: "April 2014",
        responsibilities: [
            "Developed resilient deployment and monitoring tools to support large-scale clustered environments.",
            "Improved high-availability systems through automation and performance tuning.",
        ],
        skills: [
            "Python",
            "Google App Engine",
            "Configuration Management",
            "On-call Operations",
        ],
    },
    {
        company: "ITA Software, Inc.",
        shortName: "ITA",
        title: "Operations Programmer",
        from: "June 2008",
        to: "April 2011",
        responsibilities: [
            "Developed web-based automation and monitoring applications used across engineering teams.",
            "Implemented Selenium test frameworks to ensure application quality.",
        ],
        skills: [
            "Python",
            "MySQL",
            "Perl",
            "Linux Administration",
            "Selenium",
        ],
    }
];

