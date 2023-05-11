import { Octokit } from "octokit";
import { Repository } from "../types";
/**
 * !Esta es mi api key privada, esta prohibido usarla!
 */
const apiKey = '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';


const octokit = new Octokit({
    auth: apiKey,
});

export const getGithubRepositories = async (username: string) => {
    try {
        const { data } = await octokit.request("GET /users/{username}/repos", {
            username,
            per_page: 50,
        });
        const repositories = data.map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
        }));
        return repositories;
    } catch (error) {
        console.error(error);
        return [];
    }
};