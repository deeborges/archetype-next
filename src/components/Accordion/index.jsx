import { Body, Content, Head } from './styled';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import React from 'react';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <Content open={open}>
      <Head role="button" onClick={handleClick}>
        <h3>{title}</h3>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Content>
  );
};

export default Accordion;
