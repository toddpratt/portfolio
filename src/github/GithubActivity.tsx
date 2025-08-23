import './GithubActivity.css';

import { useEffect, useState } from "react";
import Repo from "./Repo.tsx";

export default function GithubActivity() {
    const [repos, setRepos] = useState<{[key: string]: any[]}>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/toddpratt/events")
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(
                    (e: any) => e.type === "PushEvent"
                ).reduce(
                    (acc: any, event: any) => {
                        if (acc[event.repo.name] == undefined) {
                            acc[event.repo.name] = [];
                        }
                        acc[event.repo.name].push(...event.payload.commits);
                        return acc;
                    }, {}
                );
                setRepos(filtered); // limit to 5 latest
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading GitHub activity...</p>;
    console.log(repos);
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
