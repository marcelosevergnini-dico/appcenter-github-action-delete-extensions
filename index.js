const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
    let appName = core.getInput('appName');  // application name
    let token = core.getInput('token'); // your token that you copied;
    let from = core.getInput('from'); // from which release number to delete
    let to = core.getInput('to'); // by which release number to delete

    let url = `https://api.appcenter.ms/v0.1/apps/${appName}/releases/`;
    let requestInfo = {
        method: "delete",
        headers: { "X-API-TOKEN": token }
    };

    async function* asyncGenerator() {
        var i = from;
        while (i <= to) {
          yield i++;
        }
      }

    (async function() {
        for await (let num of asyncGenerator()) {
            try {
                await fetch(url + num, requestInfo);
                console.log(`Release ${num} deleted`)
            } catch (err) {
                console.log(err);
            }
        }
    })();

} catch (error) {
  core.setFailed(error.message);
}
