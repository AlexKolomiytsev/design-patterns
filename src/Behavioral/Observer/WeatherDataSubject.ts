import Observable from "./Observable";

class WeatherDataSubject extends Observable {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    super();
  }

  private measurementsChanged = () => {
    this.setChanged();
    this.notify('some arg');
  }

  public setMeasurements = (temperature: number, humidity: number, pressure: number) => {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature = () => {
    return this.temperature;
  }

  public getHumidity = () => {
    return this.humidity;
  }

  public getPressure = () => {
    return this.pressure;
  }
}

export default WeatherDataSubject;
