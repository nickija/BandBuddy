export interface QueryResult<T> {
    count: number;
    total: number;
    items: T[];
}