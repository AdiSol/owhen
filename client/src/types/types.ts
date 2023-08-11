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

export interface IOU {
    id: number;
    creditor: string;
    amount: number;
    deadline: string;
    notes: string;
    status: Status;
}

export enum Status {
    unpaid = 0,
    paidFull = 1,
    forgiven = 2
}