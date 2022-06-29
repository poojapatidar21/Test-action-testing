const core=require('@actions/core');
const github=require('@actions/github');
const {context}=require('@actions/github');

async function run() {
    console.log("Hello World2...... !!!");

    const GITHUB_TOKEN=core.getInput('GITHUB_TOKEN');
    const octokit=github.getOctokit(GITHUB_TOKEN);

    await octokit.rest.issues.createComment({
        ...context.repo,
        issue_number:context.payload.pull_request.number,
        body: 'Hello, Thank you for creating Pull request.'
    });
}

run();