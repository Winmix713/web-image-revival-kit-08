
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BarChart2, Layers, Diamond, Grid, PieChart } from "lucide-react";
import React from "react";

// Define categories once
export const componentCategories = [
  { id: 'all', name: 'All Components' },
  { id: 'forms', name: 'Form Elements' },
  { id: 'layout', name: 'Layout' },
  { id: 'navigation', name: 'Navigation' },
  { id: 'feedback', name: 'Feedback' },
];

// Extended component registry with additional properties needed by PatternCategoryGrid
export const componentRegistry = [
  {
    name: "Badge",
    source: "ui/badge.tsx",
    component: (
      <Badge>
        Label
      </Badge>
    ),
    id: "badge",
    title: "Badge",
    description: "Small visual indicator for statuses or categories",
    color: "#00F5FF",
    icon: <BarChart2 className="w-5 h-5" />
  },
  {
    name: "Button",
    source: "ui/button.tsx",
    component: <Button>Button</Button>,
    id: "button",
    title: "Button",
    description: "Clickable element for user interactions",
    color: "#B026FF",
    icon: <Layers className="w-5 h-5" />
  },
  {
    name: "Calendar",
    source: "ui/calendar.tsx",
    component: (
      <Calendar
        mode="single"
        selected={new Date()}
        onSelect={() => {}}
      />
    ),
    id: "calendar",
    title: "Calendar",
    description: "Date picker for selecting dates",
    color: "#FAFF00",
    icon: <Diamond className="w-5 h-5" />
  },
  {
    name: "Card",
    source: "ui/card.tsx",
    component: (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    ),
    id: "card",
    title: "Card",
    description: "Flexible container for grouping related content",
    color: "#00F5FF",
    icon: <Grid className="w-5 h-5" />
  },
  {
    name: "Checkbox",
    source: "ui/checkbox.tsx",
    component: <Checkbox />,
  },
  {
    name: "Command",
    source: "ui/command.tsx",
    component: (
      <CommandDialog open={true} onOpenChange={() => {}}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Search</span>
              <CommandShortcut>⌘/</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    ),
  },
  {
    name: "Dialog",
    source: "ui/dialog.tsx",
    component: (
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <div>Dialog Content</div>
          <DialogFooter>
            <Button>Cancel</Button>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    name: "Dropdown Menu",
    source: "ui/dropdown-menu.tsx",
    component: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    name: "Input",
    source: "ui/input.tsx",
    component: <Input placeholder="Input" />,
  },
  {
    name: "Label",
    source: "ui/label.tsx",
    component: <Label>Label</Label>,
  },
  {
    name: "Popover",
    source: "ui/popover.tsx",
    component: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent>
          Popover Content
        </PopoverContent>
      </Popover>
    ),
  },
  {
    name: "Progress",
    source: "ui/progress.tsx",
    component: <Progress value={75} className="w-full" />,
  },
  {
    name: "Radio Group",
    source: "ui/radio-group.tsx",
    component: (
      <RadioGroup>
        <RadioGroupItem value="item-1" id="item-1" />
        <Label htmlFor="item-1">Item 1</Label>
        <RadioGroupItem value="item-2" id="item-2" />
        <Label htmlFor="item-2">Item 2</Label>
      </RadioGroup>
    ),
  },
  {
    name: "Scroll Area",
    source: "ui/scroll-area.tsx",
    component: (
      <ScrollArea className="h-40 w-72 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Items
          </h4>
          <Separator />
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mt-2 last:mb-0">
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
  },
  {
    name: "Select",
    source: "ui/select.tsx",
    component: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item-1">Item 1</SelectItem>
          <SelectItem value="item-2">Item 2</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    name: "Separator",
    source: "ui/separator.tsx",
    component: <Separator />,
  },
  {
    name: "Slider",
    source: "ui/slider.tsx",
    component: <Slider defaultValue={[50]} max={100} step={1} />,
  },
  {
    name: "Switch",
    source: "ui/switch.tsx",
    component: <Switch />,
  },
  {
    name: "Table",
    source: "ui/table.tsx",
    component: (
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>john.doe@example.com</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    name: "Textarea",
    source: "ui/textarea.tsx",
    component: <Textarea placeholder="Type your message here." />,
  },
  {
    name: "Tooltip",
    source: "ui/tooltip.tsx",
    component: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            Tooltip Content
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    name: "Toaster",
    source: "ui/toaster.tsx",
    component: <Toaster />,
  },
];

// Define filtering function once
export const getFilteredComponents = (filter: string) => {
  if (filter === 'all') return componentRegistry;
  
  // Add your filtering logic here based on component categories
  return componentRegistry.filter(component => {
    // This is a simple example - you'll need to add proper category assignments to components
    switch (filter) {
      case 'forms':
        return ['Input', 'Textarea', 'Checkbox', 'RadioGroup', 'Select'].includes(component.name);
      case 'layout':
        return ['Card', 'Separator', 'ScrollArea'].includes(component.name);
      case 'navigation':
        return ['Button', 'DropdownMenu', 'Tooltip'].includes(component.name);
      case 'feedback':
        return ['Progress', 'Toast', 'Dialog'].includes(component.name);
      default:
        return true;
    }
  });
};
