import React from "react";
import MovieList from "./Component/MovieList";

const nowShowing = [
  {
    title: "Jung Kook: I Am Still",
    description:
      "Jung Kook invites viewers on a journey showcasing his rise to stardom, creative process, work ethic, and challenges as a global icon, with unseen footage, interviews, and electrifying performances.",
    trailer: "https://www.youtube.com/watch?v=LWkh_hXeEeg",
  },
  {
    title: "Ardaas Sarbat De Bhalle Di",
    description:
      "Gurmukh Singh starts a pilgrimage by bus to Sri Hazur Sahib where varied types of people meet. While traveling, the Ardaas (Prayer) of their means become the Ardaas of everyone.",
    trailer:
      "https://www.youtube.com/watch?v=cBjy7gaB_RI&ab_channel=JioStudios",
  },
  {
    title: "Beetlejuice Beetlejuice",
    description:
      "This is a follow-up to the comedy Beetlejuice (1988), about a ghost who's recruited to help haunt a house",
    trailer: "https://www.youtube.com/watch?v=CoZqL9N6Rx4",
  },
  {
    title: "It Ends with Us",
    description:
      "Lily believes she's found true love with Ryle, but when a painful incident triggers past trauma, she must decide if love alone can carry her marriage through. However, things are complicated when her first love returns to her life.",
    trailer: "https://www.youtube.com/watch?v=wE1jHYA6UeA",
  },
  {
    title: "Lampir",
    description:
      "A group of friends on a pre-wedding photoshoot at a luxurious and vintage villa unexpectedly find themselves trapped in the sacred lair of Mak Lampir, who is said to crave eternal beauty. Can they survive Mak Lampir's deadly game?",
    trailer: "https://www.youtube.com/watch?v=k1TU9UniYMU",
  },
  {
    title: "Mr Shudai",
    description:
      "A suicidal man possessed by four ghosts is forced grant their wishes, and in the process, his own wish of having a family comes to life.",
    trailer: "https://www.youtube.com/watch?v=a1hsr9agirQ",
  },
  {
    title: "The Crow",
    description:
      "When soulmates Eric and Shelly are brutally murdered, Eric is given the chance to save his true love by sacrificing himself and sets out to seek revenge, traversing the worlds of the living and the dead to put the wrong things right.",
    trailer: "https://www.youtube.com/watch?v=djSKp_pwmOA",
  },
  {
    title: "Alien: Romulus",
    description:
      "Young people from a distant world must face the most terrifying life form in the universe.",
    trailer: "https://www.youtube.com/watch?v=x0XDEhP4MQs&t=1s",
  },
  {
    title: "Teriya Meriya Hera Pheriyan",
    description: "",
    trailer: "https://www.youtube.com/watch?v=EXHnm5jvZOA",
  },
  {
    title: "Battle of the Kings: Rostam & Sohrab",
    description:
      "Story of Rostam,king of Iran trying to save his land from enemies.But then he found himself fighting against Sohrab,his own son...",
    trailer: "https://www.youtube.com/watch?v=hKM5hBt5CUU",
  },
  {
    title: "Rose Rosy Te Gulab",
    description:
      "Gulab, discontented with his single life, embarks on a manifestation journey advised by friends, finding himself torn between Rose and Rosy. His choice will determine his romantic future.",
    trailer:
      "https://www.youtube.com/watch?v=6SNhsZrtR5M&ab_channel=DiamondstarWorldwide",
  },
  {
    title: "Siccin 7",
    description:
      "Kemal and family move to uncle's mansion after deal with child panhandling mafia, hiding daughter R\u00fcya's illness. Mother Lale's Alzheimer's triggers paranormal occurrences. Meral infiltrates, plans ritual on Black Moon 2018.",
    trailer: "https://www.youtube.com/watch?v=ErFKnlzpzRs",
  },
  {
    title: "Daaru Na Peenda Hove",
    description: "",
    trailer: "https://www.youtube.com/watch?v=e851UWo0bVw",
  },
  {
    title: "Deadpool & Wolverine",
    description:
      "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.",
    trailer: "https://www.youtube.com/watch?v=73_1biulkYk",
  },
  {
    title: "Kudi Haryane Val Di",
    description: "",
    trailer: "https://www.youtube.com/watch?v=vgqXQUeiCLs",
  },
  {
    title: "The Glassworker",
    description:
      "The life of a young glassblower in training and his relationships over the years, as his land goes through war and strife.",
    trailer: "https://www.youtube.com/watch?v=yr8MAHvNigM",
  },
  {
    title: "Despicable Me 4",
    description:
      "Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his girlfriend Valentina, and the family is forced to go on the run.",
    trailer: "https://youtu.be/LtNYaH61dXY?si=3FB5W7Qbo6M5i3S5",
  },
  {
    title: "Jatt & Juliet 3",
    description:
      "Two police officers from Punjab travel to Canada on a mission that proves more complicated than expected",
    trailer: "https://www.youtube.com/watch?v=xEkVUPvYNUI",
  },
  {
    title: "Inside Out 2",
    description:
      "Follow Riley, in her teenage years, encountering new emotions.",
    trailer: "https://www.youtube.com/watch?v=UE5YNLoULtI",
  }
];

const movieDetails = [
  {
            "title": "Jung Kook: I Am Still",
            "trailer": "//www.youtube.com/watch?v=LWkh_hXeEeg",
            "description": "Jung Kook invites viewers on a journey showcasing his rise to stardom, creative process, work ethic, and challenges as a global icon, with unseen footage, interviews, and electrifying performances.",
            "cast": {
                "Cast:": "Jung Kook_"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "05:00 PM",
                                "07:00 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "05:00 PM",
                                "07:00 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Ardaas Sarbat De Bhalle Di",
            "trailer": "//www.youtube.com/watch?v=cBjy7gaB_RI&ab_channel=JioStudios",
            "description": "Gurmukh Singh starts a pilgrimage by bus to Sri Hazur Sahib where varied types of people meet. While traveling, the Ardaas (Prayer) of their means become the Ardaas of everyone.",
            "cast": {
                "Cast:": "Gippy Grewal, Gurpreet  Ghuggi, Jasmin  Bhasin"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "12:05 AM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "04:30 PM",
                                "12:05 AM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "11:00 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Beetlejuice Beetlejuice",
            "trailer": "//www.youtube.com/watch?v=CoZqL9N6Rx4",
            "description": "This is a follow-up to the comedy Beetlejuice (1988), about a ghost who's recruited to help haunt a house",
            "cast": {
                "Cast:": "Jenna  Ortega, Michael  Keaton"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "09:45 PM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "02:45 PM",
                                "07:15 PM",
                                "09:45 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "03:30 PM",
                                "07:45 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "03:30 PM",
                                "07:45 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "03:30 PM",
                                "07:45 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "03:30 PM",
                                "07:45 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "It Ends with Us",
            "trailer": "//www.youtube.com/watch?v=wE1jHYA6UeA",
            "description": "Lily believes she's found true love with Ryle, but when a painful incident triggers past trauma, she must decide if love alone can carry her marriage through. However, things are complicated when her first love returns to her life.",
            "cast": {
                "Cast:": "Blake Lively, Brandon  Sklenar, Jenny-  Slate"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "02:00 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "03:15 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Lampir",
            "trailer": "//www.youtube.com/watch?v=k1TU9UniYMU",
            "description": "A group of friends on a pre-wedding photoshoot at a luxurious and vintage villa unexpectedly find themselves trapped in the sacred lair of Mak Lampir, who is said to crave eternal beauty. Can they survive Mak Lampir's deadly game?",
            "cast": {
                "Cast:": "Gandhi  Fernando, Jolene  Marie, Rory  Asyari"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "02:45 PM",
                                "06:30 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "06:30 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "06:30 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "06:30 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "06:30 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Mr Shudai",
            "trailer": "//www.youtube.com/watch?v=a1hsr9agirQ",
            "description": "A suicidal man possessed by four ghosts is forced grant their wishes, and in the process, his own wish of having a family comes to life.",
            "cast": {
                "Cast:": "Harsimran -, Karamjit  Anmol, Mandy  Thakar"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "11:45 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "11:45 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "11:45 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "11:45 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "The Crow",
            "trailer": "//www.youtube.com/watch?v=djSKp_pwmOA",
            "description": "When soulmates Eric and Shelly are brutally murdered, Eric is given the chance to save his true love by sacrificing himself and sets out to seek revenge, traversing the worlds of the living and the dead to put the wrong things right.",
            "cast": {
                "Cast:": "Bill  Skarsg\u00e5rd, Danny  Huston"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "01:45 PM",
                                "08:15 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "08:15 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "08:15 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "08:15 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "08:15 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Alien: Romulus",
            "trailer": "//www.youtube.com/watch?v=x0XDEhP4MQs&t=1s",
            "description": "Young people from a distant world must face the most terrifying life form in the universe.",
            "cast": {
                "Cast:": "Archie  Renaux, Isabela  Merced--"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "05:30 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "02:00 PM",
                                "09:30 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "02:00 PM",
                                "09:30 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "02:00 PM",
                                "09:30 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "02:00 PM",
                                "09:30 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Teriya Meriya Hera Pheriyan",
            "trailer": "//www.youtube.com/watch?v=EXHnm5jvZOA",
            "description": "",
            "cast": {
                "Cast:": "Aditi  Arya, Pukhraj  Bhalla"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:58 AM",
                                "07:00 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "05:30 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "05:30 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "05:30 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "05:30 PM",
                                "12:00 AM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Battle of the Kings: Rostam & Sohrab",
            "trailer": "//www.youtube.com/watch?v=hKM5hBt5CUU",
            "description": "Story of Rostam,king of Iran trying to save his land from enemies.But then he found himself fighting against Sohrab,his own son...",
            "cast": {
                "Cast:": "Hossein  Kamalabadi, Majid  Habibi, Mohammadreza  Alimardani"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "04:45 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Rose Rosy Te Gulab",
            "trailer": "//www.youtube.com/watch?v=6SNhsZrtR5M&ab_channel=DiamondstarWorldwide",
            "description": "Gulab, discontented with his single life, embarks on a manifestation journey advised by friends, finding himself torn between Rose and Rosy. His choice will determine his romantic future.",
            "cast": {
                "Cast:": "Gurnam  Bhullar-, Raj  Buttar"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "09:30 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "12:30 PM",
                                "08:15 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Siccin 7",
            "trailer": "//www.youtube.com/watch?v=ErFKnlzpzRs",
            "description": "Kemal and family move to uncle's mansion after deal with child panhandling mafia, hiding daughter R\u00fcya's illness. Mother Lale's Alzheimer's triggers paranormal occurrences. Meral infiltrates, plans ritual on Black Moon 2018.",
            "cast": {
                "Cast:": "Tugba  Begde, Funda  Eskioglu, Serkan  Atar"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "04:45 PM",
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "04:45 PM",
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "04:45 PM",
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "04:45 PM",
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "04:45 PM",
                                "10:15 PM",
                                "12:00 AM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Daaru Na Peenda Hove",
            "trailer": "//www.youtube.com/watch?v=e851UWo0bVw",
            "description": "",
            "cast": {
                "Cast:": "Amrinder  Gill, Sohaila  Kaur, Zafri  Khan"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "10:00 PM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "12:30 PM",
                                "04:45 PM",
                                "10:00 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "04:45 PM",
                                "10:00 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "04:45 PM",
                                "10:00 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "04:45 PM",
                                "10:00 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "11:45 AM",
                                "04:45 PM",
                                "10:00 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Deadpool & Wolverine",
            "trailer": "//www.youtube.com/watch?v=73_1biulkYk",
            "description": "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.",
            "cast": {
                "Cast:": "Hugh  Jackman, Morena  Baccarin"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "07:00 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "05:45 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Kudi Haryane Val Di",
            "trailer": "//www.youtube.com/watch?v=vgqXQUeiCLs",
            "description": "",
            "cast": {
                "Cast:": "Ammy  Virk, Sonam Bajwa"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Saturday, 14 September 2024",
                            "session_times": [
                                "11:45 PM"
                            ]
                        },
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:30 AM",
                                "11:45 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "12:15 PM",
                                "10:45 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "The Glassworker",
            "trailer": "//www.youtube.com/watch?v=yr8MAHvNigM",
            "description": "The life of a young glassblower in training and his relationships over the years, as his land goes through war and strife.",
            "cast": {
                "Cast:": "Anjli  Mohindra, Art  Malik, Sacha  Dhawan"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "03:45 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "01:15 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "01:15 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "01:15 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "01:15 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Despicable Me 4",
            "trailer": "//youtu.be/LtNYaH61dXY?si=3FB5W7Qbo6M5i3S5",
            "description": "Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his girlfriend Valentina, and the family is forced to go on the run.",
            "cast": {
                "Cast:": "Joey  King, Sofia  Vergara"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:58 AM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Jatt & Juliet 3",
            "trailer": "//www.youtube.com/watch?v=xEkVUPvYNUI",
            "description": "Two police officers from Punjab travel to Canada on a mission that proves more complicated than expected",
            "cast": {
                "Cast:": "Diljit  Dosanjh,  Neeru  Bajwa, Jaswinder  Bhalla"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas The Grand Mall, Multan",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "02:15 PM",
                                "06:45 PM",
                                "09:15 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "03:00 PM",
                                "05:30 PM",
                                "08:00 PM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Inside Out 2",
            "trailer": "//www.youtube.com/watch?v=UE5YNLoULtI",
            "description": "Follow Riley, in her teenage years, encountering new emotions.",
            "cast": {
                "Cast:": "Amy  Poehler, Lewis  Black"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "11:58 AM"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "The Legend of Maula Jatt",
            "trailer": "//www.youtube.com/watch?v=pEWqOAcYgpQ",
            "description": "",
            "cast": {
                "Cast:": "fawad khan, hamza ali, mahira khan"
            },
            "cinemas": [
                {
                    "cinema_name": "Universal Cinemas Emporium Mall, Lahore",
                    "sessions": [
                        {
                            "session_date": "Sunday, 15 September 2024",
                            "session_times": [
                                "09:15 PM"
                            ]
                        },
                        {
                            "session_date": "Monday, 16 September 2024",
                            "session_times": [
                                "09:15 PM"
                            ]
                        },
                        {
                            "session_date": "Tuesday, 17 September 2024",
                            "session_times": [
                                "09:15 PM"
                            ]
                        },
                        {
                            "session_date": "Wednesday, 18 September 2024",
                            "session_times": [
                                "09:15 PM"
                            ]
                        },
                        {
                            "session_date": "Thursday, 19 September 2024",
                            "session_times": [
                                "09:15 PM"
                            ]
                        }
                    ]
                }
            ]
        }
];

function App() {
  return (
    <div className="App">
      <MovieList nowShowing={nowShowing} movieDetails={movieDetails} />
    </div>
  );
}

export default App;
