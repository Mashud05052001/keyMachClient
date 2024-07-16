import { TContactUs } from "@/types/contactUs.types";
import { InboxIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const contactUsArray: TContactUs[] = [
  {
    id: 1,
    icon: () => <PhoneIcon className="size-6" />,
    title: "Phone",
    value: "(901) 324-3127",
  },
  {
    id: 2,
    icon: () => <InboxIcon className="size-6" />,
    title: "Email",
    value: "keyMach@official.com",
  },
  {
    id: 3,
    icon: () => <MapPinIcon className="size-6" />,
    title: "Address",
    value: "Fort Wainwright, Alaska(AK)",
  },
];
