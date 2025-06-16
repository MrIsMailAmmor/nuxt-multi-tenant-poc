import { getTenantByHost } from "@/utils/tenants";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event: any) => {
    const host = event.node.req.headers.host || "";
    const tenant = getTenantByHost(host);
    event.context.tenant = tenant;
  });
});
