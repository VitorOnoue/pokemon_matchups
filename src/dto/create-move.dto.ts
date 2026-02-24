import { MoveCategory } from "@prisma/client"

export interface CreateMoveDTO {
    name: string
    category: MoveCategory
    power?: number
    accuracy?: number
    pp: number
    type: string
}