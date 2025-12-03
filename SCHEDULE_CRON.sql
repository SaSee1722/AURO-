select cron.schedule(
  'invoke-push-scheduler', -- name of the cron job
  '* * * * *', -- every minute
  $$
  select
    net.http_post(
      url:='https://xzdldkwviiayysltizmz.supabase.co/functions/v1/push-scheduler',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZGxka3d2aWlheXlzbHRpem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTQ0MDgsImV4cCI6MjA4MDA3MDQwOH0.0f2202Q52H0DbFmPL9wr2tjPYEmafAHHBd_E9mSbCmo"}'::jsonb
    ) as request_id;
  $$
);
