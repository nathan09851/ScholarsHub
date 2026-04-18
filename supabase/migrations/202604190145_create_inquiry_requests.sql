create extension if not exists pgcrypto;

create table if not exists public.inquiry_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 80),
  student_name text not null check (char_length(student_name) between 2 and 80),
  phone text not null check (char_length(phone) between 10 and 20),
  email text,
  class_level text not null check (char_length(class_level) between 2 and 30),
  preferred_campus text not null check (preferred_campus in ('Thivim', 'Corlim', 'Either')),
  intent text not null check (intent in ('callback', 'fees', 'enrollment', 'demo')),
  subject_interest text not null check (char_length(subject_interest) between 2 and 120),
  message text,
  source_page text not null check (char_length(source_page) between 1 and 80),
  status text not null default 'new' check (status in ('new', 'contacted', 'enrolled', 'closed')),
  user_agent text,
  request_origin text,
  ip_fingerprint text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists inquiry_requests_created_at_idx
  on public.inquiry_requests (created_at desc);

create index if not exists inquiry_requests_ip_fingerprint_idx
  on public.inquiry_requests (ip_fingerprint, created_at desc);

alter table public.inquiry_requests enable row level security;

revoke all on public.inquiry_requests from anon;
revoke all on public.inquiry_requests from authenticated;

create or replace function public.set_current_timestamp_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_inquiry_requests_updated_at on public.inquiry_requests;

create trigger set_inquiry_requests_updated_at
before update on public.inquiry_requests
for each row
execute procedure public.set_current_timestamp_updated_at();
