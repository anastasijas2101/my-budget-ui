export interface Transaction {
    id: number;
    description: String;
    amount: number;
    currency: String;
    accountId: number;
    type: TransactionType;
    convertedAmount: number;
    convertedCurrency: String;
}

export interface FilterOptions {
    name: string,
    id: number | null
}

export enum TransactionType {
    EXPENSE = 'EXPENSE',
    DEPOSIT = 'DEPOSIT'
}