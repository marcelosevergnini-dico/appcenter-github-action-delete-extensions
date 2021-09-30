# diconium Cariad Actions
## AppCenter Extensions - Range Delete Action
### Missing delete distributions from the Official AppCenter Github Actions

This action iterates an input range for App Center distributions and deletes it

## Inputs

## `from`

**Required** From which release number to delete. Default `"0"`.

## `to`

**Required** to which release number to delete. Default `"0"`.

uses: actions/appcenter-deletion-action@v1.1
with:
    from: '1'
    to: '50'