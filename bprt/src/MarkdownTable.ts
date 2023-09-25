import {Issue} from './Model.js';

export class MarkdownTable {
  private static header = ['Title', 'Available Since', 'Closed On', 'Description']
  private static notAvailable = 'N/A';

  constructor(private issues: Issue[]) {
  }

  public generate() {
    const table = this.issues.map(issue => {
      return [
        this.mdLink(issue.title, issue.url),
        issue.availableSince.toDateString(),
        issue.closedOn?.toDateString() ?? 'N/A',
        this.parseDescription(issue.description)
      ]
    })
    return import("markdown-table")
      .then(md => md.markdownTable([MarkdownTable.header, ...table]))
  }

  private mdLink(text: string, url: string): string {
    return `[${text}](${url})`
  }

  private parseDescription(text: string): string {
    if (!text) {
      return MarkdownTable.notAvailable
    }
    const description = text
      .split('\n')[2]
      .split("**Projected for**:")[0]
      .replace('\n', ' ')
      .trim()
    if (description.length === 0) {
      return MarkdownTable.notAvailable
    }
    const shortenedDescription = description.slice(0, 100)
    return shortenedDescription
      + (
        description.length === shortenedDescription.length
          ? ''
          : '...'
      )
  }
}