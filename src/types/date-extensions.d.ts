declare global {
  interface Date {
    format(fmt: string): string;
  }
}

export {};
