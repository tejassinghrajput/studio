"use client";

import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast'; // Use the toast hook
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card } from '@/components/ui/card'; // Import Card component

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Placeholder server action
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean, message: string }> {
  console.log("Form Data Submitted:", data);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success/failure
  const success = Math.random() > 0.2; // 80% success rate
  if (success) {
    return { success: true, message: "Message sent successfully! I'll get back to you soon." };
  } else {
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}


export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { formState } = form; // Get formState for submission status

   async function onSubmit(data: ContactFormValues) {
    try {
      const result = await submitContactForm(data);
       if (result.success) {
         toast({
           title: "Success!",
           description: result.message,
         });
         form.reset(); // Reset form on success
       } else {
         toast({
           title: "Error",
           description: result.message,
           variant: "destructive",
         });
       }
    } catch (error) {
       toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
    }
  }


  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-background to-slate-900/50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side: Text and Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let’s Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether it’s a job opportunity, startup idea, or tech collab — I'm open to talking!
          </p>

          <div className="space-y-4">
             <h3 className="text-xl font-semibold text-foreground mb-3">Find me on:</h3>
             <div className="flex items-center space-x-6">
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors hover-glow p-2 rounded-full">
                    <Linkedin className="h-7 w-7" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                 <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors hover-glow p-2 rounded-full">
                    <Github className="h-7 w-7" />
                     <span className="sr-only">GitHub</span>
                </Link>
                 <Link href="mailto:youremail@example.com" className="text-muted-foreground hover:text-accent transition-colors hover-glow p-2 rounded-full">
                    <Mail className="h-7 w-7" />
                     <span className="sr-only">Email</span>
                </Link>
             </div>
            <div className="pt-4">
               <Button variant="link" asChild className="text-accent hover:text-hover-glow p-0 h-auto">
                  <Link href="#">
                    <FileText className="h-5 w-5 mr-2"/> Download Resume
                  </Link>
               </Button>
            </div>
          </div>
        </motion.div>

        {/* Right side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
           <Card className="bg-card p-6 md:p-8 border border-border shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background border-border focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background border-border focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          rows={5}
                          {...field}
                          className="bg-background border-border focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow" disabled={formState.isSubmitting}>
                  {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
            </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
