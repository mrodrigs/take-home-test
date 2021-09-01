import { useState } from 'react';
import { Title } from 'styles/Common';
import { Button, Container, SyncIcon } from 'styles/components/SyncButton';

const SyncButton: React.FC = () => {
  const [isSynced, setIsSynced] = useState<boolean>(false);

  const toggleSync = () => {
    setIsSynced(currentStatus => !currentStatus);
  };

  return (
    <Container>
      <Button isSynced={isSynced} onClick={toggleSync}>
        <SyncIcon />
      </Button>
      <Title>{isSynced ? 'All done!' : 'Sync Contacts'}</Title>
    </Container>
  );
};

export default SyncButton;
