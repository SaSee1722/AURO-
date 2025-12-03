-- Enable the pg_net extension required for making HTTP requests
create extension if not exists pg_net;

-- Verify it's enabled
select * from pg_extension where extname = 'pg_net';
