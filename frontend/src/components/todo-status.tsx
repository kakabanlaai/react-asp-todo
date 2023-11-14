import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function TodoStatus({id, status}: {id: string; status: Status}) {
  const handleChangeStatus = (status: Status) => {};
  return (
    <Select
      defaultValue={'initialized' as Status}
      value={status}
      onValueChange={(v: Status) => handleChangeStatus(v)}
    >
      <SelectTrigger>
        <SelectValue placeholder='Status' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='initialized'>Initialized</SelectItem>
        <SelectItem value='progress'>Progress</SelectItem>
        <SelectItem value='done'>Done</SelectItem>
      </SelectContent>
    </Select>
  );
}
