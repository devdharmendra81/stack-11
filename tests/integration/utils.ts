import { chromium, ChromiumBrowserContext } from 'playwright';
import { Page } from 'playwright-core';
import { join } from 'path';
import { mkdtemp } from 'fs';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { setupMocks } from '../mocks';
import { DemoPage } from '../page-objects/demo.page';
import { WalletPage } from '@tests/page-objects/wallet.page';
import { SettingsSelectors } from '@tests/integration/settings.selectors';

const makeTmpDir = promisify(mkdtemp);

export function createTestSelector<T extends string>(name: T): `[data-testid="${T}"]` {
  return `[data-testid="${name}"]`;
}

export function getCurrentTestName() {
  return expect.getState().currentTestName.replaceAll(' ', '-');
}

export function randomString(len: number) {
  const charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

export const wait = async (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};

async function getBackgroundPage(context: ChromiumBrowserContext) {
  const existing = context.backgroundPages();
  if (existing.length) return existing[0];
  const page = await context.waitForEvent('backgroundpage');
  return page;
}

export async function setupBrowser(verbose?: boolean) {
  const extPath = join(__dirname, '../../dist');
  const launchArgs: string[] = [
    `--disable-extensions-except=${extPath}`,
    `--load-extensions=${extPath}`,
    `--no-sandbox`,
  ];
  const tmpDir = await makeTmpDir(join(tmpdir(), 'wallet-data-'));
  const context = (await chromium.launchPersistentContext(tmpDir, {
    args: launchArgs,
    headless: false,
    slowMo: 100,
  })) as ChromiumBrowserContext;

  await context.grantPermissions(['clipboard-read']);
  const backgroundPage = await getBackgroundPage(context);
  backgroundPage.on('pageerror', event => {
    console.error('Error in background script of extension.');
    console.error(event);
  });
  const backgroundPageLogs: string[] = [];
  backgroundPage.on('console', e => {
    backgroundPageLogs.push(e.text());
    if (verbose) {
      console.log('Background console.log:', e.text());
    }
  });
  if (process.env.CI) {
    console.log('[DEBUG]: Launched playwright browser');
  }
  await setupMocks(context);
  const demoConsoleLogs: string[] = [];
  const demo = await DemoPage.init(context);
  demo.page.on('pageerror', event => {
    if (verbose) {
      console.log('Demo page error:', event.message);
    }
  });
  demo.page.on('console', event => {
    if (verbose) {
      console.log('Test app console.log', event.text());
    }
    demoConsoleLogs.push(event.text());
  });
  return {
    demoConsoleLogs,
    demo,
    backgroundPage,
    context,
  };
}

type Await<T> = T extends PromiseLike<infer U> ? U : T;

export type BrowserDriver = Await<ReturnType<typeof setupBrowser>>;

// ts-unused-exports:disable-next-line
export const debug = async (page: Page) => {
  jest.setTimeout(345600000);
  // Run a debugger (in case Playwright has been launched with `{ devtools: true }`)
  await page.evaluate(() => {
    // eslint-disable-next-line no-debugger
    debugger;
  });

  const KEYS = {
    CONTROL_C: '\u0003',
    CONTROL_D: '\u0004',
    ENTER: '\r',
  };
  console.log('\n\n🕵️‍  Code is paused, press enter to resume');
  // Run an infinite promise
  return new Promise(resolve => {
    const { stdin } = process;
    const listening = stdin.listenerCount('data') > 0;
    const onKeyPress = (key: string): void => {
      if (key === KEYS.CONTROL_C || key === KEYS.CONTROL_D || key === KEYS.ENTER) {
        stdin.removeListener('data', onKeyPress);
        if (!listening) {
          if (stdin.isTTY) {
            stdin.setRawMode(false);
          }
          stdin.pause();
        }
        resolve(true);
      }
    };
    if (!listening) {
      if (stdin.isTTY) {
        stdin.setRawMode(true);
      }
      stdin.resume();
      stdin.setEncoding('utf8');
    }
    stdin.on('data', onKeyPress);
  });
};

export const selectTestnet = async (wallet: WalletPage) => {
  await wallet.clickSettingsButton();
  await wallet.page.click(createTestSelector(SettingsSelectors.ChangeNetworkAction));
  await wait(1500);

  const networkListItems = await wallet.page.$$(
    createTestSelector(SettingsSelectors.NetworkListItem)
  );
  console.log(networkListItems[1].innerHTML());
  await networkListItems[1].click();
};

export const timeDifference = (startDate: Date, endDate: Date) => {
  const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  return seconds;
};
