# diconium Cariad Actions
## AppCenter Extensions - Delete Distributions Action
### Delete distributions extension from the Official AppCenter Github Actions

This action iterates an input range for App Center distributions and deletes it

## Inputs

## `from`

**Required** From which release number to delete. Default `"0"`.

## `to`

**Required** to which release number to delete. Default `"0"`.

## `appName`

**Required** App Name. no default.

## `token`

**Required** App access token. no default.
```
uses: actions/appcenter-github-action-delete-extensions@v1.0
with:
    from: '1'
    to: '50'
    appName: 'marcelosevergnini-dico/my_app_test'
    token: '******'
```