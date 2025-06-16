import { useTenant } from "./useTenant";

// composables/useApi.ts
export function useApi() {
  const tenant = useTenant();
  const baseUrl = tenant.apiBaseUrl;

  function get(path: string) {
    return $fetch(`${baseUrl}${path}`);
  }
  return { get };
}
