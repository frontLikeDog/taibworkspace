import TCard from './CardStyle1';
import CardStyle2 from './CardStyle2';
import CardStyle3 from './CardStyle3';
import TestimonialHeader from './Testimonial-header';

const CardLookup = {
  Card1: TCard,
  Card2: CardStyle2,
  Card3: CardStyle3,
}

export interface TestimonialProps {
  cardType: keyof typeof CardLookup;
}

export function Testimonial(props: TestimonialProps) {
  const { cardType="Card1" } = props;
  const TCard = CardLookup[cardType];
  return (
    <section className="mb-20 text-gray-700">
      <TestimonialHeader />
      <div className="flex justify-center items-center space-x-8">
        <TCard />
      </div>
    </section>
  );
}

export default Testimonial;
