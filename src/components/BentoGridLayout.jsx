import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Folder from "./Folder";
import Aurora from "./Aurora";
import LetterGlitch from "./LetterGlitch";


export function BentoGridLayout() {
    return (
        <BentoGrid className="max-w-[80%] mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    enabledIcon={item.enabledIcon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "💻 Languages",
        description: "Proficient in various languages and worked with them.",
        header: <Folder
            items={[
                <span key="cpp" className="text-sm font-bold text-gray-800">C++</span>,
                <span key="java" className="text-sm font-bold text-gray-800">Java</span>,
                <span key="python" className="text-sm font-bold text-gray-800">Python</span>,
            ]}
        />
        ,   // Replace with your custom component
        enabledIcon: true,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🎯 My Mission",
        description: "Building impactful, real-world solutions through clean and scalable code.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🧠 Learning Philosophy",
        description: "I embrace challenges and learn consistently to stay ahead in tech trends.",
        header: <LetterGlitch/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🧩 Real-time Projects",
        description: "Currently building smart systems with MERN + Blockchain for urban mobility.",
        header:   
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🛠️ Tools I Use",
        description: "VSCode, Postman, GitHub, Figma, IntelliJ, and more.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🎨 Hobbies",
        description: "I enjoy reading, exploring art forms, and sketching in my free time.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "🏆 Achievements",
        description: "3rd-year CSE student, hackathon participant, passionate about innovation.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
];
