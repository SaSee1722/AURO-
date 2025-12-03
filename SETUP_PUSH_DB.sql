-- 🔔 Create table for storing user device tokens (FCM/APNs)
create table if not exists public.user_devices (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  token text not null,
  platform text check (platform in ('android', 'ios', 'web')),
  last_active timestamptz default now(),
  created_at timestamptz default now(),
  
  -- Ensure one token per row, but allow multiple devices per user
  unique(token)
);

-- Enable RLS
alter table public.user_devices enable row level security;

-- Policies
create policy "Users can view their own devices"
  on public.user_devices for select
  using (auth.uid() = user_id);

create policy "Users can insert their own devices"
  on public.user_devices for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own devices"
  on public.user_devices for update
  using (auth.uid() = user_id);

create policy "Users can delete their own devices"
  on public.user_devices for delete
  using (auth.uid() = user_id);

-- Function to update last_active on token refresh
create or replace function public.handle_device_token()
returns trigger as $$
begin
  new.last_active = now();
  return new;
end;
$$ language plpgsql;
