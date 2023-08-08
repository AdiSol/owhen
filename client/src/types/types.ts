export interface Expense {
    category: string;
    date: string;
    notes: string;
    amount: number;
}

export interface Page {
    label: string;
    route: string;
    key: string;
}

export interface ExpenseElementProps {
    expense: Expense;
}

export const currency: string ='NT$';