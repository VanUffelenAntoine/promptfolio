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
    console.log(weather);
  });

  return <div>{weather}</div>;
};
