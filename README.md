# diconium Cariad Actions
## AppCenter Extensions - Range Delete Action
### Missing delete distributions from the Official AppCenter Github Actions

This action iterates an input range for App Center distributions and deletes it

## Inputs

## `from`

**Required** From which release number to delete. Default `"0"`.

## `to`

**Required** to which release number to delete. Default `"0"`.

```
steps:
    uses: actions/appcenter-github-actions-extensions@v1.0
    with:
        from: '1'
        to: '50'
```