export interface Task {
    id?: number; // ? is a conditional so if there is no ID it will not give an error
    text: string;
    day: string;
    reminder: boolean;
}