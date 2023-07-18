import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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
  peso: string;
  fechaActualizacion: Date;      // Add this property
  completado?: boolean;
  _id?: string;
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
  weight = 'Peso: ';

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
  
    Swal.fire({
      title: 'Actualizar peso',
      input: 'text',
      inputPlaceholder: 'Ingrese el nuevo peso',
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      preConfirm: (weight) => {
        // Update the weight and update date properties
        ejercicio.peso = weight;
        ejercicio.fechaActualizacion = new Date();
  
        // Prepare the updated exercise data to send to the API
        const updatedExercise = {
          peso: ejercicio.peso
        };
  
        // Make an HTTP PUT request to update the exercise data
        const url = `https://gym-back-p2yr.onrender.com/rutinas/ejercicios/${ejercicio._id}`;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
        this.http.put(url, updatedExercise, { headers, responseType: 'text' }).subscribe(
          (response) => {
            if (response === 'OK') {
              Swal.fire('¡Peso actualizado!', '', 'success');
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo actualizar el peso del ejercicio',
                confirmButtonText: 'Aceptar'
              });
            }
          },
          (error) => {
            console.error('Error updating exercise:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo actualizar el peso del ejercicio',
              confirmButtonText: 'Aceptar'
            });
          }
        );
      }
    });
  }
  

  marcarEjercicioNoRealizado(ejercicio: Ejercicio): void {
    ejercicio.completado = false;
  }
}
