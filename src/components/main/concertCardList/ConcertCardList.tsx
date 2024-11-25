import ConcertCard from "../../shared/concertCard/ConcertCard";

const ConcertCardList = () => {
  return (
    <div className="grid grid-cols-4 gap-2 px-10 pt-2">
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
      <ConcertCard />
    </div>
  );
};

export default ConcertCardList;
