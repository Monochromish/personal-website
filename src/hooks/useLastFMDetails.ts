import { useEffect, useState } from 'react';
import { State, useLastFM } from 'use-last-fm';

import logger from '@/lib/logger';

const useLastFMDetails = (username: string): State => {
  const apiKey = process.env.NEXT_PUBLIC_LASTFM_API?.toString();

  const lastFM = useLastFM(username, apiKey || '');

  useEffect(() => {
    if (!apiKey) {
      logger('LASTFM_API is not defined in environmental variables');
      return;
    }

    const updateLastFMState = () => {
      if (lastFM.status === 'playing') {
        setLastFMState({
          status: 'playing',
          song: {
            name: lastFM.song.name,
            artist: lastFM.song.artist,
            art: lastFM.song.art,
            album: lastFM.song.album,
            url: lastFM.song.url,
          },
        });
      } else {
        setLastFMState({
          status: lastFM.status,
          song: null,
        });
      }
    };

    updateLastFMState();

    const intervalId = setInterval(() => {
      updateLastFMState();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [apiKey, lastFM.status, lastFM.song, username]);

  const [lastFMState, setLastFMState] = useState<State>({
    status: 'connecting',
    song: null,
  });

  return lastFMState;
};

export default useLastFMDetails;
