import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ScheduleItem {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
}

interface ScheduleProps {
  data: ScheduleItem[];
}

const Schedule = ({ data }: ScheduleProps) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-800">
            <TableHead className="text-white font-medium p-4 bg-[#343A5C]">Time</TableHead>
            <TableHead className="text-white font-medium p-4 bg-[#343A5C]">Monday</TableHead>
            <TableHead className="text-white font-medium p-4 bg-[#343A5C]">Tuesday</TableHead>
            <TableHead className="text-white font-medium p-4 bg-[#343A5C]">Wednesday</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow 
              key={index}
              className="hover:bg-[#E5DEFF]/10 transition-colors"
            >
              <TableCell className="text-gray-300">{item.time}</TableCell>
              <TableCell className="text-gray-300">{item.monday}</TableCell>
              <TableCell className="text-gray-300">{item.tuesday}</TableCell>
              <TableCell className="text-gray-300">{item.wednesday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;