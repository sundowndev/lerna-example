export type FuncTest = 42 | 2 | 5;

export interface IMigrationOptions {
  logs?: boolean;
  logger?: any;
  logIfLatest?: boolean;
  collectionName?: string;
  db: string;
}
