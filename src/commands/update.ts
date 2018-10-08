// @ts-ignore
import { Command, flags } from "@oclif/command";

import * as fs from "fs";

// @ts-ignore
import cli from "cli-ux";
import { execute, getCurrentDate, getCurrentDateVersion } from "../utils";

export default class Update extends Command {
  static description =
    "Adds a git tag for next version and update package.json to match.";

  static flags = {
    help: flags.help({ char: "h" }),
    push: flags.boolean({
      char: "p",
      description:
        "Run a git push and git push --tags after updating the version"
    }),
    format: flags.string({
      char: "f",
      description: "Format that the date portion should be in",
      required: false,
      default: undefined
    }),
    message: flags.string({
      char: "m",
      description: "The message you want attached to the git tag",
      required: false
    })
  };

  async getNextVersion(date: string): Promise<number> {
    const currentVersion = await getCurrentDateVersion(date);
    return currentVersion + 1;
  }

  updatePackageDate(
    content: string,
    date: string,
    nextVersion: number
  ): string {
    return content.replace(
      /("version":\s*)"[0-9.-]*"/,
      (matched: string, label: string) => {
        return `${label}"${date}-${nextVersion}"`;
      }
    );
  }

  async addGitTag(
    date: string,
    version: number,
    message?: string
  ): Promise<string> {
    let command = `git tag "${date}-${version}"`;

    if (message) {
      command += ` -m "${message}"`;
    }

    const line = await execute(command);
    return line;
  }

  async run() {
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    const { flags } = this.parse(Update);

    const date = getCurrentDate(flags.format);

    cli.action.start("getting today's version");
    const nextVersion = await this.getNextVersion(date);

    if (fs.existsSync("package.json")) {
      cli.action.start("updating package.json");
      let content = fs.readFileSync("package.json").toString("utf-8");
      content = this.updatePackageDate(content, date, nextVersion);
      fs.writeFileSync("package.json", content);

      await execute("git add package.json");
      await execute(
        `git commit -m "Updating to version ${date}-${nextVersion}"`
      );
    }

    cli.action.start("creating git tag");
    await this.addGitTag(date, nextVersion, flags.message);

    if (flags.push) {
      cli.action.start("pushing commits and tags");
      await execute("git push & git push --tags");
    }

    cli.action.stop(`updated to ${date}-${nextVersion}`);

    console.info("Done");
  }
}
