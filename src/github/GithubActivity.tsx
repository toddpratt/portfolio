import './GithubActivity.css';

import { useEffect, useState } from "react";
import Repo from "./Repo.tsx";

export default function GithubActivity() {
    const [repos, setRepos] = useState<{[key: string]: any[]}>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/toddpratt/events")
            .then(res => res.json())
            .then(async data => {
                const pushEvents = data.filter(e => e.type === "PushEvent");
                const filtered: {[key: string]: any[]} = {};

                for (const event of pushEvents) {
                    const repoName: string = event.repo.name;
                    const before = event.payload.before;
                    const head = event.payload.head;

                    // Fetch commits using the Compare API
                    const compareUrl = `https://api.github.com/repos/${repoName}/compare/${before}...${head}`;
                    const compareRes = await fetch(compareUrl);
                    const compareData = await compareRes.json();

                    if (!filtered[repoName]) {
                        filtered[repoName] = [];
                    }
                    filtered[repoName].push(...compareData.commits);
                }

                setRepos(filtered);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading GitHub activity...</p>;
    return (
        <div className="github-activity">
            <h1>Github Activity</h1>
            <div>
                {Object.keys(repos).map((name, idx) => {
                    return (
                        <div className="push-event-container" key={idx}>
                            <Repo name={name} commits={repos[name]} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
