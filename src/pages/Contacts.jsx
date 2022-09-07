import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContatsList';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';

const Contacts = () => {
  return (
    <Box pt="l" display="flex" justifyContent="center">
      <Box
        width="400px"
        minHeight="400px"
        p="l"
        bg="accent"
        flexDirection="column"
        display="flex"
        alignItems="center"
        overflow="hidden"
        borderRadius="min"
      >
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};

export default Contacts;
