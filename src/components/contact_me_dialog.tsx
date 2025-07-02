import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactDialog = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            );
            toast.success("Message sent successfully!");
            setIsOpen(false);
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        }
        setLoading(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Say Hello</DialogTitle>
                    <DialogDescription>Rest assured, you should get a response in no more than 48hrs</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" name="name" placeholder="Pedro James" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="friend@gmail.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <DialogFooter className="mt-2">
                        <Button type="submit" disabled={loading} className="w-full" size="lg">
                            {loading ? (
                                <div className="flex gap-2">
                                    <Loader2 className="mr-2 animate-spin" /> Sending
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ContactDialog;
