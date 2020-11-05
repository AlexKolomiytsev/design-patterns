import WeatherDataSubject from "./WeatherDataSubject";
import CurrentConditionsDisplay from "./CurrentConditionsDisplay";

const subject = new WeatherDataSubject();

const observer1 = new CurrentConditionsDisplay();

subject.attachListener(observer1);

subject.setMeasurements(25, 50, 10);
subject.setMeasurements(35, 60, 20);
subject.setMeasurements(55, 70, 30);

subject.removeListener(observer1);

subject.setMeasurements(75, 80, 40);


