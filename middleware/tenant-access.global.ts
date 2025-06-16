import { abortNavigation, defineNuxtRouteMiddleware } from "nuxt/app";
import { tenantStore } from "~/utils/tenants";

export default defineNuxtRouteMiddleware((to) => {
  const tenantId = to.params.tenant as string;
  const tenant = tenantStore[tenantId];

  if (!tenant) {
    return abortNavigation({
      error: true,
    });
  }
});
