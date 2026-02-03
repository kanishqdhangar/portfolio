import { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setIsSubmitting(true);

    
    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.currentTarget,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          
          toast({
            title: "Message sent successfully!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          e.currentTarget.reset(); 
        },
        (error) => {
          
          toast({
            title: "Failed to send message",
            description: "Please try again or contact me directly via email.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false); 
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhangarkanishq@gmail.com',
      href: 'mailto:dhangarkanishq@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, Haryana, India',
      href: '#'
    },
    {
      icon: MessageCircle,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/kanishq-dhangar/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary-text">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project idea or want to collaborate on something innovative? Feel free to reach out — I’m always open to connecting and discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-gray-900 glow-border">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether it’s about a potential project, collaboration, or just a tech chat, I’d love to hear from you. Drop me a message, and I’ll get back as soon as possible.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href === '#' ? (
                          <p className="font-medium text-white">{info.value}</p>
                        ) : (
                          <a
                            href={info.href}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-white"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Call to Action */}
              <Card className="p-8 bg-gray-900 border-primary/20">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Open to Opportunities
                </h4>
                <p className="text-muted-foreground mb-6">
                  Currently exploring exciting roles in full-stack development, AI integration, and innovative product engineering. Let’s create something impactful together.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-950 bg-gray-900 text-white hover:bg-gray-700"
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1qPtQw2XlggZx1E1FJh3_CxrGx8A-Mt2d/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white">
                      View Resume
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-950 bg-gray-900 text-white hover:bg-gray-700"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/kanishq-dhangar/" target="_blank" rel="noopener noreferrer">
                      View LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-gray-900 glow-border">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name" // 'name' attribute is crucial for EmailJS
                      placeholder="Your name"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email" // 'name' attribute is crucial for EmailJS
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject" // 'name' attribute is crucial for EmailJS
                    placeholder="What's this about?"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message" // 'name' attribute is crucial for EmailJS
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 font-semibold py-3 glow-primary"
                >
                  {isSubmitting ? "Sending..." : (
                    <span className="flex items-center gap-2 text-black">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;