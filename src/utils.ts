import { exec, ExecException } from "child_process";
import sh = require("shelljs");

import * as dateformat from "dateformat";

export function execute(command: string): Promise<string> {
  const cwd = sh.pwd().toString();
  return new Promise((resolve, reject) => {
    exec(
      command,
      { cwd },
      (error: ExecException | null, stdout?: string, stderr?: string) => {
        if (error) {
          reject(error);
          return;
        }

        if (stderr) {
          reject(stderr);
          return;
        }

        resolve(stdout);
      }
    );
  });
}

export async function getCurrentDateVersion(date: string): Promise<number> {
  const versionRegex = /^([0-9.]+)-([0-9]+)/;
  try {
    const result = await execute(`git describe --abbrev=0 --tags`);

    if (!result) {
      return 0;
    }

    let currentVersion = 0;
    const match = versionRegex.exec(result);

    if (match && match[1] === date) {
      // tslint:disable-next-line:no-magic-numbers
      currentVersion = parseInt(match[2], 10);
    }

    return currentVersion;
  } catch (ex) {
    console.error(ex);
  }
  return 0;
}

export const getCurrentDate = () => dateformat(new Date(), "yyyy.mm.dd");
