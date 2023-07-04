import {Issue} from './Model.js';

export class MarkdownTable {
  private static header = ['Title', 'Labels', 'Issue Owner', 'Available Since', 'Closed On']

  constructor(private issues: Issue[]) {
  }

  public generate() {
    const table = this.issues.map(issue => {
      return [
        this.mdLink(issue.title, issue.url),
        issue.labels.join(', '),
        this.mdLink(issue.user.name, issue.user.url),
        issue.availableSince.toDateString(),
        issue.closedOn?.toDateString() ?? 'N/A'
      ]
    })
    return import("markdown-table")
      .then(md => md.markdownTable([MarkdownTable.header, ...table]))
  }

  private mdLink(text: string, url: string): string {
    return `[${text}](${url})`
  }
}