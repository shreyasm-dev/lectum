import { Readability } from '@mozilla/readability';
import { parseHTML } from 'linkedom';

export const load = async ({ params }): Promise<ReturnType<Readability['parse']>> =>
  new Readability(parseHTML(await (await fetch(params.url)).text()).document).parse();
