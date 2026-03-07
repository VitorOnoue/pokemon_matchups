import { MoveCategory } from "@prisma/client"

export interface UpdateMoveDTO {
    name?: string
    category?: MoveCategory
    power?: number
    accuracy?: number
    pp?: number
    type?: string
}