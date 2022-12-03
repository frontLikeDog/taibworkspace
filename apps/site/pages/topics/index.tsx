import { TopicButton,IconHome, Button } from '@longstupay/taib-ui';


/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className="md:container md:mx-auto p-20 bg-gray-100">
      <TopicButton topicName="Next.js" />
      <IconHome />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default Topics;