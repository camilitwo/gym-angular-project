import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

interface Rutina {
  dia: string;
  nombre: string;
  ejercicios: Ejercicio[];
}

interface Ejercicio {
  nombre: string;
  series: number;
  repeticiones: string;
  explicacion: string;
  completado?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleCard = 'Rutina Día ';
  series = 'Series: ';
  repetitions = 'Repeticiones: ';
  explication = 'Explicación: ';

  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  selectedDay: string | undefined;
  exerciseRoutine: Rutina[] = [];
  filteredExercises: Ejercicio[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.selectedDay = this.getCurrentDay();
    this.getExerciseRoutine();
  }

  getCurrentDay(): string {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const currentDate = new Date();
    return daysOfWeek[currentDate.getDay() - 1];
  }

  getExerciseRoutine(): void {
    this.http.get<Rutina[]>('https://gym-back-p2yr.onrender.com/rutinas').subscribe(
      (data: Rutina[]) => {
        this.exerciseRoutine = data;
        this.filterExercises();
      },
      (error) => {
        console.error('Error al obtener las rutinas:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo obtener la rutina',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  filterExercises(): void {
    if (this.selectedDay) {
      const selectedRoutine = this.exerciseRoutine.find((routine) => routine.dia === this.selectedDay);
      if (selectedRoutine) {
        this.filteredExercises = selectedRoutine.ejercicios;
      } else {
        this.filteredExercises = [];
      }
    } else {
      this.filteredExercises = [];
    }
  }

  mostrarRutina(): void {
    this.filterExercises();
  }

  mostrarExplicacion(explicacion: string): void {
    Swal.fire({
      title: 'Explicación del ejercicio',
      text: explicacion,
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  }

  marcarEjercicioRealizado(ejercicio: Ejercicio): void {
    ejercicio.completado = true;
  }

  marcarEjercicioNoRealizado(ejercicio: Ejercicio): void {
    ejercicio.completado = false;
  }
}
