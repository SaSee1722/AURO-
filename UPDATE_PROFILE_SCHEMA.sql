-- Create profiles table if it doesn't exist
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,
  age integer
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Add age column if it doesn't exist (idempotent)
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name = 'profiles' and column_name = 'age') then
    alter table public.profiles add column age integer;
  end if;
end $$;
