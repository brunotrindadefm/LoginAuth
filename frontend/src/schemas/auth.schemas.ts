import { z } from "zod";

export const emailSchema = z.string()
    .email("Invalid e-mail")
    .min(7, "Min 7 characteres")
    .max(100, "Max 100 characteres")

export const passwordSchema = z.string()
    .min(6, "Min 6 characteres")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(/[0-9]/, "Password must contain at least one nmumber")

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema
})

export const registerSchema = loginSchema.extend({
    name: z.string()
        .min(3, "Min 3 characteres")
        .max(50, "Max 50 characteres"),    
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Password are not equals",
    path: ["confirmPassword"]
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;