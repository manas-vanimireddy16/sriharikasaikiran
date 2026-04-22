
export const weddingConfig = {
  // 💍 Couple Details
  couple: {
    groomName: "Sri Harika",
    brideName: "SaiKiran",
  },
  // 📅 Wedding Date & Location
  date: new Date("2026-04-29T10:00:00"),
  displayDate: "Wednesday, 29th April 2026",
  city: "Godavarikhani,Telangana",
  // 📅 Calendar Event
  calendar: {
    startDateTime: "2020215T100000",
    endDateTime: "20250215T230000",
    title: "Wedding Ceremony",
    description: "You are invited to our wedding!",
  },
  // 🌤 External Links
  weatherUrl: "https://weather.com",
  trafficUrl: "https://www.google.com/maps/@17.385,78.4867,12z/data=!5m1!1e1",
  // 💒 Events
  events: [
    {
      title: "Haldi 🌼",
      emoji: "🌼",
      venue: "Home",
      address: "10-13, Rajeev Swagruha, Kundapalli, Ramagundam",
      time: "4:00 PM – 10:00 PM",
      date: "27-April-2026",
      mapUrl: "https://maps.app.goo.gl/KUdsVCXKy4Fup6kP6",
    },
    {
      title: "Palaporaka & Kurallu 🌿",
      emoji: "🌿",
      venue: "Home",
      address: "10-13, Rajeev Swagruha, Kundapalli, Ramagundam",
      time: "6:00 PM – 10:00 PM",
      date: "28-April-2026",
      mapUrl: "https://maps.app.goo.gl/KUdsVCXKy4Fup6kP6",
    },
    {
      title: "Wedding Ceremony 💑",
      emoji: "💑",
      venue: "R.R. Gardens",
      address: "Beside Alekhya Theatre, FCI Road, NTPC, Jyothinagar - 505215",
      time: "10:00 AM – 3:00 PM",
      date: "29-April-2026",
      mapUrl: "https://maps.app.goo.gl/JbqPmNopymt5NWdE7",
    },
  ],
  // 🗺 Directions
  directions: {
    tabs: ["Wedding Ceremony"],
    routes: {
      "Wedding Ceremony": {
        mapBase: "https://maps.app.goo.gl/JbqPmNopymt5NWdE7",
        modes: [
          {
            type: "car" as const,
            label: "By Car",
            steps: [
              "Navigate towards Godavarikhani",
              "Head directly to RR Gardens (NTPC area)",
              "Use FCI Cross Road as a nearby landmark if needed"
            ],
          },
          {
            type: "bus" as const,
            label: "By Bus",
            steps: [
              "Take a bus to Godavarikhani / FCI Cross Road",
              "Get down at FCI Cross Road",
              "Take a local auto/Rapido",
              "Reach RR Gardens (NTPC area)"
            ],
          },
          {
            type: "train" as const,
            label: "By Train",
            steps: [
              "Take a train to Ramagundam",
              "Travel towards FCI Cross Road",
              "Take a local auto/Rapido",
              "Reach RR Gardens (NTPC area)"
            ],
          },
        ],
      },
      "Evening Reception": {
        mapBase: "https://maps.google.com/?daddr=Grand+Palace+Convention+Centre+Banjara+Hills+Hyderabad",
        modes: [
          {
            type: "car" as const,
            label: "By Car",
            steps: ["Take Road No. 12, Banjara Hills", "Follow signs to GVK One Mall", "Venue is 200m past the mall"],
            duration: "~30 min from city center",
            distance: "10 km",
            cost: "₹150-200 (fuel)",
          },
          {
            type: "bus" as const,
            label: "By Bus",
            steps: ["Take Bus 127 to Banjara Hills", "Alight at Road No. 12 stop", "Walk 5 min south"],
            duration: "~50 min",
            distance: "12 km",
            cost: "₹30-40",
          },
          {
            type: "train" as const,
            label: "By Train",
            steps: ["Take MMTS to Necklace Road", "Auto to Banjara Hills (10 min)"],
            duration: "~35 min + auto",
            distance: "8 km",
            cost: "₹10 + ₹80 auto",
          },
        ],
      },
    },
  },
  // 👨‍👩‍👦 Host Families
  families: [

    {
      side: "Bride's Family",
      names: ["Shri. Mudutanapalli Srinivas", "Smt. Mudutanapalli UmaRani"],
      address: "Kundanapalli,Ramagundam",
      phones: ["+91 8106540735", "+91 9676954352"],
    }, {
      side: "Groom's Family",
      names: ["Shri.Avula Srinivas", "Smt. Avula Jyothi"],
      address: "Dongaturthi,Peddapalli",
      phones: ["+91 9542110809", "+91 8096954621"],
    },
  ],
  // 📱 WhatsApp for Travel Assistance
  whatsappNumber: "919676054352",
  // 🏨 Accommodation
  accommodationMessage: "Accommodation details will be updated soon. Stay tuned!",
  // 🚆 Smart Location destination
  destinationCity: "Godavarikhani",
};


