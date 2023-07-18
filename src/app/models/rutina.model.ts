export interface Rutina {
    dia: string;
    nombre: string;
    ejercicios: Ejercicio[];
  }
  
  export interface Ejercicio {
    nombre: string;
    series: number;
    repeticiones: string;
    explicacion: string;
  }
  