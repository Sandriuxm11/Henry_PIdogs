import Card from "../Card/card";
import style from "./Cardscontainer.module.css";

const CardsContainer = () => {
    const dogs = [
        {
            "id": 1,
            "imagen": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
            "name": "Affenpinscher",
            "altura": "23 - 29",
            "peso": "3 - 6",
            "años_de_vida": "10 - 12 years",
            "temperamento": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "created": false
        },
        {
            "id": 2,
            "imagen": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
            "name": "Afghan Hound",
            "altura": "64 - 69",
            "peso": "23 - 27",
            "años_de_vida": "10 - 13 years",
            "temperamento": "Aloof, Clownish, Dignified, Independent, Happy",
            "created": false
        },
        {
            "id": 3,
            "imagen": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
            "name": "African Hunting Dog",
            "altura": "76",
            "peso": "20 - 30",
            "años_de_vida": "11 years",
            "temperamento": "Wild, Hardworking, Dutiful",
            "created": false
        },
        {
            "id": 4,
            "imagen": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
            "name": "Airedale Terrier",
            "altura": "53 - 58",
            "peso": "18 - 29",
            "años_de_vida": "10 - 13 years",
            "temperamento": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
            "created": false
        },
        {
            "id": 5,
            "imagen": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
            "name": "Akbash Dog",
            "altura": "71 - 86",
            "peso": "41 - 54",
            "años_de_vida": "10 - 12 years",
            "temperamento": "Loyal, Independent, Intelligent, Brave",
            "created": false
        },
        {
            "id": 6,
            "imagen": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
            "name": "Akita",
            "altura": "61 - 71",
            "peso": "29 - 52",
            "años_de_vida": "10 - 14 years",
            "temperamento": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
            "created": false
        },
        {
            "id": 7,
            "imagen": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
            "name": "Alapaha Blue Blood Bulldog",
            "altura": "46 - 61",
            "peso": "25 - 41",
            "años_de_vida": "12 - 13 years",
            "temperamento": "Loving, Protective, Trainable, Dutiful, Responsible",
            "created": false
        },
        {
            "id": 8,
            "imagen": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
            "name": "Alaskan Husky",
            "altura": "58 - 66",
            "peso": "17 - 23",
            "años_de_vida": "10 - 13 years",
            "temperamento": "Friendly, Energetic, Loyal, Gentle, Confident",
            "created": false
        },
        {
            "id": 9,
            "imagen": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
            "name": "Alaskan Malamute",
            "altura": "58 - 64",
            "peso": "29 - 45",
            "años_de_vida": "12 - 15 years",
            "temperamento": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
            "created": false
        },
        {
            "id": 10,
            "imagen": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
            "name": "American Bulldog",
            "altura": "56 - 69",
            "peso": "27 - 54",
            "años_de_vida": "10 - 12 years",
            "temperamento": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
            "created": false
        },
        {
            "id": 11,
            "imagen": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
            "name": "American Bully",
            "altura": "36 - 43",
            "peso": "14 - 68",
            "años_de_vida": "8 – 15 years",
            "temperamento": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
            "created": false
        },
        {
            "id": 12,
            "imagen": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
            "name": "American Eskimo Dog",
            "altura": "38 - 48",
            "peso": "9 - 18",
            "años_de_vida": "12 - 15 years",
            "temperamento": "Friendly, Alert, Reserved, Intelligent, Protective",
            "created": false
        },
        {
            "id": 13,
            "imagen": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
            "name": "American Eskimo Dog (Miniature)",
            "altura": "23 - 30",
            "peso": "3 - 5",
            "años_de_vida": "13 – 15 years",
            "temperamento": "Friendly, Alert, Reserved, Intelligent, Protective",
            "created": false
        },
        {
            "id": 14,
            "imagen": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
            "name": "American Foxhound",
            "altura": "53 - 71",
            "peso": "29 - 34",
            "años_de_vida": "8 - 15 years",
            "temperamento": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
            "created": false
        },
        {
            "id": 15,
            "imagen": "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
            "name": "American Pit Bull Terrier",
            "altura": "43 - 53",
            "peso": "14 - 27",
            "años_de_vida": "10 - 15 years",
            "temperamento": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
            "created": false
        },
        {
            "id": 16,
            "imagen": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
            "name": "American Staffordshire Terrier",
            "altura": "43 - 48",
            "peso": "23 - 27",
            "años_de_vida": "12 - 15 years",
            "temperamento": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
            "created": false
        }
    ];

    // const dogs = useSelector(state => state.users);

    return (
        <div className={style.CardsContainer}>
            {dogs.map(dog => {
                return <Card 
                imagen={dog.imagen}
                name={dog.name}
                temperamento={dog.temperamento}
                peso={dog.peso}
                />
            })}
        </div>
    )
};

export default CardsContainer;