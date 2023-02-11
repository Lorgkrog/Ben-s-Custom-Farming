import Card from "../UI/Card";
import ServiceItem from "./ServiceItem/ServiceItem";
import classes from "./AvailableServices.module.css";

const DUMMY_SERVICES = [
  {
    id: "m1",
    name: "Ploughing",
    description:
      "Turn over the soil with a mouldboard plough. The most agressive tillage.",
    price: 105.66,
    image: require("../../assets/plough.jpg"),
  },
  {
    id: "m2",
    name: "Cultivating",
    description: "Seedbed preperation. The least agressive tillage.",
    price: 89.56,
    image: require("../../assets/cultivate.jpg"),
  },
  {
    id: "m3",
    name: "Seeding",
    description:
      "Seeds placed with an air drill. The least accurate seed placement.",
    price: 67.99,
    image: require("../../assets/seeding.jpg"),
  },
  {
    id: "m4",
    name: "Planting",
    description:
      "Seeds placed with a planter. The most accurate seed placement.",
    price: 190.0,
    image: require("../../assets/planter.jpg"),
  },
  {
    id: "m5",
    name: "Spraying",
    description:
      "Application of fertilizer, pesticide, herbacide with a high clearance sprayer.",
    price: 57.45,
    image: require("../../assets/spray.jpg"),
  },
  {
    id: "m6",
    name: "Combine Harvesting",
    description: "Crops are harvested with a combine harvester.",
    price: 225.87,
    image: require("../../assets/combine.jpg"),
  },
  {
    id: "m7",
    name: "Fertilizing",
    description: "Apply solid fertilizer to the field.",
    price: 80.66,
    image: require("../../assets/plough.jpg"),
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
