CREATE TABLE account (
	account_id serial NOT NULL,
	account_email varchar(180) NOT NULL UNIQUE,
	account_hash TEXT NOT NULL,
	account_admin BOOLEAN NOT NULL,
	account_first_name varchar(80) NOT NULL,
	account_last_name varchar(80) NOT NULL,
	account_user_age smallint NOT NULL,
	account_newsletter_signup BOOLEAN NOT NULL,
	CONSTRAINT account_pk PRIMARY KEY (account_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Book (
	book_title varchar(80) NOT NULL UNIQUE,
	book_desc TEXT NOT NULL,
	book_price DECIMAL NOT NULL,
	book_id serial NOT NULL,
	book_author_name varchar(80) NOT NULL,
	book_cover_img TEXT NOT NULL,
	CONSTRAINT Book_pk PRIMARY KEY (book_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE purchases (
	account_id bigint NOT NULL,
	purchases_id serial NOT NULL,
	CONSTRAINT purchases_pk PRIMARY KEY (purchases_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE purchases_info (
	purchases_id bigint NOT NULL,
	book_id bigint NOT NULL,
	purchases_info serial NOT NULL,
	quantity bigint NOT NULL,
	CONSTRAINT purchases_info_pk PRIMARY KEY (purchases_info)
) WITH (
  OIDS=FALSE
);



CREATE TABLE article (
	article_id serial NOT NULL,
	article_image TEXT NOT NULL,
	article_title varchar(80) NOT NULL,
	article_text TEXT NOT NULL,
	article_teaser TEXT NOT NULL,
	article_posting_date DATE DEFAULT CURRENT_DATE,
	CONSTRAINT articles_pk PRIMARY KEY (article_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE newsletter_subscription (
	newsletter_subscription_email varchar(80) NOT NULL UNIQUE,
	newsletter_subscription_id serial NOT NULL,
	CONSTRAINT newsletter_subscription_pk PRIMARY KEY (newsletter_subscription_id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE event (
	event_id serial NOT NULL,
	event_start_time varchar(20) NOT NULL,
	event_end_time varchar(20) NOT NULL,
	event_start_date varchar(20) NOT NULL,
	event_end_date varchar(20) NOT NULL,
	event_description TEXT NOT NULL,
	CONSTRAINT event_pk PRIMARY KEY (event_id)
) WITH (
  OIDS=FALSE
);


ALTER TABLE purchases ADD CONSTRAINT purchases_fk0 FOREIGN KEY (account_id) REFERENCES account(account_id);

ALTER TABLE purchases_info ADD CONSTRAINT purchases_info_fk0 FOREIGN KEY (purchases_id) REFERENCES purchases(purchases_id);
ALTER TABLE purchases_info ADD CONSTRAINT purchases_info_fk1 FOREIGN KEY (book_id) REFERENCES Book(book_id);








