export const getWeather = async (args: string) => {
  console.log(args);
  const cityArr = args.split(" ");
  const city = cityArr.length > 1 ? cityArr.join("+") : cityArr;

  const weather = await fetch(`https://wttr.in/${city}?format=3`)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .catch((error) => {
      return `Couldn't get weather. Details : ${error}`;
    });

  console.log(weather);
  return weather;
};
