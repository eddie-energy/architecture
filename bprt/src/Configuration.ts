import * as config from './config';

export class Configuration {
  public pathFor(label: string): string {
    return config['default'][label]
  }

  public labels(): string[] {
    return Object.keys(config['default'])
  }
}