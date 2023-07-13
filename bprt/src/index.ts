import {IssueService} from './IssueService'
import {Configuration} from './Configuration';
import {Issue} from './Model.js';
import {MarkdownTable} from './MarkdownTable';
import {Content} from './Content';

interface Dictionary<T> {
  [Key: string]: T;
}

function groupBy(arr: Issue[], labels: string[]): Dictionary<Issue[]> {
  return arr.reduce(function (memo, x) {
    const matchingLabels = labels.filter(label => x.labels.includes(label))

    for (let matchingLabel of matchingLabels) {
      if (!memo[matchingLabel]) {
        memo[matchingLabel] = [];
      }
      memo[matchingLabel].push(x);
    }
    return memo;
  }, {} as Dictionary<Issue[]>);
}

async function writeGroupedIssues(groupedIssues: Dictionary<Issue[]>, config: Configuration) {
  for (let key in groupedIssues) {
    new Content(
      await new MarkdownTable(groupedIssues[key])
        .generate()
    )
      .write(config.pathFor(key))
  }
}

export async function writeIssues() {
  const config = new Configuration()
  const issueService = new IssueService()
  await issueService.issues()
    .then(issues => groupBy(issues, config.labels()))
    .then(issues => writeGroupedIssues(issues, config))
    .finally(() => console.log("Done!"))
    .catch(err => console.log(`Error when generating BPRT Issue tables:\n${err}`))
}


