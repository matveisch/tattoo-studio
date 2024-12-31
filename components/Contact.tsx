'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneIcon as WhatsappIcon } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to your backend
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-16 bg-background w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841902907894!2d-73.98651708459377!3d40.74881097932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="shadow-md"
              ></iframe>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
                <li>Saturday: 11:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <Button className="w-full rounded-none" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  className="rounded-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
