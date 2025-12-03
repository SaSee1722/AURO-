-- Check if pg_cron extension is enabled
select * from pg_extension where extname = 'pg_cron';

-- List all scheduled cron jobs
select * from cron.job;

-- Check the last 10 run details (to see if it's failing)
-- Note: cron.job_run_details might not be accessible depending on permissions, but worth a try
select * from cron.job_run_details order by start_time desc limit 10;
