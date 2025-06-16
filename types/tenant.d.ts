declare module "h3" {
  interface H3EventContext {
    tenant?: {
      id: string;
      name: string;
      themeColor: string;
      logoUrl: string;
    };
  }
}
