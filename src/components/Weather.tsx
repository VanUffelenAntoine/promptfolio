import { useEffect, useState } from "react";
import { getWeather } from "../../utils/wttrFetcher";

type Props = {
  args: string;
};

export const Weather = ({ args }: Props) => {
  const [weather, setWeather] = useState<string>("Fetching weather... ");

  const updateWeather = async () => {
    setWeather(await getWeather(args));
  };

  useEffect(() => {
    updateWeather();
  });

  return <div>{weather}</div>;
};
