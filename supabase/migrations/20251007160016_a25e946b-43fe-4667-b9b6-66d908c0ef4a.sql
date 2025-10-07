-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  message TEXT,
  whatsapp_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit contact form" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading submissions (for admin purposes)
CREATE POLICY "Anyone can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);

-- Create domain_consultation_submissions table
CREATE TABLE public.domain_consultation_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  brand_name TEXT NOT NULL,
  business_type TEXT,
  extension TEXT,
  budget TEXT,
  email TEXT NOT NULL,
  phone_country_code TEXT,
  phone_number TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.domain_consultation_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit domain consultation form" 
  ON public.domain_consultation_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading submissions (for admin purposes)
CREATE POLICY "Anyone can view domain consultation submissions" 
  ON public.domain_consultation_submissions 
  FOR SELECT 
  USING (true);