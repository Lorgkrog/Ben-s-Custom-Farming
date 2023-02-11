import Card from "../UI/Card";
import ServiceItem from "./ServiceItem/ServiceItem";
import classes from "./AvailableServices.module.css";
import combineImage from "../../assets/combine.jpg";
import cultivateImage from "../../assets/cultivate.jpg";
import fertilizerImage from "../../assets/fertilizer.jpg";
import planterImage from "../../assets/planter.jpg";
import sprayImage from "../../assets/spray.jpg";
import ploughImage from "../../assets/plough.jpg";
import seedingImage from "../../assets/seeding.jpg";

const DUMMY_SERVICES = [
  {
    id: "m1",
    name: "Ploughing",
    description:
      "Turn over the soil with a mouldboard plough. The most agressive tillage.",
    price: 105.66,
    image: { ploughImage },
  },
  {
    id: "m2",
    name: "Cultivating",
    description: "Seedbed preperation. The least agressive tillage.",
    price: 89.56,
    image: { cultivateImage },
  },
  {
    id: "m3",
    name: "Seeding",
    description:
      "Seeds placed with an air drill. The least accurate seed placement.",
    price: 67.99,
    image: { seedingImage },
  },
  {
    id: "m4",
    name: "Planting",
    description:
      "Seeds placed with a planter. The most accurate seed placement.",
    price: 190.0,
    image: { planterImage },
  },
  {
    id: "m5",
    name: "Spraying",
    description:
      "Application of fertilizer, pesticide, herbacide with a high clearance sprayer.",
    price: 57.45,
    image: { sprayImage },
  },
  {
    id: "m6",
    name: "Combine Harvesting",
    description: "Crops are harvested with a combine harvester.",
    price: 225.87,
    image: { combineImage },
  },
  {
    id: "m7",
    name: "Fertilizing",
    description: "Apply solid fertilizer to the field.",
    price: 80.66,
    image: { fertilizerImage },
  },
];

const AvailableServices = () => {
  const servicesList = DUMMY_SERVICES.map((service) => (
    <ServiceItem
      key={service.id}
      id={service.id}
      name={service.name}
      description={service.description}
      price={service.price}
      image={service.image}
    />
  ));

  return (
    <section className={classes.services}>
      <Card>
        <ul>{servicesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableServices;
