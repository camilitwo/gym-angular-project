import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  titleCard = "Rutina Día ";
  series = "Series: ";
  repetitions = "Repeticiones: ";
  explication = "Explicación: ";

  getCurrentDay(): string {
    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const currentDate = new Date();
    return daysOfWeek[currentDate.getDay() - 1];
  }

  exerciseRoutine: any[] = [];

  dietaJSON = {
    // ... Resto del código de la dietaJSON ...
  };

  diasSemana: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  selectedDay: string | undefined;
  filteredExercises: any[] = [];

  ngOnInit(): void {
    this.selectedDay = this.getCurrentDay();
    this.mostrarRutina();
    this.obtenerEjercicioJSON();
  }

  mostrarRutina() {
    if (this.selectedDay) {
      const selectedRoutine = this.exerciseRoutine.find((routine) => routine.dia === this.selectedDay);
      if (selectedRoutine) {
        this.filteredExercises = selectedRoutine.ejercicios;
      } else {
        this.filteredExercises = [];
        this.mostrarError();
      }
    } else {
      this.filteredExercises = [];
    }
  }

  mostrarExplicacion(explicacion: string) {
    Swal.fire({
      title: 'Explicación del ejercicio',
      text: explicacion,
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  }

  marcarEjercicioRealizado(ejercicio: any) {
    ejercicio.completado = true;
  }

  marcarEjercicioNoRealizado(ejercicio: any) {
    ejercicio.completado = false;
  }

  obtenerEjercicioJSON() {
    const url = 'https://gym-back-p2yr.onrender.com/rutinas'; // Reemplaza con la URL de tu API

    this.http.get(url).subscribe(
      (response: any) => {
        this.exerciseRoutine = response.ejercicios;
        this.mostrarRutina();
      },
      (error: any) => {
        console.error(error);
        this.mostrarError();
      }
    );
  }

  mostrarError() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'error',
      title: 'No se encontró información'
    });
  }
}
