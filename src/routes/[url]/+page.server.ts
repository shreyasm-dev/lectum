import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

export const load = async ({ params }): Promise<ReturnType<Readability['parse']>> =>
  new Readability(new JSDOM(await (await fetch(params.url)).text()).window.document).parse();
