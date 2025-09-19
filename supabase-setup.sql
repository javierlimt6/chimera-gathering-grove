-- Create the waitlist table for storing email addresses
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the waitlist signup)
CREATE POLICY "Anyone can insert into waitlist" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read (optional, for admin purposes)
CREATE POLICY "Authenticated users can read waitlist" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Optional: Create a trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();