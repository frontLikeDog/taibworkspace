import { ComponentMeta, ComponentStory } from "@storybook/react";
import Progress from "./progress"


export default {
    title: 'Beta/Progress',
    component: Progress,
} as ComponentMeta<typeof Progress>;


const Template:ComponentStory<typeof Progress> = (args) =>(<div className="w-[500px]"> <Progress {...args} /></div>);

export const Simple = Template.bind({});
Simple.args = {
    pwitdh: 50,
}

export const Witdh = () => (
    <div className="w-[800px] flex flex-col space-y-8">
        <Progress pwitdh={10} />
        <Progress pwitdh={30} />
        <Progress pwitdh={50} />
        <Progress pwitdh={70} />
        <Progress pwitdh={100} />
    </div>
)

export const Label = () => (
    <div className="w-[800px] flex flex-col space-y-8">
        <Progress pwitdh={10} label="10%" />
        <Progress pwitdh={30} label="30%" />
        <Progress pwitdh={50} label="50%" />
    </div>
)