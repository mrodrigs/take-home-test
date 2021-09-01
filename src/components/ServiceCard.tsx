import Select from 'components/Select';
import { Title } from 'styles/Common';
import { Container, MailIcon, Text } from 'styles/components/ServiceCard';
import type ContactCategory from 'types/interfaces/ContactCategories';

interface ServiceCardProps {
  contactCategories: ContactCategory[];
  image: string;
  imageAlt: string;
  text: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  contactCategories,
  image,
  imageAlt,
  text,
  title,
}) => {
  return (
    <Container>
      <MailIcon alt={imageAlt} src={image} />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Select contactCategories={contactCategories} />
    </Container>
  );
};

export default ServiceCard;
