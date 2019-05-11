
ALTER TABLE "screening" ADD CONSTRAINT "screening_fk0" FOREIGN KEY ("movie_id") REFERENCES "movie"("id");
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_fk1" FOREIGN KEY ("screening_id") REFERENCES "screening"("id");
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_fk2" FOREIGN KEY ("seat_id") REFERENCES "seats"("seat_no");