insert into account (account_email, account_hash, account_admin, account_first_name, account_last_name, account_user_age, account_newsletter_signup)
 values ($1, $2, $3, $4,$5,$6,$7)
 returning account_id, account_email, account_admin, account_first_name, account_last_name, account_user_age, account_newsletter_signup