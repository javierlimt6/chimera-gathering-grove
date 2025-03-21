
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { validateEmail } from '@/utils/validation';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmailFormProps {
  variant?: 'default' | 'hero';
  className?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ 
  variant = 'default',
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulation of API call (replace with actual Supabase implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist!",
        duration: 5000,
      });
      
      setEmail('');
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`w-full ${className}`}
    >
      <div className={`flex flex-col gap-3 ${variant === 'hero' ? 'md:flex-row' : ''}`}>
        <div className="relative w-full">
          <Mail 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" 
            aria-hidden="true" 
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`pl-10 h-12 w-full border-2 focus-visible:ring-2 focus-visible:ring-offset-0 ${
              error ? 'border-destructive ring-destructive' : 'border-input'
            } ${variant === 'hero' ? 'md:w-80' : ''}`}
            disabled={isSubmitting}
            aria-label="Email"
          />
        </div>
        
        <Button 
          type="submit" 
          className={`h-12 px-6 text-white font-medium gap-2 group transition-all duration-300 bg-chimera-orange hover:bg-chimera-orange/90 ${
            variant === 'hero' ? 'md:w-auto w-full' : 'w-full mt-2'
          }`}
          disabled={isSubmitting}
        >
          <span>Get early access</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Button>
      </div>
      
      {error && (
        <p className="text-destructive text-sm mt-2">{error}</p>
      )}
    </form>
  );
};

export default EmailForm;
