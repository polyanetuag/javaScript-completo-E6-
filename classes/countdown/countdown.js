export default class Countdown {
  constructor(fututeDate) {
    this.futureDate = fututeDate
  }
  get _actualDate() {                           //data atual
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);           //data futura
  }
  get _timeStampDiff() {                        //diferença entre as datas
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {                                  //transformando em dias
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {                                 //horas
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {                               //minutos
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {                               //segundos
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {                                 //juntando todas as variaveis
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days, 
      hours,
      minutes,
      seconds
    }
  }
}

