import {IssueForCreation} from "../Model";


export class GithubIssue {
  constructor(private issue: IssueForCreation) {
  }

  public title() {
    return this.issue.title
  }

  public labels() {
    return this.issue.labels
  }

  public body() {
    return `
### Description
${this.issue.description}

**Projected for**: ${this.issue.projectedFor}
**Available since**: ${this.issue.availableSince}
**Owner**: ${this.issue.owner}
**Status**: ${this.issue.status}

### EDDIE Workaround
${this.issue.workaround}

### Sustainable Solution
${this.issue.sustainableSolution}`
  }
}