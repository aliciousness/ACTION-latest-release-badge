[![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge\&logo=ubuntu\&logoColor=white)](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
[![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge\&logo=macos\&logoColor=F0F0F0)](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge\&logo=windows\&logoColor=white)](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
<!-- action-docs-header source="action.yml" -->

<!-- action-docs-header source="action.yml" -->

<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `repo` | <p>Repository to check for latest release</p> | `true` | `owner/repo` |
| `token` | <p>GitHub token</p> | `true` | `""` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
## Outputs

| name | description |
| --- | --- |
| `badge_url` | <p>URL for the Shields.io badge</p> |
<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-usage source="action.yml" project="aliciousness/ACTION-latest-release-badge" version="v1.0.0" -->
## Usage

```yaml
- uses: aliciousness/ACTION-latest-release-badge@v1.0.0
  with:
    repo:
    # Repository to check for latest release
    #
    # Required: true
    # Default: owner/repo

    token:
    # GitHub token
    #
    # Required: true
    # Default: ""
```
<!-- action-docs-usage source="action.yml" project="gce-digital-marketing-infrastructure/ACTION-latest-release-badge" version="v1.0.0" -->


> NOTE: To update the readme, just run the `npm run prebuild` This script will lint the code, and update the readme with the docs for said action using the [action.yml](./action.yml) file and the name of the project and version from your [package.json](./package.json) file
