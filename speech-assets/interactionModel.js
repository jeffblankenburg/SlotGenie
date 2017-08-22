{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",
      "samples": []
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "SlotCheckIntent",
      "samples": [
        "{slottype}",
        "I'm looking for {slottype}",
        "I need a {slottype}",
        "I want a {slottype}",
        "I want a slot for {slottype}",
        "I want slots for {slottype}",
        "Give me something for {slottype}"
      ],
      "slots": [
        {
          "name": "slottype",
          "type": "slotvalues",
          "samples": []
        }
      ]
    }
  ],
  "types": [
    {
      "name": "slotvalues",
      "values": [
        {
          "id": "AMAZON.DATE",
          "name": {
            "value": "AMAZON.DATE",
            "synonyms": [
              "date",
              "today",
              "tomorrow",
              "dates",
              "weekend",
              "week number",
              "season",
              "amazon dot date",
              "dot date"
            ]
          }
        },
        {
          "id": "AMAZON.DURATION",
          "name": {
            "value": "AMAZON.DURATION",
            "synonyms": [
              "seconds",
              "minutes",
              "hours",
              "days",
              "months",
              "years",
              "decades",
              "duration",
              "amazon dot duration",
              "dot duration"
            ]
          }
        },
        {
          "id": "AMAZON.FOUR_DIGIT_NUMBER",
          "name": {
            "value": "AMAZON.FOUR_DIGIT_NUMBER",
            "synonyms": [
              "four digit number",
              "year",
              "address",
              "pin",
              "pin number",
              "pin code",
              "amazon dot four digit number",
              "dot four digit number"
            ]
          }
        },
        {
          "id": "AMAZON.NUMBER",
          "name": {
            "value": "AMAZON.NUMBER",
            "synonyms": [
              "number",
              "digit",
              "any number",
              "phone number",
              "social security number",
              "mobile number",
              "amazon dot number",
              "dot number"
            ]
          }
        },
        {
          "id": "AMAZON.TIME",
          "name": {
            "value": "AMAZON.TIME",
            "synonyms": [
              "time",
              "night",
              "morning",
              "evening",
              "afternoon",
              "time of day",
              "amazon dot time",
              "dot time"
            ]
          }
        },
        {
          "id": "AMAZON.Actor",
          "name": {
            "value": "AMAZON.Actor",
            "synonyms": [
              "actor",
              "actress",
              "amazon dot actor",
              "dot actor"
            ]
          }
        },
        {
          "id": "AMAZON.AdministrativeArea",
          "name": {
            "value": "AMAZON.AdministrativeArea",
            "synonyms": [
              "geographical region",
              "government",
              "county",
              "district",
              "region",
              "amazon dot administrative area",
              "dot administrative area",
              "administration",
              "administrative",
              "area"
            ]
          }
        },
        {
          "id": "AMAZON.AggregateRating",
          "name": {
            "value": "AMAZON.AggregateRating",
            "synonyms": [
              "rating",
              "star rating",
              "popularity",
              "best",
              "worst",
              "amazon dot rating",
              "dot rating",
              "amazon dot aggregate rating",
              "dot aggregate rating",
              "aggregate"
            ]
          }
        },
        {
          "id": "AMAZON.Airline",
          "name": {
            "value": "AMAZON.Airline",
            "synonyms": [
              "airline",
              "air carrier",
              "plane company",
              "flight service",
              "amazon dot airline",
              "dot airline"
            ]
          }
        },
        {
          "id": "AMAZON.Airport",
          "name": {
            "value": "AMAZON.Airport",
            "synonyms": [
              "airport",
              "air harbor",
              "airport code",
              "amazon dot airport",
              "dot airport"
            ]
          }
        },
        {
          "id": "AMAZON.Animal",
          "name": {
            "value": "AMAZON.Animal",
            "synonyms": [
              "animals",
              "insects",
              "reptiles",
              "mammals",
              "pets",
              "amphibians",
              "lizards",
              "cats",
              "dogs",
              "bugs",
              "birds",
              "amazon dot animal",
              "dot animal"
            ]
          }
        },
        {
          "id": "AMAZON.Artist",
          "name": {
            "value": "AMAZON.Artist",
            "synonyms": [
              "artist",
              "singer",
              "musician",
              "amazon dot artist",
              "dot artist"
            ]
          }
        },
        {
          "id": "AMAZON.AT_CITY",
          "name": {
            "value": "AMAZON.AT_CITY",
            "synonyms": [
              "austrian city",
              "german city",
              "austria",
              "germany",
              "amazon dot a t city",
              "dot a t city"
            ]
          }
        },
        {
          "id": "AMAZON.AT_REGION",
          "name": {
            "value": "AMAZON.AT_REGION",
            "synonyms": [
              "geographic region",
              "austria",
              "germany",
              "cities",
              "region",
              "county",
              "district",
              "austrian region",
              "german region",
              "amazon dot a t region",
              "dot a t region"
            ]
          }
        },
        {
          "id": "AMAZON.Athlete",
          "name": {
            "value": "AMAZON.Athlete",
            "synonyms": [
              "nba",
              "mlb",
              "major league baseball",
              "basketball players",
              "football players",
              "NFL",
              "tennis",
              "soccer",
              "soccer players",
              "golfer",
              "hockey player",
              "hockey",
              "NHL",
              "amazon dot athlete",
              "dot athlete"
            ]
          }
        },
        {
          "id": "AMAZON.Author",
          "name": {
            "value": "AMAZON.Author",
            "synonyms": [
              "author",
              "writer",
              "poet",
              "book writer",
              "amazon dot author",
              "dot author"
            ]
          }
        },
        {
          "id": "AMAZON.Book",
          "name": {
            "value": "AMAZON.Book",
            "synonyms": [
              "book",
              "novel",
              "poetry",
              "story",
              "text",
              "tome",
              "amazon dot book",
              "dot book"
            ]
          }
        },
        {
          "id": "AMAZON.BookSeries",
          "name": {
            "value": "AMAZON.BookSeries",
            "synonyms": [
              "book",
              "book series",
              "novel series",
              "amazon dot book series",
              "dot book series"
            ]
          }
        },
        {
          "id": "AMAZON.BroadcastChannel",
          "name": {
            "value": "AMAZON.BroadcastChannel",
            "synonyms": [
              "TV stations",
              "TV channels",
              "cable",
              "cable channels",
              "radio",
              "callsign",
              "radio station",
              "call letters",
              "amazon dot broadcast channel",
              "dot broadcast channel"
            ]
          }
        },
        {
          "id": "AMAZON.CivicStructure",
          "name": {
            "value": "AMAZON.CivicStructure",
            "synonyms": [
              "bus station",
              "train station",
              "art museum",
              "park",
              "hospital",
              "museum",
              "statue",
              "civic",
              "structure",
              "civic structure",
              "bus stop",
              "train stop",
              "city hall",
              "municipal building",
              "amazon dot civic structure",
              "dot civic structure"
            ]
          }
        },
        {
          "id": "AMAZON.Color",
          "name": {
            "value": "AMAZON.Color",
            "synonyms": [
              "color",
              "rainbow",
              "red",
              "yellow",
              "orange",
              "green",
              "blue",
              "purple",
              "black",
              "white",
              "colors",
              "hues",
              "paint colors",
              "dye colors",
              "amazon dot color",
              "dot color"
            ]
          }
        },
        {
          "id": "AMAZON.Comic",
          "name": {
            "value": "AMAZON.Comic",
            "synonyms": [
              "comic",
              "comic book",
              "superman",
              "batman",
              "thor",
              "iron man",
              "wonder woman",
              "green lantern",
              "hulk",
              "falcon",
              "black panther",
              "graphic novel",
              "amazon dot comic",
              "amazon dot comicbook",
              "dot comic",
              "dot comic book"
            ]
          }
        },
        {
          "id": "AMAZON.Corporation",
          "name": {
            "value": "AMAZON.Corporation",
            "synonyms": [
              "corporation",
              "company",
              "enterprise",
              "large company",
              "big company",
              "big companies",
              "large companies",
              "public companies",
              "public",
              "amazon dot corporation",
              "dot corporation"
            ]
          }
        },
        {
          "id": "AMAZON.Country",
          "name": {
            "value": "AMAZON.Country",
            "synonyms": [
              "country",
              "nation",
              "united states",
              "germany",
              "united kingdom",
              "uk",
              "ireland",
              "scotland",
              "england",
              "australia",
              "japan",
              "india",
              "amazon dot country",
              "dot country"
            ]
          }
        },
        {
          "id": "AMAZON.CreativeWorkType",
          "name": {
            "value": "AMAZON.CreativeWorkType",
            "synonyms": [
              "creative work",
              "work",
              "creative",
              "magazine",
              "album",
              "book",
              "books",
              "song",
              "songs",
              "soundtrack",
              "track",
              "single",
              "film",
              "movie",
              "amazon dot creative work type",
              "dot creative work type"
            ]
          }
        },
        {
          "id": "AMAZON.DayOfWeek",
          "name": {
            "value": "AMAZON.DayOfWeek",
            "synonyms": [
              "day of the week",
              "days of the week",
              "weekday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "week day",
              "amazon dot day of week",
              "amazon dot weekday",
              "dot day of week",
              "dot weekday"
            ]
          }
        },
        {
          "id": "AMAZON.DE_CITY",
          "name": {
            "value": "AMAZON.DE_CITY",
            "synonyms": [
              "germany",
              "german city",
              "city",
              "amazon dot d e city",
              "dot d e city"
            ]
          }
        },
        {
          "id": "AMAZON.DE_FIRST_NAME",
          "name": {
            "value": "AMAZON.DE_FIRST_NAME",
            "synonyms": [
              "first name",
              "german",
              "germany",
              "german names",
              "amazon dot d e first name",
              "dot d e first name"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.DE_REGION",
            "synonyms": [
              "germany",
              "german",
              "region",
              "german region",
              "amazon dot d e region",
              "dot d e region"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Dessert",
            "synonyms": [
              "dessert",
              "sweet",
              "sweets",
              "cake",
              "pie",
              "ice cream",
              "flavors of ice cream",
              "types of cake",
              "amazon dot dessert",
              "dot dessert"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.DeviceType",
            "synonyms": [
              "device",
              "machine",
              "appliance",
              "air conditioner",
              "tablet",
              "laptop",
              "mobile phone",
              "cell phone",
              "device type",
              "amazon dot device type",
              "dot device type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Director",
            "synonyms": [
              "director",
              "movie",
              "film",
              "amazon dot director",
              "dot director"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Drink",
            "synonyms": [
              "drink",
              "beverage",
              "refreshments",
              "cocktail",
              "alcohol",
              "soft drink",
              "water",
              "soda",
              "pop",
              "beverages",
              "amazon dot drink",
              "dot drink"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.EducationalOrganization",
            "synonyms": [
              "school",
              "preschool",
              "college",
              "high school",
              "middle school",
              "elementary school",
              "primary school",
              "secondary school",
              "amazon dot school",
              "dot school",
              "amazon dot educational institution",
              "dot educational institution",
              "amazon dot college",
              "dot college",
              "amazon dot university",
              "dot university"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.EUROPE_CITY",
            "synonyms": [
              "europe city",
              "europe",
              "european union",
              "EU",
              "cities",
              "city names",
              "amazon dot europe city",
              "dot europe city",
              "european city",
              "amazon dot european city",
              "dot european city"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.EventType",
            "synonyms": [
              "event",
              "event type",
              "coffee",
              "meetup",
              "networking event",
              "amazon dot event type",
              "dot event type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Festival",
            "synonyms": [
              "festival",
              "festivals",
              "fair",
              "party",
              "celebration",
              "amazon dot festival",
              "dot festival"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.FictionalCharacter",
            "synonyms": [
              "character",
              "fictional",
              "fictional character",
              "harry potter",
              "frodo baggins",
              "robin hood",
              "amazon dot character",
              "amazon dot fictional character",
              "dot character",
              "dot fictional character"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.FinancialService",
            "synonyms": [
              "bank",
              "financial service",
              "brokerage",
              "advisor",
              "credit union",
              "amazon dot bank",
              "dot bank",
              "amazon dot financial service",
              "dot financial service"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Food",
            "synonyms": [
              "food",
              "eat",
              "meal",
              "dinner",
              "lunch",
              "breakfast",
              "supper",
              "amazon dot food",
              "dot food",
              "pizza",
              "tacos",
              "french fries"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.FoodEstablishment",
            "synonyms": [
              "restaurant",
              "bar",
              "diner",
              "shack",
              "cafe",
              "coffee shop",
              "amazon dot restaurant",
              "dot restaurant",
              "amazon dot food establishment",
              "dot food establishment"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Game",
            "synonyms": [
              "game",
              "board game",
              "puzzle game",
              "word game",
              "video game",
              "amazon dot game",
              "dot game"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.GB_CITY",
            "synonyms": [
              "great britain",
              "GB",
              "city",
              "cities",
              "city",
              "great britain city",
              "england",
              "england city",
              "scotland",
              "scotland city",
              "ireland",
              "ireland city",
              "northern ireland",
              "northern ireland city",
              "amazon dot g b city",
              "dot g b city"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.GB_FIRST_NAME",
            "synonyms": [
              "great britain",
              "ireland",
              "northern ireland",
              "scotland",
              "england",
              "first name",
              "scottish",
              "irish",
              "english",
              "british",
              "british first name",
              "english first name",
              "irish first name",
              "scottish first name",
              "amazon dot g b first name",
              "dot g b first name"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.GB_REGION",
            "synonyms": [
              "region",
              "great britain",
              "ireland",
              "scotland",
              "england",
              "northern ireland",
              "great britain region",
              "english region",
              "british regions",
              "english regions",
              "scottish regions",
              "amazon dot g b region",
              "dot g b region"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Genre",
            "synonyms": [
              "genre",
              "categories",
              "type",
              "amazon dot genre",
              "dot genre"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Landform",
            "synonyms": [
              "landform",
              "islands",
              "continents",
              "rivers",
              "bays",
              "peninsulas",
              "lakes",
              "oceans",
              "seas",
              "amazon dot landform",
              "dot landform"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.LandmarksOrHistoricalBuildings",
            "synonyms": [
              "landmarks",
              "historical",
              "historical buildings",
              "old buildings",
              "ancient buildings",
              "historical landmarks",
              "amazon dot landmarks",
              "dot landmarks",
              "amazon dot historical buildings",
              "dot historical buildings",
              "amazon dot landmarks or historical buildings",
              "dot landmarks or historical buildings",
              "amazon dot landmarks and historical buildings"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Language",
            "synonyms": [
              "language",
              "languages",
              "amazon dot language",
              "dot language"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.LocalBusiness",
            "synonyms": [
              "business",
              "local",
              "local business",
              "local businesses",
              "amazon dot local business",
              "dot local business"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.LocalBusinessType",
            "synonyms": [
              "local",
              "local business",
              "local business type",
              "type",
              "local businesses",
              "amazon dot local business type",
              "dot local business type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MedicalOrganization",
            "synonyms": [
              "medical",
              "organization",
              "medical organization",
              "hospitals",
              "doctors offices",
              "dentists",
              "veterinarians",
              "optometrists",
              "eye doctors",
              "dermatologists",
              "oncologists",
              "therapists",
              "amazon dot medical organization",
              "dot medical organization"
            ]
          }
        },
        {
          "id": "AMAZON.Month",
          "name": {
            "value": "AMAZON.Month",
            "synonyms": [
              "month",
              "month name",
              "january",
              "february",
              "march",
              "april",
              "may",
              "june",
              "july",
              "august",
              "september",
              "october",
              "november",
              "december",
              "amazon dot month",
              "dot month"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Movie",
            "synonyms": [
              "film",
              "movie",
              "title",
              "amazon dot movie",
              "dot movie"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MovieSeries",
            "synonyms": [
              "movie",
              "film",
              "series",
              "film series",
              "movie series",
              "trilogy",
              "sequel",
              "prequel",
              "amazon dot movie series",
              "dot movie series"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MovieTheater",
            "synonyms": [
              "movie",
              "theater",
              "film",
              "studio",
              "theatre",
              "movie theater",
              "movie theatre",
              "cineplex",
              "cinema",
              "amazon dot movie theater",
              "dot movie theater"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicAlbum",
            "synonyms": [
              "album",
              "music",
              "music album",
              "record",
              "amazon dot music album",
              "dot music album",
              "amazon dot album",
              "dot album"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicCreativeWorkType",
            "synonyms": [
              "music",
              "creative work",
              "creative work type",
              "music creative work type",
              "song",
              "track",
              "single",
              "amazon dot music creative work type",
              "dot music creative work type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicEvent",
            "synonyms": [
              "music",
              "event",
              "music event",
              "concert",
              "festival",
              "amazon dot music event",
              "dot music event"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicGroup",
            "synonyms": [
              "music",
              "group",
              "band",
              "music group",
              "solo artist",
              "amazon dot music group",
              "dot music group"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Musician",
            "synonyms": [
              "musician",
              "singer",
              "guitarist",
              "pianist",
              "conductor",
              "cellist",
              "floutist",
              "drummer",
              "tubist",
              "amazon dot musician",
              "dot musician",
              "vocalist"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicPlaylist",
            "synonyms": [
              "music",
              "playlist",
              "music playlist",
              "amazon dot music playlist",
              "dot music playlist",
              "dot playlist",
              "amazon dot playlist"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicRecording",
            "synonyms": [
              "music",
              "recording",
              "music recording",
              "song",
              "single",
              "track",
              "amazon dot music recording",
              "dot recording",
              "amazon dot recording",
              "dot music recording"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicVenue",
            "synonyms": [
              "music",
              "venue",
              "music venue",
              "concert hall",
              "auditorium",
              "stage",
              "amazon dot music venue",
              "dot music venue",
              "arena"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.MusicVideo",
            "synonyms": [
              "music",
              "video",
              "music video",
              "mtv",
              "amazon dot music video",
              "dot music video"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Organization",
            "synonyms": [
              "organization",
              "restaurant",
              "charity",
              "group",
              "entity",
              "amazon dot organization",
              "dot organization"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Person",
            "synonyms": [
              "character",
              "person",
              "people",
              "famous",
              "amazon dot person",
              "dot person",
              "dot people",
              "amazon dot people"
            ]
          }
        },
        {
          "id": "AMAZON.PostalAddress",
          "name": {
            "value": "AMAZON.PostalAddress",
            "synonyms": [
              "address",
              "postal",
              "postal address",
              "street address",
              "address one",
              "house number",
              "street",
              "avenue",
              "court",
              "boulevarde",
              "turnpike",
              "highway",
              "amazon dot postal address",
              "dot postal address"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Professional",
            "synonyms": [
              "famous people",
              "celebrity",
              "businessmen",
              "businesswomen",
              "business people",
              "professionals",
              "pros",
              "amazon dot professional",
              "dot professional"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.ProfessionalType",
            "synonyms": [
              "pro",
              "professional",
              "professional type",
              "occupation",
              "job title",
              "jobs",
              "job",
              "career",
              "position",
              "title",
              "pros",
              "amazon dot professional type",
              "dot professional type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.RadioChannel",
            "synonyms": [
              "radio",
              "channel",
              "radio channel",
              "call sign",
              "abbreviation",
              "call letters",
              "amazon dot radio channel",
              "dot radio channel"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Residence",
            "synonyms": [
              "residence",
              "mansion",
              "estate",
              "acreage",
              "dot residence",
              "amazon dot residence"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Room",
            "synonyms": [
              "room",
              "bathroom",
              "foyer",
              "kitchen",
              "bar",
              "bedroom",
              "master bedroom",
              "closet",
              "hallway",
              "dot room",
              "amazon dot room"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.ScreeningEvent",
            "synonyms": [
              "screening",
              "screening event",
              "movie",
              "film",
              "film festival",
              "amazon dot screening event",
              "dot screening event"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Service",
            "synonyms": [
              "service",
              "services",
              "cleaners",
              "plumbers",
              "electricians",
              "caterers",
              "amazon dot service",
              "dot service"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.SocialMediaPlatform",
            "synonyms": [
              "social media",
              "social",
              "media",
              "social media platform",
              "platform",
              "twitter",
              "facebook",
              "skype",
              "instagram",
              "snapchat",
              "amazon dot social media platform",
              "dot social media platform"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.SoftwareApplication",
            "synonyms": [
              "app",
              "software",
              "application",
              "software application",
              "amazon dot software application",
              "dot software application",
              "dot app"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.SoftwareGame",
            "synonyms": [
              "software",
              "software game",
              "game",
              "video game",
              "computer game",
              "mobile game",
              "amazon dot software game",
              "dot software game"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.Sport",
            "synonyms": [
              "sport",
              "basketball",
              "hockey",
              "soccer",
              "football",
              "cricket",
              "baseball",
              "amazon dot sport",
              "dot sport"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.SportsEvent",
            "synonyms": [
              "sports",
              "sports event",
              "contest",
              "game",
              "match",
              "pitch",
              "tournament",
              "amazon dot sports event",
              "dot sports event"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.SportsTeam",
            "synonyms": [
              "sports",
              "sports team",
              "athletic team",
              "athletes",
              "baseball",
              "football",
              "soccer",
              "hockey",
              "cricket",
              "amazon dot sports team",
              "dot sports team"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.StreetAddress",
            "synonyms": [
              "street address",
              "street names",
              "street",
              "avenue",
              "court",
              "roads",
              "highways",
              "freeways",
              "turnpikes",
              "boulevard",
              "amazon dot street address",
              "dot street address"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.TelevisionChannel",
            "synonyms": [
              "channel",
              "cable channels",
              "ABC",
              "Cartoon Network",
              "Tru TV",
              "Bravo",
              "AMC",
              "NBC",
              "CBS",
              "television",
              "tv",
              "tv channel",
              "television channel",
              "dot tv channel",
              "amazon dot tv channel",
              "amazon dot television channel",
              "dot television channel"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.TVEpisode",
            "synonyms": [
              "television",
              "tv episode",
              "television episode",
              "episode",
              "tv",
              "show",
              "dot tv episode",
              "amazon dot tv episode"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.TVSeries",
            "synonyms": [
              "television",
              "television series",
              "show",
              "tv show",
              "tv show series",
              "big bang theory",
              "star trek",
              "homeland",
              "the walking dead",
              "lost",
              "wrecked",
              "breaking bad",
              "tv",
              "tv series",
              "dot tv series",
              "amazon dot tv series"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.US_CITY",
            "synonyms": [
              "united states",
              "city",
              "cities",
              "towns",
              "villages",
              "u s city",
              "dot u s city",
              "amazon dot u s city"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.US_FIRST_NAME",
            "synonyms": [
              "first name",
              "united states",
              "north america",
              "u s first name",
              "dot u s first name",
              "amazon dot u s first name"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.US_STATE",
            "synonyms": [
              "ohio",
              "state",
              "united states",
              "new york",
              "alabama",
              "alaska",
              "hawaii",
              "u s state",
              "amazon dot u s state",
              "dot u s state"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.VideoGame",
            "synonyms": [
              "doom 2",
              "lemmings",
              "video game",
              "game",
              "electronic game",
              "resident evil",
              "call of duty",
              "overcooked",
              "dot video game",
              "amazon dot video game"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.WeatherCondition",
            "synonyms": [
              "rain",
              "cold",
              "humid",
              "weather",
              "weather conditions",
              "storm",
              "snow",
              "snowfall",
              "thunderstorms",
              "flash flood",
              "weather condition",
              "amazon dot weather condition",
              "dot weather condition"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.WrittenCreativeWorkType",
            "synonyms": [
              "books",
              "poems",
              "fiction",
              "journal",
              "journals",
              "non fiction",
              "novel",
              "plays",
              "poems",
              "written works",
              "written creative work",
              "written",
              "dot written creative work type",
              "dot written creative work",
              "amazon dot written creative work type"
            ]
          }
        },
        {
          "id": null,
          "name": {
            "value": "AMAZON.LITERAL",
            "synonyms": [
              "literal",
              "all the words",
              "user text",
              "user speech",
              "string",
              "dot literal",
              "amazon dot literal"
            ]
          }
        }
      ]
    }
  ]
}