"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSigninForm } from "@/app/signin/useSigninForm";

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }), // Validates that the string is an email
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." }), // Sets minimum length for password
});

export function SigninForm() {
    // 1. Define your form.
    const { handleSubmit: handleSignin } = useSigninForm(); // Use the custom hook
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => handleSignin(data))}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Passsword</FormLabel>
                            <FormControl>
                                <Input placeholder="******" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
