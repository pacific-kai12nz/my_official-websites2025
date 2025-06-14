declare module "astro-i18next" {
  const i18next: any;
  export default i18next;

  export interface TFunction {
    (key: string): string;
    (key: string, options: { returnObjects: true }): string[];
  }

  export function useTranslation(ns?: string | string[]): {
    t: TFunction;
  };
}
