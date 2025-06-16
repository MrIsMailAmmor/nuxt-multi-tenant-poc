export interface Tenant {
  id: string;
  name: string;
  themeColor: string;
  logoUrl: string;
}

export const tenantStore: Record<string, Tenant> = {
  "tenant1.localhost:3000": {
    id: "tenant1",
    name: "Tenant One",
    themeColor: "#FF5733",
    logoUrl: "/logos/tenant1.svg",
  },
  "tenant2.localhost:3000": {
    id: "tenant2",
    name: "Tenant Two",
    themeColor: "#33C4FF",
    logoUrl: "/logos/tenant2.svg",
  },
};

export function getTenantByHost(host: string) {
  return tenantStore[host] || null;
}
