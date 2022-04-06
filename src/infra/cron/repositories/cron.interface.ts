export interface ICronRepository {
  syncArticles(): Promise<void>
}