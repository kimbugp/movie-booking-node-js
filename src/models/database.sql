CREATE TABLE IF NOT EXISTS "movie"
(
	"id" serial NOT NULL,
	"title" varchar(256) NOT NULL,
	"duration" TIME NOT NULL,
	"description" varchar(256),
	"year" varchar(6) DEFAULT '2019',
	CONSTRAINT movie_pk PRIMARY KEY ("id")
);



CREATE TABLE IF NOT EXISTS "user"
(
	"id" serial NOT NULL,
	"name" varchar(256) NOT NULL,
	"is_admin" BOOLEAN NOT NULL,
	"password" varchar(256) NOT NULL,
	"username" varchar(256) NOT NULL UNIQUE,
	CONSTRAINT user_pk PRIMARY KEY ("id")
);



CREATE TABLE IF NOT EXISTS "screening"
(
	"id" serial NOT NULL,
	"movie_id" serial NOT NULL,
	"screening_time" TIMESTAMP NOT NULL,
	CONSTRAINT screening_pk PRIMARY KEY ("id")
);



CREATE TABLE IF NOT EXISTS "seats"
(
	"id" serial NOT NULL,
	"seat_no" varchar(256) NOT NULL UNIQUE,
	"is_taken" BOOLEAN NOT NULL DEFAULT 'False',
	CONSTRAINT seats_pk PRIMARY KEY ("id")
);



CREATE TABLE IF NOT EXISTS "reservations"
(
	"id" serial NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"screening_id" varchar NOT NULL,
	"seat_id" varchar NOT NULL,
	CONSTRAINT reservations_pk PRIMARY KEY ("id")
);


