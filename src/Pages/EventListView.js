import "../App.css";
import { Header } from "../components/Header";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet-async";

function EventListView() {
  return (
    <>
      <Helmet>
        <title>Ambassadors of the National Program For Coders</title>
        <meta
          name="description"
          content="Directory for Ambassadors of the National Program For Coders"
          title="Directory List"
        />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <Header />
        <CardList />
      </div>
    </>
  );
}

export default EventListView;
