import { Button , IconLoader, IconRight, TaibUi, TopicButton } from "@longstupay/taib-ui";

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <IconRight />
      <Button type="primary">Click me</Button>
      <IconLoader />
      <span className="text-primary">tailwindcss</span>
      <TopicButton topicName="Next.js" />
      <TaibUi></TaibUi>
    </div>
  );
}

export default Index;
