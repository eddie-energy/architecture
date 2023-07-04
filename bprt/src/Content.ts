import * as fs from 'fs';

export class Content {
  private header = `---
title: Issues
---
`

  constructor(private content: string) {
  }

  public write(file: string) {
    fs.writeFile(file, this.header + this.content, err => {
      if (err) {
        console.error(err);
      }
    });

  }
}