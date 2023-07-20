import xlsx from "node-xlsx"
import {IssueForCreation} from "../Model";
import {GithubIssue} from "./GithubIssue";

export class BPRTExcelSheets {
  private readonly sheets: {name: string, data: any[][]}[];
  constructor(excelFile: string) {
    this.sheets = xlsx.parse(excelFile)
  }

  public issuesOfSheet(sheetNumber: number): GithubIssue[] {
    const sheet = this.sheets[sheetNumber].data
    const keys = sheet[0] as string[]
    const content = sheet.slice(1)
    return content
      .map(issue => zipArraysToObject(keys, issue))
      .filter(issue => issue["Title"])
      .map(issue => ({
        title: issue["Title"],
        labels: ["bprt", issue["Country"]],
        status: issue["Status"],
        description: issue["Description"],
        workaround: issue["EDDIE Workaround"],
        sustainableSolution: issue["Sustainable Solution"],
        projectedFor: issue["Projected for"],
        availableSince: issue["Available since"],
        owner: issue["Issue Owner"]
      } as IssueForCreation))
      .map(issue => new GithubIssue(issue))
  }
}

const zipArraysToObject = (keysArray: string[], valuesArray: any) =>
  keysArray.reduce((object, key, index) => {
    object[key] = valuesArray[index];
    return object;
  }, {});


