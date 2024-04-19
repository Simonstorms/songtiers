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
import { useSignupForm } from "@/app/signup/useSignupForm";

// Updating the schema to include first and last name fields
const formSchema = z
    .object({
        firstName: z.string().min(1, { message: "First name is required." }),
        lastName: z.string().min(1, { message: "Last name is required." }),
        email: z.string().email({ message: "Invalid email address." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." }),
        confirmPassword: z.string(),
    })
    .refine(
        (data) => {
            return data.password === data.confirmPassword;
        },
        {
            message: "Passwords do not match",
            path: ["passwordConfirm"],
        },
    );
export function SignupForm() {
    const { handleSubmit: handleSignup } = useSignupForm();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => handleSignup(data))}
                className="space-y-8"
            >
                <div className="flex space-x-4">
                    {" "}
                    {/* Flex container for inline fields */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="First name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="email@example.com"
                                    {...field}
                                />
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="******"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="******"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </Form>
    );
}
