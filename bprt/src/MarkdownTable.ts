import {Issue} from './Model.js';

export class MarkdownTable {
  private static header = ['Title', 'Available Since', 'Closed On', 'Description']

  constructor(private issues: Issue[]) {
  }

  public generate() {
    const table = this.issues.map(issue => {
      return [
        this.mdLink(issue.title, issue.url),
        issue.availableSince.toDateString(),
        issue.closedOn?.toDateString() ?? 'N/A',
        issue.description
          .split('\n')[2]
          .split("**Projected for**:")[0]
          .slice(0, 100)
          + '...'
      ]
    })
    return import("markdown-table")
      .then(md => md.markdownTable([MarkdownTable.header, ...table]))
  }

  private mdLink(text: string, url: string): string {
    return `[${text}](${url})`
  }
}