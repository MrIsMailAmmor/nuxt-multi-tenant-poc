import { useRequestEvent } from "nuxt/app";

export const useTenant = () => {
  const event = useRequestEvent();
  if (!event?.context?.tenant) {
    throw createError({
      statusCode: 500,
      statusMessage: "Tenant not found in request context",
    });
  }
  return event.context.tenant;
};
