import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "001",
    name: "Bakmi",
    description: "Mi kuah dengan isian daging ayam",
    price: 27.0,
  },
  {
    id: "002",
    name: "Bakso",
    description: "Bakso daging sapi 1 bakso besar dan 4 bakso kecil",
    price: 37.0,
  },
  {
    id: "003",
    name: "Bubur Ayam",
    description: "Isian telur, kacang, ayam, serundeng, seledri",
    price: 20.0,
  },
  {
    id: "004",
    name: "Empal Gepuk",
    description: "Daging sapi empuk dengan kuah bumbu",
    price: 43.0,
  },
  {
    id: "005",
    name: "Gulai Ayam",
    description: "Ayam dengan kuah bumbu rempah",
    price: 39.0,
  },
  {
    id: "006",
    name: "Opor Ayam",
    description: "Ayam dengan kuah bumbu kental dengan santan",
    price: 19.5,
  },
  {
    id: "007",
    name: "Rawon",
    description: "Sup daging kuah hitam dengan bumbu kluwek",
    price: 32.0,
  },
  {
    id: "008",
    name: "Sayur Asem",
    description: "Sayur kuah dengan isian kacang panjang, jagung manis, labu siam, dan melinjo",
    price: 14.0,
  },
  {
    id: "009",
    name: "Sop Buntut",
    description: "Ekor sapi bakar dengan kaldu sapi",
    price: 40.0,
  },
  {
    id: "010",
    name: "Sop Kambing",
    description: "Daging kambing dengan kaldu bening kekuningan",
    price: 50.0,
  },
  {
    id: "011",
    name: "Soto",
    description: "Lengkap dengan telur dan irisan daging ayam",
    price: 10.0,
  },
  {
    id: "012",
    name: "Woku",
    description: "Makanan khas Manado yang wajib kamu coba",
    price: 26.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
