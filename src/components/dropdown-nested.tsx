import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CompanyS() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Companies</SelectLabel>
          <SelectItem value="chevron">Chevron</SelectItem>
          <SelectItem value="exxonmobil">ExxonMobil</SelectItem>
          <SelectItem value="shell">Shell</SelectItem>
          <SelectItem value="bp">BP</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SiteS() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Site" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel>Sites</SelectLabel>
        <SelectItem value="site1">Site 1</SelectItem>
        <SelectItem value="site2">Site 2</SelectItem>
        <SelectItem value="site3">Site 3</SelectItem>
        <SelectItem value="site4">Site 4</SelectItem>
        <SelectItem value="site5">Site 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function WellS() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Well" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Wells</SelectLabel>
          <SelectItem value="well1">Well 1</SelectItem>
          <SelectItem value="well2">Well 2</SelectItem>
          <SelectItem value="well3">Well 3</SelectItem>
          <SelectItem value="well4">Well 4</SelectItem>
          <SelectItem value="well5">Well 5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
