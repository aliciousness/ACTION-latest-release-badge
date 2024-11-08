import { getInput, setOutput, setFailed } from "@actions/core";
import { getOctokit } from "@actions/github";

(async () => {
  try {
    // Get the repository input
    const repo = getInput("repo", { required: true });
    const [owner, repoName] = repo.split("/");

    // Get GitHub token and set up Octokit
    const token = getInput("token", { required: true });
    const octokit = getOctokit(token);

    // Fetch the latest release information
    const { data: latestRelease } = await octokit.rest.repos.getLatestRelease({
      owner,
      repo: repoName,
    });

    // Get the tag name (e.g., v1.0.0) from the release
    const releaseTag = latestRelease.tag_name;

    // Create the Shields.io badge URL
    const badgeUrl = `https://img.shields.io/badge/release-${encodeURIComponent(releaseTag)}-brightgreen`;

    // Output the badge URL
    setOutput("badge_url", badgeUrl);
  } catch (error) {
    setFailed(`Action failed with error: ${error.message}`);
  }
})();
