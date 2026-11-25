// Out-of-office auto-reply CLI: prints the outage line, optionally shouted.

const LINE =
  "Out of office: still processing your request from 3 AM, alongside the other four hundred.";

const USAGE = `Usage: node main.ts [--shout] [--help]

  --shout   Print the out-of-office line in uppercase
  --help    Show this help text and exit`;

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function main(): void {
  if (hasFlag("--help")) {
    console.error(USAGE);
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
