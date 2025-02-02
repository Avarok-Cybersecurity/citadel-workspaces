export interface Room {
  id: string;
  name: string;
}

export interface OfficeRooms {
  company: Room[];
  marketing: Room[];
  hr: Room[];
}

export const officeRooms: OfficeRooms = {
  company: [
    { id: "main", name: "Main Office" },
    { id: "meeting", name: "Meeting Room" }
  ],
  marketing: [
    { id: "main", name: "Marketing Office" },
    { id: "creative", name: "Creative Studio" }
  ],
  hr: [
    { id: "main", name: "HR Office" },
    { id: "interview", name: "Interview Room" }
  ]
};