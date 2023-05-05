use marine_database
db.dropDatabase()

db.marine_info.insertMany([
    {
        category:"Marine Life",
        name:"Green Sea Turtle",
        description:"The Green Sea Turtle has an appearance of a typical turtle. They have a beaked head at the end of a short neck, and paddle-like arms well-adapted for swimming. An adult Green Sea Turtle normally grows to about 1.5 metres and on average weighs between 68-190kg. As the name suggests the Green Sea Turtle has a green colour.",
        threats:"Human action presents both intentional and unintentional threats to the species survival. Intentional threats include continued hunting, poaching and egg harvesting. The main unitentional threat comes from pollution and habitat destruction",
        examples:"Atlantic, Pacific, and Indian Oceans",
        picture:"/images/Green_sea_turtle.jpeg",
        url:"https://www.worldwildlife.org/species/green-turtle",
        isChecked: false,
        
        questions:[
            {
                question:"One of the main threats to the Green Sea Turtle is egg harvesting",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"Green Sea Turtles can be found in Indian Ocean",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"The Green Sea Turtles are not well adapted for swimming",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"Green Sea Turtles are brown in colour",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },
    {
        category:"Marine Life",
        name:"Blue Whale",
        description:"The Blue Whale is widely known for being the largest known animal. The longest recorded Blue Whale was measured to be 30 metres in comparison to the average length of 22 metres. Blue Whales tend to weigh around 100 tonnes!. The diet of a Blue Whale consists of almost exclusively Krill",
        threats:"The population of Blue Whale has decreased drastically in the last 100 years from 140,000 to 10,000-25,000, this is mainly due to whaling in the early 20th century. The biggest mordern threat that Blue Whales face is Ship Strikes",
        examples:"Can be found in all oceans except the Artic",
        picture:"../images/Blue_whale.webp",
        url:"https://www.worldwildlife.org/species/blue-whale",
        isChecked: false,
        questions:[
            {
                question:"The Blue Whale is the largest animal on the planet",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"The average length of a Blue Whale is 12 metres",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"The Blue Whales diet consists mainly of Krill",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"Blue Whales can be found in every ocean",
                correct_answer:false,
                incorrect_answer:true
            },
        ]
    },
    {
        category:"Marine Life",
        name:"Stygobromus hayi",
        description:"Stygobromus hayi is a rare type of crustcean which lives in the District of Columbia, United States of America. The Stygobromus hayi live underground and so they are white in colour and do not have any eyes. On average they are measured to be around 10 millimetres in length",
        threats:"This species is under threat due to recent degradation of their natural habit. This has been caused by heavy metals and other pollutants such as oil and sewage leaks",
        examples:"District of Columbia",
        picture:"../images/Stygobromus_hayi.jpeg",
        url:"https://www.fws.gov/species/hays-spring-amphipod-stygobromus-hayi",
        isChecked: false,
        questions:[
            {
                question:"The Stygobromus hayi have got great eyesight",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"Stygobromus hayi’s natural habitat is underground",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"The population decline of Stygobromus hayi has been caused by overhunting",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"Stygobromus hayi are found in the District of Columbia",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },
    {
        category:"Marine Life",
        name:"Steller Sea Lion",
        description:"Steller Sea Lions are often found in the north pacific. Adult members of the species are of a pale yellow/tawny colour whereas the pups are black. The average Steller Sea Lion grows to around 2.3-2.9 metres in length and can weigh around 544kg.",
        threats:"The Steller Sea Lion population decline was suspected to be attributed to overfishing in the Gulf of Alaksa. This is suspected because of the animals change in diet from fatty herring to leaner fish such as pollock which reduced their ability to consume and store fat",
        examples:"Northern Hokkaido,Southern coast of Alaska",
        picture:"../images/Steller_sea_lion.jpeg",
        url:"https://www.nationalgeographic.com/animals/mammals/facts/steller-sea-lion",
        isChecked: false,
        questions:[
            {
                question:"Steller Sea Lions are herbivores",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"Steller Sea Lions are endangered because of overfishing",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"Steller Sea Lion are a pale yellow colour",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"Steller Sea Lions can be found in the Gulf of Mexico",
                correct_answer:false,
                incorrect_answer:true
            },
        ]
    },
    {
        category:"Marine Life",
        name:"Hammerhead Shark",
        description:"Hammerhead sharks are a group of sharks from the Sphyrnidae family and are most known for their uniquily shaped head which resmebles the shape of a hammer. The species can range from 0.9-6 metres in length and on average weigh 323kg. Hammerhead skarks are normally a greenish colour with a white underbelly.",
        threats:"Humans are classed to be the number one threat to Hammerhead sharks. This is due to them being accidentily caught in fisheries all across the world. Hammerhead sharks are considered to have some of the best quality fins and so are often captured to have their fins removed.",
        examples:"Atlantic, Indian and Pacific oceans",
        picture:"../images/Hammerhead_shark.jpeg",
        url:"https://www.nationalgeographic.com/animals/fish/facts/hammerhead-sharks",
        isChecked: false,
        questions:[
            {
                question:"Hammerhead sharks belong to the Heterodontiformes family of sharks",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question:"Hammerhead sharks are caught for their high quality fins",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"The Hammerhead sharks are named after their uniquely shaped heads",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question:"Hammerhead sharks are a greenish colour with a black underbelly",
                correct_answer:false,
                incorrect_answer:true
            },
        ]
    },

    {
        category : "Coral Reefs",
        name:"Coral Reefs",
        description:"The first coral reefs formed on Earth before the dinosaurs were alive! They are one of the most vulnerable ecosystems on the planet, and we have already lost half of them! They are often called the 'rainforests of the sea' because of the exceptional diversity of life found around them. Fishes and other organisms shelter, find food, reproduce, and grow their young in the many nooks and crannies formed by coral. These big sea nurseries also provide major benefits to humankind and protect our coasts from storms and erosion. Even now, corals remain an enigma to many, who may not even realize they are living organisms!",
        threats:"Human action (pollution, unsustainable fishing) and Climate change  (rising ocean's temperatures, and bleaching). They are quickly dissapeareing!",
        examples:"The Great Barrier Reef",
        picture:"../images/Coral_reef.jpeg",
        url:"https://www.natgeokids.com/uk/discover/geography/general-geography/coral-reef-facts/",
        isChecked: false,
        questions:[
            {
                question: "Coral reefs are known as the 'rainforests of the sea'",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Many fish shelter, find food, reproduce, and grow their young in coral reefs",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Pollution, unsustainable fishing, rising ocean's temperature and ocean's acidification are NOT threats for coral reefs.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Corals are NOT a vulnerable ecosystem in the planet.",
                correct_answer:false,
                incorrect_answer:true
            }
        ]

    },

    {
        category : "Coral Reefs",
        name:"Coral",
        description:"When you look at a coral reef, you might think that you are seeing a group of colourful rocks. But don't be mistaken! Reefs are actually made out of living creatures called coral. Corals are sea animals that stay in one place throughout their adult lives, and they are the ones responsible of building the reefs. They protect themselves by building hard cases of tubes made out of minerals. And they live together in large colonies, snatching food from the water with their tentacles. There are many types of corals, and each of them play a different role in the ecosystem: Some shelter fish, others grow so strong that protect the coast and the reef from big storms and predators.",
        threats:"Climate change (rising water temperatures) and predators (starfish, fish, crabs)",
        examples:"Corals forming a coral structure in a coral reef",
        picture:"../images/Coral.webp",
        url:"https://www.dkfindout.com/us/animals-and-nature/invertebrates/corals/",
        isChecked: false,
        questions:[
            {
                question: "Corals are living organisms",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Corals are the animals responsable of building coral reefs",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Corals are how we call all the wet stones coming from the sea",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Corals DON'T like to live in colonies",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Coral Reefs",
        name:"Bleaching",
        description:"Bleaching is one of the main threats to coral reefs, and one we can solve! When the ocean's water temperature increases beyond what corals find comfortable, and when ocean’s water becomes more acid, we stress the corals and cause coral bleach and death. Coral bleach happens when corals lose their colours and become white. When the coral die, all fish and organisms that depended on them also die, and in the end, the whole coral reef becomes empty. Thousands of coral reefs have died from bleaching events already, but luckily, they can heal from blenching events if their situation gets better before they die. It can take several years, but if we care about them, the ecosystems can recover fully.",
        threats:"Human pollution and unsustainable fishing which reduce the number of fishes living in the reefs, are the main threats because they cause an increase on the ocean's water temperature, and ocean acidification.",
        examples:"2 / 3 of the Great Barrier Reef are bleached",
        picture:"../images/Bleached_coral.jpg",
        url:"https://climatekids.nasa.gov/coral-bleaching/",
        isChecked: false,
        questions:[
            {
                question: "Two causes of bleaching in corals are: an increase on water temperature beyond a coral's comfortable range, and ocean acidification",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Humans pollution and unsustainable fishing are both main threats for corals",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Corals don't die from bleaching events",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "A bleaching coral becomes red before it dies",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Coral Reefs",
        name:"Super Corals",
        description:"We have just discovered them! Super corals are those corals that have demonstrated the ability to tolerate or recover from the stress caused by ocean's warming and ocean's acidification. In other words, they can survive the bleaching! These corals also reproduce again to populate the area, and slowly build a new coral reef which will welcome new fish and organisms and become a healthy ecosystem in the future. But it will take them many years, so it's important to start planting new Super Corals now and that's why there are many organisations in the world building Super Coral nurseries.",
        threats:"Human pollution, unsustainable fishing, and climate change.",
        examples:"A team of coral gardeners working on a Super Coral nursery in the Polynesia",
        picture:"../images/Super_coral.jpeg",
        url:"https://coralgardeners.org/products/adopt-a-coral",
        isChecked: false,
        questions:[
            {
                question: "Super Corals are those corals who can survive bleaching",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Planting many Super Corals in coral nurseries is a solution to recover the coral reefs that we've lost",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Super Corals have that name because they have the super power of walking underwater",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Ocean's warming and ocean acidification can kill Super Corals",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Coral Reefs",
        name:"Great Barrier Reef",
        description:"It's the largest and most famous barrier reef, we can find it in Australia, and it can be seen from space! In fact, now that we know that corals are living organisms we can understand that The Great Barrier Reef is the largest living structure on the planet! While it is known mostly for its large amount of colourful reefs, it also provides a home for a huge number of plants and animals such as species of turtles that have been around  since prehistoric times. It's the home of thousands of marine creatures incluiding 600 types of corals, 100 species of jellyfish, 3000 varieties of molluscs, 1625 types of fish, 133 varieties of sharks and rays, and more than 30 species of whales and dolphins. Unfortunately, half of the Great Barrier Reef is bleached and dead now. Will we be able to recover it?",
        threats:"Human pollution, unsustainable fishing, and climate change.",
        examples:"Great Barrier Reef seen from space!",
        picture:"../images/Great_barrier_reef.webp",
        url:"https://youtu.be/wbNeIn3vVKM",
        isChecked: false,
        questions:[
            {
                question: "The Great Barrier Reef it’s so large that it can be seen from space",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "The Great Barrier Reef is the largest living structure on the planet",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "The Great Barrier Reef is not affected by coral bleaching",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "The Great Barrier Reef is a stone barrier built by people in Australia to prevent the sharks approach the beaches",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },


    {
        category : "Pollutants",
        name:"Microplastics",
        description:"Microplastics are tiny pieces of plastic less than 0.5 cm wide. They are very harmful to sea life - small animals eat them, thinking they're food. Bigger animals then eat the smaller animals, and they too become full of plastic, including humans! Other animals, like filter feeders, which suck in lots of water and strain all the bits out, can eat them by mistake. These plastics cause lots of damage to an animal's insides, or they can die of starvation. Microplastics often float near the surface of the water and can block sunlight from reaching tiny organisms called phytoplankton (fy-toe-plank-ton). Phytoplankton makes around 50% of all the oxygen we breathe! But it can't do it without sunlight.",
        threats:"There are many ways to help reduce microplastic pollution. Using less single-use plastics, like bottles, cups and straws is one way. Recycling properly, and not littering, is another. You could take part in (or even organise with your school!) a beach or river clean-up. And make sure to tell all your friends to get involved - if everyone does a small thing, they all add up to be a big thing.",
        examples:"Nurdles are a kind of microplastic. They are tiny pellets that are melted down and used to make bigger plastic products. You can find them on almost all British beaches. Click the link below to see how you can help reduce microplastic pollution by taking part in the Great Nurdle Hunt!",
        picture:"../images/Microplastics.jpeg",
        url:"https://www.nurdlehunt.org.uk/take-part.html",
        isChecked: false,
        questions:[
            {
                question: "Microplastics are very hard to see because of their tiny size",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Microplastics float to the bottom of the ocean and don't cause problems down there",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "It's ok if animals eat microplastics, because they just poop them out.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Phytoplankton is very important for oxygen production",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

    {
        category : "Pollutants",
        name:"The Great Pacific Garbage Patch",
        description:"The Great Pacific Garbage Patch (GPGP) is a huge area of plastic that has collected in the Pacific Ocean. Ocean currents swirl the water around in a large circle and the plastic gets trapped. It covers an area that's 3 times the size of France, and contains at least 80,000 tons of plastic, which is the same weight as over 500 jumbo jets. You might think it looks like an island made of rubbish but it's actually more like a big soup of microplastics. Animals can eat these plastics thinking they are food and then die of starvation. There are big pieces of plastic too, though, and almost half of the 80,000 tons are fishing nets. Lots of animals get trapped in these nets and eventually die. In fact, at least 75% of the plastic in the GPGP comes from discarded fishing gear.",
        threats:"The patch is very far away from land, so no country wants to take responsibility for cleaning it up. Luckily, groups like The Ocean Cleanup are trying to help and are removing around 100 tons of plastic a year. To raise awareness, some people think the patch should be declared a country called 'The Trash Isles'. Would you want to live there?! The best way to stop the patch getting bigger, though, is to use less plastics in the first place.",
        examples:"The Great Pacific Garbage Patch is the biggest area of marine plastic, but it's not the only one. There are four huge garbage patches in our oceans, located around the world",
        picture:"../images/Great_pacific_garbage_patch.jpeg",
        url:"https://theoceancleanup.com/great-pacific-garbage-patch/",
        isChecked: false,
        questions:[
            {
                question: "The Great Pacific Garbage Patch is the same size as France",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Most of the plastic in the Great Pacific Garbage Patch comes from fishing activities",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "You could sail a boat to the Great Pacific Garbage Patch, then get out and take a walk around on it",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "The Great Pacific Garbage Patch is far away from where people live, so it doesn't really matter that it's there",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Pollutants",
        name:"Noise Pollution",
        description:"Sound travels much easier and much further underwater. Lots of animals, like whales and dolphins, communicate with sounds in order to hunt, find food, find friends, and to navigate through the oceans. If there's too much noise it can confuse animals, disturb migration patterns, and even scare them away from areas with lots of food. It also stops them from finding partners to mate and reproduce with.",
        threats:"Many people don't realise noise pollution is a big threat to marine life, so it's important to spread awareness. Other ways people are targeting noise pollution is by campaigning for quiet zones, where no boats are allowed, reducing overall ocean traffic, and even redesigning ships propellers to be less noisy",
        examples:"There are around 60,000 big tankers in our oceans, as well as fishing boats, underwater drilling for oil and gas going on, building work along coastlines, and human scientific surveys. That's a lot of traffic making a lot of noise!",
        picture:"../images/Noise_pollution.png",
        url:"https://oceanservice.noaa.gov/facts/ocean-noise.html",
        isChecked: false,
        questions:[
            {
                question: "Animals that use sound to communicate are harmed by noise pollution",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Noise pollution is caused by human activities like fishing and drilling",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Animals are still able to communicate easily when there's lots of noise pollution",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Noise pollution is a relatively unknown form of pollution",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

    {
        category : "Pollutants",
        name:"Ocean acidification (ah-sid-if-i-kay-shon)",
        description:"When fossil fuels are burned, carbon dioxide is released into the air. Carbon dioxide dissolves in water, which makes the water more acidic. Acidic waters not only kill plants and small creatures, they also dissolve the shells of molluscs, leaving them without any protection. Animals that can survive tend to have smaller young, which affects food supplies for larger animals further up the food chain. Coral reefs are particularly affected by acidification. These reefs provide homes and shelter to a huge variety of animals. If sensitive corals die out, many animals will be left without homes or safe places to hide from predators.",
        threats:"People are becoming more aware of the impact of increased carbon dioxide, and countries around the world are working to reduce their emissions. Burning fossil fuels is the largest contributor, and so using renewable forms of energy is key to helping to slow down the acidification of the ocean",
        examples:"Half of the The Great Barrier Reef has been very badly bleached already. Lots of other reefs in Polynesia have also suffered, as well as all over the world",
        picture:"../images/Ocean_acidification.jpeg",
        url:"https://ocean.si.edu/ocean-life/invertebrates/ocean-acidification",
        isChecked: false,
        questions:[
            {
                question: "Burning fossil fuels will help reduce ocean acidification",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Ocean acidification can make the shells of marine animals weaker",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Coral reefs are home to many kinds of marine life",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Acidification happens when carbon dioxide from the air dissolves in seas and oceans",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

    {
        category : "Pollutants",
        name:"Chemical pollution",
        description:"Most chemical pollution that enters the oceans comes from sources on land. When it rains, chemicals are swept into lakes and rivers, which then flow into our oceans. Not only are many of these chemicals highly toxic to marine life, they can also cause lots of algae to grow very quickly, known as an 'algal bloom'. Some blooms can release further toxins into the water. Algal blooms stop sunlight from reaching plant and animal life below the surface of the water, and also reduce oxygen levels in the water, which means plants and animals there will die. Some blooms can stretch very far, creating large areas of ocean where nothing can live. There are around 400 of these areas in our oceans currently.",
        threats:"Many companies are choosing more natural alternatives to chemicals used in household cleaning and beauty products. Many farmers are also taking a more sustainable approach and aiming to reduce their use of harmful fertilisers and pesticides",
        examples:"The most common types of chemical pollutants are fertilisers and pesticides used in farming, industrial chemicals used to make anything from computers to medicines, and sewage. Things like oil spills at sea can happen too, causing huge and lasting environmental damage",
        picture:"../images/Chemical_pollution.jpeg",
        url:"https://ypte.org.uk/factsheets/sea-pollution/chemical-pollution",
        isChecked: false,
        questions:[
            {
                question: "Chemical pollution often happens when chemicals are swept into the sea by the rain",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Algal blooms add more oxygen to the water",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Farming and industry are the main reasons behind chemical pollution",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Chemicals in the water help marine life to develop superpowers",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },
    
    {
        category : "Habitats",
        name:"Kelp Forests",
        description:"Kelp forests are made of kelp, which is a large brown algae. They can grow up to 262 feet in length and grow as fast as 1.5 feet a day. Kelp will grow as deep as light is available for photosynthesis. Some kelp will grow vertically due to air-filled bladders known as pneumatocysts. This gives kelp the forest-like look. Kelp forests provide food and shelter to thousands of species of animal and plant. Many species have nurseries within kelp forests, making them important to to their life cycles.",
        threats:"Threats that kelp forests face include over harvesting by humans, pollution and climate change. All of these things negatively effect kelp reproduction",
        examples:"Macrocystis, Laminaria, Ecklonia",
        picture:"../images/Kelp_forrest.webp",
        url:"https://oceanservice.noaa.gov/facts/kelp.html",
        isChecked: false,
        questions:[
            {
                question: "Many species make nurseries in kelp forests",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Kelp forests are not being over harvested by humans",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Kelp provides food and shelter to thousands of species of marine life.",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Kelp grows via photosynthesis.",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

    {
        category : "Habitats",
        name:"Oyster Reefs",
        description:"Oyster reefs are similar to coral reefs because they also provide structures where plants and animals can live. Oysters form reefs when they reproduce and settle on the shells of other oysters and create a massive structure consisting of many individuals. Oysters provide a valuable ecosystem service by serving as “vacuum cleaners” and filtering particles from water, improving water quality. Oyster reefs or oyster bars also provide natural protection from storms and waves.",
        threats:"The intense harvesting of oysters, pollution and disease has impacted oyster reef habitats. It is estimated that 85% of the Earth’s oyster reefs have been lost. Without this valuable habitat, marine life declines, shorelines erode and marshes are no longer protected",
        examples:"Anomiidae, Dimyidae, Ostreidae",
        picture:"../images/Oyster_reef.jpeg",
        url:"https://www.fisheries.noaa.gov/national/habitat-conservation/oyster-reef-habitat",
        isChecked: false,
        questions:[
            {
                question: "Oyster reefs work like 'vacuum cleaners' by filtering particles in water",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Roughly 85% of oyster reefs have been lost",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "When oyster reefs grow large enough, they begin to hum.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Oyster reefs are being over harvested by humans",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

    {
        category : "Habitats",
        name:"Seagrass Meadows",
        description:"Seagrasses are aquatic plants found all over our world's oceans and estuaries on every continent except Antarctica. There are over 70 species identified by scientists. Some species are adapted to cold climates, while others prefer the warm waters of the tropics. They are the only flowering plants living in the seas. Seagrasses attract many species of fish and shellfish, some of which are only found in seagrass meadows. Many fish species use seagrass meadows as nursery areas to grow and mature. Seagrass plants are important food sources for animal grazers including manatees, green sea turtles and aquatic birds. Seagrasses also filter water and produce oxygen. They control erosion by trapping soil and sand with their roots. In areas with intact seagrass beds, storms often do less damage to coral reefs and coastal lands because the seagrasses act as a buffer, absorbing energy from the waves.",
        threats:"Seagrasses need clean water and sunlight to thrive. Nitrogen and phosphorous from sewage treatment plants, streets and farms can pollute coastal waters and cause blooms of algae that deprive seagrasses of light and clean water. Dredging and shoreline development also damage seagrass habitat",
        examples:"Eelgrass, Turtles grass, Tape grass",
        picture:"../images/Seagrass_meadow.webp",
        url:"https://kids.frontiersin.org/articles/10.3389/frym.2018.00002",
        isChecked: false,
        questions:[
            {
                question: "Seagrass meadows are only found in Antarctica.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Some species of fish can only be found in seagrass meadows.",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Seagrass meadows act as a buffer during storms, protecting coral reefs and other vulnerable habitats",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Sewage helps seagrass meadows to grow.",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Habitats",
        name:"Epipelagic Zone",
        description:"The epipelagic zone (or upper open ocean) is the part of the ocean where there is enough sunlight for algae to use photosynthesis. Generally speaking, this zone reaches from the sea surface down to approximately 200 m (650 feet). The epipelagic is home to all sorts of iconic animals, like whales and dolphins, billfishes, tunas, jellyfishes, sharks, and many other groups. Algae that live in the epipelagic zone are responsible for much of the original food production for the entire ocean and create at least 50% of the oxygen in the atmosphere (both through photosynthesis). Organisms that live in the epipelagic zone may come into contact with the sea surface.",
        threats:"The main impacts on the epipelagic zone include shipping, over fishing, plastic pollution and climate change.",
        examples:"Plankton, whales, dolphins",
        picture:"../images/Epipelagic_zone.jpeg",
        url:"https://www.britannica.com/science/epipelagic-zone",
        isChecked: false,
        questions:[
            {
                question: "There is no light in the epipelagic zone.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "50% of the atmospheres oxygen comes from the epipelagic zone.",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "The epipelagic zone reaches to 600 meters.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Plastic dissolves in the high saline water found in the epipelagic zone.",
                correct_answer:false,
                incorrect_answer:true
            }
        ]
    },

    {
        category : "Habitats",
        name:"Abbysopelagic Zone",
        description:"The abbysopelagic zone is pitch black. It reaches 4000m so absolutely no light reaches this zone. Very few animals are able to survive because of the lack of oxygen, freezing temperatures, and the fact that it is dark.  The animals that have adapted and can survive in this zone usually do not have eyes and are very transparent due to a lack of light.  These animals include squid, the basket star, swimming cucumber, sea pigs, and sea spiders. This zone is usually where the continental slope levels off. More than 30% of the bottom of the ocean is said to be situated here. Beyond this zone is the hadopelagic zone, which is on the bottom of the ocean floor found in trenches.  It is mostly unexplored and what lives there is mostly unknown. Not many organisms living there would survive being brought up to the surface due to the incredible difference in pressure and temperature.",
        threats:"While it may seem unlikely that humans could effect somewhere so unreachable, evidence has been found of plastic pollution at these depths.",
        examples:"Caulophrynidae, Colossal squid",
        picture:"../images/Abbysopelagic_zone.webp",
        url:"https://www.britannica.com/science/abyssal-zone",
        isChecked: false,
        questions:[
            {
                question: "The abbysopelagic zone is pitch black and many species living here are blind..",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Humans regularly explore the hadopelagic zone.",
                correct_answer:false,
                incorrect_answer:true
            },
            {
                question: "Plastic pollution has recently been found in the abbysopelagic zone.",
                correct_answer:true,
                incorrect_answer:false
            },
            {
                question: "Organisms that live in the abbysopelagic and hadopelegic zone would not survive being brought to the surface.",
                correct_answer:true,
                incorrect_answer:false
            }
        ]
    },

])

db.quizz_score.insertMany([
    {
        wins:0,
        losses:0,
        total_played:0
    }
])



















