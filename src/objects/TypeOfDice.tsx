import TypeOfDiceInterface from "../interfaces/TypeOfDiceInterface";
import D2 from "../img/D2.png";
import D4 from "../img/D4.png";
import D6 from "../img/D6.png";
import D8 from "../img/D8.png";
import D10 from "../img/D10.png";
import D12 from "../img/D12.png";
import D20 from "../img/D20.png";
import D100 from "../img/D100.png";

const typeOfDice: TypeOfDiceInterface[] = [
    {
        name: "dé2",
        faces: 2,
        img: D2
    },
    {
        name: "dé4",
        faces: 4,
        img: D4
    },
    {
        name: "dé6",
        faces: 6,
        img: D6
    },
    {
        name: "dé8",
        faces: 8,
        img: D8
    },
    {
        name: "dé10",
        faces: 10,
        img: D10
    },
    {
        name: "dé12",
        faces: 12,
        img: D12
    },
    {
        name: "dé20",
        faces: 20,
        img: D20
    },
    {
        name: "dé100",
        faces: 100,
        img: D100
    },
];

export default typeOfDice;