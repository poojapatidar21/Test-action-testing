const core=require('@actions/core');
const github=require('@actions/github');

async function run() {
    console.log("Hello World !!!");

    const GITHUB_TOKEN=core.getInput('GITHUB_TOKEN');
    const octokit=github.getOctokit(GITHUB_TOKEN);

    const {context={}}=github;
    const{pull_request}=context.payload;

    await octokit.issues.createComment({
        ...context.repo,
        issue_number:pull_request.number,
        body: 'Hello, Thank you for creating Pull request.'
    });
}

run();