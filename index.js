const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
    let appName = core.getInput('appName');  // application name
    let token = core.getInput('token'); // your token that you copied;
    let distributions = core.getInput('distributions'); // List of distribution IDs to delete

    let url = `https://api.appcenter.ms/v0.1/apps/${appName}/releases/`;
    let requestInfo = {
        method: "delete",
        headers: { "X-API-TOKEN": token }
    };

    (async function() {
        let url = `https://api.appcenter.ms/v0.1/apps/${appName}/releases/`;
        try {
            distributions.forEach(distribution => {
                fetch(url + distribution, requestInfo);
                console.log(`Release ${distribution} deleted`)
            });
        } catch (err) {
            console.log(err);
        }
    })();

} catch (error) {
  core.setFailed(error.message);
}
