import { Command, flags } from "@oclif/command";
import { getCurrentDate, getCurrentDateVersion } from "../utils";

export default class Current extends Command {
  static description = "Displays current version";

  static flags = {
    help: flags.help({ char: "h" })
  };

  async run() {
    const date = getCurrentDate();
    const currentVersion = await getCurrentDateVersion(date);
    console.info("Current version: ", currentVersion);
  }
}
