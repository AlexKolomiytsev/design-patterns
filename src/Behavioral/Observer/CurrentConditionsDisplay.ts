import {Observer, Subject} from "./types";
import Observable from "./Observable";
import WeatherDataSubject from "./WeatherDataSubject";

class CurrentConditionsDisplay implements Observer {
  private state = {
    temperature: 0,
    humidity: 0,
    pressure: 0,
  }

  update(subject: Subject, arg?: Object) {
    if (subject instanceof WeatherDataSubject) {
      const temperature = subject.getTemperature();
      const humidity = subject.getHumidity();
      const pressure = subject.getPressure();

      this.state = {
        temperature,
        humidity,
        pressure,
      }

      console.log(`CurrentConditionsDisplay state's ${JSON.stringify(this.state)}`)
      if (arg) {
        console.log(`CurrentConditionsDisplay received arg - ${arg}`);
      }
    }
  }
}

export default CurrentConditionsDisplay;
