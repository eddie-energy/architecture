import {Octokit} from 'octokit';
import {Endpoints} from '@octokit/types';
import {Issue} from './Model.js';
import {GithubIssue} from "./import/GithubIssue";

type ListIssues = Endpoints['GET /repos/{owner}/{repo}/issues']['response'];


export class IssueService {
  private static issueLabels = ['bprt']
  private octokit: Octokit

  constructor() {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    this.octokit = new Octokit({auth: GITHUB_TOKEN});
  }

  public async issues(): Promise<Issue[]> {
    console.log("Gathering Issues")
    const result: ListIssues = await this.octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'eddie-energy', repo: 'architecture', headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }, labels: IssueService.issueLabels.join(',')
    })
    return result.data
      .map(issue => ({
        url: issue.html_url,
        title: issue.title,
        user: {
          name: issue.user.login, url: issue.user.html_url
        }, // @ts-ignore GitHubs type says that labels are strings, but are actually objects
        labels: issue.labels.map(label => label.name),
        state: issue.state,
        availableSince: new Date(issue.created_at),
        closedOn: issue.closed_at ? new Date(issue.closed_at) : null
      } as Issue))
  }

  public async createIssue(issue: GithubIssue) {
    const res = await this.octokit.request('POST /repos/{owner}/{repo}/issues',
      {
        owner: 'eddie-energy',
        repo: 'architecture',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        title: issue.title(),
        labels: issue.labels(),
        body: issue.body(),
      })
    console.log(res)
    return res
  }

}