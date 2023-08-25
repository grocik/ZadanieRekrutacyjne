// model kontaktu dostępnego po zalogowaniu
export interface LoggedContact{
    contactId: string;
    name: string;
    surename: string;
    email: string;
    password: string
    phoneNumber: number;
    birthDate: Date;
    category: string;
    subcategory: string;
}
