import UpdateReservation from "@/app/_components/UpdateReservation";
import { getBooking, getCabin } from "@/app/_lib/data-service";

async function page({ params }) {
  const id = params.id;
  const { cabinId, numGuests, observations } = await getBooking(id);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h1>Edit Reservation #{id}</h1>
      <UpdateReservation
        numGuests={numGuests}
        observations={observations}
        maxCapacity={maxCapacity}
        bookingId={id}
      />
    </div>
  );
}

export default page;
