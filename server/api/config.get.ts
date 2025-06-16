import { Tenant } from "~/utils/tenants";

export default defineEventHandler((event) => {
  if (!event.context.tenant) throw createError({ statusCode: 404 });
  return event.context.tenant as Tenant;
});
