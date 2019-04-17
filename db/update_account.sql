update account
SET account_email = $2, account_first_name = $3, account_last_name = $4, account_user_age = $5, account_newsletter_signup = $6
where account_id = $1;

select * from account where account_id = $1;