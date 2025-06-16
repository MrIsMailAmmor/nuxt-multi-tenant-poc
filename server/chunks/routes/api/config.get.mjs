import { c as defineEventHandler, e as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const config_get = defineEventHandler((event) => {
  if (!event.context.tenant) throw createError({ statusCode: 404 });
  return event.context.tenant;
});

export { config_get as default };
//# sourceMappingURL=config.get.mjs.map
