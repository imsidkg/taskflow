import {z} from 'zod'

export const loginSchmea = z.object({
    email : z.string( ).email(),
    password : z.string()
})

    export const registrationSchema = z.object({
        name : z.string(),
        email : z.string().email(),
        password : z.string().min(8, "Minimum 8 character")
    })