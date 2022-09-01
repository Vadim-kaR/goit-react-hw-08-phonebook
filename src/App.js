import { ContactsList } from 'components/ContatsList/ContacstsList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from 'components/ContactsTitle/ContactsTitle';
import { Box } from 'components/Box/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
        <ContactsTitle />
        <Filter />
        <ContactsList />
        <ToastContainer autoClose={2000} />
      </Box>
    </Box>
  );
}

export { App };
