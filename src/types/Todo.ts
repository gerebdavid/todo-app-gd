export interface Todo {
    title: string
    description: string
    creationDate: number
    priority: Priority
    isEditing: boolean
    isCompleted: boolean
    id: number
}

export type Priority = "Low" | "Medium" | "High"
