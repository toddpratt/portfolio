
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
            "Develop new features and bug fixes for two web-based customer portals.",
            "Introduced Ansible configurations for server provisioning and deployments.",
            "Implemented blue-green deployment strategy.",
        ],
        skills: [
            "MariaDB",
            "Python",
            "Flask",
            "SQL Alchemy",

            "Typescript",
            "Angular",
            "Rxjs",
            "NgRx",
            "HTML",
            "CSS/SCSS",

            "AWS",
            "Azure",
            "Terraform",
            "Ansible",
            "Jenkins",
            "Linux",
            "Docker",
            "Kubernetes",
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
            "Built components to parse, transform, and analyze customer-provided data.",
            "Developed API features to improve data quality.",
            "Contributed to single-page frontend application.",
            "Assisted peers with Docker, Nginx, shell scripting, AWS, and Ansible.",
        ],
        skills: [
            "MySQL (Aurora)",
            "Python",
            "Django",

            "Javascript",
            "HTML",
            "CSS",

            "AWS",
            "Ansible",
            "Jenkins",
            "Docker",
            "Git",
        ],
    },
    {
        company: "Mirror Image Internet, Inc.",
        shortName: "Mirror Image",
        title: "Software Engineer",
        from: "February 2017",
        to: "June 2017",
        responsibilities: [
            "Develop features, fix bugs for an AngularJS 1.x customer portal.",
            "Maintained node.js backend API consuming multiple data sources.",
            "Wrote unit tests and improved overall code quality."
        ],
        skills: [
            "Javascript",
            "AngularJS",
            "HTML",
            "CSS",

            "Node.js",
            "MongoDB",

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
            "Built tools to speed development, improve test coverage, and increase developer velocity.",
            "Developed large integration and Selenium tests.",
        ],
        skills: [
            "C++",
            "Java",
            "JavaScript",
            "Python",
            "HTML",
            "CSS",
            "Selenium",
            "Git",
            "Perforce"
        ],
    },
    {
        company: "ITA Software by Google, Inc.",
        shortName: "Google",
        title: "Software Engineer / Site Reliability Engineer",
        from: "April 2011",
        to: "April 2014",
        responsibilities: [
            "Developed highly available deployment, data processing, and monitoring tools.",
            "Managed large-scale clustered deployments.",
            "Enhanced existing internal tooling.",
        ],
        skills: [
            "Python",
            "App Engine",
            "HTML",
            "CSS",
            "Configuration Management",
            "On Call Duty",
        ],
    },
    {
        company: "ITA Software, Inc.",
        shortName: "ITA",
        title: "Operations Programmer",
        from: "June 2008",
        to: "April 2011",
        responsibilities: [
            "Designed and developed large web-based applications.",
            "Built monitoring and automation tools.",
            "Implement Selenium tests.",
        ],
        skills: [
            "MySQL",
            "Python",
            "Perl",
            "HTML",
            "CSS",
            "Selenium",
            "Linux Administration",
            "Subversion",
        ],
    }
];
