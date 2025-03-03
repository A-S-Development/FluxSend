'use client';
import { Button, TextField, Stack, Box } from '@mui/material';
import { useEffect, useState } from 'react';

const ChatSession: React.FC = () => {
  const [messageQueue, setMessageQueue] = useState([]);

  const senderMessages = [
    {
      body: 'Hey Jasmine',
      'num segments': '1',
      direction: 'outbound-api',
      from: 'sender',
      date_updated: 'Fri Feb 28 2025 17:41:12 GMT-0500',
      'error message': null,
      uri: '/2010-04-01/Accounts/AC3fe73880522d6laa1837feef9737df02/Messages/SM5e58af13531b38cb2b02352d2f9edall.json',
      'nun media': '0',
      to: '+48537425314',
      'date created': 'Fri Feb 28 2025 17:41:12 GMT-0500',
      status: 'queued',
      'date sent': null,
      'messaging service sid': null,
      'error code': null,
      'price unit': 'USD',
      api_version: '2010-04-01',
    },
    {
      body: 'how are you doing?',
      'num segments': '1',
      direction: 'outbound-api',
      from: 'sender',
      date_updated: 'Fri Feb 28 2025 17:43:56 GMT-0500',
      'error message': null,
      uri: '/2010-04-01/Accounts/AC3fe73880522d6laa1837feef9737df02/Messages/SM5e58af13531b38cb2b02352d2f9edall.json',
      'nun media': '0',
      to: '+48537425314',
      'date created': 'Fri Feb 28 2025 17:43:56 GMT-0500',
      status: 'queued',
      'date sent': null,
      'messaging service sid': null,
      'error code': null,
      'price unit': 'USD',
      api_version: '2010-04-01',
    },
  ];

  const recipientMessages = [
    {
      body: 'Hi Arnold',
      'num segments': '1',
      direction: 'outbound-api',
      from: 'recipient',
      date_updated: 'Fri Feb 28 2025 17:42:06 GMT-0500',
      'error message': null,
      uri: '/2010-04-01/Accounts/AC3fe73880522d6laa1837feef9737df02/Messages/SM5e58af13531b38cb2b02352d2f9edall.json',
      'nun media': '0',
      to: '+48537425314',
      'date created': 'Fri Feb 28 2025 17:42:06 GMT-0500',
      status: 'queued',
      'date sent': null,
      'messaging service sid': null,
      'error code': null,
      'price unit': 'USD',
      api_version: '2010-04-01',
    },
  ];

  const determineSender = (message) => {
    if (message['from'] === 'sender') {
      return { bgcolor: 'green', height: '50px', marginLeft: 10, borderRadius: '0% 30% 30% 30%', maxHeight: 'fit-content', maxWidth: 'fit-content', padding: '10px' };
    } else if (message['from'] === 'recipient') {
      return { bgcolor: 'blue', height: '50px', alignSelf: 'flex-end', marginRight: 10, borderRadius: '30% 30% 0% 30%', maxHeight: 'fit-content', maxWidth: 'fit-content', padding: '10px' };
    }
  };

  const populateMessageQueue = (sendMessages, fromMessages) => {
    //Insertion Sort - O(n^2) runtime
    const temp = sendMessages.concat(fromMessages);

    for (let unsorted = 1; unsorted < temp.length - 1; unsorted++) {
      let location = unsorted;
      const nextItem = temp[unsorted];

      while (location > 0 && new Date(temp[location - 1]['date created']) > new Date(nextItem['date created'])) {
        temp[location--] = temp[location - 1];
      }

      temp[location] = nextItem;
    }
    setMessageQueue((prev) => [...prev, ...temp]);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    populateMessageQueue(senderMessages, recipientMessages);
  }, []);

  return (
    <Stack sx={{ height: '60vh', width: '100%' }}>
      <Box sx={{ bgcolor: 'black', height: '5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button variant="text" sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
          X
        </Button>
      </Box>
      <Stack sx={{ bgcolor: 'white', height: '95%' }}>
        <Stack direction={'column'} sx={{ bgcolor: 'grey', height: '85%', display: 'flex' }}>
          {messageQueue.length > 0 &&
            messageQueue.map((message) => {
              return (
                <Box key={crypto.randomUUID()} sx={determineSender(message)}>
                  {message.body}
                </Box>
              );
            })}
        </Stack>
        <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'center', height: '15%' }}>
          <TextField label="" variant="filled" sx={{ bgcolor: 'white', width: '85%', marginBottom: '10px' }} />
          <Button variant="text" sx={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>
            SEND
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default ChatSession;
