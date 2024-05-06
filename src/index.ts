/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Injector, Logger, webpack } from "replugged";

const inject = new Injector();
const logger = Logger.plugin("ezgif");

export async function start(): Promise<void> {
  const gifPickerMod = await webpack.waitForModule<{
    gifPicker: (channelId: string) => void;
  }>(webpack.filters.byProps("gifPicker"));

  if (gifPickerMod) {
    logger.log(gifPickerMod);
  }
}

export function stop(): void {
  inject.uninjectAll();
}
