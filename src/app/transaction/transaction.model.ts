export interface Transaction {
    id: number;
    description: String;
    amount: number;
    currency: String;
    accountId: number;
}

export interface FilterOptions {
    name: string,
    id: number | null
}