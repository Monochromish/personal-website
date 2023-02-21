import { useCallback, useEffect, useState } from 'react';
import { Data, Snowflake, useLanyard } from 'use-lanyard';

interface LanyardDetails extends Data {
  statusColor: string;
}

const useLanyardDetails = (id: Snowflake): LanyardDetails | null => {
  const { data } = useLanyard(id);

  const [lanyardDetails, setLanyardDetails] = useState<LanyardDetails | null>(
    null
  );

  const updateLanyardDetails = useCallback(() => {
    if (!data) return;

    const { discord_status } = data;
    let statusColor: string;

    switch (discord_status) {
      case 'online':
        statusColor = 'bg-green-500';
        break;
      case 'idle':
        statusColor = 'bg-yellow-500';
        break;
      case 'dnd':
        statusColor = 'bg-red-500';
        break;
      default:
        statusColor = 'bg-gray-500';
    }

    setLanyardDetails((prevData) => {
      if (!prevData || prevData.discord_status !== data.discord_status) {
        return { ...data, statusColor };
      }

      return prevData;
    });
  }, [data]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateLanyardDetails();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [updateLanyardDetails]);

  return lanyardDetails;
};

export default useLanyardDetails;
