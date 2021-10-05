# diconium Cariad Actions
## AppCenter Extensions - Delete Distributions
### Delete AppCenter distributions Action

This action iterates an list of AppCenter distributions and deletes it

## Inputs

## `distributions`

**Required** Comma-separated array of distribution IDs to delete, e.g. [24,25,45].

## `appName`

**Required** App Name. no default.

## `token`

**Required** App access token. no default.
```
uses: actions/appcenter-github-action-delete-extensions@v1.0
with:
    distributions: '[24,25,45]'
    appName: 'marcelosevergnini-dico/my_app_test'
    token: '******'
```