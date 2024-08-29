"use client";
import { useFormStatus } from "react-dom";
import { upadateBooking } from "../_lib/action";

function UpdateReservation({
  maxCapacity,
  observations,
  numGuests,
  bookingId,
}) {
  return (
    <div>
      <form action={upadateBooking}>
        <input hidden defaultValue={bookingId} name="bookingId" />
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={numGuests}
          required
        >
          <option value="" key="">
            Select number of guests?
          </option>

          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x == 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        <label htmlFor="observations" className="text mt-5">
          Anything we should know about your stay?
        </label>

        <textarea
          name="observations"
          id="observations"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          placeholder="Any pets, allergies, special requirements, etc.?"
          defaultValue={observations}
        />
        <Button />
      </form>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating.." : "Update Reservation"}
    </button>
  );
}

export default UpdateReservation;
